/** @format */

import ActionTab from "components/ActionTab/ActionTab";
import { useState } from "react";
import { useStyles } from "./CMSStyles";

export const CMS = () => {
  const classes = useStyles();

  //---------------top-tab--------------------------
  const topHeader: any = ["個人向けサービス", "会社向けサービス"];
  const [selectTopTab, setSelectTopTab] = useState<string>(topHeader[0]);
  const handleTopTab = (e: string) => {
    setSelectTopTab(e);
  };

  //----------------middle-tab----------------------
  const tabdata: any = ["builder", "marketplace", "Dex"];
  const [allTabData, setAllTabData] = useState<any>(tabdata);
  const [selectTab, setSelectTab] = useState<string>(tabdata[0]);

  const handleTab = (e: string) => {
    setSelectTab(e);
  };

  const handleNewItem = (e: any) => {
    let newInputItem: string[] = [];
    if (e.target.value !== "") {
      if (allTabData === undefined || allTabData?.length === 0) {
        newInputItem.push(e.target.value);
      } else {
        if (allTabData.includes(e.target.value)) {
          newInputItem = newInputItem.concat(allTabData);
        } else {
          newInputItem = newInputItem.concat(allTabData, e.target.value);
        }
      }
      setAllTabData(newInputItem);
    }
  };

  return (
    <div className={classes.root}>
      <ActionTab
        className={classes.topTab}
        data={topHeader}
        action={(e) => handleTopTab(e)}
        select={selectTopTab}
      />
      <div className={classes.container}>
        <ActionTab
          data={allTabData}
          className={classes.middleTab}
          action={(e) => handleTab(e)}
          select={selectTab}
          addEvent={handleNewItem}
          add
        />
      </div>
    </div>
  );
};
