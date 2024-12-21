import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  students: string[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
