export interface BaseUser {
    name: string,
    position: string,
    office: string,
    age: string,
    start_date: string,
    salary: string

}

import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class User extends Model {
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    position: string;

    @Column
    office: string;

    @Column
    age: string;

    @Column
    start_date: string;

    @Column
    salary: string;

}
