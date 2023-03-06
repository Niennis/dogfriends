import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Breed = ({ dogs, breed, handleBreed, handleSubBreed }) => {
  const [hide, setHide] = useState(false)

  return (
    <>
      {dogs[breed].length === 0
        ? <MenuItem
          value={breed}
          onClick={() => handleBreed(breed)}
        >
          {breed}
        </MenuItem >
        : <MenuItem
          value={breed}
        >
          {breed}
          <span onClick={() => setHide(!hide)}>
            <ArrowDropDownIcon />
          </span> </MenuItem >
      }
      {
        hide &&
        dogs[breed].map(sub => {
          return (
            <MenuItem
              key={sub}
              value={sub}
              onClick={() => handleSubBreed(breed, sub)}
            >
              {sub}
            </MenuItem >
          )
        })
      }
    </>
  )
}

export default Breed;