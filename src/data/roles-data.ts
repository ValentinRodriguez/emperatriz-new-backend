import { ValidRoles } from "../endpoints/auth/interfaces";
import { Programs } from "../endpoints/modules/dto/create-module.dto";
import { modulesData } from "./modules-data";

const roles = modulesData;

const result = roles.map(role => (
    {
        module: { label: role.module, write: true, read: true },
        programs: role.programs.map((program:Programs) => ({ 
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
        module: { label: ValidRoles.ADMIN, write: true, read: true },
        programs: []
    },
    {
        module: { label: ValidRoles.SUPER_ADMIN, write: true, read: true },
        programs: []
    },
    {
        module: { label: ValidRoles.USER, write: true, read: true },
        programs: []
    },
]

const resultUserRoles = result.concat(userRoles);
console.log(resultUserRoles);

export const RolesData: any[] = [
    
    {
        roles: resultUserRoles
    }        
        
]