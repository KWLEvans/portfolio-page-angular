import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  about: boolean = false;
  contact: boolean = false;
  resume: boolean = false;

  toggleAbout() {
    if (this.about) {
      this.about = false;
    } else {
      this.wipe();
      this.about = true;
    }
  }

  toggleContact() {
    if (this.contact) {
      this.contact = false;
    } else {
      this.wipe();
      this.contact = true;
    }
  }

  toggleResume() {
    if (this.resume) {
      this.resume = false;
    } else {
      this.wipe();
      this.resume = true;
    }
  }

  wipe() {
    this.about = false;
    this.contact = false;
    this.resume = false;
  }

  getWidth() {
    if (this.resume) {
      return "75%";
    } else {
      return "25%";
    }
  }
}
