document.getElementById("translateBtn").addEventListener("click", function () {
  let text = document.getElementById("inputText").value;
  let fromLang = document.getElementById("fromLang").value;
  let toLang = document.getElementById("toLang").value;

  if (text.trim() === "") {
    alert("Fadlan qoraal geli");
    return;
  }

  let url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text) + "&langpair=" + fromLang + "|" + toLang;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("outputText").value = data.responseData.translatedText;
    })
    .catch(function (error) {
      alert("Wax qalad ah ayaa dhacay");
      console.log(error);
    });
});