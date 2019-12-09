import React, { Component } from "react";
import Photodisplay from "./Photodisplay";

class Photogallery extends Component {
  render() {
    return (
      <div className="grid-one">
        {this.props.posts.map((posts, index) => 
          <Photodisplay
            key={index}
            posts={posts}
            onRemovePhoto={this.props.onRemovePhoto}
          />
        )}
        ;
      </div>
    );
  }
}
export default Photogallery;
