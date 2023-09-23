import { screen, } from '@testing-library/react';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import ContactDetail from '@/pages/dashboard/contactsDetail/[id]';
import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import { contactsList } from '../__mocks__/fakeData/contacts';

test('content is displayed', async () => {
  mockRouter.useParser(createDynamicRouteParser(["/dashboard/contactsDetail/[id]"]));
  mockRouter.push('/dashboard/contactsDetail/1');
  renderWithProviders(<ContactDetail />, { preloadedState: { contact: { contactsList: contactsList.users } } });
  expect(mockRouter).toMatchObject({ pathname: '/dashboard/contactsDetail/[id]', query: { id: '1' } });
  expect(await screen.findByText(/Terry/i)).toBeInTheDocument();

});