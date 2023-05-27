import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isAuthModal, setisAuthModal] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setisAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        repudiandae cupiditate illo eaque nesciunt ducimus, illum deleniti
        libero aliquid harum perferendis commodi, ut reiciendis nam consequuntur
        molestias, asperiores quisquam minus!
      </Modal>
    </div>
  );
}
