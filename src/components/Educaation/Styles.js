import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    '&:hover': {
      background: '#0091ea',
      color: '#ffffff',
    },
  },
  container: {
    marginTop: theme.spacing() * 5,
  },
  ten: {
    [theme.breakpoints.only('sm')]: {
      marginTop: '0rem !important',
    },
    [theme.breakpoints.only('ms')]: {
      marginTop: '0rem !important',
    },
  },

  margin: {
    [theme.breakpoints.only('sm')]: {
      marginTop: '0rem !important',
    },
    [theme.breakpoints.only('ms')]: {
      marginTop: '0rem !important',
    },
  },

  marhins: {
    [theme.breakpoints.only('sm')]: {
      marginTop: '3rem !important',
    },
    [theme.breakpoints.only('md')]: {
      marginTop: '0rem !important',
    },
  },
}));
export default useStyles;
