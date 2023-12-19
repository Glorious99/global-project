import { lazy } from "react";

//Рабочая модель
export const AboutPageAsync = lazy(() => import("./AboutPage"));

// для проверки индикатора загрузки
// export const AboutPageAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       //@ts-ignore
//       setTimeout(() => resolve(import("./AboutPage")), 1500);
//     })
// );

// Используем ленивую звгрузку lazy для
//1. Страницы
//2. Модалки/шторы/тултипы
//3. Блоки, которые не попадают во вьюпорт экрана
