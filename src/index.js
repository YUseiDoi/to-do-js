import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // ボタンタグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innertext;

    // 押された削除ボタンのdivタグを未完了リストから削除
    const deletetarget = completeButton.parentNode;
    DeleteFromIncompleteList(deletetarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンのdivタグを削除
    const deletetarget = deleteButton.parentNode;
    DeleteFromIncompleteList(deletetarget);
  });

  // divタグの下にliタグ
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから要素を削除
const DeleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
