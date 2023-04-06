import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filtertext: string): Product[] {
    if (!filtertext) {
      return value;
    }
    filtertext = filtertext.toLocaleLowerCase();
    return value.filter((p: Product) => p.description.toLocaleLowerCase().indexOf(filtertext) !== -1);
  }
}