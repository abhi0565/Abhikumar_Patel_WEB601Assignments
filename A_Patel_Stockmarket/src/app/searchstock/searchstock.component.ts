import { Component, OnInit } from '@angular/core';
import { DEFAULTSTOCKCONTENT } from '../data/mock-stock';
import { StockService } from '../sevices/stock.service';
import { Content } from '../models/content';


@Component({
  selector: 'app-searchstock',
  templateUrl: './searchstock.component.html',
  styleUrls: ['./searchstock.component.scss']
})
export class SearchstockComponent implements OnInit {


  item: Content = DEFAULTSTOCKCONTENT;




  constructor(private StockService: StockService) { }

  ngOnInit(): void {
    // getContentItem test
    this.StockService.getContentItem(1).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item: ", chessChampionsSingleItem);
      this.item = chessChampionsSingleItem;
    });

  }

  checkForIdInList(idValue: string): void {
    this.StockService.getContentItem(Number(idValue)).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item AGAIN: ", chessChampionsSingleItem);
      this.item = chessChampionsSingleItem;
    });
  }

}
