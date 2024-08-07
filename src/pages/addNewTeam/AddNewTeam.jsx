import "./addNewTeam.scss";
import { BackBtn } from "../../components";
import { useNavigate } from "react-router-dom";

const AddNewTeam = () => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/");
  };

  return (
    <div className="addNewTeam">
      <h3>הוספת קבוצה חדשה</h3>
      <form className="addNewTeam__form">
        <div className="addNewTeam__formGroup">
          <label htmlFor="name">שם הקבוצה</label>
          <input
            className="addNewTeam__input"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <button className="addNewTeam__btn btn">הבא</button>
      </form>
      <BackBtn onClick={onBackClick} />
    </div>
  );
};
export default AddNewTeam;
