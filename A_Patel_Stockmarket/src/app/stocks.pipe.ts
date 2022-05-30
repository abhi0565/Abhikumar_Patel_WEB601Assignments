import { Content } from './models/content';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stocks'
})
export class StocksPipe implements PipeTransform {

  transform(stockdata:Content[]):any{
    
      return  stockdata.filter(individualstock =>{
        return !individualstock.type?.length 
         || individualstock.type == "all" || individualstock.type =="bank" || individualstock.type =="FMCG";

      })
      

  }
  

}
