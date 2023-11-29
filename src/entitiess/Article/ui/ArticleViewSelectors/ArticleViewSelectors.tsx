import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleViewSelectors.module.scss";
import { ArticleView } from "entitiess/Article/model/types/article";
import ListIcon from "shared/assets/icons/list.svg";
import TiledIcon from "shared/assets/icons/tiled.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

interface ArticleViewSelectorsProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];
export const ArticleViewSelectors = memo((props: ArticleViewSelectorsProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelectors, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames("", {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
