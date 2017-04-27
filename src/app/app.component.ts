import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { Project } from './project.model';
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
  projects: Project[] = [
    new Project('CODEpendency', 'The CODEpendency app allows users to create decks of flashcards for study as well as view all those that others have created.', './../assets/CODEpendency.png', 'https://codependency-45156.firebaseapp.com/'),
    new Project('Life is Hell', 'Life is Hell is an early attempt at a game using JavaScript. I created custom functionality for object collision and generation.', './../assets/life-is-hell.png', 'https://kwlevans.github.io/LifeIsHell/')
  ];

  toggleAbout() {
    console.log(this.projects)
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
