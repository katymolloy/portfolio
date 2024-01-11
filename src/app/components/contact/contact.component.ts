import { Component } from '@angular/core';
import { slideAnimation } from 'src/app/route-animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[slideAnimation]
})
export class ContactComponent {

}
