import { Theme } from "app/providers/ThemeProvider";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

//Компонент для тестирования ErrorBoundary
export function BugButton() {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error("I crashed!");
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
      theme={ButtonTheme.BACKGROUND}
      style={{ border: "solid" }}
    >
      {t("кинуть ошибку")}
    </Button>
  );
}
