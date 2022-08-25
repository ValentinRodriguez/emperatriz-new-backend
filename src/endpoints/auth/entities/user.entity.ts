import * as bcrypt from 'bcrypt';
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GlobalEntity } from '../../../common/entity/entity';
import { RoleEntity } from '../../../endpoints/roles/entities/role.entity';
import { Product } from '../../products/entities';

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

    @OneToOne(() => RoleEntity, (role) => role.user,{ eager: true, cascade: true }) 
    @JoinColumn()
    roles: RoleEntity

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
