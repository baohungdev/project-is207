import React from "react";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { Cell, Grid } from "styled-css-grid";
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        <Grid columns="repeat(auto-fit,minmax(400px,1fr))">
          {items.map((item) => (
            <Cell>
              <CollectionItem key={item.id} item={item} />
            </Cell>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
