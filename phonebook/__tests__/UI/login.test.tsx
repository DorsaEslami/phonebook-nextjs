import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import Login from '@/pages';
import { createServer } from '../__utils__/server';
import { SuccessfulLogin } from '../__mocks__/handlers';
import mockRouter from 'next-router-mock';
import { SuccessfulSignIn, FailedSignIn } from '../__mocks__/mockedSignIn';



test('login page items are displayed', () => {
  renderWithProviders(<Login />);
  expect(screen.getByAltText('login Image')).toBeInTheDocument();
  expect(screen.getByText('Welcome to Phonebook app')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Source Code' })).toHaveAttribute('href', 'https://github.com/DorsaEslami/phonebook-nextjs');
  expect(screen.getByRole('login-form')).toBeInTheDocument();
  expect(screen.getByText(/username/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument();
  expect(screen.getByText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('password-textbox', { name: /password/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});
describe('username input validation', () => {

  test('input validation on clearing the input', async () => {
    renderWithProviders(<Login />);
    const username = screen.getByRole('textbox', { name: /username/i });
    await userEvent.clear(username);
    expect(await screen.findByText(/Please input your username!/i)).toBeVisible();
  });
  test('input validation on invalid text', async () => {
    renderWithProviders(<Login />);
    const username = screen.getByRole('textbox', { name: /username/i });
    await userEvent.clear(username);
    await userEvent.type(username, 'test');
    await waitFor(() => expect(screen.queryByText(/Please input your username!/i)).toBeNull());
    expect(screen.queryByText(/Username is "dorsa97@"./i)).toBeVisible();
  });
  test('input validation on valid text', async () => {
    renderWithProviders(<Login />);
    const username = screen.getByRole('textbox', { name: /username/i });
    await userEvent.clear(username);
    await userEvent.type(username, 'dorsa97@');
    await waitFor(() => expect(screen.queryByText(/Please input your username!/i)).toBeNull());
    await waitFor(() => expect(screen.queryByText(/Username is "dorsa97@"/i)).toBeNull());
  });
});
describe('password input validation', () => {

  test('input validation on clearing the input', async () => {
    renderWithProviders(<Login />);
    const password = screen.getByRole('password-textbox', { name: /password/i });
    await userEvent.clear(password);
    expect(await screen.findByText(/Please input your password!/i)).toBeVisible();
  });
  test('input validation on invalid text', async () => {
    renderWithProviders(<Login />);
    const password = screen.getByRole('password-textbox', { name: /password/i });
    await userEvent.clear(password);
    await userEvent.type(password, 'test');
    await waitFor(() => expect(screen.queryByText(/Please input your password!/i)).toBeNull());
    expect(screen.queryByText(/Password is "dorsa97@"./i)).toBeVisible();
  });
  test('input validation on valid text', async () => {
    renderWithProviders(<Login />);
    const password = screen.getByRole('password-textbox', { name: /password/i });
    await userEvent.clear(password);
    await userEvent.type(password, 'dorsa97@');
    await waitFor(() => expect(screen.queryByText(/Please input your password!/i)).toBeNull());
    await waitFor(() => expect(screen.queryByText(/Password is "dorsa97@"/i)).toBeNull());
  });
});

describe('signin', () => {
  createServer(SuccessfulLogin);
  test('signin on invalid inputs', async () => {
    renderWithProviders(<Login />);
    const username = screen.getByRole('textbox', { name: /username/i });
    const password = screen.getByRole('password-textbox', { name: /password/i });
    const signinButton = screen.getByRole('button', { name: /sign in/i });
    await userEvent.type(username, 'test');
    await userEvent.type(password, 'test');
    await userEvent.click(signinButton);
    expect(screen.queryByRole('button', { name: /Processing/i })).toBeNull();
  });
  test('signin on valid inputs and response status:200', async () => {
    mockRouter.push('/');
    renderWithProviders(<Login />);
    SuccessfulSignIn();
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByText(/Processing.../i)).toBeInTheDocument();
    expect(await screen.findByText(/Welcome to phonebook app./i)).toBeInTheDocument();
    expect(mockRouter).toMatchObject({ pathname: '/dashboard' });
  })
  test('signin on valid inputs and response status:400', async () => {
    mockRouter.push('/');
    renderWithProviders(<Login />);
    FailedSignIn();
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    expect(await screen.findByText(/Something went wrong!/i)).toBeInTheDocument();
    expect(mockRouter).toMatchObject({ pathname: '/' });
  })
})