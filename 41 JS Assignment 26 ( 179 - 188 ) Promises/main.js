// Assignments For Lessons 179 To 188

// التكليف الأول
const getData = (fileJson) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", fileJson);
    myRequest.send();
  });
};

getData("data.json")
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((showData) => {
    console.log(showData);
    showData.forEach((data) => {
      // Create Container Div
      let div = document.createElement("div");

      // Create Title
      let title = document.createElement("h3");
      title.appendChild(document.createTextNode(data.title));
      div.appendChild(title);

      // Create description
      let description = document.createElement("p");
      description.appendChild(document.createTextNode(data.description));
      div.appendChild(description);

      document.body.appendChild(div);
    });
  })
  .catch((rej) => console.log(rej));

// التكليف الثاني

fetch("data.json")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((full) => {
    full.length = 5;
    console.log(full);
    return full;
  });
