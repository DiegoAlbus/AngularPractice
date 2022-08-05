import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck {
  @Input('img') postImage = '';
  @Output() imageSelected = new EventEmitter<string>();

  constructor(){
    console.log('constructor() called' + this.postImage);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }
  ngOnInit(): void {
    console.log('ngOnInit() called' + this.postImage);
  }

}
