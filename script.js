let month = prompt("Введите месяц(номер):");
let year = prompt("Введите год(номер):");
// месяц идет от 0 до 11, ноль в nextDate берет нулевой день следующего, за выбранным месяца, но
// так как дни считаются от 1, то 0 - это последний день предыдущего (выбранного) месяца
// const specificDate = new Date(year, month - 1, 1, 0, 0, 0);
// const nextDate = new Date(year, month, 0, 0, 0, 0);
// const daysInMonth = nextDate.getDate();
// let firstDay = specificDate.getDay();
// if (firstDay == 0) firstDay = 7;
// console.log(daysInMonth);
// console.log(firstDay);
// const days = [];
// for (let i = 1; days.length < daysInMonth; i++) {
//   days.push(i);
// }
// console.log(days);

// let section = document.createElement("section");
// section.className = "cal";
// document.body.append(section);

// let div = document.createElement("div");
// div.className = "cal-head";
// let temp = specificDate.toLocaleString("ru", {
//   year: "numeric",
//   month: "long"
// });
// div.innerText = temp;
// section.append(div);

// let calBody = document.createElement("div");
// calBody.className = "cal-body";
// section.append(calBody);

// let dayNames = "пн вт ср чт пт сб вс";
// dayNames = dayNames.split(" ");
// for (let i = 0; i < dayNames.length; i++) {
//   let div = document.createElement("div");
//   div.className = `dayName`;
//   div.innerText = `${dayNames[i]}`;
//   calBody.append(div);
// }

// for (let i = 1; i < days.length + firstDay; i++) {
//   let temp = document.createElement(`div`);
//   temp.className = `elem${i}`;
//   calBody.append(temp);
// }

// for (let i = 0; i < days.length; i++) {
//   let temp = document.getElementsByClassName(`elem${firstDay + i}`)[0];
//   temp.innerText = `${days[i]}`;
// }

// getDate(date) = день месяца, 1-31, если такого дня в этом месяце нету - то NaN
// getDay(date) = 0 = воскресенье

//let month = prompt("Введите месяц(номер):");
//let year = prompt("Введите год(номер):");
console.log("dasdasads");
let i = 0;
function createCalendar(year = 1999, month = 12, elementId, className = "cal") {
  if (elementId == "") elementId = "main";
  ++i;
  className = className + i;
  let specificDate = new Date(year, month - 1, 1, 0, 0, 0);
  let nextDate = new Date(year, month, 0, 0, 0, 0);
  console.log(elementId);
  let element = document.getElementById(`${elementId}`);
  console.log(element);
  let daysInMonth = getDayOfMonth(nextDate);
  let firstDay = getFirstDayOfWeek(specificDate);
  let days = [];
  for (let i = 1; days.length < daysInMonth; i++) {
    days.push(i);
  }
  let section = document.createElement("section");
  section.className = className;
  element.append(section);

  let div = document.createElement("div");
  div.className = "cal-head";
  let temp = specificDate.toLocaleString("ru", {
    year: "numeric",
    month: "long"
  });
  div.innerText = temp;
  section.append(div);

  let calBody = document.createElement("div");
  calBody.className = "cal-body";
  section.append(calBody);

  let dayNames = "пн вт ср чт пт сб вс";
  dayNames = dayNames.split(" ");
  for (let i = 0; i < dayNames.length; i++) {
    let div = document.createElement("div");
    div.className = `dayName`;
    div.innerText = `${dayNames[i]}`;
    calBody.append(div);
  }

  for (let i = 1; i < days.length + firstDay; i++) {
    //debugger;
    let temp = document.createElement(`div`);
    temp.className = `${className}-elem${i}`;
    console.log(i);
    calBody.append(temp);
  }

  for (let i = 0; i < days.length; i++) {
    let temp = document.getElementsByClassName(
      `${className}-elem${firstDay + i}`
    )[0];
    temp.innerText = `${days[i]}`;
  }
}

createCalendar(year, month, "main", "cal");
createCalendar(1999, 1, "", "cal");
createCalendar(1999, 2, "", "cal");
createCalendar(1999, 3, "", "cal");
createCalendar(1999, 4, "", "cal");
createCalendar(1999, 5, "", "cal");
createCalendar(1999, 6, "", "cal");
createCalendar(1999, 7, "", "cal");
createCalendar(1999, 8, "", "cal");
createCalendar(1999, 9, "", "cal");
createCalendar(1999, 10, "", "cal");
createCalendar(1999, 11, "", "cal");
createCalendar(1999, 12, "", "cal");

function getDayOfMonth(date) {
  let dayOfMonth = date.getDate();
  return dayOfMonth;
}

function getFirstDayOfWeek(date) {
  let firstDay = date.getDay();
  if (firstDay == 0) firstDay = 7;
  return firstDay;
}
