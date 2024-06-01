import { Component, HostBinding, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note'
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-notas-form',
  templateUrl: './notas-form.component.html',
  styleUrls: ['./notas-form.component.css']
})
export class NotasFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  note : Note = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;


  constructor(private noteService: NoteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.noteService.getNote(params['id'])
      .subscribe(
        res=> {
          console.log(res);
          this.note = res;
          this.edit = true;
        },
        err=> console.error(err)
      )
    }
  }

  saveNewNote() {
    delete this.note.created_at;
    delete this.note.id;
    
    this.noteService.saveNote(this.note)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/notes']);
      },
      err => console.log(err)
    );

  }

  updateNote() {
    delete this.note.created_at;

    this.noteService.updateNote(this.note.id!, this.note)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/notes']);
      },
      err => console.log(err)
    )
  }

}
