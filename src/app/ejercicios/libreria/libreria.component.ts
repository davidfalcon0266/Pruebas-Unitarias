import { Component, OnInit } from '@angular/core';
import { DataBaseLibrary } from '../../../dataBase/db';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {
  dataBaseLibrary = new DataBaseLibrary();
  libro;

  constructor(private service: LibraryService) { }

  ngOnInit() {
  }

  getAllBooks() {
    return this.dataBaseLibrary.getAll();
  }

  getBookByIsbn(isbn) {
    this.libro = this.dataBaseLibrary.getBook(isbn);
    return this.libro;
  }

  findBookOnInternet(isbn) {
    let book;
    
    this.service.getBookFromInternet(isbn).subscribe(resp => {
      book = resp;
    });

    return book;
  }

}
