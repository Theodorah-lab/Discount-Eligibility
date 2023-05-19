function checkEligibility() {

    /* User input for age&status */
    let age = parseInt(document.getElementById("age").value);
    let isMember = document.getElementById("member").value === "yes";
  
    /* Check eligibility */
    let isEligible = false;
  
    if (age >= 18 && isMember || age >= 65) {
      isEligible = true;
    }
  
    /* eligibility output */
    let result = document.getElementById("result");
    if (age >= 65) {
      result.innerHTML = "Congrats! 🎉 You are eligible for a senior discount✔";
      result.style.color = "Green";
    } else if (isEligible) {
      result.innerHTML = "Congrats! 🎉 You are eligible for a  discount✔";
      result.style.color = "Green";
    } else {
      result.innerHTML = "Oops!, you are not eligible for a discount 😪";
      result.style.color = "Red";
    }
  }
  
  
