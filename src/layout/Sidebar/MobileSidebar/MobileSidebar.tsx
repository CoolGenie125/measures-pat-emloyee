import { useStyles } from "./MobileSidebarStyles";
import LogoImg from "../../../assets/images/logo.webp";
import avatar from "../../../assets/images/avatar.png";
import banner from "../../../assets/images/banner.png";
import { SidbarData } from "config/constant";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

interface MobileSidebarContentProps {
  className?: any;
  mobileStatus: boolean;
  moblieClose: () => void;
}

export default function MobileSidebarContent({
  className,
  mobileStatus,
  moblieClose,
}: MobileSidebarContentProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLink = (e: any) => {
    moblieClose();
    navigate(e);
  };

  return (
    <>
      <div
        className={clsx(
          classes.root,
          className,
          mobileStatus ? classes.displayShow : classes.displayNone
        )}>
        <img
          src={LogoImg}
          className={classes.logoImg}
          alt='logo'
          onClick={() => handleLink("/")}
        />
        <div
          className={classes.avatarRoot}
          onClick={() => handleLink("/account")}>
          <img src={avatar} className={classes.avatarImg} />
          <div className={classes.avatarName}>しさく くらら</div>
          <div className={classes.avatarJob}>合同会社施策ぱっと</div>
        </div>
        <div className={classes.mobileSidebarContent}>
          {SidbarData.map((item: any, key: any) => {
            return (
              <div
                className={classes.mobileSidebarItem}
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
        className={mobileStatus ? classes.closePart : classes.displayNone}
        onClick={moblieClose}>
        <div className={classes.closeRootIcon}>
          <i className='fal fa-times'></i>
        </div>
      </div>
    </>
  );
}
