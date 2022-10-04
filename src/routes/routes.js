// eslint-disable-next-line quotes
import { Profile } from "../pages/profile.js";
// eslint-disable-next-line quotes
import { feed } from "../pages/feed.js";
// eslint-disable-next-line quotes
import { Login } from "../pages/login.js";
// eslint-disable-next-line quotes
import { Register } from "../pages/register.js";

export const routes = {
  '/': Login,
  '/register': Register,
  '/feed': feed,
  '/profile': Profile,
};
