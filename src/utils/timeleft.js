const getNextBirthdayTime = (birthday) => {
    const today = new Date();
    const birthdate = new Date(birthday);
    const currentYear = today.getFullYear();
    const birthdateThisYear = new Date(currentYear, birthdate.getMonth(), birthdate.getDate());
  
    let timeLeft = birthdateThisYear.getTime() - today.getTime();
  
    if (timeLeft < 0) {
      // Add one year to the time left if the birthday has already passed this year
      const nextYear = currentYear + 1;
      const nextBirthday = new Date(nextYear, birthdate.getMonth(), birthdate.getDate());
      timeLeft = nextBirthday.getTime() - today.getTime();
    }
  
    return timeLeft;
  };

  export default getNextBirthdayTime;