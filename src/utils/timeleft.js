const getNextBirthdayTime = (birthday) => {
    //this function takes a birthdate and outputs
    //the time in miliseconds that remains for a new birthday
    //if the birthdate's corresponding birthday is today, it outputs 0
    const today = new Date();
    const birthdate = new Date(birthday);
    birthdate.setUTCHours(3)
    const currentYear = today.getFullYear();
    const birthdateThisYear = new Date(currentYear, birthdate.getMonth(), birthdate.getDate());
   console.log(birthdate)
    if (today.getMonth() === birthdate.getMonth() && today.getDate() === birthdate.getDate()) return 0

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