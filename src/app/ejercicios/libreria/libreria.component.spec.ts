import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaComponent } from './libreria.component';
import { LibraryService } from 'src/app/services/library.service';
import { Observable } from 'rxjs';

describe('Test suit de libreria', () => {
  let component: LibreriaComponent;
  let service: LibraryService;

  beforeEach(() => {
    service = new LibraryService(null);
    component = new LibreriaComponent(service);
  });

  it('Should get all the books from database', () => {
    let books = component.getAllBooks();

    expect(books.length).toBe(2);
  });

  it('Should find the book in database', () => {
    let isbn = 9789562476171;
    
    let book = component.getBookByIsbn(isbn);

    expect(book.isbn).toEqual(isbn);
  });

  it('Should send error message when the book does not exist', () => {
    let isbn = 9789500000000;
    let errorMsg = 'no encontrado';
    
    let book = component.getBookByIsbn(isbn);

    expect(book).toContain(errorMsg);
  });

  it('Should find a book from internet', () => {
    let isbn = 9788498381498;
    spyOn(service, 'getBookFromInternet').and.returnValue(Observable.create(obs => {
      obs.next(
        {
        'titulo': 'El principito',
        'autor': 'Antoine de Saint-Exupéry',
        'publicado': 1943,
        'isbn': 9788498381498
      });
      obs.complete();
    }));

    let resp = component.findBookOnInternet(isbn);
    console.log(resp);

    expect(resp.isbn).toEqual(isbn);
  });
});
