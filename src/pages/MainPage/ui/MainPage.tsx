import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";

function MainPage() {
  const { t } = useTranslation();

  return (
    <Page>
      <BugButton />
      {t("Главная страница")}
    </Page>
  );
}

export default MainPage;
