import { screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import Dashboard from '@/pages/dashboard/index';
import { contactsList } from '../__mocks__/fakeData/contacts';
import { getContact } from '../__mocks__/handlers';
import { createServer } from '../__utils__/server';
import mockRouter from 'next-router-mock';
createServer(getContact);

test('content is displayed', async () => {
  renderWithProviders(<Dashboard contactsList={contactsList.users} />);
  expect(await screen.findByRole('navigation')).toBeInTheDocument();
  expect((await screen.findByRole('total-contacts')).textContent).toEqual("5");
  expect((await screen.findByRole('female-contacts')).textContent).toEqual("1");
  expect((await screen.findByRole('male-contacts')).textContent).toEqual("4");
  expect(await screen.findByText(/report description/i)).toBeInTheDocument();
});
test.skip('redirect on click change password', async () => {
  mockRouter.push('/dashboard');
  renderWithProviders(<Dashboard contactsList={contactsList.users} />);
  expect(mockRouter).toMatchObject({ pathname: '/dashboard' });

  await userEvent.hover(screen.getByRole('none'));
  expect(await screen.findByRole('none')).toHaveClass('ant-menu-submenu-active');
  const changePasswordMenuItem = await screen.findByText(/Change Password/i);
  expect(changePasswordMenuItem).toBeInTheDocument();

});




