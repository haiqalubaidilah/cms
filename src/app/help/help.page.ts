import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-help",
  templateUrl: "./help.page.html",
  styleUrls: ["./help.page.scss"],
})
export class HelpPage implements OnInit {
  searchTerm: string = "";
  filteredQuestions: any;

  questions = [
    {
      title: "How do I use this app?",
      answer: "Here is a video showcases what the app can do.",
      showVideo: true,
    },
    {
      title: "Why can't I login?",
      answer:
        "If you're having issues logging in, you could reset it from the login page or from the settings page.",
    },
    {
      title: "Why is there no subjects to register?",
      answer:
        "If you're registering subjects for the new semester, it may take some time for the subjects to appear. Please be patient.",
    },
    {
      title: "Why is there no subjects to verify?",
      answer:
        "You need to register subjects first before you can verify them. Further issues can be enquired to the ICT department",
    },
    {
      title: "Why can't I download the current sem result?",
      answer:
        "It may take awhile for the lecturers to evaluate your assignments and exam papers. Please wait until further notice from your coordinator.",
    },
    {
      title: "Why can't I download the exam slip?",
      answer: "Exam slip can only be downloaded at a certain time.",
    },
    {
      title: "How can I delete the service reports?",
      answer:
        "You can delete them by swiping left on one of the report to reveal the delete button.",
    },
    {
      title: "How can I edit the service reports?",
      answer: "You can edit them by swiping right to reveal the edit button.",
    },
    {
      title: "How can I edit the submitted evaluations?",
      answer: "Once submit you can no longer edit, delete, or submit them again. This is to prevent spamming and undisclosed changes",
    },
    {
      title: "How can I delete the notifications?",
      answer: "You can delete them by swiping left on one of the notification to reveal the delete button",
    },
  ];

  constructor() {
    this.questions = this.questions.map((item) => ({
      ...item,
      showMore: false,
    }));
  }

  //returns the element of the question array after filterting
  setFilteredQuestions() {
    this.filteredQuestions = this.questions.filter(data => {
      return data.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
    console.log(this.filteredQuestions);
  }

  ngOnInit() {
    this.setFilteredQuestions();
  }
}
