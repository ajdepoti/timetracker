import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { JobComponent } from './job/job.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    TagDetailComponent,
    JobComponent,
    EntryListComponent,
    EntryDetailComponent,
    JobDetailComponent,
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
