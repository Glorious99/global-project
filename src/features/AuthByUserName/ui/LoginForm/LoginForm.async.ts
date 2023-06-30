import { FunctionComponent, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

//Рабочая модель
// export const AboutPageAsync = lazy(() => import("./AboutPage"));

// для проверки индикатора загрузки
export const LoginFormAsync = lazy<FunctionComponent<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./LoginForm")), 1500);
    })
);

// Используем ленивую звгрузку lazy для
//1. Страницы
//2. Модалки/шторы/тултипы
//3. Блоки, которые не попадают во вьюпорт экрана
