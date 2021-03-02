// handle when user reports a specific fact
import React, { useContext, useState }  from 'react';
import PropTypes                        from 'prop-types';

// components
import Label    from '../Label/Label';
import Button   from '../Button/Button';
import Menu     from '../Menu/Menu';

// contexts
import { ItemsContext } from '../../../contexts/ItemsContext';
import FactsApiService  from '../../../services/facts-service';

// styling
import './Report.scss';

// send report after user confirms
const Report = (props) => {

  // set variables
  const [showMenu, setShowMenu] = useState(false);

  // bring in itemsContext
  const itemsContext = useContext(ItemsContext);

  const handleCancel = (ev) => {
    ev.preventDefault();
    setShowMenu(false);
  };

  const handleReportClick = (ev) => {
    ev.preventDefault();
    setShowMenu(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 7000);
  };

  // submit report of a particular fact to be reviewed by an admin
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const reportedFact = {
      fact_id: props.id
    };
    // send report to server
    FactsApiService.reportFact(
        reportedFact
    )
        .then(() => {
          itemsContext.dispatch({
            type: 'refetch'
          });
          // handle report success
          props.onSuccess('report-fact');
        })
        .catch(() => {
          // handle error if some issue happens
          window.alert("An error has occurred when sending your report.")
        })
  };

  return (
      <div>
        <Button
            text={<Label type="report"/>}
            onClick={ev => handleReportClick(ev)}
        />
        <div className={showMenu ? 'show' : 'hide'}>
          <Menu
              text='Report this fact for inappropriate content or spam?'
              handleConfirm={ev => handleSubmit(ev)}
              handleCancel={ev => handleCancel(ev)}
          />
        </div>
      </div>
  );
};

Report.propTypes = {
  fact_id: PropTypes.number,
};

export default Report;
