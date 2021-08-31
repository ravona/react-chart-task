import "./list.scss";

const List = ({ listItems }) => {
  return (
    <ul className="list">
      {listItems.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

export default List;
