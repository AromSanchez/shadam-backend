import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
