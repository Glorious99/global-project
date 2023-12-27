import { getUserAuthData } from "entitiess/User";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./SideBarItem.module.scss";
import { SidebarItemType } from "../../model/types/sidebar";

interface SideBarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.items, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon className={cls.icon} />
      {!collapsed && <span className={cls.link}>{t(item.text)}</span>}
    </AppLink>
  );
});
