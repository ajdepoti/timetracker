import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TimeEntry } from '../classes/time-entry';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  //public entry: TimeEntry;
  public entryId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  //snapshot doesn't work navigating back to same component.  ngonInit doesn't get called
  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.entryId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.entryId = id;
    })
  }

  goPrevious(){
    let previousId = this.entryId - 1;
    this.router.navigate(['/entryDetail/', previousId]);
  }


  goNext(){
    let nextId = this.entryId + 1;
    this.router.navigate(['/entryDetail/', nextId]);
  }

  gotoEntryList(){
    let selectedId = this.entryId ? this.entryId : null;
    this.router.navigate(['/entryList', {id: selectedId}])
  }
}
