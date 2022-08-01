import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities';
import { GlobalEntity } from '../../../common/entity/entity';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class UserEntity extends GlobalEntity{
    
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

    @Column('text', { array: true, default: ['user'] })
    roles: string[];

    @OneToMany(
        () => Product,
        ( product ) => product.user
    )
    product: Product;


    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
        console.log(this.password);        
        this.password = bcrypt.hashSync( this.password, 10 )
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }

}
