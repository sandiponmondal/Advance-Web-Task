import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';
import { EnrollmentController } from './enrollment.controller.js';
import { CourseModule } from '../course/course.module.js';

@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  imports: [CourseModule], 
})
export class EnrollmentModule {}
