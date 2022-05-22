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
      imagelink: "data:image/jpeg;base64,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",
      type: "HDFC",
      hashtags: ["HDFC"]
    };
    this.myList.addcontent(contentitem);

  }

}


 





