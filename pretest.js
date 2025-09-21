// ===== 這兩個常數決定版型與檔名（前測/後測只改這裡）=====
const TEST_LABEL = "前測";   // 後測請改成 "後測"
const FILE_TAG   = "pretest"; // 後測請改成 "posttest"
// ==========================================================

const colorMap = {
  "洋紅": "#e92b92",
  "黃": "#ffe600",
  "青": "#00a2dd",
  "紅": "#ff0000",
  "綠": "#58c271",
  "藍": "#0000FF",
  "紫": "#a334b3",
  "橙": "#ffa500",
  "朱紅": "#E34234",
  "黃綠": "#9ACD32",
  "青藍": "#007FFF",
  "藍綠": "#008080",
  "黑": "#000000",
  "白": "#ffffff"
};

// 題目陣列
const practiceQuestions = [
  {
    q: "青 + 黃 → ?",
    answer: ["青", "黃"],
    options: [{ value: "綠" }, { value: "紅" }, { value: "藍" }]
  },
  {
    q: "洋紅 + 青 → ?",
    answer: ["洋紅", "青"],
    options: [{ value: "藍" }, { value: "橙" }, { value: "紫" }]
  },
  {
    q: "洋紅 + 黃 + 黃 → ?",
    answer: ["洋紅", "黃", "黃"],
    options: [{ value: "紫" }, { value: "橙" }, { value: "青藍" }]
  },
  {
    q: "洋紅 + 青 + 洋紅 → ?",
    answer: ["洋紅", "青", "洋紅"],
    options: [{ value: "紅" }, { value: "綠" }, { value: "紫" }]
  }
];

