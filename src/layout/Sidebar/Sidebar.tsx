import { SidebarStyles } from "./SidebarStyles";
import LogoImg from "../../assets/images/logo.webp";
import avatar from "../../assets/images/avatar.png";
import banner from "../../assets/images/banner.png";
import { SidbarData } from "config/constant";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import MobileSidebar from "./MobileSidebar/MobileSidebar";

interface SidebarProps {
  className?: any;
  mobileStatus: boolean;
  action: () => void;
}

export default function Sidebar({
  className,
  mobileStatus,
  action,
}: SidebarProps) {
  const classes = SidebarStyles();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className={clsx(classes.root, className)}>
        <img
          src={LogoImg}
          className={classes.logoImg}
          alt='logo'
          onClick={() => navigate("/")}
        />
        <div
          className={classes.avatarRoot}
          onClick={() => navigate("/account")}>
          <img src={avatar} className={classes.avatarImg} />
          <div className={classes.avatarName}>しさく くらら</div>
          <div className={classes.avatarJob}>合同会社施策ぱっと</div>
        </div>
        <div className={classes.sidebarContent}>
          {SidbarData.map((item: any, key: any) => {
            return (
              <div
                className={
                  location.pathname === item.link
                    ? classes.activeSidebarItem
                    : classes.sidebarItem
                }
                key={key}
                onClick={() => navigate(item.link)}>
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
        <div className={classes.studyLink}>
          <img src={banner} className={classes.banner}></img>
        </div>
      </div>
      <MobileSidebar mobileStatus={mobileStatus} moblieClose={action} />
    </>
  );
}
