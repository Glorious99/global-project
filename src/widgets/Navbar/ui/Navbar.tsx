import { getUserAuthData, userActions } from "entitiess/User";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";
import { LoginModal } from "features/AuthByUserName";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthModal, setisAuthModal] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setisAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setisAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);
  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cls.appName}
          title={t("Glorious99")}
        />
        <AppLink
          className={cls.createBtn}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_create}
        >
          {t("Создать статью")}
        </AppLink>

        <Dropdown
          direction="bottom left"
          items={[
            { content: t("Профиль"), href: RoutePath.profile + authData.id },
            { content: t("Выйти"), onClick: onLogout },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
          className={cls.dropdown}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
