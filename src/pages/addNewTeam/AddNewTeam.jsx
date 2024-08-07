import "./addNewTeam.scss";
import { BackBtn } from "../../components";

const AddNewTeam = () => {
  return (
    <div className="addNewTeam">
      <h3>הוספת קבוצה חדשה</h3>
      <form className="addNewTeam__form">
        <div className="addNetTeam__formGroup">
          <label htmlFor="name">שם הקבוצה</label>
          <input
            className="addNetTeam__input"
            type="text"
            name="name"
            id="name"
          />
        </div>
      </form>
      <BackBtn />
    </div>
  );
};
export default AddNewTeam;
