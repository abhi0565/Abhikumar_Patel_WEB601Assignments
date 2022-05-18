import { Content } from "@angular/compiler/src/render3/r3_ast";


export class List {
  static ContentCount = 0;
  private _items: Content[];
  constructor(item: Content) {
    this._items = []; // initialize array
   // this._items[0] = item; // set the value of the item at the first index of the array
   //this.increaseCount();
  }
  get items():Content[] {
    return this._items;
  }
  contentlengh(){
    return this.items.length;
  }
  addcontent(Content: any) {
     
    this._items.push (Content);

  }

}

