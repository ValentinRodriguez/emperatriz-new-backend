import { ValidRoles } from "../endpoints/auth/interfaces";
import { Items } from "../endpoints/modules/dto/create-module.dto";
import { modulesData } from "./modules-data";

const roles = modulesData;

const result = roles.map(role => (
    {
        label: { label: role.module, icon:role.icon,  write: true, read: true },
        items: role.items.map((program:Items) => ({ 
            label: program.label,
            icon: program.icon,
            routerLink: program.routerLink, 
            write: true, 
            read: true }
        )),
    }
))

const userRoles = [
    {
        label: { label: ValidRoles.ADMIN, icon:'', write: true, read: true },
        items: []
    },
    {
        label: { label: ValidRoles.SUPER_ADMIN, icon:'', write: true, read: true },
        items: []
    },
    {
        label: { label: ValidRoles.USER, icon:'', write: true, read: true },
        items: []
    },
]

export const resultUserRoles = result.concat(userRoles);

// export const RolesData: any[] = resultUserRoles