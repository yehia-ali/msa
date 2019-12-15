import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, length: number): any {
    return value.substr(0, length);
  }

}
