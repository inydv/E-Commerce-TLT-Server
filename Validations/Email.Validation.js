// IS EMAIL VALIDATION
function EmailValidation(Email) {
  const EmailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  const IsValid = EmailRegex.test(Email);
  if (!IsValid) return false;

  // FURTHER CHECKING OF SOMETHINGS REGEX CAN'T HANDLE
  const Parts = Email.split("@");
  if (Parts[0].length > 64) return false;

  const DomainParts = Parts[1].split(".");
  if (
    DomainParts.some(function (Part) {
      return Part.length > 63;
    })
  )
    return false;

  return true;
}

module.exports = {
  EmailValidation,
};
