import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Note, NOTES } from '../notes';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent implements OnInit {
  //router = inject(Router); without constructor
  //activeRoute = inject(ActivatedRoute); without constructor
  id: number;
  note: Note;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): 
  void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));// get id from url
    //this.id = Number(this.route.snapshot.params['id']); other way to get id from url
    this.note = NOTES.find((i) => i.id === this.id);// it could be moved to notes service.find
  }

  removeNote() {
    if (this.note) { 
      let delNote = NOTES.indexOf(this.note, 0); 
      NOTES.splice(delNote, 1); // it could be moved to notes service.delete
    }
    alert('Note deleted!');
    // navigate to home after add a note
    this.router.navigateByUrl('/notes');
  }
}