const realQuestions = [
  { q: "洋紅 + 黃 → ?", answer: ["洋紅", "黃"], correctAnswer:"紅",
    options: [{ value: "紅" }, { value: "綠" }, { value: "橙" }] },
  { q: "青 + 黃 → ?", answer: ["青", "黃"], correctAnswer:"綠",
    options: [{ value: "綠" }, { value: "紅" }, { value: "藍" }] },
  { q: "洋紅 + 青 → ?", answer: ["洋紅", "青"], correctAnswer:"藍",
    options: [{ value: "藍" }, { value: "橙" }, { value: "紫" }] },

  { q: "這是什麼混色組成？", color: "紅", answer: ["洋紅", "黃"], correctAnswer:"洋紅+黃",
    options: [
      { colors: ["洋紅", "黃"], value: "洋紅+黃" },
      { colors: ["青", "黃"], value: "青 + 黃" },
      { colors: ["洋紅", "青"], value: "洋紅 + 青" }
    ]},
  { q: "這是什麼混色組成？", color: "綠", answer: ["青", "黃"], correctAnswer:"青+黃",
    options: [
      { colors: ["青", "黃"], value: "青+黃" },
      { colors: ["洋紅", "黃"], value: "洋紅 + 黃" },
      { colors: ["洋紅", "青"], value: "洋紅 + 青" }
    ]},
  { q: "這是什麼混色組成？", color: "藍", answer: ["洋紅", "青"], correctAnswer:"洋紅+青",
    options: [
      { colors: ["青", "黃"], value: "青 + 黃" },
      { colors: ["洋紅", "黃"], value: "洋紅 + 黃" },
      { colors: ["洋紅", "青"], value: "洋紅+青" }
    ]},

  { q: "洋紅 + 黃 + 黃 → ?", answer: ["洋紅", "黃", "黃"], correctAnswer:"橙",
    options: [{ value: "紫" }, { value: "橙" }, { value: "青藍" }] },
  { q: "洋紅 + 洋紅 + 黃 → ?", answer: ["洋紅", "洋紅", "黃"], correctAnswer:"朱紅",
    options: [{ value: "朱紅" }, { value: "橙" }, { value: "藍綠" }] },
  { q: "青 + 黃 + 黃 → ?", answer: ["青", "黃", "黃"], correctAnswer:"黃綠",
    options: [{ value: "黃綠" }, { value: "紅" }, { value: "青藍" }] },
  { q: "洋紅 + 青 + 洋紅 → ?", answer: ["洋紅", "青", "洋紅"], correctAnswer:"紫",
    options: [{ value: "紅" }, { value: "綠" }, { value: "紫" }] },
  { q: "青 + 青 + 洋紅 → ?", answer: ["青", "青", "洋紅"], correctAnswer:"青藍",
    options: [{ value: "青藍" }, { value: "藍" }, { value: "黃綠" }] },
  { q: "青 + 黃 + 青 → ?", answer: ["青", "黃", "青"], correctAnswer:"藍綠",
    options: [{ value: "綠" }, { value: "藍綠" }, { value: "青藍" }] },

  { q: "這是什麼混色組成？", color: "橙", answer: ["洋紅", "黃", "黃"], correctAnswer:"洋紅+黃+黃",
    options: [
      { colors: ["洋紅", "黃", "黃"], value: "洋紅+黃+黃" },
      { colors: ["洋紅", "洋紅", "黃"], value: "洋紅 + 洋紅 + 黃" },
      { colors: ["青", "黃", "黃"], value: "青 + 黃 + 黃" }
    ]},
  { q: "這是什麼混色組成？", color: "朱紅", answer: ["洋紅", "洋紅", "黃"], correctAnswer:"洋紅+洋紅+黃",
    options: [
      { colors: ["洋紅", "黃", "黃"], value: "洋紅+黃+黃" },
      { colors: ["洋紅", "洋紅", "黃"], value: "洋紅+洋紅+黃" },
      { colors: ["青", "黃", "黃"], value: "青 + 黃 + 黃" }
    ]},
  { q: "這是什麼混色組成？", color: "黃綠", answer: ["青", "黃", "黃"], correctAnswer:"青+黃+黃",
    options: [
      { colors: ["青", "黃", "黃"], value: "青+黃+黃" },
      { colors: ["洋紅", "黃", "黃"], value: "洋紅 + 黃 + 黃" },
      { colors: ["青", "青", "黃"], value: "青 + 青 + 黃" }
    ]},
  { q: "這是什麼混色組成？", color: "紫", answer: ["洋紅", "青", "洋紅"], correctAnswer:"洋紅+青+洋紅",
    options: [
      { colors: ["洋紅", "黃", "黃"], value: "洋紅 + 黃 + 黃" },
      { colors: ["洋紅", "青", "洋紅"], value: "洋紅+青+洋紅" },
      { colors: ["青", "黃", "青"], value: "青 + 黃 + 青" }
    ]},
  { q: "這是什麼混色組成？", color: "青藍", answer: ["青", "洋紅", "青"], correctAnswer:"青+洋紅+青",
    options: [
      { colors: ["洋紅", "黃", "黃"], value: "洋紅 + 黃 + 黃" },
      { colors: ["青", "洋紅", "青"], value: "青+洋紅+青" },
      { colors: ["青", "青", "黃"], value: "青+青+黃" }
    ]},
  { q: "這是什麼混色組成？", color: "藍綠", answer: ["青", "黃", "青"], correctAnswer:"青+黃+青",
    options: [
      { colors: ["青", "黃", "黃"], value: "青 + 黃 + 黃" },
      { colors: ["青", "黃", "青"], value: "青+黃+青" },
      { colors: ["洋紅", "洋紅", "黃"], value: "洋紅 + 洋紅 + 黃" }
    ]},
  { q: "這是什麼混色組成？", color: "黑", answer: ["洋紅", "黃", "青"], correctAnswer: "洋紅+黃+青",
    options: [
      { colors: ["洋紅", "黃", "青"], value: "洋紅+黃+青" },
      { colors: ["青", "青", "黃"], value: "青 + 青 + 黃" },
      { colors: ["洋紅", "洋紅", "黃"], value: "洋紅 + 洋紅 + 黃" }
    ]},

  
  { q: "藍 + 青 → ?", answer: ["藍","青"], correctAnswer:"青藍",
    options: [{ value: "青藍" }, { value: "藍綠" }, { value: "紫" }] },
  { q: "藍 + 洋紅 → ?", answer: ["藍","洋紅"], correctAnswer:"紫",
    options: [{ value: "青藍" }, { value: "橙" }, { value: "紫" }] },
  { q: "紅 + 洋紅 → ?", answer: ["紅","洋紅"], correctAnswer:"朱紅",
    options: [{ value: "橙" }, { value: "朱紅" }, { value: "紫" }] },
  { q: "紅 + 黃 → ?", answer: ["紅","黃"], correctAnswer:"橙",
    options: [{ value: "朱紅" }, { value: "橙" }, { value: "紫" }] },
  { q: "綠 + 黃 → ?", answer: ["綠","黃"], correctAnswer:"黃綠",
    options: [{ value: "藍綠" }, { value: "黃綠" }, { value: "青藍" }] },
  { q: "綠 + 青 → ?", answer: ["綠","青"], correctAnswer:"藍綠",
    options: [{ value: "黃綠" }, { value: "藍綠" }, { value: "紫" }] },

  { q: "這是什麼混色組成？", color: "青藍", answer: ["藍", "青"], correctAnswer:"藍+青",
    options: [
      { colors: ["藍", "青"], value: "藍+青" },
      { colors: ["藍", "洋紅"], value: "藍+洋紅" },
      { colors: ["綠", "青"], value: "綠+青" }
    ]},
  { q: "這是什麼混色組成？", color: "紫", answer: ["藍", "洋紅"], correctAnswer:"藍+洋紅",
    options: [
      { colors: ["藍", "青"], value: "藍+青" },
      { colors: ["藍", "洋紅"], value: "藍+洋紅" },
      { colors: ["紅", "青"], value: "紅+青" }
    ]},
  { q: "這是什麼混色組成？", color: "朱紅", answer: ["紅", "洋紅"], correctAnswer:"紅+洋紅",
    options: [
      { colors: ["紅", "黃"], value: "紅+黃" },
      { colors: ["藍", "洋紅"], value: "藍+洋紅" },
      { colors: ["紅", "洋紅"], value: "紅+洋紅" }
    ]},
  { q: "這是什麼混色組成？", color: "橙", answer: ["紅", "黃"], correctAnswer:"紅+黃",
    options: [
      { colors: ["紅", "黃"], value: "紅+黃" },
      { colors: ["藍", "洋紅"], value: "藍+洋紅" },
      { colors: ["紅", "洋紅"], value: "紅+洋紅" }
    ]},
  { q: "這是什麼混色組成？", color: "黃綠", answer: ["綠", "黃"], correctAnswer:"綠+黃",
    options: [
      { colors: ["綠", "黃"], value: "綠+黃" },
      { colors: ["綠", "青"], value: "綠+青" },
      { colors: ["藍", "黃"], value: "藍+黃" }
    ]},
  { q: "這是什麼混色組成？", color: "藍綠", answer: ["綠", "青"], correctAnswer:"綠+青",
    options: [
      { colors: ["綠", "黃"], value: "綠+黃" },
      { colors: ["綠", "青"], value: "綠+青" },
      { colors: ["藍", "黃"], value: "藍+黃" }
    ]},
];

