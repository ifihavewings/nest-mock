import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({
    description: 'The name of the Cat',
    example: 'Tom',
  })
  name: string;

  @ApiProperty({
    description: 'The age of the Cat',
    example: 3,
  })
  age: number;

  @ApiProperty({
    description: 'The breed of the Cat',
    example: 'Siamese',
  })
  breed: string;
}
