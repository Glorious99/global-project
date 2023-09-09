import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../Button/Button";
import cls from "./Code.module.scss";
import CopyIcon from "shared/assets/icons/Copy.svg";

interface CodeProps {
  text: string;
  className?: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    //pre тег для сохранения пробелов в коде
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
