import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

const StandardImageList = ({ itemData }) => {
  const breakpoints = {
    xs: 0,
    sm: 450,
    md: 960,
    lg: 1280,
    xl: 1920
  }

  const getColumns = (width) => {
    if (width < breakpoints.sm) {
      return 2
    } else if (width < breakpoints.md) {
      return 3
    } else if (width < breakpoints.lg) {
      return 4
    } else if (width < breakpoints.xl) {
      return 5
    } else {
      return 6
    }
  }

  const [columns, setColumns] = useState(getColumns(window.innerWidth))
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth))
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  return (
    <ImageList
      variant="woven"
      sx={{ width: '90vw', height: '80vh' }}
      cols={columns}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StandardImageList;