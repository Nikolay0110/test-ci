import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});


test('should handle saveUser error', () => {
	httpGet.mockReturnValue(JSON.stringify({}));
  
	const user = { name: 'John', age: 25 };
	httpGet.mockRejectedValueOnce('Unimplemented');
  
	expect(() => {
		saveUser(user);
	}).toThrow('Unimplemented');
  });