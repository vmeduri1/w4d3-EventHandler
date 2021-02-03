window.addEventListener("DOMContentLoaded", (event) => {

  // ** Phase 1B: Update license with event delegation and event.target **
  let licenseInfo = document.getElementById("drivers-license-form");
  const licenseCardFields = document.querySelectorAll(".license__info") //grabs fields out of license card (by class)
  // console.log(licenseInfo);
  // console.log(driversLicense);
  licenseInfo.addEventListener("input", (event) => {
    licenseCardFields.forEach((field) => {
      if (field.id.includes(event.target.id)) {
        if(event.target.id === "donor-status") {
          let licenseStatus = document.getElementById("card-donor-status");
          licenseStatus.innerHTML = event.target.checked ? "yes" : "no";
        } else {
          field.innerHTML = event.target.value;
        }
      }
    });
  });

  // ** Phase 2: Add focus and blur events to form inputs **

  

  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
