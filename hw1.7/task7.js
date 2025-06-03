let flashSizeGB = prompt("Введи об’єм флешки (у ГБ):");

let flashSizeMB = Number(flashSizeGB) * 1024;

const FILE_SIZE = 820;

let fileCount = Math.floor(flashSizeMB / FILE_SIZE);

alert("На флешку вміститься " + fileCount + " файлів розміром 820 МБ");
