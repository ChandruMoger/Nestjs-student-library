import { Injectable } from '@nestjs/common';
import { Student } from './student.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: mongoose.Model<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student: Student = {
      firstName,
      lastName,
    };

    return await this.studentModel.create(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return await this.studentModel.find();
  }

  async getStudent(id: string): Promise<Student> {
    return await this.studentModel.findOne({ _id: id });
  }

  async findAllStudentsByIds(studentIds: string[]): Promise<Student[]> {
    return this.studentModel.find({
      _id: {
        $in: studentIds,
      },
    });
  }
}
