import { Grid, Button, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useIntl } from "react-intl";
import { productMessage } from "../../translations";
import Quantity from "./quantity.component";
const useStyles = makeStyles((theme) => ({}));

function PostDetail() {
  const intl = useIntl();
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={10}>
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
          <div>
            <h2>T-shirt</h2>
            <h3>$300</h3>
          </div>
          <div style={{ maxWidth: "400px", textAlign: "justify" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            magnam accusamus odit! Aliquam repudiandae accusantium illum beatae
            cupiditate sit illo, ipsam ducimus eius corrupti atque quibusdam,
            laudantium ad? Quod, doloribus!
          </div>
          <Box pt={4}>
            <div>
              <h3> {intl.formatMessage(productMessage.color)}</h3>
              <Box>
                <ButtonGroup
                  size="small"
                  aria-label="small outlined button group"
                  variant="contained"
                >
                  <Button color="secondary">Red</Button>
                  <Button color="primary">Blue</Button>
                </ButtonGroup>
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
          <Box pt={4}>
            <Quantity />
            {/* quantity */}
            <Box mt={3}>
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PostDetail;
