import {AvailableStyles, FormField} from "../models/model";
import {cloneDeep} from "lodash";

export function copy(arg: any) {
  return cloneDeep(arg);
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

