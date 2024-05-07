import { Test, TestingModule } from '@nestjs/testing';
import { MatieralsController } from './matierals.controller';

describe('MatieralsController', () => {
  let controller: MatieralsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatieralsController],
    }).compile();

    controller = module.get<MatieralsController>(MatieralsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
