import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NOTES } from '../notes';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  removeNote() {
    if (this.note) { let delNote = NOTES.indexOf(this.note, 0); NOTES.splice(delNote, 1); }
    alert('Note deleted!');
    // navigate to home after add a note
    this.router.navigateByUrl('/');
  }
}
