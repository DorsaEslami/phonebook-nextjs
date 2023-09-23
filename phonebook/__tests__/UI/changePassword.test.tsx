import { screen } from '@testing-library/react';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import ChangePassword, { Props } from '@/pages/changePassword/index';

test('change password content is diplayed', async () => {
  var titles = {
    header: 'This page is a test header',
    body: 'This is a test body',
    note: 'This is a test note'
  }
  var data: Props = { titles: titles }
  renderWithProviders(<ChangePassword titles={data.titles} />);
  expect(await screen.findByAltText('Change Password'));
  expect(await screen.findByText(/This page is a test header/i));
  expect(await screen.findByText(/This is a test body/i));
  expect(await screen.findByText(/This is a test note/i));
})