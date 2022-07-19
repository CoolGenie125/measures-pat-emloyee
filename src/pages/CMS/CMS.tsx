/** @format */

import ActionTable from "components/Table/ActionTable";
import { cmsListArray, firstCategoryList } from "config/constant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddServiceModal from "./Components/AddServiceModal/AddServiceModal";
import TableContent from "./Components/CMSTableContent/TableContent";
import { useStyles } from "./CMSStyles";
import AddLargeCategoryModal from "./Components/AddLargeCategoryModal/AddLargeCategoryModal";
import AddSmallCategoryModal from "./Components/AddSmallCategoryModal/AddSmallCategoryModal";
import ActionDropDown from "components/ActionDropDown/ActionDropDown";
import ActionInput from "components/ActionInput/ActionInput";
import { bigCategoryAPI, smallCategoryAPI } from "hook/category";

export const CMS = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const categoryList = [
    {
      cat1_id: firstCategoryList.company.id,
      cat_name: firstCategoryList.company.name,
    },
    {
      cat1_id: firstCategoryList.person.id,
      cat_name: firstCategoryList.person.name,
    },
  ];
  const [category, setCategory] = useState<string>(
    firstCategoryList.company.name
  );
  const [categoryParams, setCategoryParams] = useState(1);
  const [bigCategory, setBigCategory] = useState<string>("");
  const [bigCategoryParams, setBigCategoryParams] = useState(1);
  const [bigCategoryList, setBigCategoryList] = useState<any>();
  const [smallCategory, setSmallCategory] = useState<string>("");
  const [smallCategoryParams, setSmallCategoryParams] = useState(0);
  const [smallCategoryList, setSmallCategoryList] = useState<any>();

  const [sortHeader, setSortHeader] = useState("");

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
    const formData = new FormData();
    formData.append("cat1_id", categoryParams.toString());
    formData.append("cat2_id", bigCategoryParams.toString());
  };

  const handleAddSmallCategory = (e: any) => {
    console.log("add small category : ", e);
  };

  const tableHeader = [
    "No",
    "カテゴリー",
    "価格情報",
    "説明",
    "無効化を/有効化",
  ];

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
  //-----------category click function----------------
  const handleCategory = async (e: any) => {
    setCategory(e?.cat_name);
    setCategoryParams(e?.cat1_id);
    const bigCategoryRes = await bigCategoryAPI(e?.cat1_id);
    const smallCategoryRes = await smallCategoryAPI(
      e?.cat1_id,
      bigCategoryParams
    );
    setBigCategoryList(bigCategoryRes);
    setSmallCategoryList(smallCategoryRes);
    setBigCategory(
      bigCategoryRes?.length === 0 ? "No data" : bigCategoryRes[0]?.cat_name
    );
    setSmallCategory(
      smallCategoryRes?.length === 0 ? "No data" : smallCategoryRes[0]?.cat_name
    );
  };

  const handleLargeCategory = async (e: any) => {
    setBigCategory(e?.cat_name);
    setBigCategoryParams(e?.cat2_id);
    const smallCategoryRes = await smallCategoryAPI(categoryParams, e?.cat2_id);
    setSmallCategoryList(smallCategoryRes);
    setSmallCategory(
      smallCategoryRes?.length === 0 ? "No data" : smallCategoryRes[0]?.cat_name
    );
  };

  const handleSmallCategory = (e: any) => {
    console.log("small|_category params: ", e);
    setSmallCategory(e?.cat_name);
  };

  //-------------header sort function----------
  const handleHeader = (e: any) => {
    console.log("clicked header column:", e);
    setSortHeader(e);
  };

  const init = async () => {
    const bigCategoryRes = await bigCategoryAPI(categoryParams);
    const smallCategoryRes = await smallCategoryAPI(
      categoryParams,
      bigCategoryParams
    );
    setBigCategoryList(bigCategoryRes);
    setSmallCategoryList(smallCategoryRes);
    setBigCategory(bigCategoryRes[0]?.cat_name);
    setSmallCategory(smallCategoryRes[0]?.cat_name);
  };

  useEffect(() => {
    init();
  }, []);

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
            inputData={bigCategoryList}
            action={handleLargeCategory}
            createCategory={
              <div
                className={classes.addCategory}
                onClick={handleLargeModalOpen}>
                <i className='fas fa-plus'></i>
              </div>
            }>
            <div className={classes.category}>{bigCategory}</div>
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
        <div className={classes.tableContainer}>
          <div className={classes.serachContainer}>
            <div className={classes.searchRoot}>
              <span className={classes.searchTitle}>探す:</span>
              <ActionInput
                className={classes.searchInput}
                value={search}
                placeholder='xxx-xxx'
                action={(e) => setSearch(e.target.value)}
              />
              <div className={classes.searchBtn}>
                <i className='fas fa-search'></i>
              </div>
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
                headerSort={(e) => handleHeader(e)}
              />
            }
          />
        </div>
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
