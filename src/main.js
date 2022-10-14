import { routes } from './routes/routes.js';

/* GENERAR RUTAS EN URLS */
export const onNavigate = (pathname, paramRoutes = routes) => {
  const root = document.getElementById('root');
  root.replaceChildren(paramRoutes[pathname]);
};

window.addEventListener('hashchange', () => {
  onNavigate(window.location.pathname);
});
