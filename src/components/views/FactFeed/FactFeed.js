// view and search for facts - Root page for logged in users
import React, { useContext, useEffect, useState } from 'react';

// contexts
import { ItemsContext } from '../../../contexts/ItemsContext';

// components
import NoResult from '../../utils/NoResult/NoResult';
import Form from '../../utils/Form/Form';
import Fact from '../../utils/Fact/Fact';
import Loading from '../../utils/Loading/Loading';
import Notification from '../../utils/Notification/Notification';

// styling
import './FactFeed.scss';
import { set } from 'date-fns';

const FactFeed = () => {

  // set context variable
  let itemsContext = useContext(ItemsContext);

  // set local state for search term, results, and status selected
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  const [ statusSelected, setstatusSelected ] = useState("All");
  const [ notificationBlurb, setnotificationBlurb ] = useState(itemsContext.state.notifications);

  // update state when search term changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // update state when status selected changes
  const handleSelect = (event) => {
    setstatusSelected(event.target.value)
  };

  const handleNotification = () => {
    setnotificationBlurb(<Notification flavor={flavor}/>)
    setTimeout(() => {
      setnotificationBlurb('')
    }, 6000)
  }

  useEffect(() => {

    setnotificationBlurb(<Notification flavor={notificationBlurb}/>)
    setTimeout(() => {
      setnotificationBlurb('')
    }, 6000)

  }, [itemsContext.state.notification])

  // update state when SEARCH TERM or STATUS is changed by user
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
  }, 
    [
      searchTerm,
      statusSelected,
      // if fact is deleted, refetched facts
      itemsContext.state.fetched,
      itemsContext.state.facts
    ] 
  );


  return (
    
    <div className="main-feed">
      <div className="search-bar-div">
        <Form
          id="main-feed-form"
          formType='Main-Feed'
          searchValue={searchTerm}
          searchOnChange={handleChange}
          selectValue={statusSelected}
          selectOnChange={handleSelect}
        />
      </div>
  
      <div className='number-of-results'>
        Showing {searchResults.length} facts
      </div>

      { notificationBlurb }
      <button onClick={() => handleNotification('logged-in')}></button>

      { !itemsContext.state.fetched 
        ? <Loading/>
        : 
          <>

          <div className="list-of-facts-div">      
            { 
              ( searchResults.length === 0 && searchTerm === "" 
                ? itemsContext.state.facts 
                : searchResults)
                  .sort((a,b) => a.fact_id - b.fact_id)
                  .map(fact => 
                    {
                      return ( 
                        <Fact 
                          key={fact.fact_id} 
                          fact={fact}
                        />
                      );
                    }
                  ) 
              }
              {
                ( searchResults.length === 0 && searchTerm !== ""
                  ? <NoResult searchTerm={searchTerm}/>
                  : ''
                )
              }
          </div>

          </>
      }

    </div>
    
  );

};

export default FactFeed;