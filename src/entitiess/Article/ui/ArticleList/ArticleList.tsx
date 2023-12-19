import { classNames } from "shared/lib/classNames/classNames";
import {
  FC,
  HTMLAttributeAnchorTarget,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from "react-virtuoso";
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from "shared/const/localstorage";
import { ArticlesPageFilters } from "pages/ArticlesPage";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;

  onLoadNextPage?: () => void;
}
const Header = () => <ArticlesPageFilters />;
const getSkeletonsFooter = () =>
  new Array(3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        className={cls.card}
        key={index}
        view={ArticleView.BIG}
      />
    ));

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
    onLoadNextPage,
  } = props;

  const { t } = useTranslation();
  const [selectedArticleId, setSelectedArticleId] = useState(0);
  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

  useEffect(() => {
    const paged =
      sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 0;

    setSelectedArticleId(+paged);

    // return () => sessionStorage.removeItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (view == ArticleView.SMALL) {
      timeoutId = setTimeout(() => {
        if (virtuosoGridRef.current) {
          virtuosoGridRef.current.scrollToIndex(selectedArticleId);
        }
      }, 100);
    }
    return () => clearTimeout(timeoutId);
  }, [selectedArticleId, view]);

  const renderArticleVirtuoso = (index: number, article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
      index={index}
    />
  );

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
    />
  );

  const Footer = memo(() => {
    if (isLoading) {
      return <div className={cls.skeleton}>{getSkeletonsFooter()}</div>;
    }
    return null;
  });

  const ItemContainerComp: FC<{
    height: number;
    width: number;
    index: number;
  }> = ({ index }) => (
    <div className={cls.ItemContainer}>
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    </div>
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t("Статьи не найдены")} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {view === ArticleView.BIG ? (
        <Virtuoso
          className={cls.virtuosoBig}
          style={{ height: "95%" }}
          data={articles}
          itemContent={renderArticleVirtuoso}
          endReached={onLoadNextPage}
          initialTopMostItemIndex={selectedArticleId}
          components={{ Header, Footer }}
        />
      ) : view === ArticleView.RECOMMENDATIONS ? (
        articles.map(renderArticle)
      ) : (
        <VirtuosoGrid
          ref={virtuosoGridRef}
          style={{ height: "95%" }}
          totalCount={articles.length}
          components={{ Header, ScrollSeekPlaceholder: ItemContainerComp }}
          endReached={onLoadNextPage}
          data={articles}
          itemContent={renderArticleVirtuoso}
          listClassName={cls.itemsWrapper}
          scrollSeekConfiguration={{
            enter: (velocity) => Math.abs(velocity) > 200,
            exit: (velocity) => Math.abs(velocity) < 30,
          }}
        />
      )}
    </div>
  );
});
