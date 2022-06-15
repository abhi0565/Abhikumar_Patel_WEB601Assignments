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
   // console.log(stockdata);
   return of(stockdata);
  }
// searching in stockdata array
   getContentItem(id: number): Observable<Content> {
    for (var i = 0; i < stockdata.length; i++) {
      if (stockdata[i].id === id) {
        // console.log(stockdata[id])
        return of(stockdata[id]);
      }
  
    }
    console.log(stockdata)
    return of(stockdata[id]);
  }
//creat a new item to the array
   addContentItem(newContent: Content): Observable<Content[]> {
        // let a = {

        //   id: 7,
        //   title: 'abc',
        //   body: "abc",
        //   author: "abc",
        //   type: "abc",
        //   hashtags: ["abc"]

        // }
         stockdata.push(newContent);
        return of(stockdata);
      }
  

      updateContentItem(newContent: Content): Observable<Content[]> {
      //let  Update = {id: 1 , title:'',hashtags:[],body:'',author:'',type:''};
      stockdata.forEach(item =>{
        if( item.id == newContent.id){
            item.title = newContent.title;
            item.body = newContent.body;
            item.author = newContent.author;
            item.type = newContent.type;
            item.hashtags = newContent.hashtags;
        }
    });
      return of(stockdata);
  }
 
  deleteContentItem(key: number): Observable<Content[]> {
  
    function RemoveElementFromArray() {
      stockdata.forEach((value,index)=>{
          if(value.id == key)stockdata.splice(index,1);
  
        });
      }
      // RemoveElementFromArray(1);
      return of(stockdata);
    }
    
    
    
    
  }
  





