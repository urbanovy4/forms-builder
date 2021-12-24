import {AvailableStyles, FormField} from "../../models/model";

export function copy<T>(arg: T): T {
  return JSON.parse(JSON.stringify(arg));
}

export function updateArray(fields: FormField[], index: number, styles: AvailableStyles) {
  const cloneFields = copy(fields);
  for (let i = 0; i < cloneFields.length; i++) {
    if (cloneFields[index] === cloneFields[i]) {
      cloneFields[index].availableStyles = styles;
    }
  }

  return cloneFields;
}
