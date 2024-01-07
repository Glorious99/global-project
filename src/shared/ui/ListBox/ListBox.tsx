import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { Button } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ListBox.module.scss";
import { HStack } from "../Stack";
import { Text, TextTheme } from "../Text/Text";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = "top" | "bottom";

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
  onChange: (value: string) => void;
}

const mapDirectionClasses: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
  const {
    items,
    className,
    defaultValue,
    onChange,
    value,
    readonly,
    direction = "bottom",
    label,
  } = props;

  const optionsClasses = [mapDirectionClasses[direction]];

  return (
    <HStack gap="4" align="center">
      {label && (
        <span className={readonly ? cls.disabled : ""}>{`${label}>`}</span>
      )}

      <HListbox
        disabled={readonly}
        as={"div"}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>

        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [cls.active]: active,
                      [cls.disabled]: item.disabled,
                    },
                    []
                  )}
                >
                  {selected && ">"}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
