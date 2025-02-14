// I know that this file is just to wrap your head around the DOM, but figure out naming conventions please

const main = document.createElement("main");
main.id = "home-main-tag";
document.body.appendChild(main);

const firstSection = document.createElement("section");
firstSection.id = "ai-messaging-section";

const sectionContainer_div = document.createElement("div");
sectionContainer_div.id = "ai-messaging-container";
sectionContainer_div.style.display = "flex";
sectionContainer_div.style.flexDirection = "column"; // I think that it should be flex-row by default, idk how CSS works tho
sectionContainer_div.style.alignItems = "center";
sectionContainer_div.style.justifyContent = "center";
sectionContainer_div.style.marginTop = "80px";
sectionContainer_div.style.gap = "16px";

const label_span = document.createElement("span");
label_span.id = "ai-label-span";
label_span.innerText = "An AI Powered Messaging Inbox"
label_span.style.fontWeight = "bold";
label_span.style.color = "rgb(255, 169, 71)";
label_span.style.backgroundColor = "rgba(255, 169, 71, 0.2)";
label_span.style.padding = "8px 16px";
label_span.style.borderRadius = "9999px";
label_span.style.fontSize = "14px";

const cta_text = document.createElement("p");
cta_text.id = "ai-cta-text";
cta_text.style.textAlign = "center";
cta_text.style.maxWidth = "500px";
const breaker = document.createElement("br");
cta_text.innerText = "Your AI-powered chat inbox tool, from Instagram DM"
// cta_text.append(breaker);
// cta_text += breaker;
// cta_text += "setting, to a full-blown sales rep. Scale your business with us!"

const cta_button = document.createElement("button");
cta_button.id = "ai-cta-button";
cta_button.innerText = "Start for Free";
cta_button.style.backgroundColor = "rgb(255, 169, 71)";
cta_button.style.fontWeight = "bold";
cta_button.style.color = "rgb(255, 255, 255)";
cta_button.style.padding = "4px 16px";
cta_button.style.border = "none";
cta_button.style.borderRadius = "4px";
cta_button.style.cursor = "pointer";

sectionContainer_div.appendChild(label_span);
sectionContainer_div.appendChild(cta_text);
sectionContainer_div.appendChild(cta_button);

main.appendChild(sectionContainer_div);