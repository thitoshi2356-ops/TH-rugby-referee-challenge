// Lawごとのクイズデータを定義
const laws = {
    // Law 6: マッチオフィシャル
    "Law 6": {
        title: "Law 6: マッチオフィシャル",
        questions: [
            {
                question: "TMO（テレビジョンマッチオフィシャル）を使用する場面として正しいものは？",
                answers: [
                    { text: "ノックオンの判定", correct: false },
                    { text: "トライまたは得点に関する判定", correct: true },
                    { text: "ペナルティの場所の確認", correct: false },
                    { text: "スクラムの組み直しの指示", correct: false }
                ]
            },
        ]
    },
    // Law 8: アドバンテージ
    "Law 8": {
        title: "Law 8: アドバンテージ",
        questions: [
            {
                question: "①アドバンテージが終了する条件で間違っているものを選べ",
                answers: [
                    { text: "a. レフリーが、反則をしていないチームが利益を得たとみなした場合。", correct: false },
                    { text: "b. レフリーが、反則をしていないチームが利益を得そうにないとみなした場合。", correct: false },
                    { text: "c. 反則をしていないチームが、自分達が利益を得る前に反則を犯した場合。レフリーは競技を停止し、最初の反則に対する罰を適用する。いずれかの反則が、または、どちらの反則も不正なプレーである場合、それらの違反に対し、レフリーは適切な罰を適用する", correct: false },
                    { text: "d. 反則をしていないチームが正当な手順で地域を戻した場合。", correct: true }, 
                    { text: "e. 反則をしたチームが、アドバンテージが生じない2つ目、または、前の反則に続く反則を犯した場合。", correct: false }
                ]
            },
            {
                question: "②次のうち、アドバンテージが適用されてはならず、レフリーはただちに笛を吹かなければならないものを選べ。",
                answers: [
                    { text: "a. プレーヤーが重大な負傷を負ったと疑いがある場合。", correct: true }, 
                    { text: "b. ラックからランダムにボールが出た場合。", correct: false },
                    { text: "c. 反則したチームが正当な理由でエリアを戻した場合。", correct: false },
                    { text: "d. レフェリーの理由により試合を止めたい場合。", correct: false }
                ]
            }
        ]
    },
    // Law 9: 不正なプレー (Foul Play)
    "Law 9": {
        title: "Law 9: 不正なプレー (Foul Play)",
        questions: [
            // I. 妨害 (OBSTRUCTION)
            {
                question: "ボールに向かって走っているプレイヤーと相手プレイヤーが、ショルダー・トゥ・ショルダー以外で、チャージまたはプッシュすることは許されるか？",
                answers: [
                    { text: "許される。", correct: false },
                    { text: "許されない。", correct: true },
                    { text: "レフリーの判断による。", correct: false },
                    { text: "ボールキャリアーから離れている場合は許される。", correct: false }
                ]
            },
            {
                question: "オフサイドのプレイヤーが意図的に行ってはならない行為はどれか？",
                answers: [
                    { text: "ラインアウトに参加する。", correct: false },
                    { text: "チームメイトをサポートする。", correct: false },
                    { text: "相手を妨害する、またはプレーに干渉する。", correct: true },
                    { text: "オフサイドラインの後方に下がる。", correct: false }
                ]
            },
            {
                question: "ボールキャリアーをタックルしている、またはタックルしようとしている相手プレイヤーを、意図的に妨害することは許されるか？",
                answers: [
                    { text: "許される。", correct: false },
                    { text: "許されない。", correct: true },
                    { text: "妨害しているプレイヤーがボールキャリアーと同一チームであれば許される。", correct: false },
                    { text: "オブストラクションとみなされない。", correct: false }
                ]
            },
            {
                question: "ボールキャリアーが、相手の妨害のために意図的にオフサイドのチームメイトに走り込むことは許されるか？",
                answers: [
                    { text: "許される。", correct: false },
                    { text: "許されない。", correct: true },
                    { text: "オフサイドのチームメイトが動いていない場合は許される。", correct: false },
                    { text: "ペナルティキックの対象とはならない。", correct: false }
                ]
            },
            {
                question: "ボールがデッドになった後で、相手プレイヤーを妨害、または干渉することは許されるか？",
                answers: [
                    { text: "許される。", correct: false },
                    { text: "許されない。", correct: true },
                    { text: "速やかに次のプレーを始めるためであれば許される。", correct: false },
                    { text: "サンクションはフリーキックである。", correct: false }
                ]
            },

            // II. 不正なプレー (UNFAIR PLAY)
            {
                question: "以下のうち、不正なプレー（Unfair Play）に該当しない行為はどれか？",
                answers: [
                    { text: "競技規則のいずれかの条項に意図的に違反する。", correct: false },
                    { text: "意図的にボールを腕や手で競技区域外に叩き出す。", correct: false },
                    { text: "相手が違反を犯したとマッチオフィシャルに誤認させる可能性がある行為をする。", correct: false },
                    { text: "過剰な力を使わずに、相手を手で突き放す（ハンドオフする）。", correct: true }
                ]
            },
            {
                question: "時間を浪費した場合のサンクションはどれか？",
                answers: [
                    { text: "ペナルティ。", correct: false },
                    { text: "フリーキック。", correct: true },
                    { text: "イエローカード。", correct: false },
                    { text: "スクラム。", correct: false }
                ]
            },

            // III. 繰り返しの違反 (REPEATED INFRINGEMENTS)
            {
                question: "異なるプレイヤーが同じチームで同じ反則を繰り返した場合、レフリーが最初に与えるサンクションはどれか？",
                answers: [
                    { text: "最初の違反者へのイエローカード。", correct: false },
                    { text: "チームへのジェネラルコーション（一般的な注意）。", correct: true },
                    { text: "ペナルティトライ。", correct: false },
                    { text: "その都度ペナルティを与える。", correct: false }
                ]
            },
            {
                question: " Law 9 に基づき、チームが同じ反則を繰り返した場合のサンクションは？",
                answers: [
                    { text: "フリーキック。", correct: false },
                    { text: "ペナルティ。", correct: true },
                    { text: "スクラム。", correct: false },
                    { text: "アドバンテージを適用する。", correct: false }
                ]
            },

            // IV. 危険なプレー (DANGEROUS PLAY) - 一般
            {
                question: "危険なプレーに該当する行為はどれか？",
                answers: [
                    { text: "相手に頭から突っ込む。", correct: false },
                    { text: "エルボーや前腕を先頭にして突っ込む。", correct: true },
                    { text: "ショルダー・トゥ・ショルダーでチャージする。", correct: false },
                    { text: "スクラム、ラック、モールでボールを競う。", correct: false }
                ]
            },
            {
                question: "以下のうち、肉体的虐待（Physical abuse）に含まれない行為はどれか？",
                answers: [
                    { text: "噛みつき。", correct: false },
                    { text: "肩、頭、膝など体の一部で叩くこと。", correct: false },
                    { text: "相手に激しく口頭で抗議する。", correct: true },
                    { text: "踏みつけ。", correct: false }
                ]
            },
            {
                question: "ボールを保持していない相手プレイヤーをタックルすることは許されるか？",
                answers: [
                    { text: "許される。", correct: false },
                    { text: "許されない。", correct: true },
                    { text: "スクラムからボールが出た直後なら許される。", correct: false },
                    { text: "レフリーに報告する。", correct: false }
                ]
            },
            {
                question: "相手プレイヤーを地面から持ち上げ、頭や上半身が地面に接触するように落とす、または突き刺すことは許されるか？",
                answers: [
                    { text: "許される。", correct: false },
                    { text: "許されない。", correct: true },
                    { text: "タックルが完全に成立していれば許される。", correct: false },
                    { text: "イエローカードで十分である。", correct: false }
                ]
            },
            {
                question: "ボールキャリアーが過剰な力を使わずに相手を手で突き放す（ハンドオフする）ことは許されるか？",
                answers: [
                    { text: "許される。", correct: true },
                    { text: "許されない。", correct: false },
                    { text: "トライエリア内でなければ許されない。", correct: false },
                    { text: "ペナルティとなる。", correct: false }
                ]
            },

            // V. 危険なプレー - セットプレー・その他
            {
                question: "スクラムにおける危険なプレーとして正しくないものはどれか？",
                answers: [
                    { text: "フロントローが相手に意図的にスクラムを崩させる。", correct: true },
                    { text: "フロントローのプレイヤーが相手を引きつける。", correct: false },
                    { text: "フロントローが距離を置いて突進する。", correct: false },
                    { text: "フロントローが意図的にスクラムを崩す。", correct: false }
                ]
            },
            {
                question: "ラックやモールにチャージする行為の定義として正しいものはどれか？",
                answers: [
                    { text: "ラックまたはモール内で相手プレイヤーに接触すること。", correct: false },
                    { text: "ラックまたはモール内の他のプレイヤーにバインド（組みつく）せずに接触すること。", correct: true },
                    { text: "ラックまたはモール内で相手にプッシュすること。", correct: false },
                    { text: "ラックまたはモール内でボールをプレーすること。", correct: false }
                ]
            },
            {
                question: "ラックやモールにおいて、プレイヤーが意図的に行ってはならない行為はどれか？",
                answers: [
                    { text: "意図的にラックやモールを崩す。", correct: true },
                    { text: "ボールキャリアーを地面に引き倒す。", correct: false },
                    { text: "相手にバインド（組みつく）する。", correct: false },
                    { text: "リスタートする。", correct: false }
                ]
            },
            {
                question: "キックした直後の相手プレイヤーへのチャージまたは妨害が意図的だった場合の、ペナルティキックの選択肢として正しくないものはどれか？",
                answers: [
                    { text: "反則の場所。", correct: false },
                    { text: "ボールが着地した場所、または次にプレーされた場所（ただしタッチラインから15m以内）。", correct: true }, 
                    { text: "ボールがタッチラインを越えたライン上の15mライン上。", correct: false },
                    { text: "インゴールに着地した場合、トライラインから5mのライン上。", correct: false }
                ]
            },

            // VI. その他
            {
                question: "プレイヤーが審判の権威を尊重し、審判の笛が鳴った後すぐにプレーを止めなければならない行為は、Law 9のどのカテゴリーに分類されるか？",
                answers: [
                    { text: "妨害 (Obstruction)。", correct: false },
                    { text: "危険なプレー (Dangerous Play)。", correct: false },
                    { text: "不正行為 (Misconduct)。", correct: true },
                    { text: "繰り返しの違反 (Repeated Infringements)。", correct: false }
                ]
            },
            {
                question: "プレイヤーが警告され10分間の出場停止となる場合、レフリーが示すカードはどれか？",
                answers: [
                    { text: "レッドカード。", correct: false },
                    { text: "グリーンカード。", correct: false },
                    { text: "イエローカード。", correct: true },
                    { text: "ブルーカード。", correct: false }
                ]
            }
        ]
    }
    // ここに他のLawを追加していきます
};

