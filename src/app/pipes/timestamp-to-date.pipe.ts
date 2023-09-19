import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: number, hasTime:boolean = true): string {  //abbiamo aggiunto un altro parametro hasTime

    const millisecond = value * 1000;
    const date = new Date(millisecond);
    let dateString = date.getDate()
                      + '/' + (date.getMonth() + 1)
                      + '/' + date.getFullYear();

    if (hasTime) {
      dateString +=  ' ore: ' + date.getHours()
                     + ':' + (date.getMinutes().toString().length > 1 ? date.getMinutes() : ('0' + date.getMinutes()));
    }
    return dateString;
  }

}
