import React from 'react';
import { FilterWrap } from './Filter.styled';

const Filter = ({ filter, changeFilter }) => (
  <FilterWrap>
    Find contacts by name
    <input type="text" value={filter} onChange={changeFilter} size="20" />
  </FilterWrap>
);

export default Filter;
