import React from 'react';

const Header = (props) => {
  const { project, editProject } = props;

  return (
    <header className="header">
      <div className="header__pageinfo">
        <span className="header__title">Two-Doo</span>
        <a href="http://mooresa.github.io" className="header__link">Home</a>
      </div>
      <div className="current-project">
        <div className="current-project__info">
          <div className="current-project__title">{project.title}</div>
          <div className="current-project__desc">{project.desc}</div>
        </div>
        <button type="button" className="btn current-project__edit" onClick={editProject}>Edit Details</button>
      </div>
    </header>
  );
};

export default Header;
