import { Module } from '@nestjs/common';
import { ConsumptionsService } from './consumptions.service';
import { ConsumptionsController } from './consumptions.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [ConsumptionsController],
  providers: [ConsumptionsService],
  exports: [ConsumptionsService],
})
export class ConsumptionsModule {}
