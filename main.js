function getRandomChinese(length) {
  return new Promise((resolve, reject) => {
    if (length <= 0) {
      reject("length is too short");
    } else {
      let char = "";
      for (let i = 0; i <= length - 1; i++) {
        const date = Date.now() + "";

        let dateFive = "";
        dateFive = date.substr(-5);
        char += String.fromCharCode(dateFive + i);
      }
      setTimeout(() => {
        renderResult();
        resolve(
          (document.querySelector(".cont").innerText = "result: " + char)
        );
      }, 50 * length);
    }
  });
}
function renderResult() {
  const element = document.createElement("div");
  element.className = "cont";
  document.body.append(element);
}
getRandomChinese(5)
  .then((char) => {})
  .catch((err) => {
    console.log(err);
  });
