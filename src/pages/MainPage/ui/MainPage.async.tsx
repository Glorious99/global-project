import { lazy } from "react";

//Рабочая модель
export const MainPageAsync = lazy(() => import("./MainPage"));

// для проверки индикатора загрузки
// export const MainPageAsync = lazy(
//   () =>
//     new Promise((resolve) => {
//       //@ts-ignore
//       setTimeout(() => resolve(import("./MainPage")), 1500);
//     })
// );
