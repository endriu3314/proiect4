import { dom, append, clearHTML } from './components/UIComponent.js';

import { Navbar, createLink } from './components/NavbarComponent.js';

import { Home } from './components/HomeComponent.js';
import { Contact } from './components/ContactComponent.js';
import { ExampleTable } from './components/ExampleTableComponent.js';
import { ExampleForm } from './components/ExampleFormComponent.js';

//const ckeditor = CKEDITOR;

let mainContainer, documentContainer;

window.onload = () => {
  initApp();
};

const initApp = () => {
  mainContainer = document.querySelector('#app');

  documentContainer = dom('div');
  documentContainer.id = 'documentContainer';

  createComponents();
};

const createComponents = () => {
  let navbar = new Navbar();

  createLink(navbar.linksContainer, 'home', function () {
    clearHTML(documentContainer);

    let home = new Home();
    append(documentContainer, home.createHome);
  });

  createLink(navbar.linksContainer, 'contact', function () {
    clearHTML(documentContainer);

    let contact = new Contact();
    append(documentContainer, contact.createContact);
  });

  createLink(navbar.linksContainer, 'example table', function () {
    clearHTML(documentContainer);

    let exampleTable = new ExampleTable();
    exampleTable.init();
    append(documentContainer, exampleTable.returnDOM());
  });

  createLink(navbar.linksContainer, 'example form', function () {
    clearHTML(documentContainer);

    let exampleForm = new ExampleForm();

    append(documentContainer, exampleForm.returnDOM());
    exampleForm.init();
  });

  append(mainContainer, navbar.createNavbar);
  append(mainContainer, documentContainer);
};
