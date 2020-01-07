jest.mock('../category.service');

import { categoryService } from '..'

it('should return 6 categories', () => {
  expect.assertions(1);
  return categoryService.fetch().then(data => {
    const keys = Object.keys(data)
    expect(keys.length).toBe(6)
  });
});