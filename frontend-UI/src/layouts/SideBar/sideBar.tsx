import "./sideBar.css"

const SideBar = () => {
    return (
        <div className="dashboard-links">
            <div className="drugs-selected">
              <img className="img-2" alt="Drugs" src="/img/drugs.svg" />
              <div className="text-wrapper-35">Drugs</div>
            </div>
            <div className="home">
              <img className="img-2" alt="Home" src="/img/home.svg" />
              <div className="text-wrapper-36">Home</div>
            </div>
            <div className="history">
              <img className="img-2" alt="History" src="/img/history.svg" />
              <div className="text-wrapper-36">History</div>
            </div>
            <div className="logout">
              <div className="logout-icon-wrapper">
                <div className="logout-icon">
                  <div className="logout-2" />
                </div>
              </div>
              <div className="text-wrapper-36">Logout</div>
            </div>
          </div>
    )
}

export default SideBar;