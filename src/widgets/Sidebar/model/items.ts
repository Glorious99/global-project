import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import MainIcon from "shared/assets/icons/MainIcon.svg";
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg";
import ArticleIcon from "shared/assets/icons/Article.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Профиль",
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: "Статьи",
    authOnly: true,
  },
];
