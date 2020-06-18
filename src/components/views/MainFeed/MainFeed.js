// View component - Root page for logged in users
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Contexts
import { UserContext } from '../../../contexts/UserContext';
import { ItemsContext } from '../../../contexts/ItemsContext';
import { prettyDate, inputDateFormat } from '../../../helpers/helpers'

// Helpers
import { updateTimeStrings } from '../../../helpers/helpers';

// Element components
// import Button from 'components/elements/Button/Button';

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
  const [ searchTerm, setSearchTerm ] = React.useState("");
  const [ searchResults, setSearchResults ] = React.useState([]);
  const [ statusSelected, setstatusSelected ] = React.useState("All");

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
  }, [itemsContext.state.fetched])

  return (
    
    <div className="main-feed">

      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Search for Fact"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <br/>
        <label>Status</label>
        <select value={statusSelected} onChange={handleSelect}>
          <option value='All'>Show All</option>
          <option value='Pending'>Pending</option>
          <option value='Under Review'>Under Review</option>
          <option value='Approved'>Approved</option>
          <option value='Not True'>Not True</option>
        </select>
      </form>

      <br/>
      <div className='center'>
        <button onClick={handleClickAddFact}>Add New Fact</button>
      </div>
      
        { (searchResults.length === 0 && searchTerm === "" ? itemsContext.state.facts : searchResults).sort((a,b) => a.fact_id - b.fact_id).map(fact => 
          {
            return (
              <div className={'main-feed-fact'}>
                <p>
                  <span className={factLabel}>Fact</span>
                  { fact.title }
                </p>
                <p>
                  <span className={factLabel}>Status</span>
                  { fact.status }
                </p>
                <p>
                  <span className={factLabel}>Id</span>
                    { fact.fact_id }
                </p>
                <p><span className={factLabel}>Submitted</span>
                    { prettyDate(fact.date_submitted) }
                </p>
            { fact.date_under_review ? <p><span className={factLabel}>Under Review</span>{prettyDate(fact.date_under_review)}</p> : '' }
                { fact.date_approved ? <p><span className={factLabel}>Approved</span>{prettyDate(fact.date_approved)}</p> : '' }
                { fact.date_not_true ? <p><span className={factLabel}>Not True</span>{prettyDate(fact.date_not_true)}</p>  : '' }
                
            { userContext.state.isLoggedIn 
              ?   (
                    <>
                      <button
                        onClick={e => history.push(`/facts/id/${fact.fact_id}/edit`)}
                      >
                        Edit
                      </button>
                    </>
                  )
              : '' 
            
            }

              </div>
            )
          }) 
        }

    </div>
    
  );

};

export default MainFeed;