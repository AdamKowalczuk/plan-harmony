import React from "react";
import "./notes.scss";
import "../Convex/convex.scss";
import "../Concave/concave.scss";
import Nav from "../Nav/Nav";
const Notes = () => {
  return (
    <>
      <Nav text="Notes" />
      <div className="notes">
        <textarea className="concave" cols="30" rows="20"></textarea>
        <div className="convex edit-button">
          <h3
          // onClick={() => {
          //   dispatch(addToList(form));
          //   dispatch(resetForm());
          // }}
          >
            Edytuj
          </h3>
        </div>
      </div>
    </>
  );
};

export default Notes;
