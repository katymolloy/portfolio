import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimation } from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  // animations: [slideAnimation]
})
export class AppComponent {
  title = 'katy-molloy';
  prepareRoute(outlet: RouterOutlet){
    
  }
}
