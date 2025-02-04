import PropTypes from 'prop-types';

const Score = ({ score }) => {
  return (
    <div>
      <h2 
      data-testid="score"
      className="text-xl font-bold text-amber-50">Score: {score}</h2>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
