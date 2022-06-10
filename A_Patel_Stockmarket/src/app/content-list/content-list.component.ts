import { TmplAstBoundText } from '@angular/compiler';
import { Component, OnInit, Optional } from '@angular/core';
import { filter } from 'rxjs';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  stockdata:Content[];
  public  inputvalue?: Optional;
  constructor() { 
         this.stockdata=[];
  }

  ngOnInit(): void {
    

  }

  
  clickEvent(inputvalue: any): any {
  
    // let i = 0;
    //  return  console.log(inputvalue); 
    for(let i = 0;  i < this.stockdata.length; i++) {
     console.log(this.stockdata[i].author);

      // console.log(author.author)
      // console.log(inputvalue);
      if(this.stockdata[i].author == inputvalue){
     let abj =  <HTMLInputElement>document.getElementById('aut');
       //return 'we found the item with other';
       abj.innerHTML = 'we found the item with other';
      }
      //   else{
      //  let abj =  <HTMLInputElement>document.getElementById('aut');

      //        abj.innerHTML = 'we can not find the other';
      //   }
    

    }
    let abj =  <HTMLInputElement>document.getElementById('aut');
    if(!abj.innerHTML){
             abj.innerHTML = 'we can not find the other';

    }
    
    



//     if(inputvalue == this.stockdata.author){
//       console.log("hello");
// }
  
  }

}