import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { ArticleList, ArticleView } from "entitiess/Article";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList view={ArticleView.BIG} articles={[]} isLoading />
    </div>
  );
};

export default memo(ArticlesPage);
