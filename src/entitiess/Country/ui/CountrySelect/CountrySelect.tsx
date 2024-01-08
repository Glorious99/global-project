import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraina, content: Country.Ukraina },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, readonly, onChange } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      value={value}
      defaultValue={t("Укажите страну")}
      label={t("Укажите страну")}
      items={options}
      onChange={onChangeHandler}
      className={className}
      readonly={readonly}
      direction="top right"
    />
  );
});
