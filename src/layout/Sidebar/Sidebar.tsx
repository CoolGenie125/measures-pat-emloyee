import { SidebarStyles } from "./SidebarStyles";
import LogoImg from "../../assets/images/logo.webp";
import avatar from "../../assets/images/avatar.png";
import banner from "../../assets/images/banner.png";
import { SidbarData } from "config/constant";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface SidebarProps {
  className?: any;
  mobileStatus: boolean;
  handleClose: () => void;
}

export default function Sidebar({
  className,
  handleClose,
  mobileStatus,
}: SidebarProps) {
  const classes = SidebarStyles();
  const navigate = useNavigate();
  const [showStaus, setShowStatus] = useState<boolean>(mobileStatus);

  useEffect(() => {
    setShowStatus(mobileStatus);
  }, [mobileStatus]);

  const handleLogo = () => {
    navigate("/");
  };

  const handleAccount = () => {
    navigate("/account");
  };

  const handleLink = (e: any) => {
    mobileStatus && handleClose();
    navigate(e);
  };

  return (
    <>
      <div
        className={clsx(
          classes.root,
          className,
          !showStaus ? classes.displayNone : classes.displayShow
        )}>
        <img
          src={LogoImg}
          className={classes.logoImg}
          alt='logo'
          onClick={() => handleLogo()}
        />
        <div className={classes.avatarRoot} onClick={() => handleAccount()}>
          <img src={avatar} className={classes.avatarImg} />
          <div className={classes.avatarName}>しさく くらら</div>
          <div className={classes.avatarJob}>合同会社施策ぱっと</div>
        </div>
        <div className={classes.sidebarContent}>
          {SidbarData.map((item: any, key: any) => {
            return (
              <div
                className={classes.sidebarItem}
                key={key}
                onClick={() => handleLink(item.link)}>
                <img
                  src={item.img}
                  className={classes.itemImg}
                  alt='sidebar-icon'
                />
                <div className={classes.itemContent}>{item.content}</div>
                <div className={classes.itemBtn}>
                  <i className='fas fa-caret-right'></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={showStaus ? classes.closePart : classes.displayNone}
        onClick={handleClose}>
        <div className={classes.closeRootIcon}>
          <i className='fal fa-times'></i>
        </div>
      </div>
      <div className={classes.studyLink}>
        <img src={banner} className={classes.banner}></img>
      </div>
    </>
  );
}
