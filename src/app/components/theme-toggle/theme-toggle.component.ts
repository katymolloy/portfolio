import { Component } from '@angular/core';
import { ThemeChangeService } from 'src/app/services/theme-change.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent {
  currentTheme: boolean = false;
  lightTheme: string = 'wb_sunny';
  darkTheme: string = 'brightness_2';

  constructor(private updateTheme: ThemeChangeService) {}

  toggleTheme() {
    this.currentTheme = !this.currentTheme;
    this.updateTheme.changeTheme(this.currentTheme);
  }
}
