import { lazy } from "react";

//Рабочая модель
// export const ProfilePageAsync = lazy(() => import("./MainPage"));

// для проверки индикатора загрузки
export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import("./ProfilePage")), 1500);
    })
);
