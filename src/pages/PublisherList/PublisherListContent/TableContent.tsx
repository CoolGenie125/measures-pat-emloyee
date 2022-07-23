/** @format */

import { useStyles } from "./TableContentStyles";
import { TableRow, TableCell } from "@material-ui/core";
import clsx from "clsx";
import TableRoot from "components/Table/TableBase/TableRoot";
import { useState } from "react";
import ConfirmModal from "components/ConfirmModal/ConfirmModal";
import ActionSwitch from "components/ActionSwitch/ActionSwitch";

interface StagingTableProps {
  columns?: any;
  rows: any;
  pageNumber: number;
  perPageNumber: number;
  headerSort: (e: any) => void;
}

const TableContent = ({
  pageNumber,
  perPageNumber,
  columns,
  rows,
  headerSort,
}: StagingTableProps) => {
  const classes = useStyles();

  const [deleteModalStatus, setDeleteModalStatus] = useState(false);

  const handleConfirmModalClose = () => {
    setDeleteModalStatus(false);
  };

  const handleConfirmModalOpen = () => {
    setDeleteModalStatus(true);
  };

  //------------switch test function------------
  const [switchConfirm, setSwitchConfirm] = useState(false);
  const [switchStatus, setSwitchStatus] = useState(false);

  const handleTestSwitch = () => {
    setSwitchConfirm(true);
  };

  const handleSwitchConfirmClose = () => {
    setSwitchConfirm(false);
  };

  const handleSwitchConfirm = () => {
    setSwitchStatus(!switchStatus);
    setSwitchConfirm(false);
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
              2022.3.42:12.35.35
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              <div className={classes.action}>
                <ActionSwitch status={switchStatus} action={handleTestSwitch} />
              </div>
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
        <TableRoot
          columns={columns}
          rows={tableRows}
          headerClick={(e) => headerSort(e)}
        />
      )}
      <ConfirmModal
        title='ユーザーアカウントを削除する'
        description='このユーザーアカウントを本当に削除しますか？'
        show={deleteModalStatus}
        onClose={handleConfirmModalClose}
        action={() => {}}
      />
      <ConfirmModal
        title='有効化・無効化を'
        description={`〇〇（名前、会社名、サービス名など）${
          switchStatus ? "有効化" : "を無効化"
        }しますか？`}
        show={switchConfirm}
        onClose={handleSwitchConfirmClose}
        action={handleSwitchConfirm}
      />
    </>
  );
};

export default TableContent;
