import { dom, append, addClasses } from './UIComponent.js';
import { UITable } from './UI/UITable.js';
import { ExampleTableServices } from '../services/ExampleTableService.js';

export function ExampleTable() {
  let table = new UITable();
  let services = new ExampleTableServices();

  const newTable = () => {
    table.addColumn(['userId', 'id', 'title', 'completed']);

    services.getData(function (response) {
      table.setData(response);
    });
  };

  this.init = () => {
    newTable();
  };

  this.returnDOM = () => {
    let tableContainer = dom('div');
    //prettier-ignore
    addClasses(tableContainer,'container mx-auto bg-teal-400 font-bold rounded-lg border shadow-lg p-5 w-11/12 m-5');

    append(tableContainer, table.getTableDOM());
    return tableContainer;
  };
}
