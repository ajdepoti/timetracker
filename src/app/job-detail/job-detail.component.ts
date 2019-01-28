import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  public jobId:number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.jobId = id;
    })
  }

  goPrevious(){
    let previousId = this.jobId - 1;
    this.router.navigate(['/jobDetail/', previousId]);
  }


  goNext(){
    let nextId = this.jobId + 1;
    this.router.navigate(['/jobDetail/', nextId]);
  }

  gotoJobList(){
    let selectedId = this.jobId ? this.jobId : null;
    this.router.navigate(['/job', {id: selectedId}]);
  }
}
