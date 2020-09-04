import { element, by } from 'protractor';
import { FormPage } from './form.po';

export class DashboardPage {
  static get newEmployeeButton() {
    return element(by.buttonText('New Employee'));
  }

  static async createEmployee() {
    await this.newEmployeeButton.click();
    await FormPage.fillForm();
    await FormPage.addButton.click();
  }

  static get table() {
    return element(by.tagName('p-table'));
  }

  static get tableRows() {
    return this.table.all(by.tagName('tr'));
  }

  static get tableNextPageButton() {
    return element(by.css('span[class="ui-paginator-icon pi pi-caret-right"]'));
  }

  static async checkTableRowForData(data: string) {
    let foundData = null;
    (await this.tableRows.getText() as any).forEach(trData => {
      if (trData.includes('LinKin Park')) {
        foundData = trData;
      }
    });

    return foundData;
  }
}
