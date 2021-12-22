import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";
// @ts-ignore
import * as moment from 'moment'


@Pipe({
  name: 'custom'
})
export class CustomPipe extends DatePipe implements PipeTransform {

  // @ts-ignore
  transform(value: string) {
    var datePipe = new DatePipe("en-Fr");
    value = <string>datePipe.transform(value, 'dd/MM/yyyy');
    return value;
  }

}
