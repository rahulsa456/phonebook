
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Recent from './components/Recent';
import Allcontacts from './components/Allcontacts';
import Favourite from './components/Favourite';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NewContactModal from './components/NewContactMadal';



const store = createStore(allReducers)

export default function App() {
  const [value, setValue] = React.useState(1);

  return (
    <Provider store = {store}>
      <Box sx={{ width: 400, margin: 'auto'}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="All Contacts" icon={<PersonIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
        {(value===0) && <Recent/>}
        {(value===1) && <Allcontacts/>}
        {(value===2) && <Favourite/>}
        
      </Box>
      <NewContactModal/>
      
      
    </Provider>
    
  );
}