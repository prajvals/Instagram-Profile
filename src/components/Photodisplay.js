import React, { Component } from "react";

class Photodisplay extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <figure className="figure">
        <img className="Photo" src={posts.imageLink} alt={posts.description} />
        <figcaption>
          {" "}
          <p>{posts.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              this.props.onRemovePhoto(posts);
            }}
          >
            Remove{" "}
          </button>
        </div>
      </figure>
    );
  }
}
export default Photodisplay;
