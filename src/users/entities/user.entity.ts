import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';
import { Optional } from 'sequelize/dist';
import { BaseUser } from '../interfaces/base-user.entity';

interface UserCreationAttributes extends Optional<BaseUser, "id"> {}

@Table
export class User extends Model<BaseUser, UserCreationAttributes>{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    first_name: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    last_name: string;

    @Column({type: DataType.STRING, allowNull: false})
    avatar: string;
}
