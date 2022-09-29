import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  //Before Swaagger Module
  app.setGlobalPrefix("api");

  const configs = new DocumentBuilder()
    .setTitle('Orders API')
    .setDescription('The Orders API of LMSoftware')
    .setVersion('1.0')
    // .addTag('cats')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    'JWT',)
    .build();


  const document = SwaggerModule.createDocument(app, configs);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(new ValidationPipe());
  
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
