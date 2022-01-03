import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jumpLine'
})
export class JumpLinePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    return value.replace(/(rn|r|n)/g, '<br />');
  }

}
