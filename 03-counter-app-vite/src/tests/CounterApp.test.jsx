import CounterApp from '../CounterApp';
import { render, screen } from '@testing-library/react';

describe('Tests in CounterApp', () => {
  const initialValue = 100;

  test('should make match with snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('should show initial value from 100', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(100)).toBeTruthy();
  });
});
