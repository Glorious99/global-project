import { lazy } from "react";

//Рабочая модель
export const ArticlesPageAsync = lazy(() => import("./ArticlesPage"));

// для проверки индикатора загрузки
// export const ArticlesPageAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       //@ts-ignore
//       setTimeout(() => resolve(import("./ArticlesPage")), 400);
//     })
// );
