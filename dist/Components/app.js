import { buildLanding } from "./buildLanding.js";
export const initPage = () => {
    buildLanding();
    getLeaderboardData();
};
export const clearApp = (container) => {
    container.innerHTML = "";
};
export const createUser = (username, score) => {
    let leaderboardData = localStorage.getItem("leaderboard");
    if (!leaderboardData) {
        console.log("Leaderboard not made");
        let newLeaderboard = {
            users: [
                {
                    username: username,
                    score: score
                }
            ],
        };
        saveLeaderboardData(newLeaderboard);
    }
    else {
        let leaderData = JSON.parse(leaderboardData);
    }
};
export const saveLeaderboardData = (leaderboardData) => {
    let serializedData = JSON.stringify(leaderboardData);
    localStorage.setItem("leaderboard", serializedData);
};
export const getLeaderboardData = () => {
    let leaderboardString = localStorage.getItem("leaderboard");
    let leaderboardData = JSON.parse(leaderboardString);
    return leaderboardData;
};
