import clsx from "clsx";
import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountSettingStyles } from "./AccountSettingStyle";

export const AccountSetting = () => {
  const classes = AccountSettingStyles();
  const navigate = useNavigate();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [perEmail, setPerEmail] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassWord] = useState("");

  const inputFile = useRef<HTMLInputElement>(null);
  const [importImg, setImportImg] = useState<any>();

  const onImgImport = ({
    currentTarget: { files, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length && name === "importImg") setImportImg(files[0]);
  };

  const handleFileInput = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const handleSetting = ()=>{
    navigate("/account/setting/thankyou")
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.accountSettingTitle}>アカウント設定</div>
        <div className={classes.name}>
          <div
            className={clsx(classes.accountSettingForm, classes.marginRight24)}>
            <div className={classes.formTitle}>
              姓 <span className={classes.symbol}>*</span>
            </div>
            <ActionInput
            value={lastName}
            placeholder='こちらのフォームより承っております'
            action={(e) => setLastName(e)}
            />
          </div>
          <div className={classes.accountSettingForm}>
            <div className={classes.formTitle}>
              名 <span className={classes.symbol}>*</span>
            </div>
            <ActionInput
              value={firstName}
              placeholder='こちらのフォームより承っております'
              action={(e) => setFirstName(e)}
            />
          </div>
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            日中連絡がとれる電話番号 <span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            value={phoneNumber}
            placeholder='0X0-1234-5678'
            action={(e) => setPhoneNumber(e)}
            />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            会社で使うメールアドレス <span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            value={companyEmail}
            placeholder='example@shisaku-pad.co.jp'
            action={(e) => setCompanyEmail(e)}
          />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            個人で使うメールアドレス <span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            value={perEmail}
            placeholder='example@gmail.com'
            action={(e) => setPerEmail(e)}
          />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            パスワード <span className={classes.symbol}>*</span>
          </div>
          <ActionInput
            type='password'
            value={passWord}
            placeholder='******'
            action={(e) => setPassWord(e)}
          />
        </div>
        <div className={classes.accountSettingForm}>
          <div className={classes.formTitle}>
            プロフィール写真 <span className={classes.symbol}>*</span>
          </div>
          <div className={classes.imgLoader} onClick={handleFileInput}>
            <input
              id='fileimport'
              name='importImg'
              accept='image/*'
              type='file'
              autoComplete='off'
              tabIndex={-1}
              style={{ display: "none" }}
              ref={inputFile}
              onChange={onImgImport}
            />
            {importImg ? (
              <img
                src={URL.createObjectURL(importImg)}
                alt='image'
                className={classes.importImg}
              />
            ) : (
              <div className={classes.importLetter}>Please select</div>
            )}
          </div>
        </div>
        <div className={classes.policy}>
          <input type='checkbox' className={classes.checkbox} />
          個人情報保護方針に同意する
        </div>
        <ActionButton
          type='dark'
          content='設定する'
          action={handleSetting}
          className={classes.formBtn}
        />
      </div>
    </div>
  );
};
