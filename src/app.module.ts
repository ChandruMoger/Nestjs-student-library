import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    LessonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nextjs_graphql-_ibrary'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
