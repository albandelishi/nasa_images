import "./card.css";
export default function Card({
  imgSource,
  imgAlt,
  title,
  location,
  photographerName,
}) {
  return (
    <>
      <div className="col">
        <div className="card h-100 shadow-sm">
          <div className="text-center">
            <div className="img-hover-zoom img-hover-zoom--colorize">
              <img className="shadow" src={imgSource} alt={imgAlt} />
            </div>
          </div>
          <div className="card-body">
            <div className="clearfix mb-3"></div>
            <div className="my-2 text-center">
              <h1>{title}</h1>
            </div>
            <div className="mb-3">
              <h2 className="text-uppercase text-center sub-header">
                {location && `Location: ${location}`}
              </h2>
              <h2 className="text-uppercase text-center sub-header">
                {photographerName && `Photographer: ${photographerName}`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
