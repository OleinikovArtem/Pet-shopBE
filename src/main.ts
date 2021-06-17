import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { User } from './models/user.model';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CRM IT company')
    .setDescription('The CRM IT company API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT);
  console.log('\x1b[36m%s\x1b[0m', `Server started: http://localhost:${PORT}`);
}
bootstrap();
