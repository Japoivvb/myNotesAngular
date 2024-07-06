import { Component } from '@angular/core';
import { NOTES } from '../notes';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {

  name = new FormControl('');

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
});
  
  notes = NOTES;
  
  show(title: string) {
    console.log('Note selected with title: ' + title);
    window.alert(title);
  }
  
  showName() {
    alert(this.name.value);
  }

  login() {
    alert(
      this.loginForm.value.username +
      ' | ' + 
      this.loginForm.value.password
    );
  }
}
