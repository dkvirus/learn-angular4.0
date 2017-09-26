import { TestBed, inject } from '@angular/core/testing';

import { AnotherContactService } from './another-contact.service';

describe('AnotherContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherContactService]
    });
  });

  it('should be created', inject([AnotherContactService], (service: AnotherContactService) => {
    expect(service).toBeTruthy();
  }));
});
