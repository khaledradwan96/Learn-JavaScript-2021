// Assignments For Lessons 169 To 178

/* === */ console.log("===> التكليف 01 <==="); /* === */
// create Json file

/* === */ console.log("===> التكليف 02 <==="); /* === */

let myReq = new XMLHttpRequest();
myReq.open("GET", "articles.json");
myReq.send();
console.log(myReq);

myReq.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // التكليف 02
    console.log(this.responseText);
    console.log("Data Loaded");

    /* === */ console.log("===> التكليف 03 <==="); /* === */
    let mainData = JSON.parse(this.responseText);
    console.log(mainData);

    mainData.forEach((articles) => {
      articles["section"] = "all";
    });
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);

    /* === */ console.log("===> التكليف 04 <==="); /* === */
    let datDiv = document.createElement("div");
    datDiv.id = "data";
    datDiv.style.cssText = `d`;

    for (let i = 0; i < mainData.length; i++) {
      let div = document.createElement("div");
      datDiv.appendChild(div);

      // Create Title
      let title = document.createElement("h2");
      title.appendChild(document.createTextNode(`Title: ${mainData[i].title}`));
      div.appendChild(title);

      // Create Article Number
      let num = document.createElement("p");
      num.appendChild(document.createTextNode(`Article Number ${i + 1} Body`));
      div.appendChild(num);

      // Create Author Name
      let author = document.createElement("p");
      author.appendChild(
        document.createTextNode(`Author: ${mainData[i].author}`)
      );
      div.appendChild(author);

      // Create Category
      let category = document.createElement("p");
      category.appendChild(
        document.createTextNode(`Category: ${mainData[i].section}`)
      );
      div.appendChild(category);
    }

    document.body.appendChild(datDiv);
  }
};
