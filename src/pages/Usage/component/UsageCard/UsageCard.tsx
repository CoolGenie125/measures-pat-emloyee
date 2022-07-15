import ConfirmModal from "components/ConfirmModal/ConfirmModal";
import { useState } from "react";
import UsageCardEditModal from "./UsageCardEditModal/UsageCardEditModal";
import { UsageCardStyle } from "./UsageCardStyle";

export const UsageCard = () => {
  const classes = UsageCardStyle();

  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);

  const handleConfirmModalOpen = () => {
    console.log("here");
    setDeleteModalStatus(true);
  };

  const handleConfirmModalClose = () => {
    setDeleteModalStatus(false);
  };

  const handleEditModalOpen = () => {
    console.log("here");
    setEditModalStatus(true);
  };

  const handleEditModalClose = () => {
    setEditModalStatus(false);
  };

  return (
    <>
      <div className={classes.root}>
        <div id='tool' className={classes.toolRoot}>
          <i className='fas fa-edit' onClick={handleEditModalOpen}></i>
          <i className='fas fa-trash-alt' onClick={handleConfirmModalOpen}></i>
        </div>
        <div className={classes.title}>質問質問質問質問質問質問</div>
        <div className={classes.des}>
          答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答え答えf
        </div>
      </div>
      <ConfirmModal
        title='使用法を削除'
        description='この使用カードを削除してもよろしいですか？'
        show={deleteModalStatus}
        onClose={handleConfirmModalClose}
        action={() => {}}
      />
      <UsageCardEditModal
        action={() => {}}
        show={editModalStatus}
        onClose={handleEditModalClose}
      />
    </>
  );
};
