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
  margin: {
    marginTop: theme.spacing() * 4.8,
    [theme.breakpoints.only('sm')]: {
      marginTop: '3rem !important',
    },
    [theme.breakpoints.only('md')]: {
      marginTop: '1rem !important',
    },
  },
  marhins: {
    [theme.breakpoints.only('sm')]: {
      marginTop: '2rem !important',
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 'o.5rem !important',
    },
  },
  top: {
    marginTop: theme.spacing() * 0.6,
    [theme.breakpoints.only('sm')]: {
      marginTop: '1rem !important',
      fontSize: '1em',
    },
    [theme.breakpoints.only('md')]: {
      marginTop: '0rem !important',

      fonteight: 'normal',
    },
  },
}));
export default useStyles;
