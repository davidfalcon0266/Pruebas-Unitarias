import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  value: number;
  state: boolean;

  constructor() { 
    this.value = 0;
    this.state = true;
  }

  ngOnInit() {
  }

  upVote(){
    this.value++;
  }

  downVote(){
    this.value--;
  }
}
