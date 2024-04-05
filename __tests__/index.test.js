import { expect, test } from 'vitest';
import { Tag } from '../src/index.ts';

test('single tag', () => {
  const img = new Tag('img', { src: 'path/to/image' }).toString();
  expect(img).toBe('<img src="path/to/image">');

  const input = new Tag('input', { type: 'submit', value: 'Save' }).toString();
  expect(input).toBe('<input type="submit" value="Save">');
});
