import { render, screen } from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Tests in <FirstApp/>', () => {
  const title = 'Hola, Soy Goku';
  const subtitle = 'Soy un Subtitulo';

  test('should make with snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show message "Hola Soy Goku"', () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show title in <h1> tag', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });
  
  test('should show the subtitle send from props', () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
