// View component - Root page for logged in users
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts
import { UserContext } from '../../../contexts/UserContext';
import { ItemsContext } from '../../../contexts/ItemsContext';
import { prettyDate, inputDateFormat } from '../../../helpers/helpers'

// Components
import Report from '../../utils/Report';

// Helpers
import { updateTimeStrings } from '../../../helpers/helpers';

// Element components
import FormMainFeed from '../../utils/FormMainFeed/FormMainFeed';
import Button from '../../utils/Button/Button';
import Input from '../../utils/Input/Input';
import Select from '../../utils/Select/Select';
import Fact from '../../utils/Fact/Fact';

// Files
import './MainFeed.scss';

const MainFeed = () => {

  // set the two contexts
  let userContext = useContext(UserContext);
  let itemsContext = useContext(ItemsContext);
  
  const history = useHistory();

  // shorten class name for card labels
  const factLabel = 'main-feed-fact-label';

  // set local state for search term, results, and status selected
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  const [ statusSelected, setstatusSelected ] = useState("All");

  // update state when search term changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // update state when status selected changes
  const handleSelect = (event) => {
    setstatusSelected(event.target.value)
  };

  const handleClickAddFact = () => {
    history.push("/submit-fact")
  };

  useEffect(() => {
      
    // set the results to the facts that include the searchTerm
    const results = itemsContext.state.facts.filter(fact =>
      fact.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // then filter results by that status of the fact
    // if "All" is selected then don't filter
    const filteredResults = ( statusSelected === "All" 
      ? results
      : results.filter(fact => fact.status === statusSelected)
    );

    // then set the search results to the filtered results
    setSearchResults(filteredResults);
      
      // if the searchTerm or statusSelected changes, then re-run useEffect
  }, [searchTerm] );

  useEffect(() => {
    
    const results = itemsContext.state.facts.filter(fact =>
      fact.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // then filter results by that status of the fact
    // if "All" is selected then don't filter
    const filteredResults = ( statusSelected === "All" 
      ? results
      : results.filter(fact => fact.status === statusSelected)
    );

    setSearchResults(filteredResults);

  }, [statusSelected] );

  useEffect(() => {
    // if something is deleted, reset the results to the updated state
    const results = itemsContext.state.facts;
    setSearchResults(results)
  }, [itemsContext.state.fetched]);

  const arrayForSelect = ['All', 'Pending', 'Under Review', 'Approved', 'Not True'];

  return (
    
    <div 
      className="main-feed"
    >

    <FormMainFeed
      searchValue={searchTerm}
      searchOnChange={handleChange}
      selectValue={statusSelected}
      selectOnChange={handleSelect}
    />

      <br/>
      <div className='center'>
        <Button
          onClick={handleClickAddFact}
          className="submit-btn"
          text="Add New Fact"
        />
      </div>
      
        { ( searchResults.length === 0 && searchTerm === "" ? itemsContext.state.facts : searchResults).sort((a,b) => a.fact_id - b.fact_id).map(fact => 
          {
            return ( 
              <Fact key={fact.fact_id} fact={fact}/>
            )
          }) 
        }

    </div>
    
  );

};

export default MainFeed;