import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/Note';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NoteService {

  API_URI= 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(`${this.API_URI}/notes`);
  }

  getNote(id: String) {
    return this.http.get(`${this.API_URI}/notes/${id}`);
  }

  deleteNote(id: string) {
    return this.http.delete(`${this.API_URI}/notes/${id}`);
  }

  saveNote(note: Note) {
    return this.http.post(`${this.API_URI}/notes`, note);
  }

  updateNote(id: string|number, updatedNote: Note): Observable<Note> {
    return this.http.put(`${this.API_URI}/notes/${id}`, updatedNote);
  }
  
}

