import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { connectDB } from './db';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    connectDB(),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
