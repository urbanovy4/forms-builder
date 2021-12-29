import {AvailableStyles, FormField} from "../models/model";

export class Utils {
  static copy<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg));
  }

  static updateArray(fields: FormField[], index: number, styles: AvailableStyles) {
    const cloneFields = this.copy(fields);
    for (let i = 0; i < cloneFields.length; i++) {
      if (cloneFields[index] === cloneFields[i]) {
        cloneFields[index].availableStyles = styles;
      }
    }

    return cloneFields;
  }
}
