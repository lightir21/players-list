import "./mainPage.scss";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/app-store";

const MainPage = () => {
  const navigate = useNavigate();

  const { teams, setCurrTeam } = useAppStore((state) => state);

  const onTeamClick = (teamName) => {
    setCurrTeam(teamName);
    navigate("/team");
  };

  return (
    <div className="mainPage">
      <div className="mainPage__container">
        <button
          className="mainPage__btn btn"
          onClick={() => navigate("/new-team")}
        >
          הוסף קבוצה חדשה
        </button>

        <ul className="mainPage__teams-list">
          {teams.map((team) => {
            const teamName = Object.keys(team);

            return (
              <li
                className="mainPage__list-item"
                key={teamName}
                onClick={() => onTeamClick(teamName)}
              >
                {teamName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;
