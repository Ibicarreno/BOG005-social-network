import {onNavigate} from '../src/main.js'

jest.mock("../src/auth/authentication.js")


const mockTemplateLogin = `<h1>Template login</h1>`;

const mockTemplateRegister = `<h1>Template resgister</h1>`;

const mockRoutes = {
    '/': mockTemplateLogin,
    '/register': mockTemplateRegister,
}

describe('onNavigate', ()=>{
    it('test de onNavigate', ()=>{
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/', mockRoutes)
        console.log(document.getElementById('root').textContent)
        expect(document.getElementById('root').textContent).toEqual('Template login')
    })
    it('test de onNavigate', ()=>{
        document.body.innerHTML = `<main id="root"></main>`;
        onNavigate('/register', mockRoutes);
        expect(document.getElementById('root').textContent).toEqual('Template resgister');
    })
})

