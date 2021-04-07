import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(hotels: any, searchterm: any): any {
    if(!hotels || !searchterm){
      return hotels;
    }

     return hotels.filter((((hotel: { Address: string; }) => hotel.Address.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
  }

}
