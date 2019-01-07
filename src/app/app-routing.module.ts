import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoursComponent } from './hours/hours.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: 'hours', component: HoursComponent },
  { path: 'tags', component: TagsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HoursComponent, TagsComponent]
