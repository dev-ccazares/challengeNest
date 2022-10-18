import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('DB_HOST')}:${configService.get('DB_PORT')}/${configService.get('DB_NAME')}`
      }),
      inject: [ConfigService],
    }),
    ClientsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
