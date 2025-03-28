import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'You look so beautifull in white';
  }
  getTest(): string {
    return 'Test from sweetheart';
  }
}
