import { Component } from '@angular/core';

import { slideAnimation } from 'src/app/route-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[slideAnimation]
})
export class HomeComponent {

}
