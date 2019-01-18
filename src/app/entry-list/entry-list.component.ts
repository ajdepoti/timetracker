import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap }  from '@angular/router';
import { Entries } from '../data/entries';
import { TimeEntry } from '../classes/time-entry';


@Component({
  selector: 'app-entr-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  public selectedId;
  entries = Entries;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(entry){
    this.router.navigate(['/entryDetail', entry.id]);
  }

  isSelected(entry){
    return entry.id === this.selectedId;
  }
}
