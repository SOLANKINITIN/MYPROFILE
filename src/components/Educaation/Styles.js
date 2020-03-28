import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    '&:hover': {
      background: '#0091ea',
      color: '#ffffff'
    }
  },
  container: {
    marginTop: theme.spacing() * 5
  }
}));
export default useStyles;
