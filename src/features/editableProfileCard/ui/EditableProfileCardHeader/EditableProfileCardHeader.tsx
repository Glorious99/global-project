import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entitiess/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation("profile");
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
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
      <HStack max justify="between" className={classNames("", {}, [className])}>
        <Text title={t("Профиль   ‿︵‿ヽ(°□° )ノ︵‿︵")} />
        {canEdit && (
          <>
            {readonly ? (
              <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                {t("Редактировать")}
              </Button>
            ) : (
              <HStack gap="32">
                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                  {t("Сохранить")}
                </Button>
                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                  {t("Отменить")}
                </Button>
              </HStack>
            )}
          </>
        )}
      </HStack>
    );
  }
);
