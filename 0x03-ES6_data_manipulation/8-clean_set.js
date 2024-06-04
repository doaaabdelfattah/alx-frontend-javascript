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
    if (value.startsWith(startString)) {
      const startIndex = startString.length;

      filteredValues.push(value.slice(startIndex));
    }
  });
  return filteredValues.join('-');
}
