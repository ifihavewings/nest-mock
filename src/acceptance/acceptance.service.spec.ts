import { Test, TestingModule } from '@nestjs/testing';
import { AcceptanceService } from './acceptance.service';

describe('AcceptanceService', () => {
  let service: AcceptanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcceptanceService],
    }).compile();

    service = module.get<AcceptanceService>(AcceptanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
