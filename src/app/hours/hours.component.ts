import { Component, OnInit } from '@angular/core';
import { TimeEntry }  from '../classes/timeEntry';


@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  timeEntry: TimeEntry = {
    id: 1,
    hoursWorked: 2.5,
    tag: 'ewp'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
