import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
