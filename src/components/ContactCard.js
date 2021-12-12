
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { toggle_fav } from '../actions';

const styles = {
    container : {
        display : 'flex',
        height : '60px',
        padding : '8px',
        alignItems: 'center'
    },
    infocontainer: {
        flex: '1',
        padding : '10px'
    },
    mobile :{
        fontSize: '14px',
        color: 'grey'
    }


}

function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

function ContactCard(props) {
    const dispatch = useDispatch();
    return (
        <div style = {styles.container}>
            <div>
                <Avatar {...stringAvatar(props.name)} />
            </div>
            <div style={styles.infocontainer}>
                <b>{props.name}</b>
                <br/>
                <span style={styles.mobile}>+91 {props.mobile}</span>
            </div>
            <div>
                <Rating
                    name="simple-controlled"
                    value={props.isFav}
                    max={1}
                    onChange={(event, newValue) => {
                        dispatch(toggle_fav(props.id))
                        //setValue(newValue);
                    }}
                />
            </div>
            
        </div>
    )
}

export default ContactCard
