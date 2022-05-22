import { Component } from '@angular/core';
import {Content} from './models/content'
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Patel_Stockmarket';
  myList: List;
  constructor() {
    let contentitem: Content;
    this.myList = new List();

    contentitem = {
      id: 0,
      title: 'TATA MOTORS',
      body: "automobile",
      author: "Ratan Tata",
      imagelink: "https://m.economictimes.com/thumb/msid-91550659,width-1200,height-900,resizemode-4,imgsize-56418/tata-motors.jpg",
      type: "auto",
      hashtags: ["tata", "auto", "nano"]
    };
    this.myList.addcontent(contentitem);
    contentitem = {
      id: 1,
      title: 'Relience',
      body: "all sector brand",
      author: "Mukesh Ambani",
      imagelink: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_2129243640.jpg",
      type: "all",
      hashtags: ["Ambani"]
    };
    this.myList.addcontent(contentitem);
    contentitem = {
      id: 2,
      title: 'Adani',
      body: "new billionaire",
      author: "Gautam Adani",
      imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sSw_P016iDbR7n0GPrZpFzRTUYp3jWDBdA&usqp=CAU",
      type: "all",
      hashtags: ["Adani"]
    };
    this.myList.addcontent(contentitem);
    contentitem = {
      id: 3,
      title: 'HDFC',
      body: "HDFC",
      author: "abhi patel",
      imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WNTgpKO7eK2BzuuXKmG7we8qy5rY5lA6VQ&usqp=CAU",
      type: "HDFC",
      hashtags: ["HDFC"]
    };
    this.myList.addcontent(contentitem);

  }

}


 





