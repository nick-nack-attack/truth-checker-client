import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import the actions from the slice
import {
    addFact,
    removeFact,
    incrementByAmount,
    selectFacts
} from './factsSlice';
import styles from './Facts.module.css';

export function Facts() {
    // the facts use the useSelector to select the facts
    // select facts is set in slice to state.count2.value
    // useSelector 'select' the value of variable selectFacts
    const facts = useSelector(selectFacts);
    // set dispatch to the method use dispatch
    const dispatch = useDispatch();
    // set a hook for the amount to be added or subtracted
    // its a variable, and the method to set the method
    // the useState sets the initial value to '1' 
    const [incrementAmount, setIncrementAmount] = useState('1')
    
    // since this is a function, only need to return
    return (
        <div>
        <div
            // its nice to set the css file to a variable
            // then just reference the specific class
            className={styles.row}
        >
            <div
                className={styles.value}
            >
                
                <span
                    // facts is the variable set above
                    // it uses the useSelector to set the
                    // value to what is set in the slice
                    // which is set to the store value 
                    // that its pointing to
                >
                    {facts}
                </span>
            </div>
            <input
                className={styles.textbox}
                value={incrementAmount}
                onChange={e => 
                    setIncrementAmount(e.target.value)
                }
            />
            <button
                name="Add"
                className={styles.button}
                onClick={() => 
                    dispatch(addFact(Number(incrementAmount)))
                }
            >
                +
            </button>
            <button
                name="Subtract"
                className={styles.button}
                onClick={() => 
                    dispatch(removeFact(Number(incrementAmount)))
                }
            >
                -
            </button>
        </div>
        <div
            className={styles.row}
        >
            FOOTER OR SMTHG
        </div>
        </div>
    )
}