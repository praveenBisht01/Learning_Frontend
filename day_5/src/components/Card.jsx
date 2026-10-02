import "./index.css"

function Card() {
  return (
    <div className="job-card">

      <div className="card-top">
        <div className="company-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
          />
        </div>

        <button className="save-btn">
          Save
        </button>
      </div>

      <div className="company-info">

        <div className="company-row">
          <h3>Amazon</h3>
          <span>• 5 days ago</span>
        </div>

        <h2 className="job-title">
          Senior UI/UX Designer
        </h2>

      </div>

      <div className="job-tags">
        <span>Part-time</span>
        <span>Senior level</span>
      </div>

      <div className="divider"></div>

      <div className="card-bottom">

        <div>
          <h2>$120/hr</h2>
          <p>San Francisco, CA</p>
        </div>

        <button className="apply-btn">
          Apply now
        </button>

      </div>

    </div>
  );
}

export default Card;