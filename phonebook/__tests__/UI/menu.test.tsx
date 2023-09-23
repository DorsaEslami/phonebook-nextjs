import { screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import Menu from '@/components/dashboard/menu/menu';
import { SelectInfo } from 'rc-menu/lib/interface';

test('test menu item existance', async () => {
  const onSelectMenueItem = jest.fn();
  renderWithProviders(<Menu onSelectMenueItem={onSelectMenueItem} />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(await screen.findByRole('img', { name: /logo/i })).toBeInTheDocument();
  expect(screen.getByRole('divider')).toBeInTheDocument();
  expect(screen.getByRole('menuitem', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('menuitem', { name: /Contacts/i })).toBeInTheDocument();
  expect(screen.getByRole('profileIcon')).toBeInTheDocument();
})

test('test sub menu item existance', async () => {
  const onSelectMenueItem = jest.fn();
  renderWithProviders(<Menu onSelectMenueItem={onSelectMenueItem} />);
  expect(screen.getByRole('none')).not.toHaveClass('ant-menu-submenu-active');
  await userEvent.hover(screen.getByRole('none'));
  expect(await screen.findByRole('none')).toHaveClass('ant-menu-submenu-active');
  expect(await screen.findByText(/Change Password/i)).toBeInTheDocument();
  expect(await screen.findByText(/Logout/i)).toBeInTheDocument();
  await userEvent.unhover(screen.getByRole('none'));
  expect(await screen.findByRole('none')).not.toHaveClass('ant-menu-submenu-active');
})
test('test Home item on click', async () => {
  const fn = jest.fn((info: SelectInfo) => { return info.key });
  renderWithProviders(<Menu onSelectMenueItem={fn} />);
  await userEvent.click(screen.getByRole('menuitem', { name: /Home/i }));
  expect(fn).toHaveBeenCalled();
  expect(fn.mock.calls).toHaveLength(1);
  expect(fn.mock.results[0].value).toBe('home');


  await userEvent.click(screen.getByRole('menuitem', { name: /Contacts/i }));
  expect(fn).toHaveBeenCalledTimes(2);
  expect(fn.mock.calls).toHaveLength(2);
  expect(fn.mock.results[1].value).toBe('contacts');
})