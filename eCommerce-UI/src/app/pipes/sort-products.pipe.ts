import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(value: unknown, argstr: any): unknown {
    if (!value || !argstr)
      return value;

    let args = parseInt(argstr); //making sure we comapir with number type
    switch (args) {
      case 1:
      case 2:
        // filter on name
        return this.filterOnName(value, args);

      case 3:
      case 4:
        // filter on price
        return this.filterOnPrice(value, args);

      default:
        return value;
    }


  }
  filterOnPrice(value, args: number): unknown {
    if (args === 4) // Price LTH
      return value.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    else
      return value.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
  }

  filterOnName(value, args: number): unknown {
    if (args === 1) //asc
      return value.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    else
      return value.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0));
  }

}
