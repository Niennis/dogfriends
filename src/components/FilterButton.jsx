import React from 'react';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

const FilterButton = ({ filter, removeFilter }) => {
  return (
    <Button
      sx={{
        margin: '8px',
        color: '#57817f',
        maxWidth: "200px",
        borderColor: '#57817f',
        '&:hover': {
          backgroundColor: '#57817f',
          borderColor: '#57817f',
          boxShadow: 'none',
          color: 'white',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: 'text.primary',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      }}
      key={filter}
      size="small"
      variant="outlined"
      endIcon={<ClearIcon />}
      onClick={removeFilter}
    >
      {filter}
    </Button>
  )
}

export default FilterButton;