import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello world!</p>`,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
  // styles: ['']
})
export class AppComponent {
  name = 'Luis';
  imageURL = 'https://picsum.photos/200/300';

  getName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    this.imageURL = (e.target as HTMLInputElement).value;
  }

  logImage(event: string){
    console.log(event);
  }
}