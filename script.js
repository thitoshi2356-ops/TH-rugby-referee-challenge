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
    },
    // Law 10: オープンプレーにおけるオフサイドとオンサイド
    "Law 10": {
        title: "Law 10: オープンプレーにおけるオフサイドとオンサイド",
        questions: [
            // ----------------------------------------------------
            // I. オフサイドの定義と妨害 (Law 10.1 - 10.3)
            // ----------------------------------------------------
            {
                question: "オープンプレーにおいて、プレイヤーがオフサイドとなるのはどのような場合か？",
                answers: [
                    { text: "最後にプレーした味方、またはボールキャリアーである味方の後方にいる場合。", correct: false },
                    { text: "ボールを持っている、または最後にプレーした味方の前方にいる場合。", correct: true },
                    { text: "相手ゴールラインから10メートル以内にいる場合。", correct: false },
                    { text: "プレーが停止している場合。", correct: false }
                ]
            },
            {
                question: "オフサイドのプレイヤーがプレーを妨げる行為として、競技規則に規定されていないものはどれか？",
                answers: [
                    { text: "ボールをプレーする。", correct: false },
                    { text: "ボールキャリアーをタックルする。", correct: false },
                    { text: "相手がしたいと思うプレーをさせない。", correct: false },
                    { text: "味方のラインアウトジャンパーをリフトする。", correct: true }
                ]
            },
            {
                question: "オフサイドのプレイヤーが「ロイタリング（loitering）」を行うとは、どのような行為を指すか？",
                answers: [
                    { text: "意図的にボールに向かって前進すること。", correct: false },
                    { text: "オフサイドの位置にとどまり、プレーを妨げる機会を伺うこと。", correct: true },
                    { text: "オンサイドになる努力をすること。", correct: false },
                    { text: "競技区域外へ出ることを拒否すること。", correct: false }
                ]
            },
            {
                question: "故意ではないスローフォワードを受け取ったプレイヤーは、オフサイドとなるか？",
                answers: [
                    { text: "はい、オフサイドとなり罰則を受ける。", correct: false },
                    { text: "いいえ、オフサイドとはならない。", correct: true },
                    { text: "ボールが着地した場所でスクラムとなる。", correct: false },
                    { text: "アクシデンタルオフサイドとみなされる。", correct: false }
                ]
            },
            {
                question: "プレイヤーは、競技区域内のどの場所でオフサイドとなりうるか？",
                answers: [
                    { text: "スクラム、ラック、モールの中のみ。", correct: false },
                    { text: "相手のハーフウェイラインより前のみ。", correct: false },
                    { text: "競技区域内のいずれの場所でも。", correct: true },
                    { text: "タッチラインから15メートル以内のみ。", correct: false }
                ]
            },

            // ----------------------------------------------------
            // II. オフサイドプレイヤーへの罰則 (Law 10.4)
            // ----------------------------------------------------
            {
                question: "オフサイドのプレイヤーが反則を適用される条件として正しくないものはどれか？",
                answers: [
                    { text: "後退する努力をせずに、プレーを妨げる。", correct: false },
                    { text: "ボールに向かって前進した。", correct: false },
                    { text: "ボールを蹴った味方の後方へ直ちに後退した。", correct: true },
                    { text: "オフサイドの位置でロイタリングを行った。", correct: false }
                ]
            },
            {
                question: "オフサイドのプレイヤーが反則を適用された場合、反則をしていないチームが選択できる罰はどれか？",
                answers: [
                    { text: "反則の地点でのフリーキック。", correct: false },
                    { text: "反則の地点でのペナルティ。", correct: true },
                    { text: "反則の地点でのペナルティトライ。", correct: false },
                    { text: "反則をしたチームが最後にボールをプレーした地点でのラインアウト。", correct: false }
                ]
            },
            {
                question: "オフサイドのプレイヤーが反則を適用された場合、反則をしていないチームが選択できるもう一つの罰はどれか？",
                answers: [
                    { text: "反則をしたチームが最後にボールをプレーした地点でのスクラム。", correct: true },
                    { text: "ハーフウェイラインでのペナルティ。", correct: false },
                    { text: "反則の地点でのドロップアウト。", correct: false },
                    { text: "イエローカード。", correct: false }
                ]
            },
            {
                question: "味方がボールを蹴った際、オフサイドラインを越えていたプレイヤーが反則の対象となるのは、いつまでただちに後退しなかった場合か？",
                answers: [
                    { text: "オンサイドにいる味方の後方、または、ボールがキャッチされた地点から10m離れた想定上のラインまで。", correct: true },
                    { text: "レフリーがオンサイドと判断するまで。", correct: false },
                    { text: "ボールが相手に触れるまで。", correct: false },
                    { text: "ボールがゴールポストに当たった場合、後退の義務はなくなる。", correct: false }
                ]
            },
            {
                question: "「10メートル規則」において、オフサイドのプレイヤーを罰則の対象とするのは、ボールがゴールポストやクロスバーに先に当たった場合でも同様か？",
                answers: [
                    { text: "はい、同様に罰則の対象となる。", correct: true },
                    { text: "いいえ、その場合は罰則の対象外となる。", correct: false },
                    { text: "その場合、罰則はフリーキックに軽減される。", correct: false },
                    { text: "キッカーがオフサイドのプレイヤーに声をかけていれば罰則はない。", correct: false }
                ]
            },
            {
                question: "「10メートル規則」が適用されない唯一のケースはどれか？",
                answers: [
                    { text: "ボールが相手側のプレイヤーに触れた場合。", correct: false },
                    { text: "キックがチャージダウンされた場合。", correct: true },
                    { text: "ボールが地面に触れる前にキャッチされた場合。", correct: false },
                    { text: "オフサイドプレイヤーが動かなかった場合。", correct: false }
                ]
            },
            {
                question: "オフサイドのプレイヤーが複数いた場合、「10メートル規則」で反則の対象となるのは誰か？",
                answers: [
                    { text: "キッカーに最も近いプレイヤー。", correct: false },
                    { text: "ボールがキャッチされた、または、地面に着いた地点に最も近いプレイヤー。", correct: true },
                    { text: "最も積極的にプレーを妨害したプレイヤー。", correct: false },
                    { text: "インゴールに最も近いプレイヤー。", correct: false }
                ]
            },

            // ----------------------------------------------------
            // III. アクシデンタルオフサイド (Law 10.5)
            // ----------------------------------------------------
            {
                question: "アクシデンタルオフサイド（Accidental offside）とは、どのような場合か？",
                answers: [
                    { text: "意図的にボールに向かって前進した時。", correct: false },
                    { text: "プレイヤーがやむなく、ボールまたはボールキャリアーに触れてしまった場合。", correct: true },
                    { text: "オフサイドのプレイヤーが意図的にプレーを妨害した時。", correct: false },
                    { text: "味方のキックがチャージダウンされた時。", correct: false }
                ]
            },
            {
                question: "アクシデンタルオフサイドが発生した場合、プレーが停止されるのはどのような時か？",
                answers: [
                    { text: "常にプレーは停止される。", correct: false },
                    { text: "反則をした側のチームが利益を得る場合のみ。", correct: true },
                    { text: "相手プレイヤーが笛を吹くよう要求した場合。", correct: false },
                    { text: "ボールがタッチに出た場合。", correct: false }
                ]
            },
            {
                question: "アクシデンタルオフサイドの罰則はどれか？",
                answers: [
                    { text: "ペナルティ。", correct: false },
                    { text: "フリーキック。", correct: false },
                    { text: "スクラム。", correct: true },
                    { text: "レフリーの裁量による。", correct: false }
                ]
            },

            // ----------------------------------------------------
            // IV. オンサイドになる方法 (Law 10.6 - 10.8)
            // ----------------------------------------------------
            {
                question: "オフサイドのプレイヤーがオンサイドになることができる行為はどれか？",
                answers: [
                    { text: "相手側のボールキャリアーをタックルする。", correct: false },
                    { text: "ボールを最後にプレーした味方の後方へ後退する。", correct: true },
                    { text: "ボールに向かって前進する。", correct: false },
                    { text: "競技区域外へ出る。", correct: false }
                ]
            },
            {
                question: "オフサイドのプレイヤーが、味方の行為によってオンサイドになることができる条件として正しいものはどれか？",
                answers: [
                    { text: "オフサイドのプレイヤーがボールを蹴る。", correct: false },
                    { text: "オンサイドの位置にいる味方が、オフサイドのプレイヤーを追い越し、競技区域内にいる。", correct: true },
                    { text: "レフリーがオンサイドを宣言する。", correct: false },
                    { text: "相手が故意ではないスローフォワードを犯す。", correct: false }
                ]
            },
            {
                question: "Law 10.4(c)のキックによるオフサイドに関する規則（10メートル規則）を除き、オフサイドのプレイヤーが、相手側の行為によってオンサイドになりうる条件はどれか？",
                answers: [
                    { text: "相手側のプレイヤーがボールを蹴った。", correct: true },
                    { text: "相手側のプレイヤーがオフサイドのプレイヤーを追い越した。", correct: false },
                    { text: "相手側のプレイヤーがボールキャリアーになった。", correct: false },
                    { text: "相手側のプレイヤーがボールを獲得せずに故意にボールに触れた。", correct: false } 
                ]
            },
            {
                question: "Law 10.4(c)によりオフサイドのプレイヤー（10メートル規則）は、チャージダウンを除き、相手側のいかなる行為によってもオンサイドになることはあるか？",
                answers: [
                    { text: "はい、相手側のプレイヤーがボールキャリアーになった場合はオンサイドになる。", correct: false },
                    { text: "いいえ、ならない。", correct: true },
                    { text: "はい、相手がノックオンをした場合はオンサイドになる。", correct: false },
                    { text: "はい、相手がペナルティを犯した場合はオンサイドになる。", correct: false }
                ]
            },

            // ----------------------------------------------------
            // V. ラック、モール、スクラム、ラインアウトからの後退 (Law 10.9 - 10.11)
            // ----------------------------------------------------
            {
                question: "ラック、モール、スクラム、またはラインアウトにおいてオフサイドのプレイヤーは、そのセットプレーが終了してもオンサイドになるか？",
                answers: [
                    { text: "はい、自動的にオンサイドになる。", correct: false },
                    { text: "いいえ、ならない。", correct: true },
                    { text: "後退する努力をすればオンサイドになる。", correct: false },
                    { text: "レフリーの指示があればオンサイドになる。", correct: false }
                ]
            },
            {
                question: "ラック、モール、スクラム、またはラインアウトにおいてオフサイドのプレイヤーがオンサイドになりうる条件として正しくないものはどれか？",
                answers: [
                    { text: "そのプレイヤーが、自分に適用されているオフサイドラインの後方にただちに退いた。", correct: false },
                    { text: "相手側のプレイヤーが、ボールを保持せずに5メートル動いた。", correct: true }, // ボールを持って動く必要がある
                    { text: "相手側のプレイヤーがボールを蹴った。", correct: false },
                    { text: "相手側のプレイヤーが、いずれの方向であれ、ボールを5メートル持って動いた。", correct: false }
                ]
            },
            {
                question: "ラックなどからの後退において、オフサイドのプレイヤーが罰せられる行為はどれか？",
                answers: [
                    { text: "プレーを妨害した。", correct: true },
                    { text: "オフサイドラインの後方にただちに退いた。", correct: false },
                    { text: "相手側のプレイヤーがボールを蹴ったのを見た。", correct: false },
                    { text: "オンサイドの味方を追い越すまで待った。", correct: false }
                ]
            },
            {
                question: "ラックなどからの後退において、オフサイドのプレイヤーが「過度の遅滞なく後退せず、より有利な位置でオンサイドになることで利益を得た」場合の罰はどれか？",
                answers: [
                    { text: "フリーキック。", correct: false },
                    { text: "スクラム。", correct: false },
                    { text: "ペナルティ。", correct: true },
                    { text: "イエローカード。", correct: false }
                ]
            },
            {
                question: "ラックなどからの後退において、オフサイドのプレイヤーが罰せられる行為として「ボールに向かって前進した」ことがあるか？",
                answers: [
                    { text: "はい、罰せられる場合がある。", correct: true },
                    { text: "いいえ、ボールに向かって動くのは許されている。", correct: false },
                    { text: "ボールキャリアーから5メートル離れていれば許される。", correct: false },
                    { text: "味方がオンサイドになった後であれば許される。", correct: false }
                ]
            },
            
            // ----------------------------------------------------
            // VI. 混合問題
            // ----------------------------------------------------
            {
                question: "競技規則の原則として、競技はどのようなプレイヤーのみでプレーされるか？",
                answers: [
                    { text: "ボールキャリアーをサポートしているプレイヤー。", correct: false },
                    { text: "オンサイドの位置にいるプレイヤーのみ。", correct: true },
                    { text: "ハーフウェイラインより前方にいるプレイヤー。", correct: false },
                    { text: "ラインアウトに参加しているプレイヤー。", correct: false }
                ]
            },
            {
                question: "オフサイドのプレイヤーがプレーを妨げる行為（Law 10.1）に対するサンクションはどれか？",
                answers: [
                    { text: "フリーキック。", correct: false },
                    { text: "ペナルティ。", correct: true },
                    { text: "スクラム。", correct: false },
                    { text: "イエローカード。", correct: false }
                ]
            },
            {
                question: "ボールを蹴った味方の前方にいるプレイヤーが、ボールが着地した地点から10メートル離れた想定上のラインまで後退しなかった場合、これは何という規則か？",
                answers: [
                    { text: "5メートル規則。", correct: false },
                    { text: "10メートル規則。", correct: true },
                    { text: "アドバンテージ規則。", correct: false },
                    { text: "ノックオン規則。", correct: false }
                ]
            },
            {
                question: "ラックなどからの後退において、相手側のプレイヤーがボールをどのくらい持って動いた場合、オフサイドのプレイヤーはオンサイドになりうるか？",
                answers: [
                    { text: "1メートル。", correct: false },
                    { text: "3メートル。", correct: false },
                    { text: "5メートル。", correct: true },
                    { text: "10メートル。", correct: false }
                ]
            },
            {
                question: "相手側のプレイヤーがボールを獲得することなく、故意にボールに触れた場合、オフサイドのプレイヤーはオンサイドになるか？ (Law 10.7)",
                answers: [
                    { text: "はい、オンサイドになる。", correct: true },
                    { text: "いいえ、オンサイドにならない。", correct: false },
                    { text: "そのプレイヤーが最初に触れた場合のみオンサイドになる。", correct: false },
                    { text: "チャージダウンの場合のみオンサイドになる。", correct: false }
                ]
            },
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