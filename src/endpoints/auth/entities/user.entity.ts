import * as bcrypt from 'bcrypt';
import { IsArray } from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';
import { Product } from '../../products/entities';
import { IsGlobalString } from '../decorators';

@Entity({ name: 'users' })
export class Users extends GlobalEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;
    
    @Column('text')
    firstname: string;

    @Column('text')
    lastname: string;

    @Column('bool', { default: true })
    isActive: boolean;
    
    @Column('text', { default: 'default.png' })
    avatar: string;

    @Column('bool', { default: true })
    isAuthenticated:boolean;

    @IsGlobalString({ each: true })
    @IsArray()
    @Column('text', { array: true })
    roles: string[];

    @OneToMany( () => Product, ( product ) => product.user )
    products: Product;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();  
        this.password = bcrypt.hashSync( this.password, 10 )
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }

}
