import { render } from '@testing-library/react';
import Footer from './Footer';

test('<Footer /> renders the Alchemy copyright', () => {
  const container = render(<Footer />);
  expect(container).toMatchSnapshot();
});
