import { useNavigate } from "react-router-dom";
import { UsageCard } from "./component/UsageCard/UsageCard";
import { UsageStyles } from "./UsageStyle";

export const Usage = () => {
  const classes = UsageStyles();
  const navigate =  useNavigate();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.usageTitle}>利用方法</div>
        <div className={classes.addRoot}>
          <div
            className={classes.addBtn}
            onClick={() => navigate("/usage/add")}>
            使い方を追加
            <i className='fas fa-plus'></i>
          </div>
        </div>
        <UsageCard />
        <UsageCard />
        <UsageCard />
        <UsageCard />
        <UsageCard />
      </div>
    </>
  );
};