let allQuestions = [];
let current = 0;
let startTime = 0;
let results = [];
let username = "";
let realQuestionIndices = [];

function startQuiz() {
  const usernameInput = document.getElementById("username");
  username = usernameInput.value.trim();
  
  if (!username) {
    alert("請輸入受試者編號再開始測驗！");
    return;
  }
  
  // 隱藏開始畫面，顯示測驗內容
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";
  
  // 初始化測驗
  const shuffledPractice = shuffle(practiceQuestions);
  const shuffledReal = shuffle(realQuestions);

  allQuestions = [...shuffledPractice, "divider", ...shuffledReal];

  // 計算 divider 的位置
  const dividerIndex = shuffledPractice.length;

  // 建立正式題目索引列表（只取 divider 後面的題目 index）
  realQuestionIndices = allQuestions
    .map((q, i) => (typeof q === "object" && q.q ? i : null))
    .filter(i => i !== null && i > dividerIndex);

  loadQuestion();
}

window.onload = () => {
  // 頁面載入時顯示開始畫面
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("quiz-content").style.display = "none";

  // ☆ 自動在首頁標題加上（前測 / 後測）
  // 假設你的 HTML 首頁標題元素是 <h1 id="page-title">顏色混合測驗</h1>
  const titleEl = document.getElementById("page-title");
  if (titleEl && !titleEl.textContent.includes("（")) {
    titleEl.textContent = `${titleEl.textContent}（${TEST_LABEL}）`;
  }
};

