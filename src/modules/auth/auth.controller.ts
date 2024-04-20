import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { signInDto } from "./dto/sign-in.dto";
import { AuthGuard } from "./auth.guard";
import { AuthUser } from "src/utils/decorators/auth.user.decorator";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: signInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@AuthUser() user: any) {
    // Xử lý logic với thông tin của người dùng
    return user;
  }
}
