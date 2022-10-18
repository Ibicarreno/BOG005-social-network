import { validateUserAndPass } from '../src/auth/authentication.js';
import { login } from '../src/pages/login.js';

jest.mock('../src/auth/authentication.js');
jest.mock('../src/firestore/firestore.js');
jest.mock('../src/config/configFireBaseImport.js');
jest.mock('../src/main.js');

describe('Function login', () => {
  const containerLogin = login();
  test('The linkRegister button should exist', () => {
    const buttonRegister = containerLogin.querySelector('#linkRegister');
    expect(buttonRegister).not.toBeNull();
  });

  test('Clicking the linkRegister button should change the path to "/register"', () => {
    const buttonRegister = containerLogin.querySelector('#linkRegister');
    buttonRegister.click();
    expect(window.location.pathname).toEqual('/register');
  });

  test('The logginButton button should exist', () => {
    const buttonLogin = containerLogin.querySelector('#logginButton');
    expect(buttonLogin).not.toBeNull();
  });

  it('The logginButton button should call validateUserAndPass ', () => {
    const buttonLogin = containerLogin.querySelector('#logginButton');
    buttonLogin.click();
    expect(validateUserAndPass).toBeCalled();
  });

  test('The logginButton should fail when validateUserAndPass is called', () => {
    const buttonLogin = containerLogin.querySelector('#logginButton');
    validateUserAndPass.mockRejectedValueOnce(new Error('error'));
    buttonLogin.click();
    expect(validateUserAndPass).toBeCalled();
  });
});
