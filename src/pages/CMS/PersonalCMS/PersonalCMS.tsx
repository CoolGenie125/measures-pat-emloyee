import ActionButton from "components/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./PersonalCMSStyle";

export const PersonalCMS = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      PersonalCMS
    </div>
  );
};
