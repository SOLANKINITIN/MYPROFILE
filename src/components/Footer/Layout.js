import React from 'react';
import useStyles from './Styles';
import { Grid, Container } from '@material-ui/core';
const Layout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12}>
          © CopyRights Solanki Nitin. All Rights Reserved.
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
