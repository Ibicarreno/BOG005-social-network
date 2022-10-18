import { loginWithGoogle } from '../src/auth/authentication.js';
import { register } from '../src/pages/register.js';

jest.mock('../src/auth/authentication.js');
jest.mock('../src/auth/authControllers.js');
jest.mock('../src/firestore/firestore.js');
jest.mock('../src/config/configFireBaseImport.js');
jest.mock('../src/main.js');

describe('Function register', () => {
  const containerRegister = register();
  test('The bottonRegister button should not be empty', () => {
    const buttonRegister = containerRegister.querySelector('#bottonRegister');
    expect(buttonRegister).not.toBeNull();
  });

  test('The bottonGoogle button should not be empty', () => {
    const buttonGoogle = containerRegister.querySelector('#bottonGoogle');
    expect(buttonGoogle).toBeTruthy();
  });

  test('The bottonGoogle button should call loginWithGoogle  ', () => {
    const buttonGoogle = containerRegister.querySelector('#bottonGoogle');
    buttonGoogle.click();
    expect(loginWithGoogle).toBeCalled();
  });

  test('The bottonGoogle button should fail when loginWithGoogle is called', () => {
    const buttonGoogle = containerRegister.querySelector('#bottonGoogle');
    loginWithGoogle.mockRejectedValueOnce(new Error('error'));
    buttonGoogle.click();
    expect(loginWithGoogle).toBeCalled();
  });
});
