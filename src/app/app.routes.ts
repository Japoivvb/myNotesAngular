import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';
import { LoginGuardian } from './login/auth-guardfn.service';

export const routes: Routes = [
    // {path: '', component: NotesListComponent },
    {path: '', component: LoginComponent },
    {path: 'login', component: LoginComponent },
    {path: 'home', component:HomeComponent},
    {path: 'notes', component:NotesListComponent},
    {path: 'new', component: AddNoteComponent},
    {path: 'note/:id', component: NoteDetailComponent},//route with params
    {path: 'employees', component:EmployeesComponent, canActivate: [LoginGuardian]},
    {path: 'contacts', component:ContactsComponent, canActivate: [AuthGuardService]},// protect page from logged
    { path: '**', title: 'Page Not Found', component: NotFoundComponent },// route custom error

];
