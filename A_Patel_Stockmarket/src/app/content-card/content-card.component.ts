import { Component,Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['../app.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() contentItem?: Content;
  static contentCount = 0;
  private _items: Content[];

  constructor() {
    
    this._items = []; // initialize arra
   }

  get items():Content[] {
    return this._items;
  }
    myfun(){
        console.log(this.contentItem?.id);
       console.log(this.contentItem?.author);
      
  }
  ngOnInit(): void {
  }

}