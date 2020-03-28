import React from 'react';
import useStyles from './Styles';
import { Grid, Container, Typography } from '@material-ui/core';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Layout = () => {
  const classes = useStyles();

  return (
    <Container id='Skill' maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={6}>
          <div className={classes.img}>
            <img
              src='images/developerActivity.svg'
              style={{ width: '100%' }}
              alt='programmer'
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Typography
            className={classes.desription}
            variant='h4'
            component='h2'
          >
            What i do
            <div className={classes.containerfluid}>
              <OwlCarousel items={3} className='owl-theme' loop nav margin={8}>
                <div className={classes.fab}>
                  <i className='fab fa-github'></i>
                </div>
                <div className={classes.fab}>
                  <i className='fab fa-npm'></i>
                </div>
                <div className={classes.fab}>
                  <i className='fas fa-database'></i>
                </div>
                <div className={classes.fab}>
                  <i className='fab fa-js'></i>
                </div>
                <div className={classes.fab}>
                  <i className='fab fa-node'></i>
                </div>
                <div className={classes.fab}>
                  <i className='fab fa-react'></i>
                </div>

                <div className={classes.fab}>
                  <i className='fab fa-html5'></i>
                </div>
                <div className={classes.fab}>
                  <i className='fab fa-css3-alt'></i>
                </div>
              </OwlCarousel>
            </div>
            {/* <div class='timeline-event'>
              <span class='timeline-event-thumbnail'>June 2014 - Mar 2015</span>
            </div> */}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
