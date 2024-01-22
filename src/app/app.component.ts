import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import data from '../utils/json.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'italo';
  counter = 0;
  developers = data
  

  increaseCounter(){
    this.counter++;
  }

  decreaseCounter(){
    this.counter--;
  }

  sendData(developer: any){
    console.log(developer)
  }

  removeDeveloperFromList(index: number){
    this.developers.splice(index, 1)
  }
}

