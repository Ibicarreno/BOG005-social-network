import { routes } from './routes/routes.js';

/* GENERAR RUTAS EN URLS */

export let onNavigate = (pathname, paramRoutes = routes) => {
  const root = document.getElementById('root');
  root.replaceChildren(paramRoutes[pathname]);
};

window.addEventListener('load', () => {
  onNavigate(window.location.pathname);
  console.log(window.location.pathname);
});


