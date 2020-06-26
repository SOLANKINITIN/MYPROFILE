import React from 'react';
import useStyles from './Styles';
import {
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';

const Layout = () => {
  const classes = useStyles();

  return (
    <Container id='Educaation' className={classes.container} maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} lg={4}>
          <Card>
            <CardContent className={classes.card}>
              <Typography variant='h6' component='h2'>
                Shree Swaminarayan School
                <Typography variant='body1' component='h2'>
                  <h3>
                    10<sup>Th</sup> Class
                  </h3>
                </Typography>
                <Typography variant='body1' component='h2'>
                  June 2014 - Mar 2015
                </Typography>
                <Typography variant='body1' component='h2'>
                  Passed width 50%
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Card>
            <CardContent className={classes.card}>
              <Typography variant='h6' component='h2'>
                Ved International School
                <Typography
                  variant='body1'
                  className={classes.ten}
                  component='h2'
                >
                  <h3>
                    12<sup>Th</sup> Class
                  </h3>
                </Typography>
                <Typography
                  variant='body1'
                  className={classes.marhins}
                  component='h2'
                >
                  June 2016 - Mar 2017
                </Typography>
                <Typography variant='body1' component='h2'>
                  Passed width 55%
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Card>
            <CardContent className={classes.card}>
              <Typography variant='h6' component='h2'>
                Bholabhai College of Computer Studies
                <Typography variant='body1' component='h2'>
                  <h3>BCA</h3>
                </Typography>
                <Typography variant='body1' component='h2'>
                  June 2017 - Mar 2020
                </Typography>
                <Typography variant='body1' component='h2'>
                  SEM-5 BCA SPI:75.55
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
