import { Pipe, PipeTransform } from '@angular/core';
import { Ilivre } from '../ilivre';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Ilivre[], filterBy: string): Ilivre[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null ;
    return filterBy ? value.filter((livre : Ilivre ) => 
    livre.nom.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
