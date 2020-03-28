import React from 'react';
import useStyles from './Styles';
import { Grid, Container, Button, Typography } from '@material-ui/core';
import './About.css';

const socialMediaLinks = {
  github: 'https://github.com/SOLANKINITIN',
  linkedin: 'https://www.linkedin.com/in/nitin-solanki-5172ba190',
  gmail: 'solankinitin2912@gmail.com',
  instagram: 'https://www.instagram.com/solankinitin2912',
  facebook: 'https://www.facebook.com/solanki.nitin.5059',
  drive:
    'https://drive.google.com/file/d/1xRMV9CWhwtM2UIcE3Mp-LcE352eYqztK/view',
  skill: 'https://solankinitin.netlify.com/#Skill'
};
const Layout = () => {
  const classes = useStyles();

  return (
    <Container id='About' maxWidth='xl'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={6}>
          <div className={classes.socialmedia}>
            <Typography
              variant='h2'
              className='desription'
              style={{ color: 'black' }}
              component='h2'
            >
              Hi All I'M
              <span className='waveemoji'>👋🏻</span>
            </Typography>
            <Typography className='desription' variant='h4' component='h2'>
              Nitin Solanki
            </Typography>
            <Typography className='deatil' variant='h4' component='h2'>
              {/* ｉ　ａｍ　💻ｆｏｎｔ🖱️ｅｎｄ　ｂａｃｋ⌨️ｅｎｄ　ｂａｃｋｅｎｄ */}
              i am💻fornt🖱️end back⌨️end devloper💻
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
            <div className={classes.block}>
              <Button
                className={classes.Button}
                variant='contained'
                color='primary'
                href={socialMediaLinks.skill}
              >
                Contact Me
              </Button>

              <Button
                className={classes.Button}
                variant='contained'
                color='primary'
                href={socialMediaLinks.drive}
              >
                See My Resume
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <img
            src='images/manOnTable.svg'
            className={classes.img}
            style={{
              width: '100%'
            }}
            alt='programmer'
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
