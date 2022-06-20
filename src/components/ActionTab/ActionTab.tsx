import clsx from "clsx";
import { useStyles } from "./ActionTabStyles";

interface ActionTabProps {
  className?: any;
  data: any;
  action: (e: string) => void;
  select: string;
}

export default function ActionTab({
  className,
  data,
  action,
  select,
}: ActionTabProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {data?.map((item: any, key: any) => {
        return (
          <div
            className={select === item ? classes.activeItem : classes.item}
            key={key}
            onClick={() => action(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
