const app = {
  initialize: function () {
    document.getElementById("submitButton1").addEventListener("click", () => {
      this.checkInput();
    });
  },

  checkInput: () => {
    let allInput = document.querySelectorAll(".inputStyle");
    let correct = true;
    for (let i = 0; i < allInput.length; i++) {
      if (allInput[i].value == "") {
        app.changeColor(allInput[i]);
        correct = false;
      } else {
        allInput[i].classList.remove("red");
      }
    }

    if (
      app.validateEmail(document.getElementById("email").value) &&
      app.validateCheckbox() &&
      correct
    ) {
      app.showLoading();
    }
  },
  changeColor: (ele) => {
    ele.classList.add("red");
  },

  validateEmail: (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  validateCheckbox: () => {
    return document.querySelector(".checkBox").checked;
  },
  showLoading: () => {
    document.querySelector(".submitButton").classList.add("none");
    document.querySelector(".loader").classList.remove("none");
    setTimeout(() => {
      document.querySelector(".loader").classList.add("none");
      document.querySelector(".endMessage").classList.remove("none");
    }, 3000);
  },
};
