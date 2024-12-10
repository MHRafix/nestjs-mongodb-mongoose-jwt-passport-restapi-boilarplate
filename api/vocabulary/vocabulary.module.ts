import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vocabulary, VocabularySchema } from './entities/vocabulary.entity';
import { VocabularyController } from './vocabulary.controller';
import { VocabularyService } from './vocabulary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vocabulary.name, schema: VocabularySchema },
    ]),
  ],
  controllers: [VocabularyController],
  providers: [VocabularyService],
})
export class VocabularyModule {}
