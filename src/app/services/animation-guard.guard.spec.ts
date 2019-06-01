import { TestBed, async, inject } from '@angular/core/testing';

import { AnimationGuardGuard } from './animation-guard.guard';

describe('AnimationGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationGuardGuard]
    });
  });

  it('should ...', inject([AnimationGuardGuard], (guard: AnimationGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
