// App.js
import React, { useState } from 'react';
import SettingsProvider from '../components/SettingsProvider';
import SettingsPage from '../components/SettingsPage';
import withPageTimeTracking from '../components/withPageTimeTracking';
import Tooltip from '../components/Tooltip';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const TrackedSettingsPage = withPageTimeTracking(SettingsPage, currentPage);

  return (
    <div className="app">
      <SettingsProvider>
        <div className="header">
          <h1>My App</h1>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                My Website
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="content">
          <TrackedSettingsPage />
          <Tooltip text="Tooltip for Home" position="top">
            <div className="tooltip-trigger">Click me</div>
          </Tooltip>
        </div>
      </SettingsProvider>
    </div>
  );
}
