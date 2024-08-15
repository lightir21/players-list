import "./playersList.scss";

const PlayersList = ({ teams, teamName }) => {
  return (
    <ul className="playersList">
      {teams[teamName].players &&
        teams[teamName].players.map((player) => {
          return (
            <li className="playersList-item" key={player.name}>
              {player.name}
            </li>
          );
        })}
    </ul>
  );
};

export default PlayersList;
