import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { PageLoader } from "widgets/PageLoader/PageLoader";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
