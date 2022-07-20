/** @format */

import { useStyles } from "./EditLargeCategoryModalStyle";
import { useState, useEffect, useRef } from "react";
import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";

interface EditLargeCategoryModalProps {
  show: boolean;
  onClose: () => void;
  action: (e: any) => void;
}
export default function EditLargeCategoryModal({
  show,
  onClose,
  action,
}: EditLargeCategoryModalProps) {
  const classes = useStyles();

  const [showStatus, setShowStatus] = useState(show);
  const [confirmModal, setConfirmModal] = useState(false);
  const [category, setCategory] = useState("");

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  //--------------confirm modal function----------
  const handleConfirmModalClose = () => {
    setConfirmModal(false);
  };

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleNext = () => {
    setConfirmModal(true);
  };

  //---------------confirm action -------------
  const handleConfirm = () => {
    action(category);
    setConfirmModal(false);
    onClose();
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

  useEffect(() => {
    setShowStatus(show);
  }, [show]);

  return (
    <>
      <div
        className={showStatus ? classes.loaderWrapper : classes.displayNone}
        ref={rootRef}>
        <div className={classes.modalRoot} ref={contentRef}>
          <div className={classes.title}>大きなカテゴリを編集する</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              入力で変更される大きなカテゴリ名を正しく入力してください。
            </div>
            <ActionInput
              value={category}
              action={(e) => handleCategory(e)}
              placeholder='正しいラージカテゴリ名を入力してください'
            />
          </div>
          <div className={classes.btnContainer}>
            <ActionButton
              content='キャンセル'
              className={classes.cancelBtn}
              action={onClose}
            />
            <ActionButton
              content='追加'
              type='dark'
              className={classes.confirmBtn}
              action={handleNext}
            />
          </div>
        </div>
      </div>
      <ConfirmModal
        title='大規模なカテゴリの編集'
        description={`本当に大きな${category}カテゴリを編集しますか？`}
        show={confirmModal}
        onClose={handleConfirmModalClose}
        action={handleConfirm}
      />
    </>
  );
}
