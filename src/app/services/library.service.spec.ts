import { TestBed } from '@angular/core/testing';

import { LibraryService } from './library.service';

xdescribe('LibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryService = TestBed.get(LibraryService);
    expect(service).toBeTruthy();
  });
});
