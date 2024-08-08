import "./mainPage.scss";
import { list } from "../../temporaryList";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/app-store";

const MainPage = () => {
  const navigate = useNavigate();

  const { teams } = useAppStore((state) => state);
  console.log(teams);
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
              <li className="mainPage__list-item" key={teamName}>
                {teamName}
              </li>
            );
          })}
          {/* {Object.keys(list).map((item) => (
            <li className="mainPage__list-item" key={item}>
              {item}
            </li> */}
          {/* ))} */}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;
