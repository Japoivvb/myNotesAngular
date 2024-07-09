import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, NotesListComponent, FormsModule, AddNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'My Notes App';
  user = 'John';
  surname = 'Doe';
  imageURL = '/assets/img/notes.jpg';
  imageAlt = 'image not found check assets folder';
  isRed = false;
  items = ['apple', 'orange', 'banana'];
  name="jose"
  router = inject(Router);

  change() {
    this.isRed = !this.isRed;
    console.log(this.isRed);
  }

  login() {
    alert('Welcome!');
  }

  submit() {
    alert(this.name);
  }

  navigate(num:number) {
    if (num==1) {
      this.router.navigateByUrl('/home');
      
    } else {
      this.router.navigateByUrl('/contacts');
      
    }
    }
}
