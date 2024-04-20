import { NestFactory } from "@nestjs/core";
import { useContainer } from "class-validator";
import { json, urlencoded } from "express";
import { PORT } from "./configs/env-config";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ValidationConfig } from "./utils/pipes/validation.pipe";
import { ResponseTransformInterceptor } from "./utils/interceptors/response.transform.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseTransformInterceptor());
  app.useGlobalPipes(new ValidationPipe(ValidationConfig));
  app.enableCors();
  app.use(json({ limit: "50mb" }));

  app.use(urlencoded({ limit: "50mb", extended: true }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = PORT || 8000;

  await app.listen(port);

  return port;
}

bootstrap().then((port) => console.log(`App successfully started on port ${port} !`));
