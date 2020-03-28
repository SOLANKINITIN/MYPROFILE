import React from 'react';
import useStyles from './Styles';
import { Grid, Container } from '@material-ui/core';
const Layout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12}>
          © 𝒞𝑜𝓅𝓎𝓇𝒾𝑔𝒽𝓉𝓈 𝒮𝑜𝓁𝒶𝓃𝓀𝒾 𝒩𝒾𝓉𝒾𝓃. 𝒜𝓁𝓁 𝓇𝒾𝑔𝒽𝓉𝓈 𝓇𝑒𝓈𝑒𝓇𝓋𝑒𝒹.
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
