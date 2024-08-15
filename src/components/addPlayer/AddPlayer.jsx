import { useState } from "react";
import "./addPlayer.scss";

const AddPlayer = ({ addNewPlayerToTeam, team }) => {
  const [name, setName] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className="addPlayer">
      <input
        type="text"
        value={name}
        placeholder="שם שחקן"
        onChange={onChange}
      />
      <button
        onClick={() => {
          addNewPlayerToTeam({ name, team });
          setName("");
        }}
      >
        הוסף
      </button>
    </div>
  );
};
export default AddPlayer;
