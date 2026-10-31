import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {  constructor(
   
    @Inject(forwardRef(() => EnrollmentService))
       private readonly enrollmentService: any,
  ) {}


  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent successfully',
      student: studentName,
      notification: message,
    };
  }


  checkEnrollmentAndNotify(studentName: string, courseId: string) {


    const enrollments = this.enrollmentService.getEnrollments();

    return {
      message: 'Enrollment checked successfully',
      student: studentName,
      courseId: courseId,
      enrollmentData: enrollments,
    };
  }}
