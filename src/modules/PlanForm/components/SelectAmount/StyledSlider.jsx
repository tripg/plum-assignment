import ReactSlider from "react-slider";
import "./slider.css";


const StyledSlider = ({ value, max, min, onChange, marks }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div>
        <ReactSlider
          className="customSlider"
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          markClassName="customSlider-mark"
          value={value}
          renderMark={(props) => {
            if (props.key < value) {
              props.className = "customSlider-mark-completed";
            }
            if (props.key === value) {
              props.className = "customSlider-mark-active";
            }
            if (props.key === 75) {
              return <div />;
            }
            return (
              <span {...props} >
                <p style={{ marginTop: "13px", background: '#FFFFFF' }}>{marks[props.key / 25]}</p>
              </span>);
          }}
          onChange={onChange}
          marks={25}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};

export default StyledSlider;
