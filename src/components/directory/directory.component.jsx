import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://i.pinimg.com/564x/f9/b3/7b/f9b37b223f246983de63199de83220e0.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://i.pinimg.com/564x/2a/75/a8/2a75a864b9212f54e19f3a438308d8a2.jpg",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://i.pinimg.com/564x/9a/a2/cc/9aa2cc38ccf9c4599c5398bcc673582e.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://i.pinimg.com/564x/d7/8b/7f/d78b7f42c8ddd62afaeb2c732ed1cef2.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl:
            "https://i.pinimg.com/564x/c2/64/bf/c264bf3018f4fec7a787aecff32cf2c6.jpg",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
