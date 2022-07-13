import ActionTable from "components/Table/ActionTable";
import {
  categoryList,
  cmsListArray,
  largeCategoryList,
  smallCategoryList,
} from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddServiceModal from "./Components/AddServiceModal/AddServiceModal";
import TableContent from "./Components/CMSTableContent/TableContent";
import { useStyles } from "./CMSStyles";
import AddLargeCategoryModal from "./Components/AddLargeCategoryModal/AddLargeCategoryModal";
import AddSmallCategoryModal from "./Components/AddSmallCategoryModal/AddSmallCategoryModal";
import ActionDropDown from "components/ActionDropDown/ActionDropDown";

export const CMS = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>(categoryList[0]);
  const [largeCategory, setLargeCategory] = useState<string>(
    largeCategoryList[0]
  );
  const [smallCategory, setSmallCategory] = useState<string>(
    smallCategoryList[0]
  );

  //-------------category add modal function---------------
  const [smallModal, setSmallModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);

  const handleSmallModalClose = () => {
    setSmallModal(false);
  };

  const handleLargeModalClose = () => {
    setLargeModal(false);
  };

  const handleSmallModalOpen = () => {
    setSmallModal(true);
  };
  const handleLargeModalOpen = () => {
    setLargeModal(true);
  };

  const handleAddLargeCategory = (e: any) => {
    console.log("add large category : ", e);
  };

  const handleAddSmallCategory = (e: any) => {
    console.log("add small category : ", e);
  };

  const tableHeader = ["No", "カテゴリー", "価格情報", "説明", "アクション"];

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

  const handleCategory = (e: any) => {
    setCategory(e);
  };

  const handleLargeCategory = (e: any) => {
    setLargeCategory(e);
  };

  const handleSmallCategory = (e: any) => {
    setSmallCategory(e);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>サービス一覧</div>
        <div className={classes.tableTool}>
          <div className={classes.addBtn} onClick={() => setAddStatus(true)}>
            サービス追加
            <i className='fas fa-plus'></i>
          </div>
        </div>
        <div className={classes.categoryRoot}>
          <ActionDropDown inputData={categoryList} action={handleCategory}>
            <div className={classes.category}>{category}</div>
          </ActionDropDown>
          <ActionDropDown
            inputData={largeCategoryList}
            action={handleLargeCategory}
            createCategory={
              <div
                className={classes.addCategory}
                onClick={handleLargeModalOpen}>
                <i className='fas fa-plus'></i>
              </div>
            }>
            <div className={classes.category}>{largeCategory}</div>
          </ActionDropDown>
          <ActionDropDown
            inputData={smallCategoryList}
            action={handleSmallCategory}
            createCategory={
              <div
                className={classes.addCategory}
                onClick={handleSmallModalOpen}>
                <i className='fas fa-plus'></i>
              </div>
            }>
            <div className={classes.category}>{smallCategory}</div>
          </ActionDropDown>
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
        <AddLargeCategoryModal
          show={largeModal}
          onClose={handleLargeModalClose}
          action={(e) => handleAddLargeCategory(e)}
        />
        <AddSmallCategoryModal
          show={smallModal}
          onClose={handleSmallModalClose}
          action={(e) => handleAddSmallCategory(e)}
        />
      </div>
    </div>
  );
};
