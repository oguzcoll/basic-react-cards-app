import React from "react";
import "bulma/css/bulma.css";

function Course(props) {
  //   console.log(props);
  // const title = props.title;
  // const description = props.description;

  const { image, title, description } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Kursslarım" />
        </figure>
      </div>
      <div className="card-content">
        <div clclassNameass="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
}
export default Course;
