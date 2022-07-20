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
import {
  addCategoryAPI,
  bigCategoryAPI,
  deleteCategoryAPI,
  smallCategoryAPI,
  updateCategoryAPI,
} from "hook/category";
import EditLargeCategoryModal from "./Components/EditLargeCategoryModal/EditLargeCategoryModal";
import EditSmallCategoryModal from "./Components/EditSmallCategoryModal/EditSmallCategoryModal";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";
import { CreateCategoryResponse } from "config/ResponseContant";

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
  const [bigModal, setBigModal] = useState(false);

  const handleSmallModalClose = () => {
    setSmallModal(false);
  };

  const handleLargeModalClose = () => {
    setBigModal(false);
  };

  const handleSmallModalOpen = () => {
    setSmallModal(true);
  };
  const handleLargeModalOpen = () => {
    setBigModal(true);
  };

  const handleAddLargeCategory = async (e: string) => {
    const addBigCatRes = await addCategoryAPI({
      cat1_id: categoryParams,
      cat2_id: 0,
      cat3_id: 0,
      cat_name: e,
    });
    if (addBigCatRes === CreateCategoryResponse.Success) {
      init();
    }
  };

  const handleAddSmallCategory = async (e: any) => {
    const addSmallCatRes = await addCategoryAPI({
      cat1_id: categoryParams,
      cat2_id: bigCategoryParams,
      cat3_id: 0,
      cat_name: e,
    });
    if (addSmallCatRes === CreateCategoryResponse.Success) {
      init();
    }
  };

  const tableHeader = [
    "No",
    "カテゴリー",
    "価格情報",
    "説明",
    "無効化を/有効化",
  ];

  //------category edit delete function----------------------------
  const [smallEditModal, setSmallEditModal] = useState(false);
  const [bigEditModal, setBigEditModal] = useState(false);
  const [editBigInfo, setEditBigInfo] = useState<any>();
  const [editSmallInfo, setEditSmallInfo] = useState<any>();

  const handleBigCategoryEdit = async (e: any) => {
    console.log("big category edit info: ", e);
    setEditBigInfo(e);
    setBigEditModal(true);
  };

  const handleEditBigModal = async (e: any) => {
    const editBigRes = await updateCategoryAPI(editBigInfo.id, e);
    console.log("edit result : ", editBigRes);
    await init();
  };

  const handleSmallCategoryEdit = async (e: any) => {
    console.log("small category edit info: ", e);
    setSmallEditModal(true);
    setEditSmallInfo(e);
  };

  const handleEditSmallModal = async (e: any) => {
    const editBigRes = await updateCategoryAPI(editBigInfo, e);
    console.log("edit result : ", editBigRes);
    await init();
  };

  //--------------category delete function------------------------

  const [catDelete, setCatDelete] = useState(false);
  const [catDeleteName, setCatDeleteName] = useState("");
  const [catDeleteData, setCatDeleteData] = useState<any>();
  const handleBigCategoryTrash = (e: any) => {
    console.log("big category delete info: ", e);
    setCatDelete(true);
    setCatDeleteName(e.cat_name);
    setCatDeleteData(e);
  };

  const handleSmallCategoryTrash = (e: any) => {
    console.log("small category delete info: ", e);
    setCatDelete(true);
    setCatDeleteName(e.cat_name);
    setCatDeleteData(e);
  };

  const handleDeleteCategory = async () => {
    const categoryDeleteRes = await deleteCategoryAPI(catDeleteData.id);
    console.log("result of delete: ", categoryDeleteRes);
    await init();
  };
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

  const handleBigCategory = async (e: any) => {
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
          <ActionDropDown
            inputData={categoryList}
            action={handleCategory}
            editDisable>
            <div className={classes.category}>{category}</div>
          </ActionDropDown>
          <ActionDropDown
            inputData={bigCategoryList}
            action={handleBigCategory}
            onEdit={handleBigCategoryEdit}
            onTrash={handleBigCategoryTrash}
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
            onEdit={handleSmallCategoryEdit}
            onTrash={handleSmallCategoryTrash}
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
          show={bigModal}
          onClose={handleLargeModalClose}
          action={(e) => handleAddLargeCategory(e)}
        />
        <AddSmallCategoryModal
          show={smallModal}
          onClose={handleSmallModalClose}
          action={(e) => handleAddSmallCategory(e)}
        />
        <EditLargeCategoryModal
          show={bigEditModal}
          onClose={() => setBigEditModal(false)}
          action={(e) => handleEditBigModal(e)}
        />
        <EditSmallCategoryModal
          show={smallEditModal}
          onClose={() => setSmallEditModal(false)}
          action={(e) => handleEditSmallModal(e)}
        />
        <ConfirmModal
          title='カテゴリを削除'
          description={`本当に${catDeleteName}カテゴリを削除しますか？`}
          show={catDelete}
          onClose={() => setCatDelete(false)}
          action={handleDeleteCategory}
        />
      </div>
    </div>
  );
};
