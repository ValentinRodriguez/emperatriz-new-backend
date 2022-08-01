import { ValidRoles } from "../endpoints/auth/interfaces/valid-roles";

export const usersData: any[] = [
    {
        email: 'valrod@gmail.com',
        firstname: 'super',
        lastname:'admin',
        password: 'Si22500192319.',
        roles: [ValidRoles.SUPER_ADMIN],
        avatar: 'default.png'
    }
]