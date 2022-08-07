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
  name = 'albus dumbledore';
  imageURL = 'https://picsum.photos/200/300';
  images = ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'];
  currentDate = new Date();
  cost = 9000;
  temperature = 29.3;
  pizza = {
    toppings:['pepperoni', 'bacon'],
    size: 'small'
  }
  blueClass = false;
  fontSize = 16;

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