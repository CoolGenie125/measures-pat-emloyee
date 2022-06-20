import { useStyles } from "./ConfirmModalStyle";
import { useState, useEffect, useRef } from "react";
import ActionButton from "components/ActionButton/ActionButton";

interface ConfirmModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string;
  action: ()=> void;
}
export default function ConfirmModal({
  show,
  onClose,
  title,
  description,
  action,
}: ConfirmModalProps) {
  const classes = useStyles();

  const [showStatus, setShowStatus] = useState(show);

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
          <div className={classes.title}>{title}</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>{description}</div>
          </div>
          <div className={classes.btnContainer}>
            <ActionButton
              content='キャンセル'
              className={classes.cancelBtn}
              action={onClose}
            />
            <ActionButton
              content='確認'
              type='dark'
              className={classes.confirmBtn}
              action={action}
            />
          </div>
        </div>
      </div>
    </>
  );
}
