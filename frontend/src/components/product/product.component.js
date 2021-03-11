import React from "react";
import { Grid } from "@material-ui/core";
import PageTitle from "./pagetitle.component";
import PostDetail from "./postdetail.component";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { productMessage } from "../../translations";
import { useIntl } from "react-intl";
function ProductPage() {
  const intl = useIntl();
  return (
    <>
      <div>
        <PageTitle title={intl.formatMessage(productMessage.header)} />
        <div>
          <Grid container spacing={0}>
            <Grid item lg={12} className="mx-auto">
              <Box pt={10}>
                <PostDetail />
              </Box>
            </Grid>
          </Grid>
          <Box p={6} style={{ textAlign: "center", fontSize: "1.8rem" }}>
            <h2>{intl.formatMessage(productMessage.likeHeader)}</h2>
          </Box>

          <Grid container spacing={32}>
            related product
          </Grid>
          <div className="text-center mt-30">link to categories</div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
