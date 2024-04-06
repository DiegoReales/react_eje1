import PropTypes from 'prop-types';

function Card({ image, title, text, count }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt="Card" style={{ height: '150px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title d-flex justify-content-between">
                <span>{title}</span>
                <span>Contador: {count}</span>
            </h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary mt-auto">Detalle</a>
        </div>
    </div>
  );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    count: PropTypes.number
};

export default Card;
