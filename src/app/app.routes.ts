import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
    // {path: '', component: NotesListComponent },
    {path: '', component: HomeComponent },
    {path: 'home', component:HomeComponent},
    {path: 'notes', component:NotesListComponent},
    {path: 'new', component: AddNoteComponent},
    {path: 'note/:id', component: NoteDetailComponent},//route with params
    {path: 'employees', component:EmployeesComponent},
    {path: 'contacts', component:ContactsComponent},
    { path: '**', title: 'Page Not Found', component: NotFoundComponent },// route custom error

];
