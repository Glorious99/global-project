//Поля, которые будет возвращать бекенд
export interface User {
  id: string;
  username: string;
}

//Если есть какие-то данные, то пользователь авторизован
export interface UserSchema {
  authData?: User;
}
