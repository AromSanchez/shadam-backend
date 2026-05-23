import { Body, Controller, HttpCode, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(200)
    @Post('login')
    login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
        return this.authService.login(dto, res);
    }

    @HttpCode(200)
    @Post('refresh')
    refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        return this.authService.refresh(req, res);
    }

    @HttpCode(200)
    @Post('logout')
    logout(@Res({ passthrough: true }) res: Response) {
        return this.authService.logout(res);
    }
}