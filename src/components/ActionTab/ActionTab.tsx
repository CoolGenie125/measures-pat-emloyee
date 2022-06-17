/** @format */

import clsx from "clsx";
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
  const [addStatus, setAddStatus] = useState(false);

  const handleAdd = () => {
    setAddStatus(true);
  };
  const handleEnter = (e: any) => {
    setAddStatus(false);
    if (addEvent) addEvent(e);
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
          {addStatus ? (
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
    </div>
  );
}
