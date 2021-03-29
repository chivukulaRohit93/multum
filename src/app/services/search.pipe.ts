import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(hotels: any, searchterm: any): any {
    if(!hotels || !searchterm){
      return hotels;
    }

     hotels.filter((((hotel: { JobName: any; }) => hotel.JobName.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
     hotels.filter((((hotel: { Address: any; }) => hotel.Address.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
     hotels.filter((((hotel: { description: any; }) => hotel.description.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
  }

  
}
