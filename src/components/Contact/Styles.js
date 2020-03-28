import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  socialmedia: {
    marginLeft: theme.spacing() * 6,
    marginTop: theme.spacing() * 10,
    [theme.breakpoints.only('xs', 'sm')]: {
      marginLeft: theme.spacing() * 3.7,

      marginTop: theme.spacing() * 1
    }
  },
  desription: {
    marginTop: theme.spacing() * 3,
    [theme.breakpoints.only('xs', 'sm')]: {
      fontSize: '0.8rem'
    }
  },
  deatil: {
    marginTop: theme.spacing() * 3,
    [theme.breakpoints.only('xs', 'sm')]: {
      fontSize: '1rem'
    }
  }
}));
export default useStyles;
