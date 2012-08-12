// Set Sweden as a default region
var default_region = 0;

function toggleSaveButtonStatus(disable) {
  document.getElementById("IDSaveButton").disabled = disable;
}

function setSelectedItem(id, value) {
  var list = document.getElementById(id);
  for (var i=0; i<list.options.length; i++) {
    if (list.options[i].value == value) {
      list.options[i].selected = true;
      return;
    }
  }
}

// Saves options to localStorage.
function saveOptions() {
  var list = document.getElementById("IDWeatherRegion");
  var index = list.selectedIndex;
  window.localStorage["region"] = list.options[index].value;

  toggleSaveButtonStatus(true);
}

// Restores values from localStorage.
function restoreOptions() {
  var region = window.localStorage["region"];
  if (!region) {
    region = default_region;
  }
  setSelectedItem("IDWeatherRegion", region);

  toggleSaveButtonStatus(true);
}
