/** @format */

import ActionInput from "components/ActionInput/ActionInput";
import ActionTable from "components/Table/ActionTable";
import { companyListArray } from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableContent from "./component/CompanyListContent/TableContent";
import { useStyles } from "./CompanyListStyles";

export const tableHeader = [
  "No",
  "管理者名",
  "会社名",
  "会社のメール",
  "個人的なメール",
  "電話",
  "作成日",
  "無効化を/有効化",
  "完全消去",
];

export const CompanyList = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  //-----------pagination function------------------------
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [sortHeader, setSortHeader] = useState("");
  const handleHeader = (e: any) => {
    console.log("clicked header clumn: ", e);
    setSortHeader(e);
  };

  const handlePgNum = (pgNum: number) => {
    setCurrentPage(pgNum);
  };

  const handlePgRows = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  const handleAddCompany = () => {
    navigate("/companylist/add");
  };

  const handleRow = (e: any) => {
    navigate("/companylist/detail");
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.companyListTitle}>利用企業一覧</div>
        <div className={classes.companyListSmallTitle}>
          サービスを受け入れるクライアントのリストです。
        </div>
        <div className={classes.serachContainer}>
          <div className={classes.addRoot}>
            <div className={classes.addBtn} onClick={() => handleAddCompany()}>
              追加ボタン
              <i className='fas fa-plus'></i>
            </div>
          </div>
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
          totalCnt={companyListArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              onRow={(e) => handleRow(e)}
              rows={companyListArray}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={tableHeader}
              headerSort={(e) => handleHeader(e)}
            />
          }
        />
      </div>
    </div>
  );
};
