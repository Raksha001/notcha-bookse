import React from "react";
import Card from "@material-ui/core/Card";
import Tilt from "react-parallax-tilt";

export default function Notes(props) {
  const { notes } = props;
  if (!notes || notes.length === 0) {
    return <p className="mt-5">You haven't created any notes yet.</p>;
  } else {
    return (
      <>
        <h4 className="container">Notes</h4>
          <div className="container mt-4">
           
            <div className="card-columns">
              {notes.map((note) => {
                return (
                  <Tilt>
                  <Card key={note.id} className="card p-3">
                    <h6 className="m-0">{note.note}</h6>
                  </Card>
                  </Tilt>
                );
              })}
            </div>
          </div>
      </>
    );
  }
}

