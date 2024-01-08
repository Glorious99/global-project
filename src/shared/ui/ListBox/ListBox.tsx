import { ForwardedRef, Fragment, ReactNode, forwardRef } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import { Button } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ListBox.module.scss";
import { HStack } from "../Stack";
import { DropdownDirection } from "shared/types/ui";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

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
  "bottom left": cls.optionsBottomLeft,
  "bottom right": cls.optionsBottomRight,
  "top left": cls.optionsTopLeft,
  "top right": cls.optionsTopRight,
};

export const ListBox = forwardRef(
  (props: ListBoxProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      items,
      className,
      defaultValue,
      onChange,
      value,
      readonly,
      direction = "bottom right",
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
          <HListbox.Button as={Fragment}>
            <div ref={ref} className={cls.trigger}>
              <Button disabled={readonly}>{value ?? defaultValue}</Button>
            </div>
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
);
