import { dom, append, addClasses } from '../UIComponent.js';

export function UITable() {
  let table = dom('table');
  addClasses(table, 'table-auto w-full bg-white');

  let tableData = [];

  this.addColumn = (name = []) => {
    let tr = dom('tr');

    name.forEach(function (nume) {
      let th = dom('th', nume);
      addClasses(th, 'border px-4 py-2');

      append(tr, th);
    });

    append(table, tr);
  };

  this.setData = (data = []) => {
    tableData = data;
    buildTable(tableData);
  };

  this.getTableDOM = () => {
    return table;
  };

  const buildTable = (data = []) => {
    console.log(data);

    data.forEach(function (element) {
      let tr = dom('tr');

      Object.keys(element).forEach(function (key) {
        if (element[key] == '') {
          let td = dom('td', '');
          addClasses(td, 'border px-4 py-2');

          append(tr, td);
        } else {
          let td = dom('td', element[key]);
          addClasses(td, 'border px-4 py-2');

          append(tr, td);
        }
      });

      append(table, tr);
    });
  };
}
