import { dom, append } from './UIComponent.js';

import { get, post } from '../services/services.js';

export function Home() {
  const createHome = () => {
    let a = dom('a', 'home');

    return a;
  };

  this.createHome = createHome();
}
