import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocklistComponent } from './stocklist/stocklist.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SearchstockComponent } from './searchstock/searchstock.component';
import { InvalidlinkComponent } from './invalidlink/invalidlink.component';
import { ChangeContentComponent } from './change-content/change-content.component';


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
  }, 
  {
    path: "addContent",
    component: ChangeContentComponent,
  }, 
  {
    path: "updatecontent/:id",
    component: ChangeContentComponent,
  }, 
   {
    path: "**",
    component: InvalidlinkComponent,
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
