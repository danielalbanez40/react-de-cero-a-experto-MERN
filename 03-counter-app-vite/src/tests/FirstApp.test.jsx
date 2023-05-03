import { getAllByText, render } from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Tests in <FirstApp/>', () => {
  // test('should make with snapshot', () => {
  //   const title = 'Hola, soy Goku';
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test('should show title in <h1> tag', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);

    // expect(getByTestId('test-title').innerHTML).toBe(title)
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should show the subtitle send from props', () => {
    const title = 'Hola, soy Goku';
    const subtitle = 'Soy un Subtítulo';
    const { getByText } = render(<FirstApp title={title} subtitle={subtitle} />);
    // expect(getByText(subtitle)).toBeTruthy();
    expect(getAllByText(subtitle).length).toBe(2)
  });
  
});
