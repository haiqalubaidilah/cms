import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sem-result',
  templateUrl: './sem-result.page.html',
  styleUrls: ['./sem-result.page.scss'],
})
export class SemResultPage implements OnInit {
  sem: string;
  url: any;
  hello: string;
  constructor() { }

  ngOnInit() {
  }

  changeURL() {
    if (this.sem == "1") {
      this.url = "https://drive.google.com/uc?export=download&id=1nS3BLUS7FkXctO4CO_tZ2V-ggjE-4xVh"
      this.hello = "ayo wtf";
    }
    if (this.sem == "2") {
      this.url =
        "https://drive.google.com/uc?export=download&id=1bJeG92o0NeDhcuYB2bOKgSsVhAhVR2Fh";
        this.hello = "ayo nibba";
    }
    if (this.sem == "3") {
      this.url =
        "https://drive.google.com/uc?export=download&id=1tjcqe2zeYKXLotaxAfA8O1qtEoF7P4Xc";
    }
    if (this.sem == "4") {
      this.url =
        "https://drive.google.com/uc?export=download&id=1fbK_UAVOAota8e0vXFA8Gt0SblfL7ZxC";
    }
  }


  // LINK: https://drive.google.com/uc?export=download&id=DRIVE_FILE_ID
  // sem 1: 1nS3BLUS7FkXctO4CO_tZ2V-ggjE-4xVh
  // sem 2: 1bJeG92o0NeDhcuYB2bOKgSsVhAhVR2Fh
  // sem 3: 1tjcqe2zeYKXLotaxAfA8O1qtEoF7P4Xc
  // sem 4: 1fbK_UAVOAota8e0vXFA8Gt0SblfL7ZxC
  // sem 4 SubReg: 1_50HhKZDcD7Aeju4IaCA6WgmREXp0tWf
  // sem 4 SubVer: 1bJqi8Pgg2q1aj3FV9uyjWSLzWuFCXa_8

}
