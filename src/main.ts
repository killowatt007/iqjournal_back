import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.use(cookieParser())
  app.enableCors({
    origin: ['http://localhost:3001', 'http://45.89.190.253:3001'],
    credentials: true, // for cookie
    exposedHeaders: 'set-cookie'
  })

  await app.listen(3000);
}
bootstrap();
