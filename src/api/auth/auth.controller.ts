import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ description: 'Signup api' })
  @Post('/signup')
  signUp(@Body() payload: SignUpDto) {
    return this.authService.signUp(payload);
  }

  @ApiOperation({ description: 'Signin api' })
  @Get('/signin')
  signIn(@Body() payload: SignInDto) {
    return this.authService.signIn(payload);
  }
}
