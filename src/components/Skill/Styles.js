import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    marginLeft: theme.spacing() * 6,
    [theme.breakpoints.only('xs')]: {
      marginLeft: theme.spacing() * 0
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: theme.spacing() * 0,
      marginTop: '3rem !important'
    }
  },
  desription: {
    color: '#000',
    marginTop: theme.spacing() * 5
  },
  containerfluid: {
    marginTop: theme.spacing() * 5
  },
  fab: {
    padding: theme.spacing() * 2,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0091ea',
    color: '#ffffff',
    '&:hover': {
      color: '#000000'
    }
  }
}));
export default useStyles;
