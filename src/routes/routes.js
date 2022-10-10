import { Profile } from '../pages/profile.js';
import { feed } from '../pages/feed.js';
import { login } from '../pages/login.js';
import { register } from '../pages/register.js';

export const routes = {
  '/': login(),
  '/register': register(),
  '/feed': feed(),
  '/profile': Profile(),
};
