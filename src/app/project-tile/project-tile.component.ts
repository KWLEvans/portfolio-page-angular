import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hoverEvent(element) {
    element.classList.add('hover');
  }

  noHover(element) {
    element.classList.remove('hover');
  }
}
