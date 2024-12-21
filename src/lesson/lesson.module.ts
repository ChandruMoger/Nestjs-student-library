import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonResolver } from './lesson.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from './lesson.schema';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forFeature([{ name: 'Lesson', schema: LessonSchema }]),
  ],
  providers: [LessonService, LessonResolver],
})
export class LessonModule {}
