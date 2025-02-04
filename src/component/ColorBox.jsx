import PropTypes from 'prop-types';

const ColorBox = ({ targetColor }) => {
  return (
    <div
      data-testid="colorBox"
      className="w-48 h-48 mb-6 rounded-[20px] border-2 border-blue-300 animate-pulse transition-transform transform hover:scale-110 "
      style={{ backgroundColor: targetColor }}
    >
      
    </div>
  );
};

ColorBox.propTypes = {
  targetColor: PropTypes.string.isRequired,
};

export default ColorBox;
