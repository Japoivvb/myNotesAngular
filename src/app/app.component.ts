import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NotesListComponent, FormsModule],
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
}
