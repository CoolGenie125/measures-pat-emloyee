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
        <div className={classes.publisherListTitle}>掲載元企業一覧</div>
        <div className={classes.publisherListSmallTitle}>
          サービスを受け入れる会社のリストです。
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
            />
          }
        />
      </div>
    </div>
  );
};
