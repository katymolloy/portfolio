import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangeService {
  constructor() {}

  changeTheme(theme: boolean) {
    const body = document.getElementsByTagName('body')[0];
    switch (theme) {
      case true:
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        break;

       
      case false:
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        break;
    }
  }
}
