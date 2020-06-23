import { get, post, loopFormFields } from './services.js';

export function ExampleFormServices() {
  this.postData = (callback, data = {}) => {
    post('https://jsonplaceholder.typicode.com/posts', data, callback(data));
  };

  this.postDataTest = (callback) => {
    post(
      'https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      callback(response)
    );
  };

  this.test = () => {
    console.log('test');
  };
}
