import PropTypes from 'prop-types';

const ColorBox = ({ targetColor }) => {
  return (
    <div
      data-testid="colorBox"
      className="w-48 h-48 mb-6 border-4 border-black"
      style={{ backgroundColor: targetColor }}
    >
      {/* The target color is displayed here */}
    </div>
  );
};

ColorBox.propTypes = {
  targetColor: PropTypes.string.isRequired,
};

export default ColorBox;
