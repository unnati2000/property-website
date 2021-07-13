import React, { useEffect } from "react";
import useStyles from "./Package.styles";
import { Card, Grid, Typography, Container } from "@material-ui/core";
import { BsHouse } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import StripleButton from "../stripe-button/StripeButton.component";
import { useAuth } from "../../context/auth-context";
import { useHistory } from "react-router";

const Package = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (currentUser?.packageName) {
      history.push("/");
    }
  }, [currentUser, history]);
  return (
    <div className={classes.packageDiv}>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Card className={classes.card}>
              <Typography variant="h5" className={classes.cardHeader}>
                Primary Pack
              </Typography>
              <BsHouse className={classes.icons} />
              <Typography variant="h4" className={classes.priceHeader}>
                $35
              </Typography>

              <div>
                <Typography className={classes.perks}>Perks</Typography>
                <Typography>- 10 properties -</Typography>
                <Typography>- 4 photos each property -</Typography>
                <Typography>- Only flats allowed - </Typography>
              </div>
              <br></br>
              <StripleButton
                plan="Primary Pack"
                price="$35"
                className={classes.button}
              />
              <br />
              <br />
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card className={classes.card}>
              <Typography variant="h5" className={classes.cardHeader}>
                Developer Pack
              </Typography>
              <BiBuilding className={classes.icons} />
              <Typography variant="h4" className={classes.priceHeader}>
                $100
              </Typography>

              <div>
                <Typography className={classes.perks}>Perks</Typography>
                <Typography>- 40 properties -</Typography>
                <Typography>- 8 photos each property -</Typography>
                <Typography>- Flats and projects - </Typography>
              </div>
              <br />

              <StripleButton
                plan="Developer Pack"
                price="$100"
                className={classes.button}
              />
              <br />
              <br />
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card className={classes.card}>
              <Typography variant="h5" className={classes.cardHeader}>
                Pro developer Pack
              </Typography>
              <BsBuilding className={classes.icons} />
              <Typography variant="h4" className={classes.priceHeader}>
                $200
              </Typography>

              <div>
                <Typography className={classes.perks}>Perks</Typography>
                <Typography>- 100 properties -</Typography>
                <Typography>- 10 photos of each property -</Typography>
                <Typography>- Can add all types of properties - </Typography>
              </div>
              <br />

              <StripleButton
                plan="Pro Developer Pack"
                price="$200"
                className={classes.button}
              />
              <br />
              <br />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Package;
