import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('img') postImage = '';
  @Output() imageSelected = new EventEmitter<string>();

  constructor(){
    console.log('constructor() called' + this.postImage);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
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
