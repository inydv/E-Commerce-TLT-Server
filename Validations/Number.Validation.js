// MINIMUM AND MAXIMUM NUMBER VALIDATION
function NumberValidation(Number, Minimum, Maximum) {
  const Length = Math.ceil(Math.log10(Number + 1));

  if (Length >= Minimum && Length <= Maximum) return true;
  return false;
}

// EXPORT
module.exports = { NumberValidation };
