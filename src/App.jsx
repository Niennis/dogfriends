import { useState, useEffect } from 'react';
import {
  getBreedsList,
  getImagesByBreed,
  getImagesBySubBreed
} from './fetch';

import Breed from './components/breed'
import StandardImageList from './components/images';
import Filters from './components/filters';
import ButtonAppBar from './components/appBar'

import './App.css'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

function App() {
  const [dogs, setDogs] = useState([])
  const [imgs, setImgs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    getBreedsList()
      .then(response => {
        setDogs(response.data.message)
      })
  }, [])

  const handleBreed = selectedBreed => {
    if (!filters.includes(selectedBreed)) {
      setFilters(prev => [...prev, selectedBreed])
      getImagesByBreed(selectedBreed)
        .then(resp => setImgs(prev => [...prev, ...resp.data.message]))
    } else {
      setFilters(current => current.filter(
        item => item !== selectedBreed
      ))
      setImgs(current => current.filter(
        item => !item.includes(`/${selectedBreed}/`)
      ))
    }
  }

  const handleSubBreed = (selectedBreed, selectedSubBreed) => {
    if (!filters.includes(selectedSubBreed)) {
      setFilters(prev => [...prev, selectedSubBreed])
      getImagesBySubBreed(selectedBreed, selectedSubBreed)
        .then(resp => setImgs(prev => [...prev, ...resp.data.message]))
    } else {
      setFilters(current => current.filter(
        item => item !== selectedSubBreed
      ))

      setImgs(current => current.filter(
        item => {
          return !item.includes(`-${selectedSubBreed}/`)
        }
      ))
    }
  }

  const removeFilter = (filter) => {
    setFilters(current => current.filter(
      item => item !== filter
    ))

    setImgs(current => current.filter(
      item => {
        console.log('item', item, filter);
        return !item.includes(`${filter}/`)
      }
    ))
  }

  return (
    <div className="App">
      <ButtonAppBar />
      <main>
        <section className='aside'>
          <FormControl
            className='selected'
            variant="filled"
            sx={{
              m: 1,
              minWidth: 120,
              maxWidth: 150,
              color: 'white',
              '&:hover': {
                backgroundColor: '#EFEEF1',
                borderBottom: '#7DB9B6',
                boxShadow: 'none',

              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: '#EFEEF1',
                borderBottom: '#7DB9B6',
              },
              '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
              }
            }}
          >
            <InputLabel
              sx={{
                color: '#57817f'
              }}
              id="demo-simple-select-filled-label"
            >Breed
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value=''
              sx={{
                padding: 0,
                '&:after': {
                  borderBottom: '#97c7c4',
                }
              }}
            >
              {Object.keys(dogs).map((dog, i) =>
                <Breed
                  breed={dog}
                  dogs={dogs}
                  key={dog + i}
                  handleBreed={handleBreed}
                  handleSubBreed={handleSubBreed}
                />
              )}
            </Select>
          </FormControl>
          <Stack
            direction={{ xs: 'row', sm: 'column' }}
            spacing={0}
            className="filters"
          >
            {filters.length !== 0
              && filters.map(filter =>
                <Filters
                  filter={filter}
                  removeFilter={() => removeFilter(filter)}
                  key={filter}
                />
              )
            }
          </Stack>
        </section>

        <section className='imgContainer'>
          {imgs.length !== 0
            && <StandardImageList itemData={imgs} />
          }
        </section>
      </main>
    </div>
  )
}

export default App
