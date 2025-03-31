import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';

const httpsOptions = {
  key: fs.readFileSync('./src/cert/key.pem'),
  cert: fs.readFileSync('./src/cert/cert.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.init();
  app.enableCors({
    origin: 'https://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
  // const configService = app.get(ConfigService);
  // await app.listen(configService.get('PORT') as number);
}
bootstrap();
