import { Test, TestingModule } from '@nestjs/testing';
import { MenuAllergensService } from './menu-allergens.service';

describe('MenuAllergensService', () => {
  let service: MenuAllergensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuAllergensService],
    }).compile();

    service = module.get<MenuAllergensService>(MenuAllergensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
