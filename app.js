// document.body.style.fontFamily = "Arial, sans-serif";
// document.body.style.textAlign = "center";
// document.body.style.marginTop = "50px"

const container = document.createElement("div");
container.id = "app";
document.body.appendChild(container);

container.innerHTML = `
 <h1> <!-- heading -->
    Welcome to my Vanilla JS application
  </h1>
  <button
    style="padding: 10px 20px; font-size: 16px; cursor: pointer;"
    onclick="alert('Button has been clicked!')"
  > <!-- button -->
    Click Here Now
  </button>
`

// const heading = document.createElement("h1");
// heading.innerText = "Welcome to my Vanilla JS application";
// container.appendChild(heading);

// const button = document.createElement("button");
// button.innerText = "Click Here Now";
// button.style.padding = "10px 20px";
// button.style.fontSize = "16px";
// button.style.cursor = "pointer";
// button.onclick = () => {
//   const message = document.createElement("p");
//   message.innerText ="Button has been clicked!";
//   container.appendChild(message);
// };
// container.appendChild(button);