import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const Pagination = (props) => {
  const [rightArrowStyles, setRightArrowStyles] = useState();
  const [leftArrowStyles, setLeftArrowStyles] = useState();
  // const [totalData, setTotalData] = useState();

  const activePage = {
    cursor: "pointer",
  };
  const inactivePage = {
    opacity: "0.5",
    cursor: "not-allowed",
  };

  useEffect(() => {
    const rightStyles =
      props.currentData === props.size ? activePage : inactivePage;
    const leftStyles = props.page > 1 ? activePage : inactivePage;

    setRightArrowStyles(rightStyles);
    setLeftArrowStyles(leftStyles);
  }, [props.currentData]);

  return (
    <section className="p-4">
      <div className="pageination flex gap-4 font-bold">
        <div
          style={leftArrowStyles}
          className="pagination__left text-lg border p-2"
          onClick={(e) => props.onPageChange(false)}
        >
          {/* // sending data from child to parent on click */}
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="p-2 underline text-yellow-500">{props.page}</div>
        <div
          style={rightArrowStyles}
          className="pagination__right text-lg border p-2"
          onClick={(e) => props.onPageChange(true)}
        >
          {/* // sending data from child to parent on click */}
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Pagination;
