import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
