import { Component, OnInit } from '@angular/core';
import { TAGS } from '../data/tags';
import { Tag } from '../classes/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags = TAGS;
  show:boolean = false;
  constructor() { 
  }

  ngOnInit() {
  }

  selectedTag: Tag;
  onSelect(tag: Tag):void{
    this.selectedTag = tag;
    this.show = true;
  }
}
