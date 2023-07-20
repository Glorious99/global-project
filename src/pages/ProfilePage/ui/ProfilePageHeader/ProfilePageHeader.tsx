import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entitiess/Profile";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export function ProfilePageHeader(props: ProfilePageHeaderProps) {
  const { className } = props;
  const { t } = useTranslation("profile");
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  //useCallback, т.к. мы будем передавать ее аргументом,
  // и нам необходимо сохранить ссылку на эту фугкцию
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль   ‿︵‿ヽ(°□° )ノ︵‿︵")} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t("Сохранить")}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t("Отменить")}
          </Button>
        </>
      )}
    </div>
  );
}
