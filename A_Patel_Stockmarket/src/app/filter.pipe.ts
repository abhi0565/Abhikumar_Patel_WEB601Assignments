import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(stockdata:Content[]):any{
    if (!stockdata ) {
      return stockdata;
  }
  return  stockdata.filter(individualstock =>{
    return individualstock.author;
    //  || individualstock.author == "all" || individualstock.author =="bank" || individualstock.author =="FMCG";

  })
  
}
}



