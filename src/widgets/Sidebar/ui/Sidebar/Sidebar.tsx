import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink.tsx/AppLink";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import MainIcon from "shared/assets/icons/MainIcon.svg";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [t] = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <div>
          <AppLink
            to={RoutePath.main}
            className={cls.item}
            theme={AppLinkTheme.SECONDARY}
          >
            <MainIcon className={cls.icon} />
            <span className={cls.link}>{t("Главная")}</span>
          </AppLink>
        </div>
        <div>
          <AppLink
            to={RoutePath.about}
            className={cls.item}
            theme={AppLinkTheme.SECONDARY}
          >
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>{t("О сайте")}</span>
          </AppLink>
        </div>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
}
