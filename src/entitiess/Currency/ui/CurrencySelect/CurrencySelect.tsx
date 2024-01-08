import { Currency } from "../../model/types/currency";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, readonly, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <ListBox
      value={value}
      defaultValue={t("Укажите валюту")}
      label={t("Укажите валюту")}
      items={options}
      onChange={onChangeHandler}
      className={className}
      readonly={readonly}
      direction="top right"
    />
  );
});
