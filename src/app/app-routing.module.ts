import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isRight' } },
  { path: 'about', component: AboutComponent, data: { animation: 'isRight' }  },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'isRight' }  },
  { path: 'contact', component: ContactComponent, data: { animation: 'isRight' }  },
  { path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
