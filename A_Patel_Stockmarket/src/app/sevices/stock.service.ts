import { Injectable } from '@angular/core';
import { Content } from '../models/content';
import { Observable, of } from 'rxjs';
import { stockdata } from '../data/mock-stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { 
  }

// retun stockdata array
  getContent(): Observable<Content[]> {
    return of(stockdata);
  }
// searching in stockdata array
   getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < stockdata.length; i++) {
      if (stockdata[i].id === id) {
        return of(stockdata[i]);
      }
    }
   }

//creat a new item to the array
   addContentItem(newContent: Content): Observable<Content[]> {
        let a = {

          id: 7,
          title: 'abc',
          body: "abc",
          author: "abc",
          type: "abc",
          hashtags: ["abc"]

        }
        stockdata.push(a)
      return of(stockdata);
   }

      updateContentItem(newContent: Content): Observable<Content[]> {
      let  Update = {id: 7, title:'xyz'};
      stockdata.forEach(item =>{
        if( item.id == Update.id){
            item.title = Update.title;
        }
    });
      return of(stockdata);
  }
 
  deleteContentItem(newContent: Content): Observable<Content[]> {
  
    function RemoveElementFromArray(key: number) {
      stockdata.forEach((value,index)=>{
          if(value.id == key)stockdata.splice(index,1);
  
      });
  }
  return of(stockdata);
  }





}
