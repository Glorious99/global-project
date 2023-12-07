import { lazy } from "react";

//Рабочая модель
// export const ArticleDetailsPageAsync = lazy(
//   () => import("./ArticleDetailsPage")
// );

// для проверки индикатора загрузки
export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./ArticleDetailsPage")), 400);
    })
);
