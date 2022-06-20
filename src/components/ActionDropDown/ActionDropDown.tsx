/** @format */

import { useEffect, useRef, useState } from "react";
import { useStyles } from "./ActionDropDownStyles";

interface ActionDropDownProps {
  children: React.ReactNode;
  inputData: any;
}

export default function ActionDropDown({
  children,
  inputData,
}: ActionDropDownProps) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const [select, setSelect] = useState(inputData[0]);

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
    setSelect(e);
    setShow(false);
  };

  return (
    <div className={classes.root} ref={rootRef}>
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
                minWidth: "150px",
                background: "#1A1F37",
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
              onClick={(e) => handleSelect(item)}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
