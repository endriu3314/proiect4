import { dom, append, addClasses } from './UIComponent.js';

export function Navbar() {
  let navbar = dom('navbar');
  //prettier-ignore
  addClasses(navbar,'flex items-center justify-between flex-wrap bg-teal-500 p-6');

  let links = dom('div');
  addClasses(links, 'text-md lg:flex-grow');

  const createNavbar = () => {
    let titleContainer = dom('div');
    //prettier-ignore
    addClasses( titleContainer,'flex items-center flex-shrink-0 text-white mr-6');

    let title = dom('span', 'proiect4');
    addClasses(title, 'font-semibold text-xl tracking-tight');

    append(titleContainer, title);
    append(navbar, titleContainer);

    append(navbar, links);

    return navbar;
  };

  this.createNavbar = createNavbar();
  this.navbar = navbar;
  this.linksContainer = links;
}

export function createLink(navbar, title, callback) {
  let link = dom('a', title);

  //prettier-ignore
  addClasses(link,'block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4 font-bold cursor-pointer');
  link.addEventListener('click', callback);

  append(navbar, link);
}
