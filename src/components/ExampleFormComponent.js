import { dom, append, addClasses } from './UIComponent.js';
import { UIForm } from './UI/UIForm.js';
import { ExampleFormServices } from '../services/ExampleFormService.js';

import { loopFormFields } from '../services/services.js';

export function ExampleForm() {
  let form = new UIForm();
  let services = new ExampleFormServices();

  const newForm = () => {
    form.setFormProps({
      id: 'test1',
      name: 'test1',
    });

    form.addInput({
      type: 'text',
      id: 'test1',
      name: 'test1',
      placeholder: 'Test Input',
      value: '',
      label: 'input',
    });

    form.addInput({
      type: 'password',
      id: 'password',
      name: 'password',
      placeholder: '********',
      value: '',
      label: 'password',
    });

    form.addSelect({
      id: 'select1',
      name: 'select1',
      multiple: false,
      label: 'select one',
      options: [
        {
          value: '1',
          text: 'test-1',
        },
        {
          value: '2',
          text: 'test-2',
        },
      ],
    });

    form.addSelect({
      id: 'select2',
      name: 'select2',
      multiple: true,
      label: 'select multiple',
      options: [
        {
          value: '1',
          text: 'test-1',
        },
        {
          value: '2',
          text: 'test-2',
        },
      ],
    });

    form.addTextArea({
      name: 'textarea1',
      id: 'textarea1',
      label: 'textarea',
    });

    form.addTextArea({
      name: 'textarea2',
      id: 'textarea2',
      label: 'textarea - html',
    });

    form.addButton(
      {
        id: 'button-submit',
        name: 'button-submit',
        text: 'submit',
        type: 'button',
      },
      () => {
        services.postData((data) => {
          console.log(data);
        }, loopFormFields(['input', 'select', 'textarea'], form.getFormDOM()));
      }
    );

    form.addButton(
      {
        id: 'button',
        name: 'button',
        text: 'test',
        type: 'button',
      },
      () => {
        services.test();
      }
    );

    form.addButton(
      {
        id: 'button-service',
        name: 'button-service',
        text: 'test-service',
        type: 'button',
      },
      () => {
        services.postDataTest((data) => {
          console.log(data);
        });
      }
    );
  };

  this.init = () => {
    newForm();
    form.addCKEditor('textarea2');

    //add inputs from service
    form.addOptions(
      undefined,
      [
        {
          value: '3',
          text: 'test-3',
        },
      ],
      'select1'
    );
  };
  this.returnDOM = () => {
    let formContainer = dom('div');
    //prettier-ignore
    addClasses(formContainer, 'container mx-auto bg-teal-400 font-bold rounded-lg border shadow-lg p-5 w-11/12 m-5 flex items-center justify-center');

    let container = dom('div');
    addClasses(container, 'w-full');

    append(container, form.getFormDOM());

    append(formContainer, container);

    return formContainer;
  };
}
