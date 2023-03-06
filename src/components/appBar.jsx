import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const ButtonAppBar = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      width: '100vw',
      textAlign: 'left'
    }}>
      <AppBar position="static" sx={{
        backgroundColor: '#7DB9B6'
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DogFriends
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;