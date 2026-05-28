import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OrdersModule } from '../orders/orders.module';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
    OrdersModule,
  ],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
