import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // DTO 클래스에 정의된 속성만 요청 객체에 남기고, 나머지 속성들은 자동으로 제거
      whitelist: true,
      // DTO에 정의되지 않은 속성이 요청에 포함된 경우, 요청을 거부하고 예외를 발생
      forbidNonWhitelisted: true,
      // 요청 객체를 자동으로 DTO 클래스의 인스턴스로 변환
      transform: true,
    }),
  );
  await app.listen(3000);

  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }
}
bootstrap();
