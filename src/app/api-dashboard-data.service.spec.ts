import { TestBed, inject } from '@angular/core/testing';

import { ApiDashboardDataService } from './api-dashboard-data.service';

describe('ApiDashboardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDashboardDataService]
    });
  });

  it('should be created', inject([ApiDashboardDataService], (service: ApiDashboardDataService) => {
    expect(service).toBeTruthy();
  }));
});
