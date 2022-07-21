import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalFraction'
})
export class DecimalFractionPipe implements PipeTransform {

  transform(value: number, input: number = 1): string {
    console.log('pipes are working...')
    return value.toFixed(input);
  }

}
