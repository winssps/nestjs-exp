import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置swagger文档
  const config = new DocumentBuilder()
    .setTitle('Mall service')
    .setDescription('The mall API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/doc', app, document, {
    // customCssUrl: '/css/theme-outline.css',
  });
  await app.listen(3001);
}
bootstrap();
