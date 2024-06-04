export default function cleanSet(set, startString) {
  // Input validation
  if (typeof startString !== 'string'
    || typeof set !== 'object'
    || startString.length === 0
  ) {
    return '';
  }

  const filteredValues = [];
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  });
  return filteredValues.join('-');
}
