import ActionButton from "components/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./CompanyDetailStyles";

export const CompanyDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleEdit = ()=>{
    navigate("/account/setting")
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.accountTitle}>詳細情報</div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>会社名</div>
          <div className={classes.formValue}>合同会社施策ぱっと</div>
        </div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>個人用メールアドレス</div>
          <div className={classes.formValue}>example@gmail.com</div>
        </div>
        <div className={classes.accountForm}>
          <div className={classes.formTitle}>パスワード</div>
          <div className={classes.formValue}>********</div>
        </div>
        <ActionButton
          type='dark'
          content='アカウント情報 編集'
          className={classes.formBtn}
          action={handleEdit}
        />
      </div>
    </div>
  );
};
