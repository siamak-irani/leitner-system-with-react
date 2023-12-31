import React from "react";

import classes from "./CellElement.module.css";
import { CellCounts, type Cell } from "../../lib/type";
import WhiteButton from "../buttons/WhiteButton";

type CellProps = {
  cellCount: CellCounts;
  className?: string;
};

const CellElement = ({ cellCount, className }: CellProps) => {
  return (
    <div className={`${classes["Cell"]} ${className && classes[className]}`}>
      <div className={`${classes["cell"]}`}>
        {cellCount.partitions.map((p, index) => {
          return (
            <div
              key={index}
              className={`${classes["partition"]} ${classes[p.name]}`}
            >
              <div className={`${classes["num"]}`}>{index + 1}</div>
              <div className={`${classes["size"]}`}>{p.count}</div>
            </div>
          );
        })}
      </div>
      <div className={`${classes["actions"]}`}>
        <div className={`${classes["cell-size"]}`}>
          <span className={`${classes["title"]}`}>تعداد واژه‌ها: </span>
          <span className={`${classes["num"]}`}>{cellCount.total}</span>
        </div>
        <WhiteButton style={{ margin: "0 auto" }}>مرور</WhiteButton>
        <p className={`${classes["active-cell-msg"]}`}>
          {/* الان نوبت مرور این خانه است */}
        </p>
      </div>
    </div>
  );
};

export default CellElement;
