import "./teamPage.scss";
import { useNavigate } from "react-router-dom";
import { AddPlayer, BackBtn, PlayersList } from "../../components";
import { useAppStore } from "../../store/app-store";
import { useState } from "react";

const TeamPage = () => {
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const { currTeam: teamName, addNewPlayerToTeam, teams } = useAppStore();

  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/");
  };

  const onAddPlayerClick = () => {
    setShowAddPlayer((prev) => !prev);
  };

  return (
    <div className="teamPage">
      <h2 className="teamPage__title">{teamName}</h2>
      <div className="teamPage__container">
        <div className="teamPage__btn-container">
          <button className="teamPage__btn btn" onClick={onAddPlayerClick}>
            הוסף שחקן
          </button>
          <button className="teamPage__btn btn">הוסף דיווח</button>
        </div>
      </div>

      <PlayersList teamName={teamName} teams={teams} />

      {showAddPlayer && (
        <AddPlayer addNewPlayerToTeam={addNewPlayerToTeam} team={teamName} />
      )}
      <BackBtn onClick={onBackClick} />
    </div>
  );
};
export default TeamPage;
