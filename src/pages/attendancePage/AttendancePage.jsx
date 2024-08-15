import "./attendancePage.scss";

const AttendancePage = () => {
  return (
    <div className="attendance">
      <input type="date" />
      <h3>team name</h3>
      <ul className="attendance__list"></ul>
    </div>
  );
};
export default AttendancePage;
