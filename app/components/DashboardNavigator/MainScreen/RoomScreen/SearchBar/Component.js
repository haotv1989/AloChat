import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar } from "react-native-elements";


const SearchBarComponent = props =>
<SearchBar   
placeholder="Type Here..."        
lightTheme        
round 
autoCorrect={false}             
/> 

SearchBarComponent.propTypes = {
  search: PropTypes.func.isRequired
}
 
export default SearchBarComponent
