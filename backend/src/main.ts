import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  // app.use(helmet);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe()); // error handler
  // app.setGlobalPrefix('api'); // URI Prefix
  app.enableVersioning({
    type: VersioningType.URI, // URI Versioning
  });
  const config = new DocumentBuilder()
    .setTitle('KKIRI example')
    .setDescription('The KKIRI API description')
    .setVersion('1.0')
    .addTag('KKIRI')
    //JWT 토큰 설정
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        name: 'JWT',
        in: 'header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
