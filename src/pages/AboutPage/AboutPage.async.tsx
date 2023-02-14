import { lazy } from "react";

//Рабочая модель
// export const AboutPageAsync = lazy(() => import("./AboutPage"));

// для проверки индикатора загрузки
export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
