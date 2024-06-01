import { Component,HostBinding, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notas-list',
  templateUrl: './notas-list.component.html',
  styleUrls: ['./notas-list.component.css']
})
export class NotasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  notes: any = [];
  constructor(private noteServices: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.noteServices.getNotes().subscribe(
      res => {
        this.notes = res;
      },
      err => console.error
    )
  }

  deleteNote(id: string) {
    this.noteServices.deleteNote(id).subscribe(
      res => {
        console.log(res);
        this.getNotes();
      },
      err => console.error(err)
    )
  }

}
