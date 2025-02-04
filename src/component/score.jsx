import PropTypes from 'prop-types';

const Score = ({ score }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Score: {score}</h2>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
