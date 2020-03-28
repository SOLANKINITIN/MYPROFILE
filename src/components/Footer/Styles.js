import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing() * 5,
    display: 'flex'
  }
}));
export default useStyles;
