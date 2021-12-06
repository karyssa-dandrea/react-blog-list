import { render } from '@testing-library/react';
import Header from './Header';

test('<Header /> renders the title', () => {
  const container = render(<Header />);
  expect(container).toMatchSnapshot();
});
