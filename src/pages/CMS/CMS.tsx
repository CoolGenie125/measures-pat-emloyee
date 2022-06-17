/** @format */

import ActionTab from "components/ActionTab/ActionTab";
import { useState } from "react";
import { useStyles } from "./CMSStyles";
import { CompanyCMS } from "./CompanyCMS/CompanyCMS";
import { PersonalCMS } from "./PersonalCMS/PersonalCMS";

export const CMS = () => {
  const classes = useStyles();

  //---------------top-tab--------------------------
  const topHeader: any = ["会社向けサービス", "個人向けサービス"];
  const [selectTopTab, setSelectTopTab] = useState<string>(topHeader[0]);
  const handleTopTab = (e: string) => {
    setSelectTopTab(e);
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
        {selectTopTab === topHeader[0] ? <CompanyCMS /> : <PersonalCMS />}
      </div>
    </div>
  );
};
