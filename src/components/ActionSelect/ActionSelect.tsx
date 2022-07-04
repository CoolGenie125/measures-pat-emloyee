import clsx from "clsx";
import { useStyles } from "./ActionSelectStyles";

interface ActionSelectProps {
  className?: any;
  items: any;
  select: (e: string) => void;
  placeholder?: string;
}

export default function ActionSelect({
  className,
  items,
  select,
  placeholder,
}: ActionSelectProps) {
  const classes = useStyles();
  const handleSelect = (e: any) => {
    select(e);
  };

  return (
    <div className={clsx(classes.root, className)}>
      <select
        className={classes.container}
        onClick={(e) => handleSelect(e)}
        placeholder={placeholder}>
        {items?.map((item: any, key: any) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <i className='fal fa-angle-down'></i>
    </div>
  );
}
