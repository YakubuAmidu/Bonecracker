import React, { useContext } from 'react';

// Searchbar 
import { Searchbar } from 'react-native-paper';

// 
import { LocationContext } from '../../../components/Services/Location/LocationContext';

import styled from 'styled-components/native';

// SearchContainer styled component
const SearchContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};
`;


export const Search = () => {
  const locationContext = useContext(LocationContext);
  console.log(locationContext);

  return (
  <SearchContainer>
  <Searchbar />
</SearchContainer>
  );
}