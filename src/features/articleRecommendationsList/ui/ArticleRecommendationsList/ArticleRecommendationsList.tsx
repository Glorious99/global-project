import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextSize } from "shared/ui/Text/Text";
import { ArticleList, ArticleView } from "entitiess/Article";
import { VStack } from "shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";
import cls from "./ArticleRecommendationsList.module.scss";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error) {
      return null;
    }

    return (
      <VStack gap="8" className={classNames("", {}, [className])}>
        <Text
          size={TextSize.L}
          title={t("Рекомендуем")}
          className={cls.commentTitle}
        />
        <ArticleList
          articles={articles}
          target="_blank"
          view={ArticleView.RECOMMENDATIONS}
          className={cls.recommendations}
        />
      </VStack>
    );
  }
);
