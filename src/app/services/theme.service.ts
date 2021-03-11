import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const THEME_KEY = "selected-app-theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = false;

  constructor(private plt: Platform, private storage: Storage) {
    this.plt.ready().then(() => {

      //get the boolean value from the local storage and set the theme
      this.storage.get(THEME_KEY).then(theme => {
        this.setAppTheme(theme);
      });


      //change the theme based on the system theme settings (auto dark mode)
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      prefersDark.addEventListener('change', e => {
        // console.log('matches:', e);
        this.setAppTheme(e.matches);
      })
    })
   }

   toggleAppTheme() {
     this.darkMode = !this.darkMode;
     this.setAppTheme(this.darkMode);
   }

   setAppTheme(dark) {
    this.darkMode = dark;
    if (this.darkMode) {
      document.body.classList.add("dark");
    }
    else {
      document.body.classList.remove("dark");
    }

    //save the boolean value into local storage
    this.storage.set(THEME_KEY, this.darkMode);
   }

   get getDarkMode() {
     return this.darkMode;
   }
}
