import ActionTable from "components/Table/ActionTable";
import { cmsListArray } from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddServiceModal from "../Components/AddServiceModal/AddServiceModal";
import CmsTab from "../Components/CmsTab/CmsTab";
import TableContent from "../Components/CMSTableContent/TableContent";
import { useStyles } from "./CompanyCMSStyle";

export const CompanyCMS = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const tableHeader = ["No", "Category", "Price", "Description", "Action"];

  //--------------add item modal function---------------------------
  const [addStatus, setAddStatus] = useState(false);

  const handleAddItem = (e: any) => {
    console.log("input value", e);
  };

  //---------------table pagination function-----------------
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const handlePgNum = (pgNum: number) => {
    setCurrentPage(pgNum);
  };

  const handlePgRows = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  //----------------middle-tab----------------------
  const tabdata: any = [
    "食事・美容",
    "ジム・マッサージ",
    "旅行・レジャー",
    "引越し",
    "家事・育児",
    "介護・福祉",
    "その他",
  ];
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
      <div className={classes.title}>会社向けサービス</div>
      <CmsTab
        className={classes.actionTab}
        data={allTabData}
        action={(e) => handleTab(e)}
        select={selectTab}
        addEvent={(e) => handleNewItem(e)}
      />
      <div className={classes.tableTool}>
        <div className={classes.addBtn} onClick={() => setAddStatus(true)}>
          サービス追加
          <i className='fas fa-plus'></i>
        </div>
      </div>

      <ActionTable
        className={classes.tableRoot}
        handlePgNum={handlePgNum}
        handlePgRows={handlePgRows}
        totalCnt={cmsListArray?.length}
        PgNum={currentPage}
        PgRows={perPage}
        tableContent={
          <TableContent
            rows={cmsListArray}
            pageNumber={currentPage}
            perPageNumber={perPage}
            columns={tableHeader}
          />
        }
      />
      <AddServiceModal
        show={addStatus}
        onClose={() => setAddStatus(false)}
        action={(e) => handleAddItem(e)}
      />
    </div>
  );
};
