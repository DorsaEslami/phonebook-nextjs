import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import Contacts from '@/components/dashboard/contacts/contacts';
import mockRouter from 'next-router-mock';
import { contactsList } from '../__mocks__/fakeData/contacts';
import { createServer } from '../__utils__/server';
import { contactsHandlers } from '../__mocks__/handlers';


test('content is displayed', async () => {
  mockRouter.push('/dashboard');
  renderWithProviders(<Contacts />, { preloadedState: { contact: { contactsList: contactsList.users } } });
  expect(screen.getByText('Contact Management')).toBeInTheDocument();
  expect(await screen.findByText(/Terry/i)).toBeInTheDocument();
});

describe('Test add,edit,delete,filter', () => {
  createServer(contactsHandlers);
  test('test filter', async () => {
    mockRouter.push('/dashboard');
    renderWithProviders(<Contacts />, { preloadedState: { contact: { contactsList: contactsList.users } } });
    await userEvent.type(screen.getByPlaceholderText('type first name or last name'), 'Sheldon');
    await userEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(screen.getByText(/Sheldon/i)).toBeInTheDocument();
    expect(screen.queryByText(/Terry/i)).toBeNull();
  })
  test('test add', async () => {
    mockRouter.push('/dashboard');
    renderWithProviders(<Contacts />, { preloadedState: { contact: { contactsList: contactsList.users } } });
    await userEvent.click(screen.getByRole('button', { name: /plus/i }));
    expect(screen.getByText('Create a new contact')).toBeVisible();
    await userEvent.type(screen.getByRole('textbox', { name: /First Name/i }), 'test name');
    await userEvent.type(screen.getByRole('textbox', { name: /Last Name/i }), 'test last name');
    await userEvent.type(screen.getByRole('textbox', { name: /Phone/i }), '1212');
    await userEvent.type(screen.getByRole('textbox', { name: /Email/i }), 'dorsa.yj97@gmail.com');
    await userEvent.type(screen.getByRole('spinbutton', { name: /Age/i }), '12');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => expect(screen.queryByText('Create a new contact')).toBeNull());
    await waitFor(() => expect(screen.queryByText('Added successfully')).toBeVisible());
  })
})