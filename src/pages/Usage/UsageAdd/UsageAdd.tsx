import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import { useState } from "react";
import { useStyles } from "./UsageAddtStyle";

export const UsageAdd = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.usageAddTitle}>
        使用法追加。
        </div>
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
          説明 <span className={classes.symbol}>*</span>
          </div>
          <textarea
            className={classes.formTextarea}
            value={inquiry}
            placeholder='このフィールドに入力してください'
            onChange={(e) => setInquiry(e.target.value)}
          />
        </div>
        <ActionButton
          type='dark'
          content='追加'
          className={classes.formBtn}
        />
      </div>
    </div>
  );
};
