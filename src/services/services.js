export async function get(url, callback) {
  try {
    let data = await getPromise(url);
    callback(data);
  } catch (error) {
    console.log(error);
  }
}

const getPromise = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((raw) => raw.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export async function post(url, data, callback) {
  try {
    let response = await postPromise(url, data);
    callback(response);
  } catch (error) {
    console.log(error);
  }
}

const postPromise = async (url, data) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: data,
    })
      .then((raw) => raw.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const loopFormFields = (formFields = [], form) => {
  let ckeditor = CKEDITOR;
  let formElement = form;

  let inputElements,
    textAreaElements,
    selectElements,
    jsonObject = {};

  formFields.forEach((element) => {
    if (element == 'input') {
      inputElements = formElement.getElementsByTagName('input');

      for (let i = 0; i < inputElements.length; i++) {
        let inputElement = inputElements[i];
        jsonObject[inputElement.name] = inputElement.value;
      }
    }

    if (element == 'select') {
      selectElements = formElement.getElementsByTagName('select');

      for (let i = 0; i < selectElements.length; i++) {
        jsonObject[selectElements[i].name] = loopSelected(selectElements[i].id);
      }
    }

    if (element == 'textarea') {
      textAreaElements = formElement.getElementsByTagName('textarea');

      for (let i = 0; i < textAreaElements.length; i++) {
        let textAreaElement = textAreaElements[i];

        if (textAreaElement.dataset.ckeditor === 'true') {
          //prettier-ignore
          jsonObject[textAreaElement.name] = ckeditor.instances[textAreaElement.id].getData();
        } else {
          jsonObject[textAreaElement.name] = textAreaElement.value;
        }
      }
    }
  });

  return jsonObject;
};

const loopSelected = (id) => {
  let selectedArray = new Array();
  let selObj = document.getElementById(id);
  let i,
    count = 0;
  for (i = 0; i < selObj.options.length; i++) {
    if (selObj.options[i].selected) {
      selectedArray[count] = selObj.options[i].value;
      count++;
    }
  }
  return selectedArray;
};