// --- HTML要素の取得 ---
const lawSelectorElement = document.getElementById('law-selector'); 
const quizScreenElement = document.getElementById('quiz-screen'); 
const currentLawTitleElement = document.getElementById('current-law-title'); 
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button'); 
const feedbackElement = document.getElementById('feedback-text');

// --- 状態管理のための変数 ---
let currentQuestionIndex = 0; 
let score = 0;              
let currentQuestions = []; 


// --- 配列をランダムにシャッフルする関数 ---
function shuffleArray(array) {
    // フィッシャー・イェーツ・シャッフル
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// ---------------------------------------------------


// --- 関数定義 ---

// 1. クイズを開始する関数 
function startQuiz(lawKey) {
    currentQuestions = laws[lawKey].questions;
    currentLawTitleElement.innerText = laws[lawKey].title; 

    // クイズ画面に切り替え
    lawSelectorElement.classList.add('hide');
    quizScreenElement.classList.remove('hide');
    
    currentQuestionIndex = 0;
    score = 0;
    
    // クイズ開始時に問題をシャッフル
    shuffleArray(currentQuestions); 
    
    nextButton.classList.add('hide'); 
    showQuestion();
}

// 2. 問題を表示する関数 
function showQuestion() {
    // 前回表示された選択肢、フィードバックをクリア
    resetState(); 
    
    const currentQuestion = currentQuestions[currentQuestionIndex];

    // 質問番号と質問文をHTMLに表示
    questionElement.innerText = `[Q.${currentQuestionIndex + 1}] ${currentQuestion.question}`;
    
    // 選択肢のボタンを作成して表示
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        
        // 正解の選択肢にはデータを付与しておく
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        // ボタンがクリックされた時の処理を設定
        button.addEventListener('click', selectAnswer);
        
        answerButtonsElement.appendChild(button);
    });
}

