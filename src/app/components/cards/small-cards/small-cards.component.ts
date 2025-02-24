import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent implements OnInit {
  @Input()
  tools: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
