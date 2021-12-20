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

export function formatField(field: FormField, length?: number): FormField {
  const formField = copy(field);
  if (field.id) {
    formField.id = length + 1;
  }
  return formField;
}

export function formatFieldsArray(fields: FormField[]): FormField[] {
  const formattedFieldsArr: FormField[] = [];
  for (let i = 0; i <= fields.length; i++) {
    formattedFieldsArr.push(formatField(fields[i], i));
  }
  return formattedFieldsArr;
}
