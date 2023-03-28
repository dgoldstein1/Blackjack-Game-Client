import { v4 as uuidv4 } from 'uuid';

export const SET_PLAYER_INFO = 'SET_PLAYER_INFO'

export const initPlayerInfoFromCookie = () => dispatch => {
  let playerID = getCookie("playerID")
  let playerName = getCookie("playerName")
  if (!playerID) {
    console.warn("no playerID detected")
    return
  }
  dispatch(setPlayerInfo(playerID, playerName))
}



export const setPlayerInfo = (id, name) => dispatch => {
  setCookie("playerID", id, 10)
  setCookie("playerName", name, 10)
  dispatch({
    type: SET_PLAYER_INFO,
    id : id,
    name : name,
  })
}

// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}