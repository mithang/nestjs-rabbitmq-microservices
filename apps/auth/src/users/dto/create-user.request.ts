import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserRequest {
  @ApiProperty({
    example: 'test@yahoo.com',
    description: 'The email of the customer',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password 123',
    description: 'The password of the customer',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