function makeColorImage(color) {
  const canvas = document.createElement("canvas");
  canvas.width = 50;
  canvas.height = 50;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(25, 25, 25, 0, 2 * Math.PI);
  ctx.fill();
  return canvas.toDataURL();
}

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function loadQuestion() {
  const q = allQuestions[current];

  const qText = document.getElementById("question-text");
  const qImage = document.getElementById("question-image");
  const options = document.getElementById("options");

  qText.innerHTML = "";
  if (qImage) qImage.style.display = "none";
  options.innerHTML = "";

  // 顯示題號（只算正式題）
  if (typeof q === "object" && q.q) {
    const realIndex = realQuestionIndices.indexOf(current);
    if (realIndex !== -1) {
      const questionNumber = document.createElement("div");
      questionNumber.innerText = `第 ${realIndex + 1} 題，共 ${realQuestionIndices.length} 題`;
      questionNumber.style.fontSize = "16px";
      questionNumber.style.marginBottom = "8px";
      qText.appendChild(questionNumber);
    }
  }

  // 處理 divider 題型
  if (q === "divider") {
    qText.innerText = "✔ 練習題結束，正式測驗即將開始";
    const btn = document.createElement("button");
    btn.innerText = "開始正式題目";
    btn.onclick = () => {
      current++;
      loadQuestion();
    };
    btn.style.marginTop = "20px";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "16px";
    options.appendChild(btn);
    return;
  }

  if (q.color) {
    const title = document.createElement("div");
    title.innerText = "請觀察下方顏色並判斷其混色組成：";
    title.style.fontSize = "18px";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "10px";
    qText.appendChild(title);

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.marginBottom = "10px";

    const img = new Image(60, 60);
    img.src = makeColorImage(colorMap[q.color]);
    img.style.marginBottom = "5px";
    wrapper.appendChild(img);

    const label = document.createElement("div");
    label.innerText = q.color;
    label.style.fontSize = "18px";
    label.style.fontWeight = "bold";
    wrapper.appendChild(label);

    qText.appendChild(wrapper);

    const desc = document.createElement("div");
    desc.innerText = "這是由哪幾個顏色混成的？";
    desc.style.fontSize = "20px";
    desc.style.marginTop = "10px";
    qText.appendChild(desc);
  } else {
    q.answer.forEach(c => {
      const container = document.createElement("div");
      container.style.display = "inline-block";
      container.style.textAlign = "center";
      container.style.marginRight = "6px";

      const img = new Image(40, 40);
      img.src = makeColorImage(colorMap[c]);
      container.appendChild(img);

      const label = document.createElement("div");
      label.innerText = c;
      label.style.fontSize = "14px";
      label.style.marginTop = "2px";
      container.appendChild(label);

      qText.appendChild(container);
    });

    const arrow = document.createElement("span");
    arrow.innerText = " → ?";
    arrow.style.fontSize = "20px";
    arrow.style.marginLeft = "10px";
    qText.appendChild(arrow);

    const desc = document.createElement("div");
    desc.innerText = "請問這些顏色混合後是什麼顏色？";
    desc.style.fontSize = "18px";
    desc.style.marginTop = "5px";
    qText.appendChild(desc);
  }

  const optionSet = q.options;
  optionSet.forEach(opt => {
    let btn;
    if (q.color) {
      btn = renderMultiColorButton(opt.colors, () => submitAnswer(opt.colors.join("+")));
    } else {
      btn = document.createElement("button");
      btn.style.margin = "10px";
      btn.style.display = "inline-block";
      btn.style.textAlign = "center";
      btn.onclick = () => submitAnswer(opt.value);

      const resultColorName = opt.value;
      const colorHex = colorMap[resultColorName];
      const img = new Image(50, 50);
      img.src = makeColorImage(colorHex);
      btn.appendChild(img);

      const label = document.createElement("div");
      label.innerText = resultColorName;
      label.style.fontSize = "14px";
      label.style.marginTop = "5px";
      btn.appendChild(label);
    }
    options.appendChild(btn);
  });

  startTime = performance.now();
}

async function saveToDatabase(results) {
  try {
    const timestamp = new Date().toISOString();
    const key = `quiz_${username}_${timestamp}_${FILE_TAG}`;
    localStorage.setItem(key, JSON.stringify(results));
    console.log('結果已成功儲存到本地儲存');
    return true;
  } catch (error) {
    console.error('儲存錯誤:', error);
    return false;
  }
}

