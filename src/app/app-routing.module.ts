import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsComponent } from './tags/tags.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobComponent } from './job/job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/job', pathMatch: 'full' },
  { path: 'job', component: JobComponent },
  { path: 'jobDetail/:id', component: JobDetailComponent },
  { path: 'entryList', component: EntryListComponent },
  { path: 'entryDetail/:id', component: EntryDetailComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'tags/:id', component: TagDetailComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  JobComponent,
  JobDetailComponent,
  TagsComponent,
  TagDetailComponent,
  EntryListComponent,
  EntryDetailComponent,
  PageNotFoundComponent
]
