// let close = document.getElementsByClassName("close");
// let inputValue = document.getElementById("myInput").value;
// let list = document.querySelector("ul");
// function addElement() {
//   let li = document.createElement("li");
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("×");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       let div = this.parentElement;
//       div.removeChild();
//       div.style.display = "none";
//     };
//   }
// }
// // Click on a close button to hide the current list item
// function closeBtn() {
//   //   let i;
//   for (let i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
// // Add a "checked" symbol when clicking on a list item
// function checkList() {
//   list.addEventListener("click", function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   });
// }

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("×");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }

// ------------ V1 ----------------
// let myNodelist = document.getElementsByTagName("LI");
// let i;
// for (i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("SPAN");
//   //   https://www.fileformat.info/info/unicode/char/d7/index.htm
//   // Unicode Character 'MULTIPLICATION SIGN' (U+00D7)
//   let txt = document.innerHtml("U+00D7");
//   console.log("txt", txt);
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// let close = document.getElementsByClassName("close");

// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     let div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// let list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// // Create a new list item when clicking on the "Add" button

// function newElement() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("×");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }

const addBtn = document.querySelector("#push");
const tasks = document.querySelector("#tasks");
addBtn.onclick = () => {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    const newTask = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const fontAwesome = document.createElement("i");
    // fontAwesome.textContent = "fa fa-trash";
    fontAwesome.className = "fa fa-trash";

    deleteBtn.appendChild(fontAwesome);

    newTask.classList.add("task");
    span.setAttribute("id", "taskname");
    deleteBtn.classList.add("delete");
    newTask.classList.add("task");

    newTask.innerHTML = document.querySelector("#newtask input").value;
    tasks.appendChild(newTask);
    tasks.appendChild(deleteBtn);
    tasks.appendChild(span);

    // tasks.innerHTML += `
    //         <div class="task">
    //             <span id="taskname">
    //                 ${document.querySelector("#newtask input").value}
    //             </span>
    //             <button class="delete">
    //                 <i class="far fa-trash-alt"></i>c
    //             </button>
    //         </div>
    //     `;
    document.querySelector("#newtask input").value = "";

    // document.getElementById("#newtask input").value = ""; >> this is not working
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
