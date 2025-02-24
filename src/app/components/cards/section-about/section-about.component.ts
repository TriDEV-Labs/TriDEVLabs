import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css'],
})
export class SectionAboutComponent implements OnInit {
  @Input()
  urlImg: string = '';
  @Input()
  name: string = '';
  @Input()
  Texto: string = '';
  @Input()
  link: string = '';
  constructor() {}

  ngOnInit(): void {}
}
