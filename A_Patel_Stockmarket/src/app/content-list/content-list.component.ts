import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  stockdata:Content[];

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
      author: "abhi patel",
      imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WNTgpKO7eK2BzuuXKmG7we8qy5rY5lA6VQ&usqp=CAU",
      type: "HDFC",
      hashtags: ["HDFC"]
    }
    ]
  }

  ngOnInit(): void {
  }

}
