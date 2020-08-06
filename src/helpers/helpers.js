// Helper functions
import {format} from 'date-fns';

const prettyDate = (oldDate) => {
  return format(new Date(oldDate), 'MMM d, yyyy')
};

const inputDateFormat = (oldDate) => {
  return format(new Date(oldDate), 'yyyy-MM-dd')
};

const findFactById = (fact_id, facts) => {
  let factIdInt = parseInt(fact_id)
  return facts.find(fact => fact.fact_id === factIdInt)
};

export {
  prettyDate,
  inputDateFormat,
  findFactById
};