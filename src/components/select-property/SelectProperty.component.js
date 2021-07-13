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
      {currentUser?.packageName === "Primary Pack" && <AddPropertyComponent />}

      {currentUser?.packageName === "Developer Pack" && (
        <>
          <Container className={classes.container}>
            <Button
              onClick={() => setPlan("flat")}
              className={plan === "flat" && classes.button}
            >
              <Card className={classes.card}>
                <img src={house} className={classes.cardImg} alt="house" />
                <Typography variant="h6" color="primary">
                  Add a flat
                </Typography>
              </Card>
            </Button>

            <Button
              onClick={() => setPlan("project")}
              className={plan === "project" && classes.button}
            >
              <Card className={classes.card}>
                <img
                  src={building}
                  className={classes.cardImg}
                  alt="building"
                />
                <Typography variant="h6" color="primary">
                  Add a project
                </Typography>
              </Card>
            </Button>
          </Container>
          {plan && <AddPropertyComponent plan={plan} />}
        </>
      )}

      {currentUser?.packageName === "Pro Developer Pack" && (
        <>
          <Container className={classes.container}>
            <Button
              onClick={() => setPlan("flat")}
              className={plan === "flat" && classes.button}
            >
              <Card className={classes.card}>
                <img src={house} className={classes.cardImg} alt="flat" />
                <Typography variant="h6" color="primary">
                  Add a flat
                </Typography>
              </Card>
            </Button>

            <Button
              onClick={() => setPlan("project")}
              className={plan === "project" && classes.button}
            >
              <Card className={classes.card}>
                <img
                  src={building}
                  className={classes.cardImg}
                  alt="building"
                />
                <Typography variant="h6" color="primary">
                  Add a project
                </Typography>
              </Card>
            </Button>
            <Button
              onClick={() => setPlan("villa")}
              className={plan === "villa" && classes.button}
            >
              <Card className={classes.card}>
                <img src={proplan} className={classes.cardImg} alt="building" />
                <Typography variant="h6" color="primary">
                  Add villa
                </Typography>
              </Card>
            </Button>
          </Container>

          {plan && <AddPropertyComponent plan={plan} />}
        </>
      )}
    </div>
  );
};

export default SelectProperty;