// 3. 選択肢表示エリアをリセットする関数 
function resetState() {
    feedbackElement.innerText = ''; 
    nextButton.classList.add('hide');
    
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// 4. ユーザーが回答を選択した時の関数 (即時判定ロジック)
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
        // 正解・不正解の色を付ける
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        } else if (button === selectedButton) {
            // ユーザーが選択した不正解のボタンに色を付ける
            button.classList.add('wrong');
        }
        
        // クリックイベントを無効化（選び直し不可にする）
        button.removeEventListener('click', selectAnswer); 
    });

    // 「次の問題へ」ボタンを表示する
    if (currentQuestions.length > currentQuestionIndex + 1) {
        nextButton.innerText = '次の問題へ';
        nextButton.classList.remove('hide');
        nextButton.dataset.mode = 'next'; 
    } else {
        // すべての問題が終了した場合
        nextButton.innerText = '結果を見る';
        nextButton.classList.remove('hide');
        nextButton.dataset.mode = 'next';
    }
}

// 5. setStatusClass 関数は削除されました

// 6. 「次の問題へ」ボタンが押された時の処理 (簡略化)
nextButton.addEventListener('click', () => {
    // モードが'next'の場合のみ処理（回答確定モードは削除）
    if (nextButton.dataset.mode === 'next') {
        if (currentQuestions.length > currentQuestionIndex + 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            // 全ての問題が終了
            alert(`全${currentQuestions.length}問中、${score}問正解でした！`);
            showLawSelector(); 
        }
    } 
});


// 7. Law選択画面に戻るボタンの処理
backButton.addEventListener('click', () => {
    showLawSelector();
});

// 8. Law選択画面を表示する関数
function showLawSelector() {
    lawSelectorElement.classList.remove('hide');
    quizScreenElement.classList.add('hide');
    
    // 既存のボタンをクリア（タイトルを除く）
    while (lawSelectorElement.children.length > 1) { 
        lawSelectorElement.removeChild(lawSelectorElement.lastChild);
    }
    
    // Lawボタンを生成
    Object.keys(laws).forEach(lawKey => {
        const lawData = laws[lawKey];
        
        // 質問数が0のLawはボタンを生成しない
        if (lawData.questions.length === 0) {
            return; 
        }

        const button = document.createElement('button');
        
        // Lawのタイトルと問題数を表示
        button.innerText = `${lawKey}: ${lawData.title} (${lawData.questions.length}問)`;
        button.classList.add('btn', 'law-btn');
        
        // ボタンにLawのキーを設定し、クリックしたらクイズ開始
        button.addEventListener('click', () => startQuiz(lawKey));
        
        lawSelectorElement.appendChild(button);
    });
}


// --- アプリ起動時の実行 (Law選択画面から開始) ---
showLawSelector();