import React, { CSSProperties } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "../index.css";

const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

interface IProps {}

const ListVirtualization = ({}: IProps) => {
  return (
    <AutoSizer className="" style={{width:800,height:'100vh'}}>
        
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={1000}
          itemSize={35}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default ListVirtualization;
