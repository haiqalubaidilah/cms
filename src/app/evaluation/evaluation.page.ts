import { Component, OnInit } from '@angular/core';

import { ToastController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-evaluation",
  templateUrl: "./evaluation.page.html",
  styleUrls: ["./evaluation.page.scss"],
})
export class EvaluationPage implements OnInit {
  subjects: any;
  userData: any;

  constructor(
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.actRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userData = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ionViewWillEnter() {
    this.getSubjectsInfo();
  }

  getSubjectsInfo() {
    try {
      this.firestore
        .collection("subjects", (ref) =>
          ref
            .where("session", "==", this.userData.session)
            .where("courseCode", "==", this.userData.courseCode)
        )
        .snapshotChanges()
        .subscribe((data) => {
          this.subjects = data.map((e) => {
            return {
              id: e.payload.doc.id,
              code: e.payload.doc.data()["code"],
              name: e.payload.doc.data()["name"],
              lecturerName: e.payload.doc.data()["lecturerName"],
              lecturerid: e.payload.doc.data()["lecturerid"],
            };
          });
          // loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
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

  ngOnInit() {}
}
