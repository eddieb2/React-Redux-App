import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchData } from "../actions/listActions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//* STYLES HERE *//
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 450
  }
});

const CardWrapper = styled.div`
  margin: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2%;
  grid-row-gap: 2%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

//* COMPONENT HERE *//
const List = props => {
  const classes = useStyles();

  const handleClick = event => {
    event.preventDefault();
    props.fetchData();
  };

  return (
    <div>
      <ButtonWrapper>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          Find A Dog !
        </Button>
      </ButtonWrapper>
      <CardWrapper>
        {props.images.map(item => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={item} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Doberman
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Unde et in tenetur animi ullam, recusandae
                  asperiores soluta sint assumenda, molestiae
                  temporibus odit voluptates mollitia optio fugiat
                  cumque eum laudantium architecto.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
              >
                Share
              </Button>
              <Button size="small" color="primary" variant="outlined">
                Take Home!
              </Button>
            </CardActions>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

export default connect(mapStateToProps, { fetchData })(List);
