import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "src/models/user.model";

@Component({
  selector: "app-login-issue",
  templateUrl: "./login-issue.page.html",
  styleUrls: ["./login-issue.page.scss"],
})
export class LoginIssuePage implements OnInit {
  user = {} as User;
  showCard: boolean = false;

  constructor(
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  async sendEmail(user: User) {
    if (user.email) {
      const alert = await this.alertCtrl.create({
        header: "Confirm submission?",
        message:
          "Once confirmed an email will be sent to you. Check your inbox and follow the guide to reset the password.",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Confirm",
            handler: () => {
              this.afAuth.sendPasswordResetEmail(user.email).then(() => {
                this.showToast("An email has been sent to you!");
              }, 
              (error) => {
                this.showToast(error);
              });
            },
          },
        ],
      });

      await alert.present();
    } else {
      this.showToast("Please enter your email")
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
}
