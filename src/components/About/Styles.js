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
  block: {
    display: 'flex'
  },
  Button: {
    margin: '1rem !important',
    marginTop: '4rem !important',
    background: '#0091ea !important',

    '&:hover': {
      background: '#ffffff !important ',
      color: '#000 !important'
    },
    [theme.breakpoints.only('xs')]: {
      padding: '0.3rem !important',
      margin: '0.3rem !important',
      marginTop: '3rem !important'
    },
    [theme.breakpoints.only('sm')]: {
      padding: '0.1rem !important',
      margin: '0.1rem !important',
      marginTop: '1rem !important'
    }
  }
}));
export default useStyles;
