import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VocabularyDocument = Vocabulary & Document;

@Schema({ timestamps: true })
export class Vocabulary {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  meaning: string;

  @Prop({ required: true })
  pronunciation: string;

  @Prop({ required: true })
  whenToSay: string;

  @Prop({ required: true })
  lessonNo: string;

  @Prop({ required: true })
  adminEmail: string;
}

export const VocabularySchema = SchemaFactory.createForClass(Vocabulary);
