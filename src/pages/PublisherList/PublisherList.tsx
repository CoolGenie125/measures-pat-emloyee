import ActionInput from "components/ActionInput/ActionInput";
import ActionTable from "components/Table/ActionTable";
import { publisherListArray } from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableContent from "./PublisherListContent/TableContent";
import { useStyles } from "./PublisherListStyles";

export const tableHeader = [
  "No",
  "管理者名",
  "会社名",
  "会社のメール",
  "個人的なメール",
  "電話",
  "アクション",
];

export const PublisherList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  //-----------pagination function------------------------
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [sortHeader, setSortHeader] = useState("");

  const handlePgNum = (pgNum: number) => {
    setCurrentPage(pgNum);
  };

  const handlePgRows = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  const handleHeader = (e: any) => {
    console.log("clicked header column: ", e);
    setSortHeader(e);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.publisherListTitle}>掲載元企業一覧</div>
        <div className={classes.publisherListSmallTitle}>
          サービスを受け入れる会社のリストです。
        </div>
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
          totalCnt={publisherListArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={publisherListArray}
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
