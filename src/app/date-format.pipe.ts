import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(res: any): unknown {
    const value:any = new Date(res);
    const date = value.getDate() + '/' + value.getMonth()+ '/' + value.getFullYear();
    return date;
  }

}
