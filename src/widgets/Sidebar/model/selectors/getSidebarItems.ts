import { getUserAuthData } from "entitiess/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import MainIcon from "shared/assets/icons/MainIcon.svg";
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg";
import ArticleIcon from "shared/assets/icons/Article.svg";
import { SidebarItemType } from "../types/sidebar";
import { createSelector } from "@reduxjs/toolkit";

export const getSidebarItems = createSelector(getUserAuthData, (userDate) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: "Главная",
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: "О сайте",
    },
  ];
  if (userDate) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userDate.id,
        Icon: ProfileIcon,
        text: "Профиль",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: "Статьи",
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
