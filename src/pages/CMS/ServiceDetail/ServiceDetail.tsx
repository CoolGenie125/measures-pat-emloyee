/** @format */

import ActionButton from "components/ActionButton/ActionButton";
import { REQUEST_IMG_URL } from "config/constant";
import { serviceOneAPI } from "hook/service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStyles } from "./ServiceDetailStyles";

export const ServiceDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { service_id } = useParams();
  const [serviceInfo, setServiceInfo] = useState<any>();

  const handleEdit = () => {
    navigate(`/cms/service/edit/${service_id}`);
  };

  const init = async () => {
    const serviceOneRes = await serviceOneAPI(service_id);
    setServiceInfo(serviceOneRes);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>詳細情報</div>
        <div className={classes.mainContainer}>
          <div className={classes.logoImgLoaderRoot}>
            <div className={classes.logoImgLoader}>
              <img
                src={`${REQUEST_IMG_URL}/${serviceInfo?.logo_url}`}
                alt='logoImage'
                className={classes.importLogoImg}
              />
            </div>
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>会社名</div>
            {serviceInfo?.company_id}
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>サービス名</div>
            {serviceInfo?.title}
          </div>
          <div className={classes.mainImgLoaderRoot}>
            <div className={classes.mainImgLoader}>
              <img
                src={`${REQUEST_IMG_URL}/${serviceInfo?.image_url}`}
                alt='image'
                className={classes.importMainImg}
              />
            </div>
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>サービスの概要</div>
            {serviceInfo?.content}
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>カテゴリー</div>
            {serviceInfo?.category_id}
          </div>
          <div className={classes.form}>
            <div className={classes.formTitle}>作成日</div>
            {serviceInfo?.createdAt}
          </div>
        </div>
        <ActionButton
          type='dark'
          content='編集サービス'
          className={classes.formBtn}
          action={handleEdit}
        />
      </div>
    </div>
  );
};
