import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
  pure: false
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: Object) {
    return Object.keys(data);
  }
}
