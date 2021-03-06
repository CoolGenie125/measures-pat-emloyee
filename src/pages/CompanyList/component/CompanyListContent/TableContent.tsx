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
  onRow: (e: any) => void;
}

const TableContent = ({
  pageNumber,
  perPageNumber,
  columns,
  rows,
  headerSort,
  onRow,
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
            <TableCell
              className={clsx(classes.tableCell)}
              onClick={() => onRow(row)}>
              {pageNumber * perPageNumber + key + 1}
            </TableCell>
            <TableCell
              className={clsx(classes.tableCell)}
              onClick={() => onRow(row)}>
              {row.name}
            </TableCell>
            <TableCell
              className={clsx(classes.tableCell)}
              onClick={() => onRow(row)}>
              {row.company}
            </TableCell>
            <TableCell
              className={clsx(classes.tableCell)}
              onClick={() => onRow(row)}>
              {row.companyemail}
            </TableCell>
            <TableCell
              className={clsx(classes.tableCell)}
              onClick={() => onRow(row)}>
              {row.personalemail}
            </TableCell>
            <TableCell
              className={clsx(classes.tableCell)}
              onClick={() => onRow(row)}>
              {row.phone}
            </TableCell>
            <TableCell
              className={clsx(classes.tableCell)}
              onClick={() => onRow(row)}>
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
        <div className={classes.emptyTable}>???????????????</div>
      ) : (
        <TableRoot
          columns={columns}
          rows={tableRows}
          headerClick={(e) => headerSort(e)}
        />
      )}
      <ConfirmModal
        title='??????????????????????????????????????????'
        description='??????????????????????????????????????????????????????????????????'
        show={deleteModalStatus}
        onClose={handleConfirmModalClose}
        action={() => {}}
      />
      <ConfirmModal
        title='????????????????????????'
        description={`??????????????????????????????????????????????????????${
          switchStatus ? "?????????" : "????????????"
        }???????????????`}
        show={switchConfirm}
        onClose={handleSwitchConfirmClose}
        action={handleSwitchConfirm}
      />
    </>
  );
};

export default TableContent;
