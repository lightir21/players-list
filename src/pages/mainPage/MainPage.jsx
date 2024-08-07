import "./mainPage.scss";
import { list } from "../../temporaryList";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainPage__container">
        <button className="mainPage__btn btn">הוסף קבוצה חדשה</button>

        <ul className="mainPage__teams-list">
          {Object.keys(list).map((item) => (
            <li className="mainPage__list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;
