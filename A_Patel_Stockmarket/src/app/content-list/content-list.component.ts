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
    this.stockdata = [{
      id: 0,
      title: 'TATA MOTORS',
      body: "automobile",
      author: "Ratan Tata",
      imagelink: "https://m.economictimes.com/thumb/msid-91550659,width-1200,height-900,resizemode-4,imgsize-56418/tata-motors.jpg",
      type: "auto",
      hashtags: ["tata", "auto", "nano"]
    },{
      id: 1,
      title: 'Relience',
      body: "all sector brand",
      author: "Mukesh Ambani",
      imagelink: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_2129243640.jpg",
      type: "all",
      hashtags: ["Ambani"]
    },{
      id: 2,
      title: 'Adani',
      body: "new billionaire",
      author: "Gautam Adani",
      imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sSw_P016iDbR7n0GPrZpFzRTUYp3jWDBdA&usqp=CAU",
      type: "all",
      hashtags: ["Adani"]
    },{
      id: 3,
      title: 'HDFC',
      body: "HDFC",
      author: "abhi",
      imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WNTgpKO7eK2BzuuXKmG7we8qy5rY5lA6VQ&usqp=CAU",
      type: "bank",
      hashtags: ["HDFC"]
    },{
      id: 4,
      title: 'SBI',
      body: "SBI",
      author: "state bank of india",
      imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEP2Udx6t1uC_8MnekJVH62yLE9oGEyFPQg&usqp=CAU",
      type: "bank",
      hashtags: ["SBI"]
    },{
      id: 5,
      title: 'ITC',
      body: "ITC",
      author: "indian tobbaco company",
      imagelink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1200px-ITC_Limited_Logo.svg.png",
      type: "FMCG",
      hashtags: ["ITC"]
    },{
      id: 6,
      title: 'D-Mart',
      body: "D-mart",
      author: "Radha krishna damani",
      imagelink: "https://m.economictimes.com/thumb/msid-69749642,width-1200,height-900,resizemode-4,imgsize-363172/7.jpg",
     // type: "FMCG",
      hashtags: ["D-Mart"]
    }
    ]
    this.inputvalue ="";
  }

  ngOnInit(): void {
    

  }

  
  clickEvent(inputvalue: any): any {
  

    //  return  console.log(inputvalue); 
    this.stockdata.forEach (author => {
     let abj =  <HTMLInputElement>document.getElementById('aut');
      // console.log(author.author)
      if(author.author === inputvalue){
       //return 'we found the item with other';
    return   abj.innerHTML = "hello";
      }
      else{
        return   abj.innerHTML = 'we can not find the other';
      }
    });

//     if(inputvalue == this.stockdata.author){
//       console.log("hello");
// }
  
  }

}