import React from 'react';

import Input from '../../utils/Input/Input';
import Select from '../../utils/Select/Select';

const FormMainFeed = (props) => {

    const arrayForSelect = ['All', 'Pending', 'Under Review', 'Approved', 'Not True'];

    return (

        <form onSubmit={e => e.preventDefault()}>
            <Input
                label='Search for Fact'
                placeholder="ex. The Sun is a star"
                type="text"
                value={props.searchValue}
                onChange={props.searchOnChange}
            />
            <Select
                value={props.selectValue}
                onChange={props.selectOnChange}
                array={arrayForSelect}
            />
        </form>

    )

}

export default FormMainFeed;

// <form 
//         onSubmit={e => e.preventDefault()}
//       >
//         <Input
//           label='Search'
//           placeholder="Search for Fact"
//           type="text"
//           value={searchTerm}
//           onChange={handleChange}
//         />
//         <Select
//           value={statusSelected}
//           onChange={handleSelect}
//           array={arrayForSelect}
//         />
//       </form>