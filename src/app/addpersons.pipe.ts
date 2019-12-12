import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addpersons'
})
export class AddpersonsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
