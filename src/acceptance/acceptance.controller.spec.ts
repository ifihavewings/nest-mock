import { Test, TestingModule } from '@nestjs/testing';
import { AcceptanceController } from './acceptance.controller';

describe('AcceptanceController', () => {
  let controller: AcceptanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcceptanceController],
    }).compile();

    controller = module.get<AcceptanceController>(AcceptanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
