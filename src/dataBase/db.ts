export class DataBaseLibrary {
    db = [
        {
            'titulo': 'El diario de Ana Frank',
            'autor': 'Ana Frank',
            'publicado': 1947,
            'isbn': 9788497593069
        },
        {
            'titulo': 'El Hobbit',
            'autor': 'J. R. R. Tolkien',
            'publicado': 1937,
            'isbn': 9789562476171
        }
    ];

    error = 'Libro no encontrado en la DB';

    constructor() {}

    public getAll() {
        return this.db;
    }

    getBook(isbn) {
        for(let i=0; i < this.db.length; i++){
            if(isbn === this.db[i].isbn){
                return this.db[i];
            }
        }

        return this.error;
    }
}