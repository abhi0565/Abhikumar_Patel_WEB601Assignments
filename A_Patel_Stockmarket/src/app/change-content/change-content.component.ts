import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Content } from '../models/content';
import { StockService } from '../sevices/stock.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {
  contentItem: Content = {
    title: "",
    body: "",
    author: "",
    hashtags: []
  };
  id?: number;
  tempTags: string = '';
  private routeSub!: Subscription;
  
  constructor(private StockService: StockService,private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
     this.contentItem.id = +params['id']
});


   }
  ngOnInit(): void {
 

    
  }


    

  
 


  addContentToServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.StockService.addContentItem(this.contentItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
      
  }
  updateContentOnServer(): void {
    this.contentItem.hashtags = this.tempTags.split(", ");
    this.StockService.updateContentItem(this.contentItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.contentItem)
      );
  }

}
