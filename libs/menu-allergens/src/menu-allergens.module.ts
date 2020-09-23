import { Module } from '@nestjs/common';
import { MenuAllergensService } from './menu-allergens.service';

@Module({
  providers: [MenuAllergensService],
  exports: [MenuAllergensService],
})
export class MenuAllergensModule {}
