chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(msg, sender, sendResponse) {
  if (msg.command === "execute") {
    relief();
  }
}

function relief() {
  let ayaId = document.getElementById("ayaAudioId");
  if (ayaId) {
    ayaId.remove();
  }
  const ayat = [
    { surah: 2, aya: 248 },
    { surah: 8, aya: 11 },
    { surah: 9, aya: 26 },
    { surah: 9, aya: 40 },
    { surah: 13, aya: 28 },
    { surah: 48, aya: 4 },
    { surah: 48, aya: 18 },
    { surah: 28, aya: 26 },
    { surah: 2, aya: 285 },
    { surah: 35, aya: 34 },
    { surah: 17, aya: 82 },
    { surah: 11, aya: 56 },
    { surah: 35, aya: 33 },
  ];
  let ayatLength = ayat.length;
  let randomAya = Math.floor(Math.random() * ayatLength);
  const { surah, aya } = ayat[randomAya];
  getSura(surah, aya);
}

async function getSura(surah, aya) {
  let res = await fetch(`https://api.quran.sutanlab.id/surah/${surah}/${aya}`);
  let output = await res.json();
  displayAya(output);
}

function displayAya(output) {
  let src = output.data.audio.primary;
  let audio = document.createElement("audio");
  audio.id = "ayaAudioId";
  audio.src = src;
  document.body.appendChild(audio);
  audio.autoplay = true;
}
