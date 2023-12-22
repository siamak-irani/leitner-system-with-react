import React from "react";

import classes from "./CellElement.module.css";
import { type Cell } from "../../lib/type";

type CellProps = {
  cell: Cell;
  className?: string;
};

const CellElement = ({ cell, className }: CellProps) => {
  return (
    <div className={`${classes["Cell"]} ${className && classes[className]}`}>
      <div className={`${classes["cell"]}`}>
        {cell.map((p, index) => {
          return (
            <div
              key={index}
              className={`${classes["partition"]} ${classes["p" + index]}`}
            >
              <div className={`${classes["num"]}`}>{index + 1}</div>
              <div className={`${classes["size"]}`}>{p.size}</div>
            </div>
          );
        })}
      </div>
      <div className={`${classes["actions"]}`}>
        <div className={`${classes["cell-size"]}`}>
          <span className={`${classes["title"]}`}>تعداد واژه‌ها: </span>
          <span className={`${classes["num"]}`}>0000</span>
        </div>
        <button>مرور</button>
        <p className={`${classes["active-cell-msg"]}`}>
          {/* الان نوبت مرور این خانه است */}
        </p>
      </div>
    </div>
  );
};

export default CellElement;
