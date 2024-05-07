import { Test, TestingModule } from '@nestjs/testing';
import { MatieralsService } from './matierals.service';

describe('MatieralsService', () => {
  let service: MatieralsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatieralsService],
    }).compile();

    service = module.get<MatieralsService>(MatieralsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
