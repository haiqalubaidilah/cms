import { Component, OnInit } from '@angular/core';

import {
  LoadingController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Report } from 'src/models/report.model';

@Component({
  selector: "app-ereport",
  templateUrl: "./ereport.page.html",
  styleUrls: ["./ereport.page.scss"],
})
export class EreportPage implements OnInit {
  report = {} as Report;
  uid: string;
  isSubmitted: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  async createReport(report: Report) {
    if(this.formValidation()) {
      
      //getting current user uid
      this.uid = (await this.afAuth.currentUser).uid;
      
      this.report.uid = this.uid;
      console.log(report);

      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please wait..."
      });
      (await loader).present();

      //adding the report into database
      try{
        await this.firestore.collection("reports").add(report);
        this.isSubmitted = true;
      }
      catch(e) {
        this.showToast(e);
      }

      //dismiss loader
      (await loader).dismiss();

      if(this.isSubmitted) {
        this.showToast("The report has been submitted.");
      }

      //redirect to home page
      this.navCtrl.navigateRoot("view-report")
    }
  }

  formValidation() {
    if(!this.report.email) {
      this.showToast("Enter email");
      return false;
    }

    if(!this.report.enquiry) {
      this.showToast("Enter equiry");
      return false;
    }

    if(!this.report.description) {
      this.showToast("Enter message");
      return false;
    }
    return true;
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present()); 
  }
}
