import { lazy } from "react";

//Рабочая модель
// export const ArticlesPageAsync = lazy(() => import("./MainPage"));

// для проверки индикатора загрузки
export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./ArticleDetailsPage")), 1500);
    })
);
