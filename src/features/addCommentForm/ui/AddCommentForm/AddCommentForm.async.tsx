import { lazy } from "react";
// import { AddCommentFormProps } from "./AddCommentForm";

//Рабочая модель
export const AddCommentFormAsync = lazy(() => import("./AddCommentForm"));

// для проверки индикатора загрузки
// export const AddCommentFormAsync = lazy<FunctionComponent<AddCommentFormProps>>(
//   () =>
//     new Promise((resolve) => {
//       //@ts-ignore
//       setTimeout(() => resolve(import("./AddCommentForm")), 1500);
//     })
// );

// Используем ленивую звгрузку lazy для
//1. Страницы
//2. Модалки/шторы/тултипы
//3. Блоки, которые не попадают во вьюпорт экрана
