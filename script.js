const questions = [
  {
    question: "TMO（テレビジョンマッチオフィシャル）を使用する場面として正しいものは？",
    answers: [
      { text: "ノックオンの判定", correct: false },
      { text: "トライまたは得点に関する判定", correct: true },
      { text: "ペナルティの場所の確認", correct: false },
      { text: "スクラムの組み直しの指示", correct: false }
    ]
  },
  
  // --- 新しい問題 1 ---
  {
    question: "アドバンテージが終了する条件で間違っているものを選べ",
    answers: [
      { text: "a. レフリーが、反則をしていないチームが利益を得たとみなした場合。", correct: false },
      { text: "b. レフリーが、反則をしていないチームが利益を得そうにないとみなした場合。", correct: false },
      { text: "c. 反則をしていないチームが、自分達が利益を得る前に反則を犯した場合。レフリーは競技を停止し、最初の反則に対する罰を適用する。いずれかの反則が、または、どちらの反則も不正なプレーである場合、それらの違反に対し、レフリーは適切な罰を適用する", correct: false },
      { text: "d. 反則をしていないチームが正当な手順で地域を戻した場合。", correct: true }, // 間違いなのでこれが正解肢
      { text: "e. 反則をしたチームが、アドバンテージが生じない2つ目、または、前の反則に続く反則を犯した場合。", correct: false }
    ]
  },

  // --- 新しい問題 2 ---
  {
    question: "次のうち、アドバンテージが適用されてはならず、レフリーはただちに笛を吹かなければならないものを選べ。",
    answers: [
      { text: "a. プレーヤーが重大な負傷を負ったと疑いがある場合。", correct: true }, // すぐに笛を吹くべきなのでこれが正解肢
      { text: "b. ラックからランダムにボールが出た場合。", correct: false },
      { text: "c. 反則したチームが正当な理由でエリアを戻した場合。", correct: false },
      { text: "d. レフェリーの理由により試合を止めたい場合。", correct: false }
    ]
  }

];

// --- HTML要素の取得 ---
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const feedbackElement = document.getElementById('feedback-text');

// --- 状態管理のための変数 ---
let currentQuestionIndex = 0; // 現在何問目のクイズか
let score = 0;              // 正解数

// --- 関数定義 ---

// 1. クイズを開始する関数
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide'); // 「次の問題へ」ボタンを非表示にする
    showQuestion();
}

// 2. 問題を表示する関数
function showQuestion() {
    // 前回表示された選択肢、フィードバックをクリア
    resetState(); 
    
    // 現在の問題オブジェクトを取得
    const currentQuestion = questions[currentQuestionIndex];
    
    // 質問番号と質問文をHTMLに表示
    questionElement.innerText = `[Q.${currentQuestionIndex + 1}] ${currentQuestion.question}`;
    
    // 選択肢のボタンを作成して表示
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        
        // 正解の選択肢にはデータを付与しておく（判定に使うため）
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        // ボタンがクリックされた時の処理を設定
        button.addEventListener('click', selectAnswer);
        
        // 選択肢エリアに追加
        answerButtonsElement.appendChild(button);
    });
}

// 3. 選択肢表示エリアをリセットする関数
function resetState() {
    // フィードバックテキストを空にする
    feedbackElement.innerText = ''; 
    // 「次の問題へ」ボタンを非表示にする
    nextButton.classList.add('hide');
    
    // 前回作成された選択肢ボタンを全て削除する
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// 4. ユーザーが回答を選択した時の関数
function selectAnswer(e) {
    const selectedButton = e.target;
    // data-correct='true'を持っているか判定
    const correct = selectedButton.dataset.correct === "true"; 
    
    if (correct) {
        feedbackElement.innerText = '✅ 正解！';
        score++;
    } else {
        feedbackElement.innerText = '❌ 不正解！';
    }
    
    // 回答後の処理：全てのボタンに正解/不正解の色を付け、クリック不可にする
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true"); // 正解のボタンを緑色にする
        button.removeEventListener('click', selectAnswer); // クリックイベントを無効化
    });

    // 「次の問題へ」ボタンを表示する
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // すべての問題が終了した場合
        nextButton.innerText = '結果を見る';
        nextButton.classList.remove('hide');
    }
}

// 5. ボタンの色を変える関数（CSSクラスを追加/削除）
function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add('correct'); // 正解なら緑色のクラス
    } else {
        element.classList.add('wrong');   // 不正解なら赤色のクラス
    }
}


// 6. 「次の問題へ」ボタンが押された時の処理
nextButton.addEventListener('click', () => {
    if (questions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++; // 次の問題へインデックスを移動
        showQuestion();
    } else {
        // 全ての問題が終了したら結果を表示
        alert(`全${questions.length}問中、${score}問正解でした！`);
        startQuiz(); // クイズをリセットして最初に戻る
    }
});


// --- アプリ起動時の実行 ---
startQuiz();