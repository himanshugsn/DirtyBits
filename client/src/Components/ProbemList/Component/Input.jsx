import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
    border : '1px solid #C0C0C0',
    borderRadius : '20px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const [term , setTerm] = useState('')
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted')
  }
    
  const inputHandler = (e) => {
      console.log(e.target.value)
      setTerm(e.target.value)
  }
  return (
    <Paper onSubmit={handleSubmit} component="form" className={classes.root}>
      <InputBase
        value={term}
        onChange={inputHandler}
        className={classes.input}
        placeholder="Search Something..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}
