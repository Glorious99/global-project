import { lazy } from "react";

//Рабочая модель
export const ArticleEditPageAsync = lazy(() => import("./ArticleEditPage"));

// для проверки индикатора загрузки
// export const ArticleEditPageAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       //@ts-ignore
//       setTimeout(() => resolve(import("./ArticleEditPage")), 400);
//     })
// );
