import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCasePipe'
})
export class UpperCasePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
