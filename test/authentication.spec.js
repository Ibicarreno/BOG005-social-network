import { onAuthStateChanged } from '../src/auth/authControllers.js';

jest.mock('../src/auth/authControllers.js');
jest.mock('../src/auth/authentication.js');
jest.mock('../src/firestore/firestore.js');
jest.mock('../src/firestore/methodsFirestore.js');
jest.mock('../src/config/configFireBaseImport.js');
jest.mock('../src/main.js');

describe('authentication function', () => {
  test('The pathname of onAuthStateChanged should be "/" ', () => {
    onAuthStateChanged();
    expect(window.location.pathname).toBe('/');
  });
});
