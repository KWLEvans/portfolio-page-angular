import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() about: boolean;
  @Input() contact: boolean;

  constructor() { }

  ngOnInit() {
  }

}
