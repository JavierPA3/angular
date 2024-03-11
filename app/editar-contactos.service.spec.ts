import { TestBed } from '@angular/core/testing';

import { EditarContactosService } from './editar-contactos.service';

describe('EditarContactosService', () => {
  let service: EditarContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
