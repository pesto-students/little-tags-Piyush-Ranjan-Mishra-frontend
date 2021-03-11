import React, { Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ProductDemo from "../../assets/product-demo.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import { useIntl } from "react-intl";
import { productMessage } from "../../translations";
function PostDetail() {
  const intl = useIntl();
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "450px" }}>
            <CardActionArea>
              <CardMedia
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                style={{ height: "600px" }}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>T-shirt</h2>
            <h3>$300</h3>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            magnam accusamus odit! Aliquam repudiandae accusantium illum beatae
            cupiditate sit illo, ipsam ducimus eius corrupti atque quibusdam,
            laudantium ad? Quod, doloribus!
          </div>
          <Box
            pt={4}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div>
              <h3> {intl.formatMessage(productMessage.color)}</h3>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                  style={{
                    borderRadius: "47px",
                    backgroundColor: "pink",
                    height: "1rem",
                    width: "1rem",
                    display: "flex",
                    justifyContent: "start",
                  }}
                ></div>
                <div
                  style={{
                    borderRadius: "47px",
                    backgroundColor: "blue",
                    height: "1rem",
                    width: "1rem",
                  }}
                ></div>
                <div
                  style={{
                    borderRadius: "47px",
                    backgroundColor: "red",
                    height: "1rem",
                    width: "1rem",
                  }}
                ></div>
              </Box>
            </div>
            <div>
              <h3>{intl.formatMessage(productMessage.size)}</h3>
              <ButtonGroup
                size="small"
                aria-label="small outlined button group"
              >
                <Button>XL</Button>
                <Button>S</Button>
                <Button>M</Button>
              </ButtonGroup>
            </div>
          </Box>
          <Box
            pt={4}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ display: "inline" }}>
              <h3 style={{ display: "inline" }}>
                {intl.formatMessage(productMessage.quantity)}
              </h3>
              <ButtonGroup
                size="small"
                aria-label="small outlined button group"
              >
                <Button>+</Button>
                <p style={{ textAlign: "center" }}>1</p>
                <Button>-</Button>
              </ButtonGroup>
            </div>
            <Button
              style={{
                padding: "10px 30px",
                borderRadius: "47px",
                background: "#6066EC",
                color: "white",
              }}
            >
              {intl.formatMessage(productMessage.shoppingNow)}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PostDetail;

// <div>
// <Grid container spacing={32} className="my-0">
//   <Grid item xs={12} sm={12} md={6} lg={6}>
//     <Grid container spacing={24}>
//       <Grid item xs={3} sm={2} md={2} lg={2}>
//         <div className="product-gallery-nav"></div>
//       </Grid>
//       <Grid item xs={9} sm={10} md={10} lg={10}>
//         <div className="preview-full-image">
//           <div className="iron-shadow product-gallery-item ">
//             <div>
//               <a href="javascript:void(0)">
//                 <Card>
//                   <CardMedia image={`${ProductDemo}`} />
//                 </Card>
//               </a>
//             </div>
//           </div>
//         </div>
//       </Grid>
//     </Grid>
//   </Grid>
//   <Grid item xs={12} sm={12} md={6} lg={6} className="py-0">
//     <div className="detail-content">
//       <h3>T-Shirt</h3>
//       <p>$300</p>
//       <div className="short-desc">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Phasellus aliquam pharetra nibh et semper. Nulla vestibulum
//           tellus et fermentum tincidunt. Sed fringilla, est nec egestas
//           auctor, justo orci ornare neque, vitae accumsan tellus dui ac
//           ipsum.{" "}
//         </p>
//       </div>
//       <div>Color</div>
//       <div>Size</div>
//       <div className="mb-sm-50 mb-20 detail-btns">
//         <Button className="button btn-base btn-lg mb-20 mb-sm-0">
//           buy now
//         </Button>
//         <Button variant="contained" color="primary">
//           Link
//         </Button>
//       </div>
//       <div className="d-flex justify-content-start align-items-center">
//         <span className="d-inline-block mr-15 text-14">Share Now</span>
//         <div className="detail-product-share">
//           {/* <SocialIcons></SocialIcons> */}
//         </div>
//       </div>
//     </div>

//     {/* <ProductReview ref={this.reviewDialog} /> */}
//   </Grid>
// </Grid>
// </div>
