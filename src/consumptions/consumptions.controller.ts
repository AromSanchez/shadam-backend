import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ConsumptionsService } from './consumptions.service';
import { RegisterConsumptionDto } from './dto/register-consumption.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('consumptions')
@UseGuards(JwtGuard, RolesGuard)
export class ConsumptionsController {
  constructor(private readonly consumptionsService: ConsumptionsService) {}

  /**
   * Register a consumption (receptionist/admin action)
   */
  @Post()
  @Roles('admin')
  register(@Body() dto: RegisterConsumptionDto) {
    return this.consumptionsService.register(dto.userId, dto.mealType);
  }

  /**
   * Validate pensionista by QR token (receptionist action)
   */
  @Post('validate-qr')
  @Roles('admin')
  validateQr(@Body() body: { qrToken: string }) {
    return this.consumptionsService.validateByQrToken(body.qrToken);
  }

  /**
   * Get consumption history for a user (admin)
   */
  @Get('user/:userId')
  @Roles('admin')
  findByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.consumptionsService.findByUser(userId);
  }

  /**
   * Get today's consumptions for a user (admin)
   */
  @Get('user/:userId/today')
  @Roles('admin')
  findTodayByUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.consumptionsService.findTodayByUser(userId);
  }

  /**
   * Get consumption stats for a user (admin)
   */
  @Get('user/:userId/stats')
  @Roles('admin')
  getStats(@Param('userId', ParseIntPipe) userId: number) {
    return this.consumptionsService.getStats(userId);
  }

  /**
   * Get my consumption history (pensionista)
   */
  @Get('me/history')
  @Roles('pensioner')
  findMyHistory(@Req() req: any) {
    return this.consumptionsService.findByUser(req.user.sub);
  }

  /**
   * Get my today's consumptions (pensionista)
   */
  @Get('me/today')
  @Roles('pensioner')
  findMyToday(@Req() req: any) {
    return this.consumptionsService.findTodayByUser(req.user.sub);
  }

  /**
   * Get my consumption stats (pensionista)
   */
  @Get('me/stats')
  @Roles('pensioner')
  getMyStats(@Req() req: any) {
    return this.consumptionsService.getStats(req.user.sub);
  }
}
