import {FormField} from "../models/model";

export class Utils {
  static copy<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg));
  }

  static updateArray<T>(fields: FormField[], index: number, updatedData: T) {
    const cloneFields = this.copy(fields);
    for (let i = 0; i < cloneFields.length; i++) {
      if (cloneFields[index] === cloneFields[i]) {
        if (typeof updatedData === 'object') {
          cloneFields[index].availableStyles = updatedData;
        }
        if (typeof updatedData === 'boolean') {
          cloneFields[index].selected = updatedData;
        }
      } else {
        delete cloneFields[i].selected;
      }
    }

    return cloneFields;
  }
}
