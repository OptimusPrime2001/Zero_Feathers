import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ANh nho em nhieu';
  }
  getTest(): string {
    return 'Test from sweetheart';
  }
}
