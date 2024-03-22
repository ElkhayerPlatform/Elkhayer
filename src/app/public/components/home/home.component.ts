import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faqList = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      question: "How does a penguin build its house?",
      answer: "I don't know, but it starts by breaking the ice. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      question: "What do you call a fake noodle?",
      answer: "An impasta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      question: "What's brown and sticky?",
      answer: "A stick. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      question: "What's orange and sounds like a parrot?",
      answer: "A carrot. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    }
  ];

  isQuestionOpen: boolean[] = [];

  constructor() {
    this.faqList.forEach(() => this.isQuestionOpen.push(false));
  }

  toggleQuestion(index: number): void {
    this.isQuestionOpen[index] = !this.isQuestionOpen[index];
  }
}
