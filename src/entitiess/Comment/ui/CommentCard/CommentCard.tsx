import { Comment } from "../../model/types/comment";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { HStack, VStack } from "shared/ui/Stack";

interface CommentCardProps {
  comment?: Comment;
  className?: string;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack
        max
        gap="8"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <HStack max align="center">
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </HStack>
        <Skeleton width={"100%"} height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text
          className={classNames(cls.username, {}, [])}
          title={comment.user.username}
        />
      </AppLink>

      <Text className={cls.text} text={comment.text} />
    </VStack>
  );
});
