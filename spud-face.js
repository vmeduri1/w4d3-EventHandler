window.addEventListener("DOMContentLoaded", (event) => {

  // ** Phase 1B: Update license with event delegation and event.target **
  let licenseInfo = document.getElementById("drivers-license-form");
  const licenseCardFields = document.querySelectorAll(".license__info") //grabs fields out of license card (by class)
  // console.log(licenseInfo);
  // console.log(driversLicense);
  licenseInfo.addEventListener("input", (event) => {
    licenseCardFields.forEach((field) => {
      if (field.id.includes(event.target.id)) {
        if (event.target.id === "donor-status") {
          let licenseStatus = document.getElementById("card-donor-status");
          licenseStatus.innerHTML = event.target.checked ? "yes" : "no";
        } else {
          field.innerHTML = event.target.value;
        }
      }
    });
    setTimeout((event) =>checkLicenseNumbers, 500);
  });

  // ** Phase 2: Add focus and blur events to form inputs **
  // let licenseForms = document.getElementsByClassName("form__input")
  licenseInfo.addEventListener("focusin", event => {
    event.target.style.backgroundColor = "#90ee90"
  })

  licenseInfo.addEventListener("focusout", event => {
    event.target.style.backgroundColor = ""
  })

  // ** Phase 3: Check that license numbers match **

  const checkLicenseNumbers = event => {
    const licenseValue = document.getElementById("license-num").value
    const confirmLicValue = document.getElementById("license-num-confirm").value
    const licenseField = document.getElementById("license-num");
    const licenseNumConfirm = document.getElementById("license-num-confirm");

    if (licenseValue !== confirmLicValue) {
      event.preventDefault();
      licenseField.style.backgroundColor = "#ff7f50";
      licenseNumConfirm.style.backgroundColor = "#ff7f50";
    }
  }
  // licenseInfo.addEventListener("submit", checkLicenseNumbers);

  let button = document.getElementsByClassName("form__submit")[0];
  console.log(button);

  let counter = 0;
  button.addEventListener("click", event => {
    event.preventDefault();
    counter++;
    button.innerHTML = `Number of clicks ${counter}.`
  });

  // const updateSubmit = () => {
  //   let counter = 0;

  //   }
  // button.addEventListener("click", updateSubmit);


  // ** Phase 4: Update submit button click count **


});
