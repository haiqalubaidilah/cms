import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
})
export class AboutPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  sliderConfig = {
    // spaceBetween: 10,
    // centeredSlides: true,
    slidesPerView: 2.7,
    freeMode: true,
  };

  contacts = [
    {
      title: "Instagram",
      logo: "logo-instagram",
      url: "https://www.instagram.com/mppkuptmkl/?hl=en",
      color: "danger",
    },
    {
      title: "Twitter",
      logo: "logo-twitter",
      url:
        "https://twitter.com/MPPKUPTMKL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      color: "secondary",
    },
    {
      title: "Facebook",
      logo: "logo-facebook",
      url: "https://www.facebook.com/kuptmkl.official/",
      color: "tertiary",
    },
    {
      title: "YouTube",
      logo: "logo-youtube",
      url: "https://www.youtube.com/channel/UCQC4Ib7_9UW719uFiwBXVVg",
      color: "primary",
    },
    {
      title: "WhatsApp",
      logo: "logo-whatsapp",
      url: "https://api.whatsapp.com/send/?phone=60192600861&text&app_absent=0",
      color: "success",
    },
    {
      title: "Maps",
      logo: "map-outline",
      url:
        "https://www.google.com/maps/place/Kolej+Universiti+Poly-Tech+MARA+Kuala+Lumpur/@3.1277371,101.7350849,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc374119aeec81:0xa023551a33256eb1!8m2!3d3.1277317!4d101.7372736",
      color: "warning",
    },
  ];

  devContacts = [
    {
      title: "GitHub",
      logo: "logo-github",
      url: "https://github.com/haiqalubaidilah",
      color: "dark",
    },
    {
      title: "Instagram",
      logo: "logo-instagram",
      url: "https://www.instagram.com/haiqal_u/",
      color: "danger",
    },
    {
      title: "Twitter",
      logo: "logo-twitter",
      url: "https://twitter.com/TheHqDev",
      color: "secondary",
    },
    {
      title: "YouTube",
      logo: "logo-youtube",
      url: "https://www.youtube.com/channel/UC2juY8AEdzv42vPF5KY30fg",
      color: "primary",
    },
    {
      title: "LinkedIn",
      logo: "logo-linkedin",
      url: "https://www.linkedin.com/",
      color: "tertiary",
    },
    {
      title: "Email",
      logo: "mail-outline",
      url: "mailto:haiqal.ubaidillah2001@gmail.com",
      color: "medium",
    },
  ];

  redirect(url: string) {
    window.location.href = url;
  }
}
