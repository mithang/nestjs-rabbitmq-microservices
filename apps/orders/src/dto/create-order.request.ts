import {
  IsNotEmpty,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderRequest {
  @ApiProperty({
    example: 'product a',
    description: 'The name of the customer',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 10000, description: 'The price of the customer' })
  @IsPositive()
  price: number;

  @ApiProperty({
    example: '0934242422',
    description: 'The phone of the customer',
  })
  // @IsPhoneNumber('US')
  phoneNumber: string;
}
