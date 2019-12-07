import {Pipe, PipeTransform} from '@angular/core';
import * as phoneFormatter from 'phone-formatter';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  public transform(sourcePhone: number | string): string {
    const phoneNumber: string = phoneFormatter.format(String(sourcePhone), '(NNN) NNN-NNNN');
    return `+1 ${phoneNumber}`;
  }
}
