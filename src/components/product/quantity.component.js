import React from "react";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { useIntl } from "react-intl";
import { productMessage } from "../../translations";
function Quantity() {
  const intl = useIntl();
  return (
    <>
      <div style={{ display: "inline" }}>
        <Box mb={2}>
          <h3 style={{ display: "inline" }}>
            {intl.formatMessage(productMessage.quantity)}
          </h3>
        </Box>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>+</Button>
          <p style={{ textAlign: "center" }}>1</p>
          <Button>-</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Quantity;
