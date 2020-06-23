import { dom } from './UIComponent.js';

export function Contact() {
  const createContact = () => {
    let a = dom('a', 'contact');

    return a;
  };

  this.createContact = createContact();
}
