import {div as element} from './3-dom';

describe('check div element', () => {

  test('div exists, is a div, and contains the right text', () => {
    expect(element).not.toBeNull();
    expect(element.tagName).toBe('DIV');
    expect(element.textContent).toBe('Hello, world!');
  })

})
