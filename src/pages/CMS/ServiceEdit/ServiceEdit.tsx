/** @format */

import ActionButton from "components/ActionButton/ActionButton";
import ActionInput from "components/ActionInput/ActionInput";
import ActionSelect from "components/ActionSelect/ActionSelect";
import { CategoryList, CompanyNameList } from "config/constant";
import { serviceOneAPI } from "hook/service";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStyles } from "./ServiceEditStyles";

export const ServiceEdit = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { service_id } = useParams();

  const [companyName, setCompanyName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceOverview, setServiceOverview] = useState("");
  const [category, setCategory] = useState("");

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
  const [importMainImg, setImportMainImg] = useState<any>();

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

  const handlePreviousRoute = () => {
    navigate("");
  };

  const handleNext = () => {
    let inputProps: any = {
      company_logo: URL.createObjectURL(importLogoImg),
      company_name: companyName,
      service_title: serviceName,
      main_img: URL.createObjectURL(importMainImg),
      service_overview: serviceOverview,
      category: category,
    };
    console.log("all import value : ", inputProps);
  };

  //----------init function-------------------------
  const init = async () => {
    const serviceOneRes = await serviceOneAPI(service_id);
    setCompanyName(serviceOneRes?.company_id);
    setServiceName(serviceOneRes?.title);
    setServiceOverview(serviceOneRes?.content);
    setCategory(serviceOneRes?.category_id);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>??????????????????</div>
        <div className={classes.mainContainer}>
          <div className={classes.descContainer}>
            ???????????????????????????????????????????????????
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
                  ????????????????????????????????????????????????
                </div>
              )}
            </div>
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>?????????</div>
            <ActionSelect
              items={CompanyNameList}
              select={(e) => handleCompanyName(e)}
              placeholder='?????????????????????????????????????????????'
            />
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>???????????????</div>
            <ActionInput
              value={serviceName}
              action={(e) => handleServiceName(e)}
              placeholder='???????????????????????????????????????????????????'
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
                  ?????????????????????????????????????????????????????????
                </div>
              )}
            </div>
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>?????????????????????</div>
            <ActionInput
              value={serviceOverview}
              action={(e) => handleServiceOverview(e)}
              placeholder='?????????????????????????????????????????????????????????'
            />
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>???????????????</div>
            <ActionSelect
              items={CategoryList}
              select={(e) => handleCategory(e)}
              placeholder='?????????????????????????????????????????????'
            />
          </div>
        </div>
        <div className={classes.btnContainer}>
          <ActionButton
            content='???????????????'
            className={classes.cancelBtn}
            action={handlePreviousRoute}
          />
          <ActionButton
            content='??????'
            type='dark'
            className={classes.confirmBtn}
            action={handleNext}
          />
        </div>
      </div>
    </div>
  );
};
