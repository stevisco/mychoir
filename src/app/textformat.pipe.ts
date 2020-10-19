import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'textformat'})
export class TextformatPipe implements PipeTransform {
  transform(value: string): string {
    var str = value;
    str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    return  str;
  }
}