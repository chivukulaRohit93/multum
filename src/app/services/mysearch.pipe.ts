import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysearch'
})
export class MysearchPipe implements PipeTransform {

  transform(hotels: any, searchterm: any): any {
    if(!hotels || !searchterm){
      return hotels;
    }

     hotels.filter((((hotel: { Name: any; }) => hotel.Name.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
     hotels.filter((((hotel: { Address: any; }) => hotel.Address.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
     hotels.filter((((hotel: { Jobs: any; }) => hotel.Jobs.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
     hotels.filter((((hotel: { cost: any; }) => hotel.cost.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)));
  }

}
