import * as React from "react";

const DropDownItem = ({ value }) => {
  return (
    <div style={{ textAlign: "start" }}>
      <p style={{ background: "#FFFFFF" }} dangerouslySetInnerHTML={value.label} />
      <div style={{ background: "#FFFFFF", display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", background: "#FFFFFF" }}>
          <img style={{ background: "#FFFFFF" }} alt="option" height="45" width="45" src={value.image} />
          <h4 style={{ background: "#FFFFFF" }}> {value.title} </h4>
        </div>
        <h4 style={{ background: "#FFFFFF" }}>
          {value.curr}
          {value.price}
        </h4>
      </div>
    </div>
  );
};
export default DropDownItem;
