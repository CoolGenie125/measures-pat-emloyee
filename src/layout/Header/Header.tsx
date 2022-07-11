import { HeaderStyles } from "./HeaderStyles";
import LogoImg from "../../assets/images/header-logo.webp";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  mobileAction: () => void;
}

export default function Header({ mobileAction }: HeaderProps) {
  const classes = HeaderStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <i className='fas fa-bars' onClick={mobileAction}></i>
        <img
          src={LogoImg}
          className={classes.logoImg}
          alt='logo'
          onClick={() => navigate("/")}
        />
      </div>
      <div className={classes.searchRoot}>
        <div className={classes.searchIcon}>
          <i className="fas fa-home"></i>
        </div>
        <div className={classes.searchInput}>運営者</div>
      </div>
    </div>
  );
}
