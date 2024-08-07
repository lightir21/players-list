import "./backBtn.scss";
import { IoChevronBack } from "react-icons/io5";

const BackBtn = ({ onClick }) => {
  return (
    <button className={"backBtn"} onClick={onClick}>
      <IoChevronBack />
    </button>
  );
};
export default BackBtn;
