import { get, post } from './services.js';

export function ExampleTableServices() {
  this.getData = (callback) => {
    get('https://jsonplaceholder.typicode.com/todos/', function (response) {
      let data = response;
      //console.log(data);
      callback(data);
    });
  };
}
