import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';

export const connectDB = () => {
  const connectionObject: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    models: [User],
    autoLoadModels: true,
  };
  console.log('Connect with DB', connectionObject);
  return SequelizeModule.forRoot(connectionObject);
};
