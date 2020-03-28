import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  socialmedia: {
    marginLeft: theme.spacing() * 6,
    marginTop: theme.spacing() * 6,
    [theme.breakpoints.only('xs', 'sm')]: {
      marginLeft: theme.spacing() * 3.7,
      marginTop: theme.spacing() * 1
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
    [theme.breakpoints.only('xs', 'sm')]: {
      padding: '0.5rem !important',
      margin: '0.5rem !important',
      marginTop: '3rem !important'
    }
  }
}));
export default useStyles;
