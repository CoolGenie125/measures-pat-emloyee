import ActionTable from "components/Table/ActionTable";
import { clientListArray } from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableContent from "./CompanyListContent/TableContent";
import { useStyles } from "./CompanyListStyles";

export const tableHeader = [
  "No",
  "名前",
  "会社名",
  "会社のメール",
  "個人的なメール",
  "電話",
  "アクション",
];

export const CompanyList = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  //-----------pagination function------------------------
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const handlePgNum = (pgNum: number) => {
    setCurrentPage(pgNum);
  };

  const handlePgRows = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.clientListTitle}>掲載元企業一覧</div>
        <div className={classes.clientListSmallTitle}>
          サービスを受け入れる会社のリストです。
        </div>
        <ActionTable
          className={classes.tableRoot}
          handlePgNum={handlePgNum}
          handlePgRows={handlePgRows}
          totalCnt={clientListArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={clientListArray}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={tableHeader}
            />
          }
        />
      </div>
    </div>
  );
};
