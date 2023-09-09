import { ArticleTextBlock } from "../../model/types/article";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleTextBlockComponent.module.scss";
import { Text } from "shared/ui/Text/Text";

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock;
  className?: string;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph, index) => (
          <Text key={index} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  }
);
