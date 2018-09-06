if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('[app.js] Service worker registered');
    });
}

function fetchUrl() {
  var url = document.getElementById('url').value;
  fetch(url).then(function (res) {
    // Success
    if (res.ok) {
      res.json().then(function (data) {
        clearData();
        createTableWithData(data);
      });
    } else {
      console.error("HTTP error", res.status);
    }
  }, function (e) {
    // Error
    console.error("Fetch failed");
  });
}

function clearData() {
  var dataTable = document.getElementById('data-table');
  if (dataTable) {
    dataTable.remove();
  }
}

function createTableWithData(data) {
  var tableDiv = document.getElementById('data');
  var table = document.createElement('table');
  table.id = "data-table";
  table.classList.add('table');
  var tr = table.insertRow();
  tr.insertCell().appendChild(document.createTextNode("Id"));
  tr.insertCell().appendChild(document.createTextNode("Title"));
  tr.insertCell().appendChild(document.createTextNode("Comments"));
  tr.insertCell().appendChild(document.createTextNode("Created at"));
  tr.insertCell().appendChild(document.createTextNode("Updated at"));
  data.forEach(function (entry) {
    var tr = table.insertRow();
    tr.insertCell().appendChild(document.createTextNode(entry.id));
    tr.insertCell().appendChild(document.createTextNode(entry.title));
    tr.insertCell().appendChild(document.createTextNode(entry.comments));
    tr.insertCell().appendChild(document.createTextNode(entry.created_at));
    tr.insertCell().appendChild(document.createTextNode(entry.updated_at));
  });
  tableDiv.appendChild(table);
}
