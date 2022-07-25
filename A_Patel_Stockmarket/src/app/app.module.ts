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
import { InvalidlinkComponent } from './invalidlink/invalidlink.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ChangeContentComponent } from './change-content/change-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    StocksPipe,
    HighlightImportantDataDirective,
    StocklistComponent,
    SearchstockComponent,
    InvalidlinkComponent,
    NavbarComponent,
    ChangeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
