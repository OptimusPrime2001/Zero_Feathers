import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

const httpsOptions = {
  key: fs.readFileSync('./secrets/dainel_le-key.pem'),
  cert: fs.readFileSync('./secrets/dainel_le.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.init();
  await app.listen(process.env.PORT || 3000);
  // const configService = app.get(ConfigService);
  // await app.listen(configService.get('PORT') as number);
}
bootstrap();
