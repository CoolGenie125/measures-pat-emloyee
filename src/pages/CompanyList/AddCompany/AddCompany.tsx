/** @format */

import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import { createCompanyAPI } from "hook/company";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./AddCompanyStyles";

export const AddCompany = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleCancel = () => {
    navigate("/companylist");
  };

  const handlAddCompany = async () => {
    const res = await createCompanyAPI({
      type: 0,
      company_name: title,
      company_email: email,
      personal_email: "saki.ws@gmail.com",
      phone_num: "133-456789",
    });
    console.log("add company action: ", res);
    navigate("/companylist");
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.usageAddTitle}>追加公司</div>
        <div className={classes.usageAddForm}>
          <div className={classes.formTitle}>
            題名 <span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            value={title}
            placeholder='このフィールドに入力してください'
            action={(e) => setTitle(e)}
          />
        </div>
        <div className={classes.usageAddForm}>
          <div className={classes.formTitle}>
            会社のメール<span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            value={email}
            placeholder='corp.shisaku-pad.co.jp'
            action={(e) => setEmail(e)}
          />
        </div>
        <div className={classes.usageAddForm}>
          <div className={classes.formTitle}>
            詳細 <span className={classes.symbol}>*</span>
          </div>
          <textarea
            className={classes.formTextarea}
            value={inquiry}
            placeholder='このフィールドに入力してください'
            onChange={(e) => setInquiry(e.target.value)}
          />
        </div>
        <div className={classes.btnRoot}>
          <ActionButton
            content='キャンセル'
            className={classes.formBtn}
            action={handleCancel}
          />
          <ActionButton
            type='dark'
            content='追加'
            className={classes.formBtn}
            action={handlAddCompany}
          />
        </div>
      </div>
    </div>
  );
};
