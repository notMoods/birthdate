function calculate() {
  let birthdate = new Date(document.getElementById("birthdate").value);

  let now = new Date();
  let ageinMs = now.getTime() - birthdate.getTime();

  let ageinDays = ageinMs / 3600000 / 24;
  let ageinMonths = ageinDays / 30.4375;
  let ageinYears = ageinMonths / 12;

  document.querySelector("#years").innerHTML = Math.floor(ageinYears);
  document.querySelector("#days").innerHTML = Math.floor(ageinDays % 30.4375);
  document.querySelector("#months").innerHTML = Math.floor(ageinMonths % 12);
}

function reset() {
  window.location.reload();
}
