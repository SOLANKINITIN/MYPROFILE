import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  socialmedia: {
    marginLeft: theme.spacing() * 6,
    marginTop: theme.spacing() * 6,
    textTransform: 'uppercase',
    fontFamily: 'inherit',
    [theme.breakpoints.only('xs')]: {
      marginLeft: theme.spacing() * 3.7,
      marginTop: theme.spacing() * 1
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: theme.spacing() * 4
    }
  },
  img: {
    [theme.breakpoints.only('sm')]: {
      marginLeft: '6rem !important'
    }
  },
  desription: {
    marginTop: theme.spacing() * 3,
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1rem'
    }
  },
  deatil: {
    marginTop: theme.spacing() * 3,
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1rem'
    }
  }
}));
export default useStyles;
