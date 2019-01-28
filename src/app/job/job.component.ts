import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap }  from '@angular/router';
import { Jobs } from '../data/jobs';
import { Job } from '../classes/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  public selectedId: number;
  jobs = Jobs;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(job: Job){
    this.router.navigate(['/jobDetail', job.id]);
  }

  isSelected(job: Job){
    return job.id === this.selectedId;
  }
}
