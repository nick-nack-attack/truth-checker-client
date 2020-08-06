// view and search for facts - Root page for logged in users
import React, {useContext, useEffect, useState} from 'react';

// contexts
import {ItemsContext} from '../../../contexts/ItemsContext';

// components
import NoResult from '../../utils/NoResult/NoResult';
import Form from '../../utils/Form/Form';
import Fact from '../../utils/Fact/Fact';
import Loading from '../../utils/Loading/Loading';

// styling
import './FactFeed.scss';

const FactFeed = props => {

  // set context variable
  let itemsContext = useContext(ItemsContext);

  // set local state for search term, results, and status selected
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [statusSelected, setStatusSelected] = useState("All");

  // update state when search term changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // update state when status selected changes
  const handleSelect = (event) => {
    setStatusSelected(event.target.value)
  };

  // update state when SEARCH TERM or STATUS is changed by user
  useEffect(() => {

        // first, get the facts that match the selected status
        const filterByStatus = itemsContext.state.facts.filter(fact => {
          return (statusSelected === "All"
                  ? fact
                  : fact.status === statusSelected
          );
        });

        // second, filter out the facts that don't match the search term
        const filterByText = filterByStatus.filter(ft => {
          return (
              ft.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });

        // then set the search results to the filtered results
        setSearchResults(filterByText);

        // if the searchTerm or statusSelected changes, then re-run useEffect
      },
      [
        searchTerm,
        statusSelected,
        // if fact is deleted, refetch facts
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
          Showing {searchResults.length} {searchResults.length === 1 ? 'fact' : 'facts'}
        </div>

        {!itemsContext.state.fetched
            ? <Loading/>
            :
            <>

              <div className="list-of-facts-div">
                {
                  (searchResults.length === 0 && searchTerm === ""
                      ? itemsContext.state.facts
                      : searchResults)
                      .sort((a, b) => a.fact_id - b.fact_id)
                      .map(fact => {
                            return (
                                <Fact
                                    key={fact.fact_id}
                                    fact={fact}
                                    onSuccess={ev => props.onSuccess(ev)}
                                />
                            );
                          }
                      )
                }
                {
                  (searchResults.length === 0 && searchTerm !== ""
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