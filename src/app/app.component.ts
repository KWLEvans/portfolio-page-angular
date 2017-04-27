import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  about: boolean = false;
  contact: boolean = false;

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

  wipe() {
    this.about = false;
    this.contact = false;
  }
}
