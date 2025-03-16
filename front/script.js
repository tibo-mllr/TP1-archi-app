function fact(n) {
  if (n == 0) return 1;

  return n * fact(n - 1);
}

function applique(func, tab) {
  const res = [];
  for (elt of tab) {
    res.push(func(elt));
  }

  return res;
}

// console.log(fact(6));

// console.log(applique(fact, [1, 2, 3, 4, 5, 6]));

// console.log(applique((n) => n + 1, [1, 2, 3, 4, 5, 6]));

msgs = [];

// Deletes the message list of the page, and puts the ones that it recieves in tab
function update(tab) {
  const messageList = document.getElementById("message-list");

  while (messageList.firstChild) {
    messageList.removeChild(messageList.firstChild);
  }

  tab.forEach((item) => {
    let timeDate;
    timeDate = new Date(item.updated).toLocaleDateString();
    if (timeDate == "Invalid Date") timeDate = "Unknown times";

    const messageItem = document.createElement("li");
    const messageP = document.createElement("p");
    messageP.textContent = `${item.msg} - By ${item.user} on ${timeDate}`;
    messageItem.appendChild(messageP);
    messageList.appendChild(messageItem);
  });
}

function getMsgs() {
  fetch("https://tp1-archi-app-back.onrender.com/msg/getAll")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      msgs = data;
      update(data);
    });
}

getMsgs();

function submit() {
  const msg = $("textarea").val();

  fetch(`https://tp1-archi-app-back.onrender.com/msg/post/${msg}`).then(() =>
    getMsgs()
  );
}

