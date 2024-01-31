import React, { useState } from "react";

const Pagination = ({ dataList, paginate, children }) => {

  const [current, setCurrent] = useState(1);

  const buttons = Math.ceil(dataList?.length / paginate);

  const setPaginate = (i) => {
    if (current === 1) {
      return i < paginate;
    } else {
      return i >= paginate * (current - 1) && i < current * paginate;
    }
  };

  const sortedArray = dataList?.filter((item, index) => {
    return setPaginate(index) ? item : false;
  });

  const updatecurrent = (i) => {
    setCurrent(i);
  };

  const switchpaginate = () => {
    setCurrent(1);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (child.props.slot === "content") {
          return React.cloneElement(child, { list: sortedArray });
        }
        if (child.props.slot === "button") {
          return React.cloneElement(child, {
            buttons,
            current,
          });
        }
        return null;
      })}
    </>
  );
};

export default Pagination;
