import { Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';

@Injectable()
export class EnrollmentService {
      constructor(
    private readonly courseService: CourseService,  ) {}

  getEnrollments() {
    return {
      message: 'All enrollments fetched',
      data: [],
    };
  }

  enrollStudent(studentName: string, courseId: string) {

    const course = this.courseService.getCourseById(courseId);
    return {
      message: 'Student enrolled successfully',
      student: studentName,
      course: course,
    
    };
  }
}
