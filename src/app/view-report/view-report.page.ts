import { Component, OnInit } from '@angular/core';

import { LoadingController, ToastController } from "@ionic/angular";

import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-view-report",
  templateUrl: "./view-report.page.html",
  styleUrls: ["./view-report.page.scss"],
})
export class ViewReportPage implements OnInit {
  reports: any;
  isDeleted: boolean = false;
  uid: string;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getReport();
  }

  async getReport() {
    // let loader = await this.loadingCtrl.create({
    //   message: "Please wait...",
    // });
    // loader.present();


    this.uid = (await this.afAuth.currentUser).uid;

    //getting data from firestore
    try {
      this.firestore
        .collection("reports", ref => 
          ref.where("uid", "==", this.uid)
        )
        .snapshotChanges()
        .subscribe((data) => {
          this.reports = data.map((e) => {
            return {
              id: e.payload.doc.id,
              email: e.payload.doc.data()["email"],
              enquiry: e.payload.doc.data()["enquiry"],
              description: e.payload.doc.data()["description"],
            };
          });
          // loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  async deleteReport(id: string) {
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Please wait...",
    });
    (await loader).present();

    try {
      //delete the document by id
      await this.firestore.doc("reports/" + id).delete();
      this.isDeleted = true;
      //dismiss loader
      (await loader).dismiss();

      if (this.isDeleted) {
        this.showToast("The report has been deleted");
      }
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
}
