import { Component,Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() contentItem?: Content;
  static contentCount = 0;
  private _items: Content[];
  public  inputvalue : string;

  constructor() {
    
    this._items = []; // initialize arra
    this.inputvalue ="hello";
   }

  get items():Content[] {
    return this._items;
  }
    myfun(){
        console.log(this.contentItem?.id);
       console.log(this.contentItem?.author);
      
  }

  clickEvent(): void {
    console.log(this.contentItem?.author);
  }
  ngOnInit(): void {
  }


}