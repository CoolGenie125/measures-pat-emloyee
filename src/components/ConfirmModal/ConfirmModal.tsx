/** @format */

import { useStyles } from "./ConfirmModalStyle";
import { useState, useEffect, useRef } from "react";
import ActionButton from "components/ActionButton/ActionButton";
interface Props {
  show: boolean;
  onClose: () => void;
}
export default function ConfirmModal({ show, onClose }: Props) {
  const classes = useStyles();

  const [showStatus, setShowStatus] = useState(show);

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  console.log("content ref : ", contentRef);

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
          <div className={classes.title}>Delete Item</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              Are you sure you want to delete this Item. This operation is not
              reversible
            </div>
          </div>
          <div className={classes.btnContainer}>
            <ActionButton
              content='cancel'
              className={classes.cancelBtn}
              action={onClose}
            />
            <ActionButton
              content='confirm'
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
