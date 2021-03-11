import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-sub-verify",
  templateUrl: "./sub-verify.page.html",
  styleUrls: ["./sub-verify.page.scss"],
})
export class SubVerifyPage implements OnInit {
  subjects: any;
  userData: any;
  confirmVerification: boolean = true;

  constructor(
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private actRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.actRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userData = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    try {
      this.firestore
        .collection("subjects", (ref) =>
          ref
            .where("registered." + this.userData.uid, "==", true) //only get the subjects that have been registered
        )
        .snapshotChanges()
        .subscribe((data) => {
          this.subjects = data.map((e) => {
            return {
              id: e.payload.doc.id,
              code: e.payload.doc.data()["code"],
              name: e.payload.doc.data()["name"],
              section: e.payload.doc.data()["section"],
              creditHr: e.payload.doc.data()["creditHr"],
              contactHr: e.payload.doc.data()["contactHr"],
              verified: e.payload.doc.data()["verified"],
            };
          });
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  verifySubject(id: string, verified: boolean) {
    try {
      this.firestore
        .collection("subjects")
        .doc(id)
        .update({
          ["verified." + this.userData.uid]: !verified,
        });
    } catch (e) {
      console.log(e);
    }
  }

  async confirmSubVerification() {

    const alert = await this.alertCtrl.create({
      header: "Confirm verifcation?",
      message: "Once confirmed you cannot change it later!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Confirm",
          handler: () => {
            this.firestore.doc("students/" + this.userData.uid).update({
              subjectsVerified: true,
            }).then(() => {
              this.showToast("The subjects has been verified");
            },
            (error) => {
              this.showToast(error);
            });
            this.router.navigate(["tabs-page"]);
          }
        }
      ]
    });

    await alert.present();
    // console.log(this.subjects);
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
