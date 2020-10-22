import React from "react";
import CollectionItem from "../Collection-Item/collection-item";
import "./Collection_preview.scss";
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemprops }) => (
          <CollectionItem key={id} {...itemprops} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
