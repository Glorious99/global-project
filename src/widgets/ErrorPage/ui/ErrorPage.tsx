import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

export function ErrorPage({ className }: ErrorPageProps) {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button
        onClick={reloadPage}
        theme={ButtonTheme.BACKGROUND}
        style={{ border: "solid" }}
      >
        {t("Обновить страницу")}
      </Button>
    </div>
  );
}
