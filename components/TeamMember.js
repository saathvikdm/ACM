import { teamData } from "../data-store/team.js";

const TeamMember = ({ picture, name, position, linkedIn }) => {
  return `
    <div class="col-6 col-md-4 col-lg-3">
        <div class="team-card py-4">
            <div class="ratio ratio-4x3">
                <img src="${picture}" alt="team member" />
            </div>
            <div class="team-title">
                <h5>${name}</h5>
                <span>${position}</span>
                ${
                  linkedIn
                    ? `<a href="${linkedIn}"><i class="team-icon fab fa-linkedin-in"></i></a>`
                    : ``
                }
            </div>
        </div>
    </div>`;
};

const teamContainer = document.getElementById("team-container");

if (teamContainer) {
  teamContainer.innerHTML = teamData
    .map(({ year, team }, i) => {
      return `
      <div class="container teamBlock top-block">
        <h1>Our Team ${year}</h1>
        <hr />
        <div class="row justify-content-center">
            ${team
              .map((teamMember, i) => {
                return TeamMember(teamMember);
              })
              .join("")}
        </div>
      </div>`;
    })
    .join("");
}

const teamContainerHome = document.getElementById("team-container-home");

if (teamContainerHome) {
  teamContainerHome.innerHTML = teamData
    .filter((item, idx) => idx < 1)
    .map(({ year, team }, i) => {
      return `
        <div class="container teamBlock">
          <h1>Our Team ${year}</h1>
          <hr />
          <div class="row justify-content-center">
              ${team
                .map((teamMember, i) => {
                  return TeamMember(teamMember);
                })
                .join("")}
          </div>
        </div>`;
    })
    .join("");
}
