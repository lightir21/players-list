import { useAppStore } from "../../store/app-store";
import "./teamPage.scss";

const TeamPage = () => {
  const { currTeam: teamName } = useAppStore();

  return (
    <div className="teamPage">
      <h2 className="teamPage__title">{teamName}</h2>
      <div className="teamPage__container">
        <div className="teamPage__btn-container">
          <button className="teamPage__btn btn">הוסף שחקן</button>
          <button className="teamPage__btn btn">הוסף דיווח</button>
        </div>
        <div className="teamPage__list">
          {/* {playersList.map((player) => (
            <li key={player}>{player}</li>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default TeamPage;
