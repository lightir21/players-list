import "./addNewTeam.scss";
import { BackBtn } from "../../components";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/app-store";
import { useState } from "react";

const AddNewTeam = () => {
  const [teamName, setTeamName] = useState("");

  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/");
  };

  const { addNewTeam } = useAppStore();

  const onSubmit = (e) => {
    e.preventDefault();
    addNewTeam(teamName);
  };

  const onNameChange = (e) => {
    setTeamName(e.target.value);
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
            onChange={onNameChange}
          />
        </div>
        <button className="addNewTeam__btn btn" onClick={onSubmit}>
          הבא
        </button>
      </form>
      <BackBtn onClick={onBackClick} />
    </div>
  );
};
export default AddNewTeam;
