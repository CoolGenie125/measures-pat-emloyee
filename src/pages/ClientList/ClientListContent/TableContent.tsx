import { useStyles } from "./TableContentStyles";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import TableRoot from "components/Table/TableBase/TableRoot";
import { useState } from "react";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";

interface StagingTableProps {
  columns?: any;
  rows: any;
  pageNumber: number;
  perPageNumber: number;
}

const TableContent = ({
  pageNumber,
  perPageNumber,
  columns,
  rows,
}: StagingTableProps) => {
  const classes = useStyles();

  const [deleteModalStatus, setDeleteModalStatus] = useState(false);

  const handleConfirmModalClose = () => {
    setDeleteModalStatus(false);
  };

  const handleConfirmModalOpen = () => {
    setDeleteModalStatus(true);
  };

  const tableRows =
    rows !== undefined ? (
      rows
        ?.slice(pageNumber * perPageNumber, (pageNumber + 1) * perPageNumber)
        .map((row: any, key: any) => (
          <TableRow key={key}>
            <TableCell className={clsx(classes.tableCell)}>
              {pageNumber * perPageNumber + key + 1}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.name}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.company}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.companyemail}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.personalemail}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.phone}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              <div className={classes.action}>
                <div
                  className={classes.actionIcon}
                  onClick={handleConfirmModalOpen}>
                  <i className='fas fa-trash-alt'></i>
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))
    ) : (
      <></>
    );
  return (
    <>
      {rows?.length === 0 || rows === null ? (
        <div className={classes.emptyTable}>データなし</div>
      ) : (
        <TableRoot columns={columns} rows={tableRows} />
      )}
      <ConfirmModal
        title='ユーザーアカウントを削除する'
        description='このユーザーアカウントを本当に削除しますか？'
        show={deleteModalStatus}
        onClose={handleConfirmModalClose}
        action={() => {}}
      />
    </>
  );
};

export default TableContent;
