import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('users')
@UseGuards(JwtGuard, RolesGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @Roles('admin')
  createPensioner(@Body() dto: CreateUserDto) {
    return this.usersService.createPensioner(dto);
  }

  @Get('pensioners')
  @Roles('admin')
  findPensioners() {
    return this.usersService.findPensioners();
  }

  @Get('pensioners/:id')
  @Roles('admin')
  findPensioner(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findPensionerById(id);
  }

  @Patch(':id/toggle')
  @Roles('admin')
  togglePensioner(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.togglePensioner(id);
  }

  @Patch(':id/balance')
  @Roles('admin')
  rechargeBalance(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { amount: number },
  ) {
    return this.usersService.rechargeBalance(id, body.amount);
  }

  @Post(':id/consume')
  @Roles('admin')
  consumeBalance(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { amount: number; description?: string },
  ) {
    return this.usersService.consumeBalance(id, body.amount, body.description);
  }

  /**
   * Update own profile (pensionista) - email and/or password
   */
  @Patch('me/profile')
  @Roles('pensioner')
  updateMyProfile(
    @Req() req: any,
    @Body() body: { email?: string; password?: string },
  ) {
    const userId = req.user.sub;
    return this.usersService.updateProfile(userId, body);
  }

  /**
   * Skip onboarding (pensionista)
   */
  @Patch('me/skip-onboarding')
  @Roles('pensioner')
  skipOnboarding(@Req() req: any) {
    const userId = req.user.sub;
    return this.usersService.skipOnboarding(userId);
  }
}
