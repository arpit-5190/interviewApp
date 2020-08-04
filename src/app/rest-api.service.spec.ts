import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [RestApiService]
  }));

  it('should be created', () => {
    const service: RestApiService = TestBed.get(RestApiService);
    expect(service).toBeTruthy();
  });

  it('should have initialize function', () => {
    const service: RestApiService = TestBed.get(RestApiService);
    expect(service.initialize).toBeTruthy();
  });

  it('should have initialize function', () => {
    const service: RestApiService = TestBed.get(RestApiService);
    service.initialize(1);
    expect(service.updatedUrl).toEqual('http://localhost:3000/interviews1');
  });
});
