/** @format */

import { useStyles } from "./AddServiceModalStyle";
import { useState, useEffect, useRef } from "react";
import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import ActionSelect from "components/ActionSelect/ActionSelect";
import { CategoryList, CompanyNameList } from "config/constant";

interface AddServiceModalProps {
  show: boolean;
  onClose: () => void;
  action: (e: any) => void;
}
export default function AddServiceModal({
  show,
  onClose,
  action,
}: AddServiceModalProps) {
  const classes = useStyles();

  const [showStatus, setShowStatus] = useState(show);
  const [companyName, setCompanyName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceOverview, setServiceOverview] = useState("");
  const [freeEditor, setFreeEditor] = useState<any>();
  const [category, setCategory] = useState("");

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  //---logo img import function------------------
  const LogoInputFile = useRef<HTMLInputElement>(null);
  const [importLogoImg, setImportLogoImg] = useState<any>();

  const onLogoImgImport = ({
    currentTarget: { files, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length && name === "importLogoImg")
      setImportLogoImg(files[0]);
  };

  const handleLogoFileInput = () => {
    if (LogoInputFile.current) {
      LogoInputFile.current.click();
    }
  };

  //---company name import function-------------------

  const handleCompanyName = (e: any) => {
    setCompanyName(e.target.value);
  };

  //----service title import function---------------------

  const handleServiceName = (e: any) => {
    setServiceName(e.target.value);
  };

  //---main image import function----------------

  const MainInputFile = useRef<HTMLInputElement>(null);
  const [importMainImg, setImportMainImg] = useState<FileList>();

  const onMainImgImport = ({
    currentTarget: { files, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length && name === "importMainImg") {
      setImportMainImg(files);
    }
  };

  const handleMainFileInput = () => {
    if (MainInputFile.current) {
      MainInputFile.current.click();
    }
  };

  //--------service overview import function----------

  const handleServiceOverview = (e: any) => {
    setServiceOverview(e.target.value);
  };

  //-----------category import function-------------

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleNext = () => {
    let inputProps: any = {
      company_logo: URL.createObjectURL(importLogoImg),
      company_name: companyName,
      service_title: serviceName,
      // main_img: URL.createObjectURL(importMainImg),
      service_overview: serviceOverview,
      free_editor: freeEditor,
      category: category,
    };
    console.log("all import value : ", inputProps);
    action(inputProps);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (rootRef && rootRef.current && contentRef && contentRef.current) {
        const root: any = rootRef.current;
        const content: any = contentRef.current;
        if (root.contains(e.target) && !content.contains(e.target)) {
          onClose();
        }
      }
    }
  }, [rootRef, contentRef, show]);

  useEffect(() => {
    setShowStatus(show);
  }, [show]);

  return (
    <>
      <div
        className={showStatus ? classes.loaderWrapper : classes.displayNone}
        ref={rootRef}>
        <div className={classes.modalRoot} ref={contentRef}>
          <div className={classes.title}>サービス追加</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              以下の入力を正確に記入してください
            </div>
            <div className={classes.logoImgLoaderRoot}>
              <div
                className={classes.logoImgLoader}
                onClick={handleLogoFileInput}>
                <input
                  id='fileimport'
                  name='importLogoImg'
                  accept='image/*'
                  type='file'
                  autoComplete='off'
                  tabIndex={-1}
                  style={{ display: "none" }}
                  ref={LogoInputFile}
                  onChange={onLogoImgImport}
                />
                {importLogoImg ? (
                  <img
                    src={URL.createObjectURL(importLogoImg)}
                    alt='logoImage'
                    className={classes.importLogoImg}
                  />
                ) : (
                  <div className={classes.importLetter}>
                    会社のロゴ画像を選択してください
                  </div>
                )}
              </div>
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>会社名</div>
              <ActionSelect
                items={CompanyNameList}
                select={(e) => handleCompanyName(e)}
                placeholder='正しい会社名を選択してください'
              />
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>サービス名</div>
              <ActionInput
                value={serviceName}
                action={(e) => handleServiceName(e)}
                placeholder='正しいサービス名を入力してください'
              />
            </div>
            <div className={classes.mainImgLoaderRoot}>
              <div
                className={classes.mainImgLoader}
                onClick={handleMainFileInput}>
                <input
                  id='fileimport'
                  name='importMainImg'
                  accept='image/*'
                  type='file'
                  autoComplete='off'
                  tabIndex={-1}
                  style={{ display: "none" }}
                  ref={MainInputFile}
                  onChange={onMainImgImport}
                  multiple
                />
                {importMainImg ? (
                  Array.from(importMainImg).forEach((item: any) => {
                    console.log("items: ", item);
                    return (
                      <img
                        src={URL.createObjectURL(item)}
                        alt='image'
                        className={classes.importMainImg}
                      />
                    );
                  })
                ) : (
                  <div className={classes.importLetter}>
                    サービスのメイン画像を選択してください
                  </div>
                )}
              </div>
            </div>
            <div className={classes.form}>
              <div className={classes.formTitle}>サービスの概要</div>
              <ActionInput
                value={serviceOverview}
                action={(e) => handleServiceOverview(e)}
                placeholder='正しいサービスの概要を入力してください'
              />
            </div>
            {/* <div className={classes.form}>
              <div className={classes.formTitle}>自由編集</div>
              <div className={classes.quillWrap}>
                <ActionQuill action={(e) => handleQuill(e)} />
              </div>
            </div> */}
            <div className={classes.form}>
              <div className={classes.formTitle}>カテゴリー</div>
              <ActionSelect
                items={CategoryList}
                select={(e) => handleCategory(e)}
                placeholder='正しい会社名を選択してください'
              />
            </div>
          </div>
          <div className={classes.btnContainer}>
            <ActionButton
              content='キャンセル'
              className={classes.cancelBtn}
              action={onClose}
            />
            <ActionButton
              content='追加'
              type='dark'
              className={classes.confirmBtn}
              action={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}
