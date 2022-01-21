/* import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

const DropDown = (props)=>{
    return(
    <div style={{margin:"20px"}}>
        <InputLabel  id="demo-multiple-name-label">Name</InputLabel>
        <Select
        placeholder='hola'
        style={{width:""+props.width}}
        labelId="demo-multiple-name-label"        
        id={props.id}
        value={props.value}
        onChange={e=>props.set(e.target.value)}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
        >
            {props.items.map((item) => (
                <MenuItem
                    key={item}
                    value={item}
                    >
                    {item}
                </MenuItem>))}
        </Select>
    </div>
        
    )
}
export default DropDown */
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function DropDown(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: props.width }}>
        <InputLabel id="demo-multiple-name-label">{props.label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={props.value}
          onChange={e=>props.set(e.target.value)}
          input={<OutlinedInput label={props.label} />}
          MenuProps={MenuProps}
        >
          {props.items.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}