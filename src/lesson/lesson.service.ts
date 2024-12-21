import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './lesson.schema';
import mongoose from 'mongoose';
import { CreateLessonInput } from './create-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: mongoose.Model<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson: Lesson = {
      name,
      startDate,
      endDate,
      students: [...students],
    };

    return await this.lessonModel.create(lesson);
  }

  async getLessonById(id: string): Promise<Lesson> {
    return await this.lessonModel.findOne({ _id: id });
  }

  async getAllLessons(): Promise<Lesson[]> {
    return await this.lessonModel.find();
  }

  async assignAllStudentsToLesson(
    id: string,
    studentIds: string[],
  ): Promise<Lesson> {
    return await this.lessonModel.findByIdAndUpdate(
      { _id: id },
      {
        $push: { students: [...studentIds] },
      },
      { new: true },
    );
  }
}
