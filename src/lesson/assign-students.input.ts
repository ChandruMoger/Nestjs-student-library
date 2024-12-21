import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AssignStudentsToLessonInput {
  @Field(() => ID)
  id: string;

  @Field(() => [ID])
  studentIds: string[];
}
