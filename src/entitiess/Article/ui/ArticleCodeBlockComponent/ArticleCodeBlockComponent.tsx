import { ArticleCodeBlock } from "../../model/types/article";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleCodeBlockComponent.module.scss";
import { Code } from "shared/ui/Code/Code";

interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock;
  className?: string;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        <Code text={block.code} />
      </div>
    );
  }
);
