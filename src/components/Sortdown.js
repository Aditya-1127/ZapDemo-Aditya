import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const categories = [
    {
        key: 1,
        text: 'Whisky',
        value: 'Johhnie Walker'
  
    },
    {
        key: 2,
        text: 'Gin',
        value: 'Tanquery'
    },
    {
      key: 3,
      text: 'Beer',
      value: 'Corona'
    },
    {
      key: 4,
      text: 'Voka',
      value: 'Absolut'
    },
    {
      key: 5,
      text: 'Rum',
      value: 'Old Monk'   
    },
    {
      key: 6,
      text: 'Champagne',
      value: 'Chandon'
    },
  ]

const DropdownExampleSelection = () => (
  <Dropdown
    // placeholder='Search'
    // search
    selection
    options={categories}
  />
)

export default DropdownExampleSelection