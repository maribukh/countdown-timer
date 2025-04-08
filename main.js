function add(event) {
  if (event.key === "Enter" || event.type === "click") {
    let textInput = document.querySelector(".controls input");
    let nameInput = document.querySelector(".top-control input");

    if (textInput.value && nameInput.value) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("box");
      let text = document.createElement("span");
      text.textContent = nameInput.value + ":  " + textInput.value;
      let clear = document.createElement("span");
      clear.textContent = "✖";
      clear.onclick = () => clear.parentElement.remove();
      let textContainer = document.querySelector(".text-container");
      newDiv.appendChild(text);
      newDiv.appendChild(clear);
      textContainer.prepend(newDiv);
      nameInput.value = ``;
      textInput.value = ``;
    } else if (!textInput.value) {
      alert("Please Enter the text");
    } else if (!nameInput.value) {
      alert("Please Enter the name");
    }
  }
}

function timer(minutes, seconds) {
  let t = setInterval(() => {
    if (minutes == 0 && seconds == 0) {
      clearInterval(t);
      document.getElementById("countdown").textContent = "";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("container").style.display = "block";
      return;
    }

    if (seconds == 0) {
      if (minutes > 0) {
        seconds = 59;
        minutes--;
      }
    }

    document.getElementById("countdown").textContent = `${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    seconds--;
  }, 1000);
}

timer(0, 10);

// function renderForm(container) {
//   document.getElementById(container).innerHTML = "";

//   document.getElementById(container).innerHTML = `

//     `;
// }

// function addInformation(event) {
//   if (event.key === "Enter") {
//     let nameElement = document.querySelector(".name");
//     let inputElement = document.querySelector(".top-control input");
//     let textInput = document.getElementById("text");
//     let textContainer = document.querySelector(".text-container");

//     if (nameElement && inputElement && textInput) {
//       let newDiv = document.createElement("div");
//       newDiv.classList.add("newDiv");

//       let newNameSpan = document.createElement("span");
//       newNameSpan.classList.add("name");
//       newNameSpan.textContent = nameElement.textContent;

//       let newTextSpan = document.createElement("span");
//       newTextSpan.classList.add("text");
//       newTextSpan.textContent = textInput.value;

//       newDiv.appendChild(newNameSpan);
//       newDiv.appendChild(newTextSpan);

//       textContainer.appendChild(newDiv);
//       textInput.value = "";
//       nameElement.textContent = inputElement.value;
//       inputElement.value = "";
//     } else {
//       alert("!!!!!!!");
//     }
//   }
// }

// function addName(event) {
//   if (event.key === "Enter") {
//     let nameElement = document.querySelector(".name");
//     let inputElement = document.querySelector(".top-control input");

//     if (nameElement && inputElement && textInput) {
//       if (inputElement.value === "") {
//         alert("Please enter a name.");
//         return;
//       }
//       nameElement.textContent = inputElement.value;
//       inputElement.value = "";
//     }
//   }
// }

// function addText() {
//   let textInput = document.getElementById("text");
//   let textContainer = document.querySelector(".text-container");
//   let nameElement = document.querySelector(".name");

//   if (textInput && textContainer && nameElement) {
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("newDiv");

//     let newNameSpan = document.createElement("span");
//     newNameSpan.classList.add("name");
//     newNameSpan.textContent = nameElement.textContent;

//     let newTextSpan = document.createElement("span");
//     newTextSpan.classList.add("text");
//     newTextSpan.textContent = textInput.value;

//     newDiv.appendChild(newNameSpan);
//     newDiv.appendChild(newTextSpan);

//     textContainer.appendChild(newDiv);
//     textInput.value = "";
//   }
// }

// renderForm("container");
