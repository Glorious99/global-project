import { Comment } from "../../model/types/comment";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentList.module.scss";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames("", {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }
  return (
    <div className={classNames("", {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            className={cls.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t("Комменатарии отсутствуют")} />
      )}
    </div>
  );
});