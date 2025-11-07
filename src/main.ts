import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { tryAndCatch } from './try';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await tryAndCatch(() => app.listen(process.env.PORT ?? 3000))
}

bootstrap().then(() => {
  const feel = 'console loaded!'

  console.clear()
  console.info(feel)
}).catch(() => {})
