import { makeStyles } from '@material-ui/core/styles';
import { green } from '@mui/material/colors';

export default makeStyles((theme) => ({
    appbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        width: '100vw',
        backgroundColor: '#5CA651'
    },
    toolbar: {
        display: 'flex',
    },
    logoImage: {
        width: '100px'
    }
}));