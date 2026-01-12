export default function Cards(props) {
  console.log(props);
  return (
    <>
      <article className="card_holder">
        <div className="imageCroper">
          <img src={props.img.src} alt={props.img.alt} className="travel_pic" />
        </div>
        <main className="main_content">
          <div className="info_loc">
            <img src="../images/marker.png" alt="" className="gps_pic" />
            <p className="countryName">{props.country}</p>
            <a href={props.googleMapsLink}>View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <h4>{props.dates}</h4>
          <p>{props.text}</p>
        </main>
      </article>
    </>
  );
}
