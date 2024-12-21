import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';
import { CreateLessonInput } from './create-lesson.input';
import { AssignStudentsToLessonInput } from './assign-students.input';
import { Lesson } from './lesson.schema';
import { StudentService } from 'src/student/student.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}
  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Query(() => [LessonType])
  getAllLessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  async assignStudentsToLessonInput(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { id, studentIds } = assignStudentsToLessonInput;
    return await this.lessonService.assignAllStudentsToLesson(id, studentIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return await this.studentService.findAllStudentsByIds(lesson.students);
  }
}
