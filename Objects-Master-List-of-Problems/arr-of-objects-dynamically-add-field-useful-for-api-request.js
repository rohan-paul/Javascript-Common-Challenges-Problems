/*

Original data received from API

suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" }
]
 
BUT I need data in following format

[ { value: 'Afghanistan', label: 'Afghanistan' },
  { value: 'Aland Islands', label: 'Aland Islands' },
  { value: 'Albania', label: 'Albania' },
  { value: 'Algeria', label: 'Algeria' } ]

 */

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

console.log(suggestions);
