import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, NotesListComponent, FormsModule, AddNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  title = 'My Notes App';
  user = 'John';
  surname = 'Doe';
  imageURL = '/assets/img/notes.jpg';
  imageAlt = 'image not found check assets folder';
  isRed = false;
  items = ['apple', 'orange', 'banana'];
  name = "jose"
  router = inject(Router);

  ngOnInit(): void {    
  }

  change() {
    this.isRed = !this.isRed;
    console.log(this.isRed);
  }  

  submit() {
    alert(this.name);
  }

  navigate(num: number) {
    if (num == 1) {
      this.router.navigateByUrl('/home');

    } else {
      this.router.navigateByUrl('/contacts');

    }
  }
}
