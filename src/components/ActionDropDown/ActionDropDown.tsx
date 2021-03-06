/** @format */

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./ActionDropDownStyles";

interface ActionDropDownProps {
  children: React.ReactNode;
  createCategory?: React.ReactNode;
  inputData: any;
  action: (e: any) => void;
  className?: any;
  editDisable?: boolean;
  onTrash?: (e: any) => void;
  onEdit?: (e: any) => void;
}

export default function ActionDropDown({
  children,
  inputData,
  action,
  className,
  createCategory,
  editDisable,
  onTrash,
  onEdit,
}: ActionDropDownProps) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const [select, setSelect] = useState("");

  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef.current !== undefined && rootRef.current !== null) {
      setTop(rootRef.current.offsetHeight);
    }
  }, [rootRef]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (dropdownRef && dropdownRef.current) {
        const root: any = dropdownRef.current;
        if (root.contains(e.target)) {
        } else {
          show && setShow(false);
        }
      }
    }
  }, [dropdownRef, show]);

  const handleSelect = (e: any) => {
    action(e);
    setSelect(e);
    setShow(false);
  };

  const handleEdit = (e: any) => {
    onEdit !== undefined && onEdit(e);
  };

  const handleTrash = (e: any) => {
    onTrash !== undefined && onTrash(e);
  };
  return (
    <div className={clsx(classes.root, className)} ref={rootRef}>
      <div className={classes.children} onClick={() => setShow(true)}>
        {children}
      </div>
      <div
        ref={dropdownRef}
        style={
          show
            ? {
                position: "absolute",
                top: top,
                right: 0,
                minWidth: "200px",
                background: "#dbb694",
                borderRadius: "15px",
                zIndex: 10,
                padding: "10px 0",
              }
            : {
                display: "none",
              }
        }>
        {inputData?.map((item: any, key: any) => {
          return (
            <div
              className={
                select === item
                  ? classes.activeDropDownItem
                  : classes.dropDownItem
              }
              key={key}
              onClick={() => handleSelect(item)}>
              {item?.cat_name}
              {editDisable ? (
                <></>
              ) : (
                <div id='edit' className={classes.editRoot}>
                  <i
                    className='fas fa-tools'
                    onClick={() => handleEdit(item)}></i>
                  <i
                    className='fal fa-trash-alt'
                    onClick={() => handleTrash(item)}></i>
                </div>
              )}
            </div>
          );
        })}
        {createCategory}
      </div>
    </div>
  );
}
