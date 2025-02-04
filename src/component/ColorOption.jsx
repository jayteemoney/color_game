import PropTypes from 'prop-types';

const ColorOption = ({ color, onClick }) => {
  return (
    <button
    data-testid="colorOption"
    className="w-24 h-24 rounded-full animate-pulse transition-transform transform hover:scale-110 border-4 border-transparent hover:border-white "
    style={{ backgroundColor: color }}
    onClick={() => onClick(color)}
  />
);
};

ColorOption.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ColorOption;
