import { Component } from '@angular/core';
import { slideAnimation } from 'src/app/route-animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[slideAnimation]
})
export class AboutComponent {

}
