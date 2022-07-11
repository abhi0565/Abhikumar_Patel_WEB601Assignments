import { Injectable } from '@angular/core';
import { Content } from '../models/content';
import { Observable, of } from 'rxjs';
//import { stockdata, DEFAULTSTOCKCONTENT } from '../data/mock-stock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { 
  }

// retun stockdata array
  getContent(): Observable<Content[]> {
   // console.log(stockdata);
   return this.http.get<Content[]>("/api/stock");
  }
// searching in stockdata array
   getContentItem(id: number): Observable<Content> {
    // for (var i = 0; i < stockdata.length; i++) {
    //   if (stockdata[i].id === id) {
    //     // console.log(stockdata[id])
    //      return this.http.get<Content>("/api/stock/" + id);
    //   }
      
    // }
    // console.log(stockdata)
     console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/stock/" + id);
    
    
  }
//creat a new item to the array
   addContentItem(newContent: Content): Observable<Content> {
        // let a = {

        //   id: 7,
        //   title: 'abc',
        //   body: "abc",
        //   author: "abc",
        //   type: "abc",
        //   hashtags: ["abc"]

        // }
        return this.http.post<Content>("/api/stock", newContent, this.httpOptions)

      }
  

      updateContentItem(contentItem: Content): Observable<Content[]> {
      //let  Update = {id: 1 , title:'',hashtags:[],body:'',author:'',type:''};
    //   stockdata.forEach(item =>{
    //     if( item.id == newContent.id){
    //         item.title = newContent.title;
    //         item.body = newContent.body;
    //         item.author = newContent.author;
    //         item.type = newContent.type;
    //         item.hashtags = newContent.hashtags;
    //     }
    // });
    return this.http.put<any>("api/stock", contentItem, this.httpOptions);
  }
 
  // deleteContentItem(key: number): Observable<Content[]> {
  
  //   function RemoveElementFromArray() {
  //     stockdata.forEach((value,index)=>{
  //         if(value.id == key)stockdata.splice(index,1);
  
  //       });
  //     }
  //     // RemoveElementFromArray(1);
  //     return of(stockdata);
  //   }
    
    
    
    
  }
  





