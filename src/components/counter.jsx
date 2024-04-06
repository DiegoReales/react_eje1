import PropTypes from 'prop-types';

function Contador ({ count, incrementar, decrementar, resetear }) {
  return (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">Contador: {count}</h3>
            <div>
                <button type="button" className="btn btn-primary mx-2" onClick={incrementar}>Incrementar</button>
                <button type="button" className="btn btn-secondary mx-2" onClick={decrementar}>Decrementar</button>
                <button type="button" className="btn btn-danger mx-2" onClick={resetear}>Resetear</button>
            </div>
        </div>
    </div>
  );
}

Contador.propTypes = {
    count: PropTypes.number.isRequired,
    incrementar: PropTypes.func.isRequired,
    decrementar: PropTypes.func.isRequired,
    resetear: PropTypes.func.isRequired,
};

export default Contador;
