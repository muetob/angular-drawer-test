import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortedItems'
})
export class SortedItemsPipe implements PipeTransform {

  transform(value: any[], field): unknown {
    console.log('Call sort');

    const valueCopy = [...value];

    valueCopy.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }

      if (a[field] > b[field]) {
        return 1;
      }

      return 0;
    });

    console.log('sorted values', valueCopy);

    return valueCopy;
  }

}
