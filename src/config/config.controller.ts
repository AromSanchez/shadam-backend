import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from './config.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('config')
@UseGuards(JwtGuard, RolesGuard)
@Roles('admin')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('prices')
  getPrices() {
    return this.configService.getAllPrices();
  }

  @Patch('prices')
  updatePrices(@Body() body: { desayuno?: number; almuerzo?: number; cena?: number }) {
    return this.configService.updateAllPrices(body);
  }
}
