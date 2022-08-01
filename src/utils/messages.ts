export enum Message {
    USER_NOT_FOUND = 'Usuario no encontrado',
    EMPLOYEE_NOT_FOUND = 'Empleado no encontrado',
    WRONG_CREDENTIALS = 'Credenciales incorrectas',
    EMAIL_IN_USE = 'Este correo ya esta registrado.',
    INVALID_FILE_JUST_IMAGE_IS_VALID = 'Formato de archivo incorrecto, solo se permiten imagenes',
    USER_CREATED = 'Usuario creado correctamente.',
    USER_UPDATED = 'Usuario actualizado correctamente.',
    USER_DELETED = 'Usuario eliminado correctamente.',
    REFRESH_TOKEN_INVALID = 'Token incorrecto'
}

export enum IsOk {
    OK = 'ok'
}

export enum Action {
    USER_LOGOUT = 'user [logout]'
}