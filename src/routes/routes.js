// eslint-disable-next-line quotes
import { Profile } from "../pages/profile.js";
// eslint-disable-next-line quotes
import { feed } from "../pages/feed.js";
// eslint-disable-next-line quotes
import { login } from "../pages/login.js";
// eslint-disable-next-line quotes, import/no-cycle
import { register } from "../pages/register.js";

export const routes = {
  '/': login(),
  '/register': register(),
  '/feed': feed(),
  '/profile': Profile(),
};
