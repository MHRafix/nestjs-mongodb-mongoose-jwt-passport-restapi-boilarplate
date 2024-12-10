import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVocabularyDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  word: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  meaning: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pronunciation: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  whenToSay: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lessonNo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adminEmail: string;
}