function submitAnswer(ans) {
  const reactionTime = Math.round((performance.now() - startTime) / 10);
  const q = allQuestions[current];

  const isReal = allQuestions.indexOf("divider") < current;

  if (q !== "divider") {
    const correct = ans.trim() === q.correctAnswer;

    if (isReal) {
      results.push({
        username: username,                 // 這裡作為「受試者編號」
        testPhase: TEST_LABEL,              // 前測/後測
        fileTag: FILE_TAG,                  // pretest/posttest
        question: q.q,
        shownColor: q.color || "",
        answer: ans,
        correct,
        reactionTime_0_01s: reactionTime, 
        questionIndex: current 
      });
    }
  }

  current++;
  if (current < allQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

async function showResults() {
  const scoredResults = results.filter(r => realQuestionIndices.includes(r.questionIndex));
  const correctCount = scoredResults.filter(r => r.correct).length;

  const qText = document.getElementById("question-text");
  const options = document.getElementById("options");

  // 自動儲存結果到本地儲存
  const saved = await saveToDatabase(results);
  
  // 自動下載 JSON 檔案
  setTimeout(() => {
    downloadJSON();
  }, 300);

  // 自動下載文字報告（補齊你原本呼叫的函式）
  setTimeout(() => {
    downloadTXT();
  }, 600);
  
  if (saved) {
    qText.innerText = `測驗完成（${TEST_LABEL}）！你總共答對了 ${correctCount} 題，共 ${scoredResults.length} 題\n✓ 結果已自動儲存到本地（localStorage）\n✓ 檔案已自動下載到電腦`;
  } else {
    qText.innerText = `測驗完成（${TEST_LABEL}）！你總共答對了 ${correctCount} 題，共 ${scoredResults.length} 題\n⚠ 儲存失敗，但檔案已自動下載到電腦`;
  }

  options.innerHTML = "";

  const downloadBtn = document.createElement("button");
  downloadBtn.innerText = "下載結果(JSON)";
  downloadBtn.onclick = downloadJSON;
  downloadBtn.style.marginRight = "10px";

  const downloadTxtBtn = document.createElement("button");
  downloadTxtBtn.innerText = "下載摘要(TXT)";
  downloadTxtBtn.onclick = downloadTXT;
  downloadTxtBtn.style.marginRight = "10px";

  const restartBtn = document.createElement("button");
  restartBtn.innerText = "重新開始";
  restartBtn.onclick = () => {
    const shuffledPractice = shuffle(practiceQuestions);
    const shuffledReal = shuffle(realQuestions);
    allQuestions = [...shuffledPractice, "divider", ...shuffledReal];

    const dividerIndex = shuffledPractice.length;
    realQuestionIndices = allQuestions
      .map((q, i) => (typeof q === "object" && q.q ? i : null))
      .filter(i => i !== null && i > dividerIndex);

    current = 0;
    results = [];
    loadQuestion();
  };

  options.appendChild(downloadBtn);
  options.appendChild(downloadTxtBtn);
  options.appendChild(restartBtn);
}

function downloadJSON() {
  // 檔名規格：[受試者編號]_pretest.json（或 posttest.json）
  const filename = `${username}_${FILE_TAG}.json`;
  const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadTXT() {
  // 產出簡易文字摘要，檔名同樣採用 [受試者編號]_pretest.txt
  const scored = results.filter(r => typeof r.questionIndex === "number");
  const correct = scored.filter(r => r.correct).length;
  const total = scored.length;

  let lines = [];
  lines.push(`受試者編號: ${username}`);
  lines.push(`測驗類型: ${TEST_LABEL} (${FILE_TAG})`);
  lines.push(`作答日期: ${new Date().toLocaleString()}`);
  lines.push(`答對題數: ${correct} / ${total}`);
  lines.push(`----------------------------------------`);
  scored.forEach((r, idx) => {
    lines.push(`Q${idx + 1}: ${r.question}`);
    if (r.shownColor) lines.push(`  顯示顏色: ${r.shownColor}`);
    lines.push(`  作答: ${r.answer}   判定: ${r.correct ? "✔ 正確" : "✘ 錯誤"}   反應時間(0.01s): ${r.reactionTime_0_01s}`);
  });

  const content = lines.join("\n");
  const filename = `${username}_${FILE_TAG}.txt`;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function renderMultiColorButton(colors, onClick) {
  const btn = document.createElement("button");
  btn.style.display = "inline-block";
  btn.style.margin = "10px";
  btn.style.padding = "5px";
  btn.style.border = "1px solid #ccc";
  btn.onclick = onClick;

  colors.forEach(c => {
    const img = new Image(30, 30);
    img.src = makeColorImage(colorMap[c]);
    img.style.marginRight = "4px";
    btn.appendChild(img);
  });

  const label = document.createElement("div");
  label.innerText = colors.join(" + ");
  label.style.fontSize = "14px";
  label.style.marginTop = "5px";
  btn.appendChild(label);

  return btn;
}
