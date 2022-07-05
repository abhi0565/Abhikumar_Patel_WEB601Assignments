import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../sevices/stock.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.scss']
})
export class StocklistComponent implements OnInit {

  id?: number;
  contentItem?: Content;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private StockService : StockService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator

      this.StockService.getContentItem(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.contentItem = singleItem;
        }
        else {
          this.router.navigate(['/contentNotFound']);
        }
      });
    });




  }

}
