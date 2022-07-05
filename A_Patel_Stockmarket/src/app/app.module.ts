import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { StocksPipe } from './stocks.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
import { StocklistComponent } from './stocklist/stocklist.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchstockComponent } from './searchstock/searchstock.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    StocksPipe,
    HighlightImportantDataDirective,
    StocklistComponent,
    SearchstockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
