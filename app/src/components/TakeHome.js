import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeDog } from "../actions/listActions";

//* STYLES HERE //
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 400
  }
});

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

//* COMPONENT HERE *//
const TakeHome = props => {
  const classes = useStyles();
  return (
    <MainWrapper>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.takeHome}
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Your new dog!
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Assumenda at consectetur facilis quasi
                recusandae expedita sit ratione unde doloribus, earum
                quibusdam eum quas nisi ut. Minima molestiae nemo
                necessitatibus voluptates.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => {
                props.removeDog();
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      </div>
    </MainWrapper>
  );
};

const mapStateToProps = state => {
  return {
    takeHome: state.takeHome
  };
};

export default connect(mapStateToProps, { removeDog })(TakeHome);
