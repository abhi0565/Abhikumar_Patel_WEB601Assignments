import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocklistComponent } from './stocklist/stocklist.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SearchstockComponent } from './searchstock/searchstock.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "details/:id",
    component: StocklistComponent,
  },
  {
    path: "search",
    component: SearchstockComponent,
  }
];







@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
