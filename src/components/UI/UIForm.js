import { dom, append, addClasses } from '../UIComponent.js';

const ckeditor = CKEDITOR;

export function UIForm() {
  let form = dom('form');
  addClasses(form, 'shadow-md bg-white rounded px-8 pt-6 pb-8');

  this.addInput = (props = {}) => {
    let label = dom('label');
    label.innerHTML = props.label;
    addClasses(label, 'block text-gray-700 text-sm font-bold mb-2');

    let input = dom('input');
    //prettier-ignore
    addClasses(input, 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline');

    if (props.type) {
      input.type = props.type;
    }
    if (props.id) {
      input.id = props.id;
    }
    if (props.name) {
      input.name = props.name;
    }
    if (props.placeholder) {
      input.placeholder = props.placeholder;
    }
    if (props.value) {
      input.value = props.value;
    }

    let inputContainer = dom('div');
    addClasses(inputContainer, 'mb-4');

    append(inputContainer, label);
    append(inputContainer, input);

    append(form, inputContainer);
  };

  this.addSelect = (props = {}) => {
    let label = dom('label');
    label.innerHTML = props.label;
    addClasses(label, 'block text-gray-700 text-sm font-bold mb-2');

    let select = dom('select');
    //prettier-ignore
    addClasses(
      select,'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline');

    if (props.id) {
      select.id = props.id;
    }
    if (props.name) {
      select.name = props.name;
    }
    if (props.multiple) {
      select.multiple = 'multiple';
    }
    if (props.options) {
      this.addOptions(select, props.options);
    }

    let selectContainer = dom('div');
    addClasses(selectContainer, 'mb-4');

    append(selectContainer, label);
    append(selectContainer, select);

    append(form, selectContainer);
  };

  this.addOptions = (select, data = [], selectId) => {
    if (selectId) {
      select = document.querySelector('#' + selectId);
    }

    data.forEach(function (element) {
      let option = dom('option');
      if (element.value) {
        option.value = element.value;
      }
      if (element.text) {
        option.innerHTML = element.text;
      }

      append(select, option);
    });
  };

  this.addTextArea = (props = {}) => {
    let label = dom('label');
    label.innerHTML = props.label;
    addClasses(label, 'block text-gray-700 text-sm font-bold mb-2');

    let textArea = dom('textarea');
    //prettier-ignore
    addClasses( textArea,'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline');

    if (props.id) {
      textArea.id = props.id;
    }
    if (props.name) {
      textArea.name = props.name;
    }

    textArea.dataset.ckeditor = false;

    let textAreaContainer = dom('div');
    addClasses(textAreaContainer, 'mb-4');

    append(textAreaContainer, label);
    append(textAreaContainer, textArea);

    append(form, textAreaContainer);
  };

  this.addCKEditor = (id) => {
    document.querySelector('#' + id).dataset.ckeditor = true;
    ckeditor.replace(id);
  };

  this.addButton = (props = {}, handler) => {
    let button = dom('button');
    //prettier-ignore
    addClasses(button,'bg-teal-400 mr-2 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline');

    if (props.type) {
      button.type = props.type;
    }
    if (props.id) {
      button.id = props.id;
    }
    if (props.name) {
      button.name = props.name;
    }
    if (props.text) {
      button.innerHTML = props.text;
    }

    if (handler) {
      button.onclick = handler;
    }

    append(form, button);
  };

  this.setFormProps = (props = {}) => {
    if (props.id) {
      form.id = props.id;
    }

    if (props.name) {
      form.name = props.name;
    }
  };

  this.getFormDOM = () => {
    return form;
  };
}
