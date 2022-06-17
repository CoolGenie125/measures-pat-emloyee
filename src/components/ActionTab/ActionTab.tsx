/** @format */

import clsx from "clsx";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";
import { useState } from "react";
import { useStyles } from "./ActionTabStyles";

interface ActionTabProps {
  className?: any;
  add?: boolean;
  data: any;
  action: (e: string) => void;
  select: string;
  addEvent?: (e: any) => void;
}

export default function ActionTab({
  className,
  add,
  data,
  action,
  select,
  addEvent,
}: ActionTabProps) {
  const classes = useStyles();
  const [confirmStatus, setConfirmStatus] = useState(false);
  const [addItemStatus, setAddItemStatus] = useState(false);

  const handleAdd = () => {
    setConfirmStatus(true);
  };
  const handleEnter = (e: any) => {
    setAddItemStatus(false);
    if (addEvent) addEvent(e);
  };

  const handleConfirmModalClose = () => {
    setConfirmStatus(false);
  };

  const handleConfirmAction = () => {
    setAddItemStatus(true);
    setConfirmStatus(false);
  };

  return (
    <div className={clsx(classes.root, className)}>
      {data?.map((item: any, key: any) => {
        return (
          <div
            className={select === item ? classes.activeItem : classes.item}
            key={key}
            onClick={() => action(item)}>
            {item}
          </div>
        );
      })}
      {add ? (
        <div className={classes.tabAdd}>
          {addItemStatus ? (
            <input
              className={classes.tabInput}
              onKeyPress={(e) => e.key === "Enter" && handleEnter(e)}
            />
          ) : (
            <i className='far fa-plus' onClick={handleAdd}></i>
          )}
        </div>
      ) : (
        <></>
      )}
      <ConfirmModal
        title='カテゴリを追加'
        description='カテゴリを追加しますか？'
        show={confirmStatus}
        onClose={handleConfirmModalClose}
        action={handleConfirmAction}
      />
    </div>
  );
}
