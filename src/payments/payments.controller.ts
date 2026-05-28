import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { RegisterPaymentDto } from '../orders/dto/register-payment.dto';
import { OrdersService } from '../orders/orders.service';

@Controller('pagos')
@UseGuards(JwtGuard, RolesGuard)
@Roles('admin')
export class PaymentsController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('pedidos/:id')
  register(@Param('id') id: string, @Body() dto: RegisterPaymentDto) {
    return this.ordersService.checkout(id, dto);
  }
}
