"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const common_module_1 = require("./common/common.module");
const common_service_1 = require("./common/common.service");
const auth_module_1 = require("./auth/auth.module");
const Joi = require("joi");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRATION_TIME: Joi.string().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => {
                    const dbType = process.env.DB_TYPE;
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
                            return Object.assign(Object.assign({}, option), { type: 'sqlite' });
                        case 'postgres':
                            return Object.assign(Object.assign({}, option), { type: 'postgres', host: config.get('DB_HOST'), port: +config.get('DB_PORT'), username: config.get('DB_USERNAME'), password: config.get('DB_PASSWORD') });
                        default:
                            throw new Error('DB_TYPE not matched.');
                    }
                },
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, common_service_1.CommonService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map