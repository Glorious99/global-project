import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/items";
import cls from "./SideBarItem.module.scss";

interface SideBarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.items, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
