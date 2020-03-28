import React from 'react';
import useStyles from './Styles';
import { Grid, Container, Typography } from '@material-ui/core';
const socialMediaLinks = {
  github: 'https://github.com/SOLANKINITIN',
  linkedin: 'https://www.linkedin.com/in/nitin-solanki-5172ba190',
  gmail: 'solankinitin2912@gmail.com',
  instagram: 'https://www.instagram.com/solankinitin2912',
  facebook: 'https://www.facebook.com/solanki.nitin.5059'
};
const Layout = () => {
  const classes = useStyles();

  return (
    <Container id='Contact' maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={6}>
          <div className={classes.socialmedia}>
            <Typography
              variant='h2'
              className='desription'
              style={{ color: 'black' }}
              component='h2'
            >
              𝓒𝓸𝓷𝓽𝓪𝓬𝓽 𝓜𝓮
              <span className='waveemoji'>☎️</span>
            </Typography>
            <Typography className={classes.deatil} variant='h4' component='h2'>
              𝓶𝓸𝓫𝓲𝓵𝓮𝓝𝓸:7485901360
            </Typography>
            <Typography
              className={classes.desription}
              variant='h4'
              component='h2'
            >
              𝓔𝓶𝓪𝓲𝓵:𝓼𝓸𝓵𝓪𝓷𝓴𝓲𝓷𝓲𝓽𝓲𝓷2912@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶
            </Typography>

            <a
              href={socialMediaLinks.github}
              className='icon-button github'
              // target='_blank'
            >
              <i className='fab fa-github'></i>
              <span></span>
            </a>
            <a
              href={socialMediaLinks.instagram}
              className='icon-button instagram'
              // target='_blank'
            >
              <i className='fab fa-instagram'></i>
              <span></span>
            </a>
            <a
              href={socialMediaLinks.linkedin}
              className='icon-button linkedin'
              // target='_blank'
            >
              <i className='fab fa-linkedin-in'></i>
              <span></span>
            </a>
            <a
              href={`mailto:${socialMediaLinks.gmail}`}
              className='icon-button google'
              // target='_blank'
            >
              <i className='fab fa-google'></i>
              <span></span>
            </a>

            <a
              href={socialMediaLinks.facebook}
              className='icon-button facebook'
              // target='_blank'
            >
              <i className='fab fa-facebook-f'></i>
              <span></span>
            </a>
            <div className={classes.block}></div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <img
            src='images/contactMail.png'
            style={{ width: '100%' }}
            alt='contactMail'
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
