import React from "react";
import Card from "@material-ui/core/Card";
function FilterCard({ children }) {
  return (
    <>
      <Card style={{ width: "75%", marginBottom: "1.3rem" }}>{children}</Card>
    </>
  );
}

export default FilterCard;
