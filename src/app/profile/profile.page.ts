import { Component, OnInit } from "@angular/core";

import { PopoverController } from "@ionic/angular";
import { PopoverPage } from "../components/popover/popover.page";

import { LoadingController, ToastController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

import { ProfileInfo } from "src/models/profileInfo.model";
import { SponsorshipInfo } from "src/models/sponsorshipInfo.model";
import { HostelInfo } from "src/models/hostelInfo.model";
import { ParentInfo } from "src/models/ParentInfo.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  personal = {} as ProfileInfo;
  sponsor = {} as SponsorshipInfo;
  hostel = {} as HostelInfo;
  parent = {} as ParentInfo;
  uid: string;
  segment = "home";

  constructor(
    private popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.getPersonalInfo();
  }

  async getPersonalInfo() {
    // let loader = await this.loadingCtrl.create({
    //   message: "Please wait...",
    // });
    // loader.present();

    //getting the current user uid
    this.uid = (await this.afAuth.currentUser).uid;
    console.log(this.uid);

    //getting current user's personal info
    this.firestore
      .doc("students/" + this.uid + "/personal/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.personal.name = data["name"];
        this.personal.ic = data["ic"];
        this.personal.studentId = data["studentid"];
        this.personal.address = data["address"];
        this.personal.postcode = data["postcode"];
        this.personal.state = data["state"];
        this.personal.city = data["city"];
        this.personal.country = data["country"];
        this.personal.phone = data["phone"];
        this.personal.gender = data["gender"];
        this.personal.race = data["race"];
        this.personal.religion = data["religion"];
        this.personal.email = data["email"];
        this.personal.course = data["course"];
        this.personal.courseName = data["courseName"];
        this.personal.dateRegistered = data["dateRegistered"];
        this.personal.session = data["session"];
        this.personal.dateSemRegistered = data["dateSemRegistered"];
        this.personal.sem = data["sem"];
        this.personal.active = data["active"];
        this.personal.courseStatus = data["courseStatus"];
        this.personal.advisorName = data["advisorName"];
        this.personal.dateBirth = data["dateBirth"];
        this.personal.placeBirth = data["placeBirth"];
        this.personal.status = data["status"];
        this.personal.citizen = data["citizen"];
        this.personal.nationality = data["nationality"];
        this.personal.kptmEmail = data["kptmEmail"];
        this.personal.program = data["program"];
      });

    //getting current user's parent info
    this.firestore
      .doc("students/" + this.uid + "/parents/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.parent.address = data["address"];
        this.parent.postcode = data["postcode"];
        this.parent.state = data["state"];
        this.parent.city = data["city"];
        this.parent.country = data["country"];
        this.parent.fatherName = data["fatherName"];
        this.parent.fatherIC = data["fatherIC"];
        this.parent.fatherContact = data["fatherContact"];
        this.parent.fatherCitizen = data["fatherCitizen"];
        this.parent.fatherRace = data["fatherRace"];
        this.parent.fatherOccupation = data["fatherOccupation"];
        this.parent.fatherSalary = data["fatherSalary"];
        this.parent.motherName = data["motherName"];
        this.parent.motherIC = data["motherIC"];
        this.parent.motherContact = data["motherContact"];
        this.parent.motherCitizen = data["motherCitizen"];
        this.parent.motherRace = data["motherRace"];
        this.parent.motherOccupation = data["motherOccupation"];
        this.parent.motherSalary = data["motherSalary"];
      });

    //getting current user's hostel info
    this.firestore
      .doc("students/" + this.uid + "/hostel/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.hostel.phone = data["phone"];
        this.hostel.address = data["address"];
        this.hostel.city = data["city"];
        this.hostel.state = data["state"];
        this.hostel.postcode = data["postcode"];
        this.hostel.dateRegister = data["dateRegister"];
        this.hostel.hostelCode = data["hostelCode"];
        this.hostel.roomNo = data["roomNo"];
        this.hostel.checkIn = data["checkIn"];
        this.hostel.checkOut = data["checkOut"];
      });

    //getting current user's sponsorship info
    this.firestore
      .doc("students/" + this.uid + "/sponsorship/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.sponsor.ic = data["ic"];
        this.sponsor.sponsorNo = data["sponsorNo"];
        this.sponsor.sponsorName = data["sponsorName"];
        this.sponsor.total = data["total"];
        this.sponsor.startDate = data["startDate"];
        this.sponsor.endDate = data["endDate"];
        this.sponsor.sponsorType = data["sponsorType"];
        this.sponsor.status = data["status"];
      });
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }

  showPopover() {
    this.popoverCtrl
      .create({
        component: PopoverPage,
      })
      .then((popoverElement) => {
        popoverElement.present();
      });
  }

  async dismissPopover() {
    await this.popoverCtrl.dismiss();
  }

  // async presentPopover() {
  //   const popover = await this.popoverCtrl.create({
  //     component: PopoverPage,
  //   });
  //   return await popover.present();
  // }
}
