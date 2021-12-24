import {Pipe, PipeTransform} from '@angular/core';
import {FormField} from "../models/model";
import {copy} from "../services/utils/utils.service";

@Pipe({
  name: 'formatArray',
  pure: true
})
export class FormatArrayPipe implements PipeTransform {

  transform(fieldsArr: FormField[], arrayLength: number) {
   if (fieldsArr.length) {
     const fields: FormField[] = copy(fieldsArr);
     fields[fields.length - 1].id = arrayLength;
     console.log(fields)
     return fields
   }

   return fieldsArr;
    // return fields.map((field, index) => {
    //   console.log(field[index])
    //   return field;
    //   // const f = copy(field);
    //   // console.log(index)
    //   // f.id = arrayLength;
    //   // return f;
    // })
  }

}
