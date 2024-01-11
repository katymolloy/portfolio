import { Component } from '@angular/core';
import { slideAnimation } from 'src/app/route-animations';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [slideAnimation]
})
export class ProjectsComponent {


}
