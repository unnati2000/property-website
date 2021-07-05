import React, { useState } from "react";
import { Card, Container, Button, Typography } from "@material-ui/core";
import house from "../../assets/house.png";
import building from "../../assets/building.png";
import proplan from "../../assets/proplan.png";
import useStyles from "./SelectProperty.styles";
import { useAuth } from "../../context/auth-context";
import AddPropertyComponent from "../add-property-component/AddPropertyComponent";

const SelectProperty = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();

  const [plan, setPlan] = useState("");
  return (
    <div className={classes.mainDiv}>
      <Container className={classes.container}>
        {currentUser?.packageName === "Primary Pack" && (
          <AddPropertyComponent />
        )}

        {currentUser?.packageName === "Developer Pack" && (
          <>
            <Button
              onClick={() => setPlan("smol")}
              className={plan === "smol" && classes.button}
            >
              <Card className={classes.card}>
                <img src={house} className={classes.cardImg} />
                <Typography variant="h6" color="primary">
                  Smol plan
                </Typography>
              </Card>
            </Button>

            <Button
              onClick={() => setPlan("medium")}
              className={plan === "medium" && classes.button}
            >
              <Card className={classes.card}>
                <img src={building} className={classes.cardImg} />
                <Typography variant="h6" color="primary">
                  Medium plan
                </Typography>
              </Card>
            </Button>
          </>
        )}

        {currentUser?.packageName === "Pro Developer Pack" && (
          <>
            <Button
              onClick={() => setPlan("smol")}
              className={plan === "smol" && classes.button}
            >
              <Card className={classes.card}>
                <img src={house} className={classes.cardImg} />
                <Typography variant="h6" color="primary">
                  Smol plan
                </Typography>
              </Card>
            </Button>

            <Button
              onClick={() => setPlan("medium")}
              className={plan === "medium" && classes.button}
            >
              <Card className={classes.card}>
                <img src={building} className={classes.cardImg} />
                <Typography variant="h6" color="primary">
                  Medium plan
                </Typography>
              </Card>
            </Button>
            <Button
              onClick={() => setPlan("big")}
              className={plan === "big" && classes.button}
            >
              <Card className={classes.card}>
                <img src={proplan} className={classes.cardImg} />
                <Typography variant="h6" color="primary">
                  Big plan
                </Typography>
              </Card>
            </Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default SelectProperty;
