import { TestBed } from '@angular/core/testing';

import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';

describe('TokenInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptorInterceptor = TestBed.inject(TokenInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

function beforeEach(arg0: () => import("@angular/core/testing").TestBedStatic) {
  throw new Error('Function not implemented.');
}

function expect(interceptor: TokenInterceptorInterceptor) {
  throw new Error('Function not implemented.');
}
