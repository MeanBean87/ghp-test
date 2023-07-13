titleEl = document.querySelector(".title");
itemOneEl = document.querySelector(".item-1");
itemTwoEl = document.querySelector(".item-2");
itemThreeEl = document.querySelector(".item-3");
itemFourEl = document.querySelector(".item-4");
itemFiveEl = document.querySelector(".item-5");
itemSixEl = document.querySelector(".item-6");
submitBtn = document.querySelector(".submit-btn");
textInputEl = document.querySelector(".text-input");

var converter = new showdown.Converter();

let textData = "";

const fetchDataNpm = async (textData) => {
  const response = await fetch(`https://registry.npmjs.org/${textData}`);
  const data = await response.json();
  return data;
};

const fetchDataCdnJs = async (textData) => {
  const response = await fetch(`https://api.cdnjs.com/libraries/${textData}`);
  const data = await response.json();
  return data;
};

textInputEl.addEventListener("change", (e) => {
  textData = e.target.value.toLowerCase();
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  updateContent(textData);
});

async function updateContent(textData) {
  const npmData = await fetchDataNpm(textData);
  titleEl.textContent = npmData.name;
  itemOneEl.textContent = npmData.description;
  itemTwoEl.textContent = npmData.version;
  itemThreeEl.textContent = npmData.license;
  itemFourEl.textContent = npmData.homepage;
  itemFiveEl.textContent = npmData.keywords;
  const markdown = npmData.readme;
  itemSixEl.innerHTML = converter.makeHtml(markdown);
}
