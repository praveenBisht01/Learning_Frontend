
function Card(props) {
  return (
    <div className="job-card">

      <div className="card-top">
        <div className="company-logo">
          <img
            src={props.logo}
            alt={props.company}
          />
        </div>

        <button className="save-btn">
          Save
        </button>
      </div>

      <div className="company-info">

        <div className="company-row">
          <h3>{props.company}</h3>
          <span>{ props.posted}</span>
        </div>

        <h2 className="job-title">
         {props.title}
        </h2>

      </div>

      <div className="job-tags">
        <span>{ props.type}</span>
        <span>{props.level}</span>
      </div>

      <div className="divider"></div>

      <div className="card-bottom">

        <div>
          <h2>{props.salary}</h2>
          <p>{props.location}</p>
        </div>

        <button className="apply-btn">
          Apply now
        </button>

      </div>

    </div>
  );
}

export default Card;