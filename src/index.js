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
    // 押された削除ボタンのdivタグを未完了リストから削除
    const deletetarget = completeButton.parentNode;
    DeleteFromIncompleteList(deletetarget);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了したTODOリストから要素を削除
      const backTarget = backButton.parentNode;
      DeleteFromCompleteList(backTarget);

      // 完了リストから未完了リストに戻す
      const text = backTarget.firstElementChild.innerText;

      // div以下を初期化
      backTarget.textContent = null;

      // liタグ生成
      const li = document.createElement("li");
      li.innerText = text;

      // 完了ボタン、削除ボタンの生成
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";

      // 戻す要素のDOM生成
      backTarget.appendChild(li);
      backTarget.appendChild(completeButton);
      backTarget.appendChild(deleteButton);

      // 完了リストに追加
      document.getElementById("incomplete-list").appendChild(backTarget);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
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

// 完了リストから要素を削除
const DeleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
