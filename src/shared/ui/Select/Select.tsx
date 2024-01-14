import { ChangeEvent, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, readonly, value, onChange } = props;

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T); // if (onChange) {onChange?.(e.target.value)}
  };
  const mods: Mods = {};

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        onChange={onChangeHandler}
        disabled={readonly}
        value={value}
        className={cls.select}
      >
        {optionsList}
      </select>
    </div>
  );
};
