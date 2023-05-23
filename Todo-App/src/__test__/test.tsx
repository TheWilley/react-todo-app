/** @jest-environment jsdom */
import App from '../ts/App';
import Info from '../ts/components/info';
import Header from '../ts/components/header';
import renderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';

// See https://testing-library.com/docs/example-input-event/
const setupHeader = () => {
  const utils = render(
    <Header
      handleNewKeyPress={function (event: any): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
  const input = screen.getByTestId('task-input');
  return {
    input,
    ...utils,
  };
};

describe('App', () => {
  it('renders without crashing', () => {
    renderer.create(<App />);
  });

  it('Shows correct info', () => {
    const value = renderer.create(<Info author="TheWilley" github_link="https://github.com/" />);
    const instance = value.root;

    // Get the first 'a' element
    const textElement = instance.findAllByType('a')[0];

    // Get content and href
    const textContent = textElement.props.children;
    const url = textElement.props.href;

    // Check contents
    expect(textContent).toEqual('TheWilley');
    expect(url).toEqual('https://github.com/');
  });

  it('shows correct input value', () => {
    const { input } = setupHeader();
    fireEvent.change(input, { target: { value: '23' } });
    expect((input as HTMLInputElement).value).toBe('23');
  });
});
