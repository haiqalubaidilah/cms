import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../services/theme.service";

import { AlertController, ToastController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  darkModeState: boolean;

  constructor(
    private themeService: ThemeService,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController
  ) {
    this.darkModeState = this.themeService.getDarkMode;
  }

  ngOnInit() {}

  toggleDarkMode() {
    this.themeService.toggleAppTheme();
    this.darkModeState = this.themeService.getDarkMode;
  }

  async changePasswordAlert() {
    const alert = await this.alertCtrl.create({
      header: "Enter the new password",
      message:
        "Your new password should be at least 6 characters. Once confirmed you'll be able to use the new password.",
      inputs: [
        {
          name: "newPassword1",
          type: "password",
          placeholder: "New password",
        },
        {
          name: "newPassword2",
          type: "password",
          placeholder: "Confirm new password",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
          handler: (alertData) => {
            if (
              alertData.newPassword1 == alertData.newPassword2 &&
              alertData.newPassword1 != "" &&
              alertData.newPassword2 != ""
            ) {
              this.changePassword(alertData.newPassword2);
            } else {
              this.showToast("Error: Please retype your new password!");
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async changePassword(newPassword: string) {
    try {
      (await this.afAuth.currentUser)
        .updatePassword(newPassword)
        .then(() => this.showToast("Password successfully changed!"));
    } catch (e) {
      this.showToast(e);
      console.log(e);
    }
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }

  // onClick(event) {
  //   let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  //   systemDark.addListener(this.colorTest);
  //   if (event.detail.checked) {
  //     document.body.setAttribute("data-theme", "dark");
  //   } else {
  //     document.body.setAttribute("data-theme", "light");
  //   }
  // }

  // colorTest(systemInitiatedDark) {
  //   if (systemInitiatedDark.matches) {
  //     document.body.setAttribute("data-theme", "dark");
  //   } else {
  //     document.body.setAttribute("data-theme", "light");
  //   }
  // }
}
