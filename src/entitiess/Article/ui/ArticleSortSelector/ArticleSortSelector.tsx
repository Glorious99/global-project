import { memo, useCallback, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { ArticleSortField } from "../../model/types/article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t]
  );
  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("дата создания"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("названию"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("просмотрам"),
      },
    ],
    [t]
  );
  //   const changeSortHandler = useCallback(
  //     (newSort: string) => {
  //       onChangeSort(newSort as ArticleSortField);
  //     },
  //     [onChangeSort]
  //   );
  //   const changeOrderHandler = useCallback(
  //     (newOrder: string) => {
  //       onChangeOrder(newOrder as SortOrder);
  //     },
  //     [onChangeOrder]
  //   );
  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label={t("Сортировать ПО")}
      />
      <Select
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t("по")}
        className={cls.order}
      />
    </div>
  );
});
