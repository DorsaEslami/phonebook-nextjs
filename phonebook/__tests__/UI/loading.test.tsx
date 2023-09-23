import { screen } from '@testing-library/react';
import { renderWithProviders } from '../__utils__/renderWithProvider';
import Loading from '@/components/shared/loading/loading';

test('display loader by spin,imgage and caption', () => {
  const { container } = renderWithProviders(<Loading />);
  expect(screen.getByRole('figure')).toBeInTheDocument();
  expect(container.querySelector('figure > div')).toHaveClass('ant-spin');
  expect(screen.getByRole('img', { name: /loading image/i })).toBeInTheDocument();
  expect(screen.getByText(/loading\.\.\.\./i)).toBeInTheDocument();

})