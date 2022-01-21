import { eventData } from "../data-store/events.js";

console.log(eventData);

const HomePost = ({ title, desc, date, poster, link = "", linkType = "" }) => {
  return `
  <div class="col-md-4 col-sm-12 col-12 post">
    <h6 class="postDate">${date}</h6>
    <div id="imageblock">
        <img src="${poster}" alt="${title}" />
    </div>
    <h4>${title}</h4>
    <p>${desc}</p>
    ${
      link !== ""
        ? `
    <a
    href="${link}"
    target="_blank"
    referrerpolicy="no-referrer"
    id="postbtn"
    class="button center"
    >
      ${linkType}
    </a>`
        : ""
    }
  </div>`;
};

const EventsPage = ({
  title,
  desc,
  date,
  poster,
  link = "",
  linkType = "",
}) => {
  return `
  <div class="col-sm-4 col-md-4 col-12">
    <div class="eventBlock">
      <h6 class="postDate">${date}</h6>
      <img
        src="${poster}" alt="${title}"
        width="75%"
        height="80%"
      />
      <h3>${title}</h3>
      <p>${desc}</p>
      ${
        link !== ""
          ? `
      <a
      href="${link}"
      target="_blank"
      referrerpolicy="no-referrer"
      id="postbtn"
      class="button center"
    >
      ${linkType}
    </a>`
          : ""
      }
    </div>
  </div>
  `;
};

const home = document.getElementById("homeEvents");

if (home) {
  home.innerHTML = eventData
    .filter((item, idx) => idx < 3)
    .map((event, i) => HomePost(event))
    .join("");
}

const events = document.getElementById("eventsDisplay");

if (events) {
  events.innerHTML = eventData.map((event, i) => EventsPage(event)).join("");
}
