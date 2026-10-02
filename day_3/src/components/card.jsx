

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <h2>
[props.name].</h2>
      <p>{props.about}</p>

      <button>View Profile</button>
    </div>
  );
}

export default Card;