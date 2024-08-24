import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
  username: string;

  @ApiProperty({
    example: 'strongpassword',
    description: 'The password of the user',
  })
  password: string;
}

export class LoginDto {
  @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
  username: string;

  @ApiProperty({
    example: 'strongpassword',
    description: 'The password of the user',
  })
  password: string;
}
