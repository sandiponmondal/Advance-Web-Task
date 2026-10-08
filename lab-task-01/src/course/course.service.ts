import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

      getAllCourses(): string {
    return 'Get All Courses - from Service';
  }
}
