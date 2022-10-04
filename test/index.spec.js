/* eslint-disable quotes */
import { onNavigate } from '../src/main.js';

jest.mock('../src/auth/authentication.js');

const mockTemplateLogin = `<h1>Template login</h1>`;

const mockTemplateRegister = `<h1>Template register</h1>`;

const mockRoutes = {
  '/': mockTemplateLogin,
  '/register': mockTemplateRegister,
};

describe('onNavigate', () => {
  it('test de onNavigate Login', () => {
    document.body.innerHTML = `<main id="root"></main>`;
    onNavigate('/', mockRoutes);
    expect(document.getElementById('root').textContent).toEqual('Template login');
  });
  it('test de onNavigate Register', () => {
    document.body.innerHTML = `<main id="root"></main>`;
    onNavigate('/register', mockRoutes);
    expect(document.getElementById('root').textContent).toEqual('Template register');
  });
});
