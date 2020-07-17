import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";
import { Cell, Grid } from "styled-css-grid";
const CollectionPreview = ({ title, items, history }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`shop/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      <Grid columns="repeat(auto-fit,minmax(300px,1fr))">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <Cell>
              <CollectionItem key={item.id} item={item} />
            </Cell>
          ))}
      </Grid>
    </div>
  </div>
);

export default withRouter(CollectionPreview);
