import './sidebar.css';

const Sidebar = ({ onImpClick, onFilterClick, onHomeClick, activeRow }) => {
  return (
    <div className="sidebar">
      <i className="fa-solid fa-x" onclick="sidebarGo()"></i>
      <ol>
        <li
          className={`sidebar-row ${activeRow === 'home' ? 'active' : ''}`}
          onClick={onHomeClick}
        >
          <i className="fa-solid fa-house"></i>
          &nbsp;&nbsp;Home
        </li>

        {/*   sidebar-row: A base class applied to all sidebar rows for consistent styling.
              ${activeRow === 'home' ? 'active' : ''}:
              This part adds the active class if the condition activeRow === 'home' is true.
              If false, it adds an empty string (''), effectively omitting the active class */}

        <li
          className={`sidebar-row ${activeRow === 'important' ? 'active' : ''}`}
          onClick={onImpClick}
        >
          <i className="fa-regular fa-star"></i>&nbsp;&nbsp;Sort By Importent
        </li>
        <li
          className={`sidebar-row ${activeRow === 'filter' ? 'active' : ''}`}
          onClick={onFilterClick}
        >
          <i className="fa-brands fa-slack"></i>&nbsp;&nbsp;Filter Importent
          Only
        </li>
        <li className="sidebar-row">
          <i className="fa-regular fa-address-book"></i>&nbsp;&nbsp;Contact
        </li>
      </ol>
      <div className="sign">
        <h2>
          <i className="fa-regular fa-user fa-bounce"></i>
          &nbsp;&nbsp;Account
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
