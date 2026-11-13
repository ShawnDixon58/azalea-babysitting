(() => {
  const birthDate = new Date(2012, 0, 10);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const birthdayHasPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!birthdayHasPassed) {
    age -= 1;
  }

  const ageText = `${age}-year-old`;
  const ageTargets = document.querySelectorAll("#azalea-age, #azalea-age-about");
  ageTargets.forEach((target) => {
    target.textContent = ageText;
  });
})();
