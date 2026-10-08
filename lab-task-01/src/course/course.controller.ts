import { Controller,Get,Post,Param} from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses(): string {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string): string {
    return this.courseService.getCourseById(id);
  }


  @Post()
  createCourse(): string {
    return this.courseService.createCourse();
  }

}
