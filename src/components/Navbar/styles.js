import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
    },
    toolbar: {
        display: 'flex',
    },
    logoImage: {
        width: '100px'
    }
}));