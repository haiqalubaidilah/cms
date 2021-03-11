import { Component, OnInit } from "@angular/core";

import { ToastController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-sub-register",
  templateUrl: "./sub-register.page.html",
  styleUrls: ["./sub-register.page.scss"],
})
export class SubRegisterPage implements OnInit {
  subjects: any;
  confirmRegistration: boolean = true;
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

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    try {
      this.firestore
        .collection("subjects", (ref) =>
          ref
          .where("session", "==", this.userData.session)
          .where("courseCode" , "==", this.userData.courseCode)
        ) //.collection("subjects", ref => ref.where('code', '==', 'TSE3383')) - filter
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
              registered: e.payload.doc.data()["registered"],
            };
          });
          // loader.dismiss();
        });
    } catch (e) {
      this.showToast(e);
    }
  }

  registerSubjects(id: string, register: boolean) {
    try {
      this.firestore
        .collection("subjects")
        .doc(id)
        .update({
          // isRegistered: !register,
          ['registered.' + this.userData.uid]: !register
        });
    } catch (e) {
      console.log(e);
    }
  }

  confirm() {
    this.confirmRegistration = !this.confirmRegistration;
    // console.log(this.confirmRegistration);
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
