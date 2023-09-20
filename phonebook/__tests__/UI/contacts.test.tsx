import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import Contacts from '@/components/dashboard/contacts/contacts';
import mockRouter from 'next-router-mock';
import { contactsList } from '../__mocks__/fakeData/contacts';

test('content is displayed', async () => {
  mockRouter.push('/dashboard');
  renderWithProviders(<Contacts />, { preloadedState: { contact: { contactsList: contactsList.users } } });
  expect(await screen.findByText(/Terry/i)).toBeInTheDocument();

});