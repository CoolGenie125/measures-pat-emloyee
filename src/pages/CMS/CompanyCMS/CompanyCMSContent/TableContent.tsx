/** @format */

import { useStyles } from "./TableContentStyles";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import TableRoot from "components/Table/TableBase/TableRoot";
import { useState } from "react";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";
import ActionDropDown from "components/ActionDropDown/ActionDropDown";

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
              {row.category}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.price}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.description}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.action)}>
              <ActionDropDown>
                <div
                  className={clsx(classes.actionIcon, classes.marginRight10)}>
                  <i className='far fa-edit'></i>
                </div>
              </ActionDropDown>
              <div
                className={classes.actionIcon}
                onClick={handleConfirmModalOpen}>
                <i className='fas fa-trash-alt'></i>
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
