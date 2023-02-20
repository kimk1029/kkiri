import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { CommonService } from './common/common.service';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { CategoryModule } from './category/category.module';
import { ReplyModule } from './reply/reply.module';
import { BoardModule } from './board/board.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        //const dbType = config.get('DB_TYPE');
        const dbType: string = process.env.DB_TYPE;
        console.log("appModule");
        console.log(dbType);
        const option = {
          database: config.get('DB_DATABASE'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: Boolean(config.get('DB_SYNC')),
          logging: Boolean(config.get('DB_LOG')),
        };
        switch (dbType) {
          case 'sqlite':
            return { ...option, type: 'sqlite' };
          case 'postgres':
            return {
              ...option,
              type: 'postgres',
              host: config.get('DB_HOST'),
              port: +config.get('DB_PORT'),
              username: config.get('DB_USERNAME'),
              password: config.get('DB_PASSWORD'),
            };
          default:
            throw new Error('DB_TYPE not matched.');
        }
      },
      inject: [ConfigService],
    }),
    UsersModule,
    CommonModule,
    AuthModule,
    EmailModule,
    BoardModule,
    CategoryModule,
    ReplyModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, CommonService],
})
export class AppModule {}
