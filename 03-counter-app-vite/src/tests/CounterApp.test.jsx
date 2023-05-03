import CounterApp from '../CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

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

  test('should increment with +1 button', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });
  
  test('should decrement with -1 button', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
});

test('The reset button should work', () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    expect(screen.getByText(355)).toBeTruthy();
    
  });
});
