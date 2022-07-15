import { useStyles } from "./UsageCardEditModalStyles";
import { useState, useEffect, useRef } from "react";
import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";

interface UsageCardEditModalProps {
  show: boolean;
  onClose: () => void;
  action: (e: any) => void;
}
export default function UsageCardEditModal({
  show,
  onClose,
  action,
}: UsageCardEditModalProps) {
  const classes = useStyles();

  const [showStatus, setShowStatus] = useState(show);
  const [title, setTitle] = useState("How to make service");
  const [des, setDes] = useState("'Please read guide more");

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTitle = (e: any) => {
    setTitle(e);
  };

  const handleDes = (e: any) => {
    setDes(e.target.value);
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
          <div className={classes.title}>使用法編集</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              以下の入力を正確に記入してください
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>題名</div>
              <ActionInput value={title} action={(e) => handleTitle(e)} />
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>答え</div>
              <textarea
                className={classes.formTextarea}
                value={des}
                onChange={(e) => handleDes(e)}
              />
            </div>
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
              action={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
}
