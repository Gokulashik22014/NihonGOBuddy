// If using type: module, you need this workaround:
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const Datastore = require('nedb');
const path = require('path');

// Setup NeDB with file persistence
export const db = new Datastore({
  filename: path.join('./db/dictionary.db'),
  autoload: true
});

// Sample data
export const entry =
[
  {
    "word": "ヽ",
    "kanji": [],
    "meaning": ["iteration mark (repeats the preceding kana)"],
    "part_of_speech": "symbol",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "日本語の表記に使われる記号です。", "en": "It's a symbol used in Japanese notation." }
    ]
  },
  {
    "word": "ヾ",
    "kanji": [],
    "meaning": ["iteration mark (repeats the preceding kana, but voiced)"],
    "part_of_speech": "symbol",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "濁点付きの繰り返しに用いられます。", "en": "It's used for repetitions with a dakuten." }
    ]
  },
  {
    "word": "ゝ",
    "kanji": [],
    "meaning": ["iteration mark (repeats the preceding kana)"],
    "part_of_speech": "symbol",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "主に縦書きで使われる繰り返し記号です。", "en": "It's an iteration mark mainly used in vertical writing." }
    ]
  },
  {
    "word": "ゞ",
    "kanji": [],
    "meaning": ["iteration mark (repeats the preceding kana, but voiced)"],
    "part_of_speech": "symbol",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "濁音を伴う繰り返しに用いられます。", "en": "It's used for repetitions accompanied by a voiced sound." }
    ]
  },
  {
    "word": "同じ",
    "kanji": ["同じ"],
    "meaning": ["same", "identical", "equal", "together", "with"],
    "part_of_speech": "adj-na, n, adv",
    "all_8_forms": {
      "plain": "おなじ",
      "plain_past": "おなじだった",
      "plain_negative": "おなじではない",
      "plain_negative_past": "おなじではなかった",
      "polite": "おなじです",
      "polite_past": "おなじでした",
      "polite_negative": "おなじではありません",
      "polite_negative_past": "おなじではありませんでした"
    },
    "example_sentences": [
      { "jp": "私達は同じ意見です。", "en": "We have the same opinion." },
      { "jp": "同じくらい重要です。", "en": "It's equally important." }
    ]
  },
  {
    "word": "同",
    "kanji": ["同"],
    "meaning": ["same", "the said", "the aforementioned", "ditto"],
    "part_of_speech": "n, pref",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "同意します。", "en": "I agree with the same." },
      { "jp": "同封の書類をご確認ください。", "en": "Please check the enclosed documents." }
    ]
  },
  {
    "word": "仝",
    "kanji": ["仝"],
    "meaning": ["iteration mark for kanji (used in vertical writing)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "この記号は漢字の繰り返しを示します。", "en": "This symbol indicates the repetition of a kanji character." }
    ]
  },
  {
    "word": "丸",
    "kanji": ["丸"],
    "meaning": [
      "circle",
      "round",
      "full (month)",
      "entire",
      "whole",
      "perfect",
      "complete",
      "completion",
      "success",
      "suffix for ship names",
      "suffix for swords",
      "suffix for pigs or other animals (as a term of endearment or contempt)"
    ],
    "part_of_speech": "n, adj-na, n-suf",
    "all_8_forms": {
      "plain": "まる",
      "plain_past": "まるだった",
      "plain_negative": "まるではない",
      "plain_negative_past": "まるではなかった",
      "polite": "まるです",
      "polite_past": "まるでした",
      "polite_negative": "まるではありません",
      "polite_negative_past": "まるではありませんでした"
    },
    "example_sentences": [
      { "jp": "円を丸で囲んだ。", "en": "I drew a circle around the yen sign." },
      { "jp": "これで丸く収まった。", "en": "Now everything has been settled amicably." }
    ]
  },
  {
    "word": "ABC順",
    "kanji": ["ABC順"],
    "meaning": ["alphabetical order", "ABC order"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "リストをABC順に並べ替えてください。", "en": "Please sort the list in alphabetical order." }
    ]
  },
  {
    "word": "CDプレーヤー",
    "kanji": [],
    "meaning": ["CD player"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "新しいCDプレーヤーを買いました。", "en": "I bought a new CD player." }
    ]
  },
  {
    "word": "N響",
    "kanji": ["N響"],
    "meaning": ["NHK Symphony Orchestra"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "N響のコンサートを聴きに行った。", "en": "I went to listen to an NHK Symphony Orchestra concert." }
    ]
  },
  {
    "word": "Oバック",
    "kanji": [],
    "meaning": ["O-back (style of swimwear or underwear)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "彼女はOバックの水着を着ていた。", "en": "She was wearing an O-back swimsuit." }
    ]
  },
  {
    "word": "Tシャツ",
    "kanji": [],
    "meaning": ["T-shirt"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "お気に入りのTシャツを着た。", "en": "I wore my favorite T-shirt." }
    ]
  },
  {
    "word": "Tバック",
    "kanji": [],
    "meaning": ["T-back (style of underwear)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "Tバックのショーツはセクシーだ。", "en": "T-back shorts are sexy." }
    ]
  },
  {
    "word": "阿吽の呼吸",
    "kanji": ["阿吽の呼吸"],
    "meaning": ["perfect teamwork", "synchronization", "implicit understanding", "telepathy"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "彼らは阿吽の呼吸で仕事を進めた。", "en": "They proceeded with the work in perfect synchronization." }
    ]
  },
  {
    "word": "青葉",
    "kanji": ["青葉"],
    "meaning": ["fresh leaves", "green leaves"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "青葉が目にまぶしい季節になった。", "en": "It's become the season when fresh green leaves are dazzling to the eyes." }
    ]
  },
  {
    "word": "明白",
    "kanji": ["明白"],
    "meaning": ["clear", "obvious", "plain", "evident"],
    "part_of_speech": "adj-na, n",
    "all_8_forms": {
      "plain": "めいはく",
      "plain_past": "めいはくだった",
      "plain_negative": "めいはくではない",
      "plain_negative_past": "めいはくではなかった",
      "polite": "めいはくです",
      "polite_past": "めいはくでした",
      "polite_negative": "めいはくではありません",
      "polite_negative_past": "めいはくではありませんでした"
    },
    "example_sentences": [
      { "jp": "彼の意図は明白だった。", "en": "His intention was clear." },
      { "jp": "その事実は明白だ。", "en": "That fact is evident." }
    ]
  },
  {
    "word": "露骨",
    "kanji": ["露骨"],
    "meaning": [
      "frank",
      "open",
      "candid",
      "blunt",
      "plain",
      "explicit",
      "undisguised",
      "unconcealed",
      "stark naked",
      "bare",
      "exposed"
    ],
    "part_of_speech": "adj-na, n",
    "all_8_forms": {
      "plain": "あからさま",
      "plain_past": "あからさまだった",
      "plain_negative": "あからさまではない",
      "plain_negative_past": "あからさまではなかった",
      "polite": "あからさまです",
      "polite_past": "あからさまでした",
      "polite_negative": "あからさまではありません",
      "polite_negative_past": "あからさまではありませんでした"
    },
    "example_sentences": [
      { "jp": "彼の態度はあからさまに敵意を示していた。", "en": "His attitude openly showed hostility." },
      { "jp": "あからさまな嘘をついた。", "en": "He told a blatant lie." }
    ]
  },
  {
    "word": "あかん",
    "kanji": [],
    "meaning": ["useless", "no good", "hopeless", "can't", "must not", "forbidden"],
    "part_of_speech": "exp, int, adj-f",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "それはあかん、触ったらあかん。", "en": "That's no good, you must not touch it." },
      { "jp": "もう、あかんわ。", "en": "Oh no, it's hopeless." }
    ]
  },
  {
    "word": "悪どい",
    "kanji": ["悪どい"],
    "meaning": [
      "gaudy",
      "showy",
      "flamboyant",
      "garish",
      "flashy",
      "dirty",
      "underhanded",
      "crafty",
      "vicious",
      "unscrupulous",
      "greedy",
      "unjust"
    ],
    "part_of_speech": "adj-i",
    "all_8_forms": {
      "plain": "あくどい",
      "plain_past": "あくどかった",
      "plain_negative": "あくどくない",
      "plain_negative_past": "あくどくなかった",
      "polite": "あくどいです",
      "polite_past": "あくどかったです",
      "polite_negative": "あくどくありません",
      "polite_negative_past": "あくどくありませんでした"
    },
    "example_sentences": [
      { "jp": "あの手口は悪どい。", "en": "That trick is underhanded." },
      { "jp": "悪どい商売をしている。", "en": "He's running a shady business." }
    ]
  },
  {
    "word": "揚羽蝶",
    "kanji": ["揚羽蝶"],
    "meaning": ["to discuss exhaustively", "to talk about (faults, etc.)", "to find fault with", "to criticize"],
    "part_of_speech": "v5u",
    "all_8_forms": {
      "plain": "あげつらう",
      "plain_past": "あげつらった",
      "plain_negative": "あげつらわない",
      "plain_negative_past": "あげつらわなかった",
      "polite": "あげつらいます",
      "polite_past": "あげつらいました",
      "polite_negative": "あげつらいません",
      "polite_negative_past": "あげつらいませんでした"
    },
    "example_sentences": [
      { "jp": "人の欠点をあげつらうのはよくない。", "en": "It's not good to find fault with other people's shortcomings." }
    ]
  },
  {
    "word": "あしらう",
    "kanji": ["あしらう"],
    "meaning": [
      "to handle",
      "to deal with",
      "to treat",
      "to respond to",
      "to parry",
      "to fend off",
      "to add a touch of",
      "to garnish",
      "to trim (e.g. a bonsai tree)"
    ],
    "part_of_speech": "v5u",
    "all_8_forms": {
      "plain": "あしらう",
      "plain_past": "あしらった",
      "plain_negative": "あしらわない",
      "plain_negative_past": "あしらわなかった",
      "polite": "あしらいます",
      "polite_past": "あしらいました",
      "polite_negative": "あしらいません",
      "polite_negative_past": "あしらいませんでした"
    },
    "example_sentences": [
      { "jp": "客をうまくあしらった。", "en": "He handled the customer well." },
      { "jp": "白い花をあしらったデザイン。", "en": "A design with a touch of white flowers." }
    ]
  },
  {
    "word": "馬酔木",
    "kanji": ["馬酔木"],
    "meaning": ["Japanese andromeda (Pieris japonica)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "馬酔木の花が咲いている。", "en": "The Japanese andromeda flowers are blooming." }
    ]
  },
  {
    "word": "あそこ",
    "kanji": [],
    "meaning": [
      "over there",
      "that place (far from both speaker and listener)",
      "that (point in time, space, or discourse)",
      "that person (distant from speaker and listener)",
      "there (implied or omitted word)",
      "genitals (euphemism)"
    ],
    "part_of_speech": "n, pn",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あそこに座ってください。", "en": "Please sit over there." },
      { "jp": "話はあそこまで進んだ。", "en": "The discussion progressed to that point." }
    ]
  },
  {
    "word": "あっさり",
    "kanji": [],
    "meaning": [
      "easily",
      "readily",
      "plainly",
      "lightly (seasoned)",
      "simply",
      "light (colour, design)",
      "quickly",
      "without fuss",
      "frankly",
      "lightly",
      "neatly"
    ],
    "part_of_speech": "adv, adv-to, adj-t",
    "all_8_forms": {
      "plain": "あっさり",
      "plain_past": "あっさりした",
      "plain_negative": "あっさりしない",
      "plain_negative_past": "あっさりしなかった",
      "polite": "あっさりします",
      "polite_past": "あっさりしました",
      "polite_negative": "あっさりしません",
      "polite_negative_past": "あっさりしませんでした"
    },
    "example_sentences": [
      { "jp": "彼はあっさり認めた。", "en": "He readily admitted it." },
      { "jp": "あっさりした味付けの料理。", "en": "Lightly seasoned cuisine." }
    ]
  },
  {
    "word": "あっという間に",
    "kanji": ["あっという間に"],
    "meaning": ["in the blink of an eye", "in an instant", "in a flash"],
    "part_of_speech": "adv",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あっという間に時間が過ぎた。", "en": "Time passed in the blink of an eye." }
    ]
  },
  {
    "word": "あっぷあっぷ",
    "kanji": [],
    "meaning": [
      "struggling to keep one's head above water",
      "struggling to breathe",
      "overwhelmed (with work, etc.)"
    ],
    "part_of_speech": "adv, adv-to",
    "all_8_forms": {
      "plain": "あっぷあっぷ",
      "plain_past": "あっぷあっぷした",
      "plain_negative": "あっぷあっぷしない",
      "plain_negative_past": "あっぷあっぷしなかった",
      "polite": "あっぷあっぷします",
      "polite_past": "あっぷあっぷしました",
      "polite_negative": "あっぷあっぷしません",
      "polite_negative_past": "あっぷあっぷしませんでした"
    },
    "example_sentences": [
      { "jp": "仕事に追われてあっぷあっぷだ。", "en": "I'm overwhelmed with work." },
      { "jp": "水に溺れてあっぷあっぷしている。", "en": "He's struggling to keep his head above water." }
    ]
  },
  {
    "word": "あどけない",
    "kanji": [],
    "meaning": ["innocent", "childlike", "naïve"],
    "part_of_speech": "adj-i",
    "all_8_forms": {
      "plain": "あどけない",
      "plain_past": "あどけなかった",
      "plain_negative": "あどけなくない",
      "plain_negative_past": "あどけなくなかった",
      "polite": "あどけないです",
      "polite_past": "あどけなかったです",
      "polite_negative": "あどけなくありません",
      "polite_negative_past": "あどけなくありませんでした"
    },
    "example_sentences": [
      { "jp": "あどけない笑顔を見せた。", "en": "She showed an innocent smile." }
    ]
  },
  {
    "word": "あの",
    "kanji": ["あの"],
    "meaning": ["that (distant from both speaker and listener, or distant in time)", "that (of a certain time or place)", "that (person)"],
    "part_of_speech": "pn",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あの本を読んでいます。", "en": "I'm reading that book." },
      { "jp": "あの時、彼は若かった。", "en": "At that time, he was young." }
    ]
  },
  {
    "word": "あの",
    "kanji": [],
    "meaning": ["um", "er", "well", "excuse me (for being hesitant, for starting a conversation)"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あの、すみません。", "en": "Um, excuse me." },
      { "jp": "あのー、質問があります。", "en": "Er, I have a question." }
    ]
  },
  {
    "word": "あの人",
    "kanji": ["あの人"],
    "meaning": ["that person", "he", "she"],
    "part_of_speech": "pn",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あの人は誰ですか。", "en": "Who is that person?" },
      { "jp": "あの人が先生です。", "en": "That person is the teacher." }
    ]
  },
  {
    "word": "あの方",
    "kanji": ["あの方"],
    "meaning": ["that person (polite)", "he", "she"],
    "part_of_speech": "pn",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あの方は私の上司です。", "en": "That person is my boss." },
      { "jp": "あの方にお目にかかりたい。", "en": "I would like to meet that person." }
    ]
  },
  {
    "word": "溢れる",
    "kanji": ["溢れる"],
    "meaning": [
      "to be left over",
      "to be left out",
      "to not get a turn",
      "to be unable to find a place (e.g. to sit)",
      "to overflow",
      "to brim over"
    ],
    "part_of_speech": "v1",
    "all_8_forms": {
      "plain": "あぶれる",
      "plain_past": "あぶれた",
      "plain_negative": "あぶれない",
      "plain_negative_past": "あぶれなかった",
      "polite": "あぶれます",
      "polite_past": "あぶれました",
      "polite_negative": "あぶれません",
      "polite_negative_past": "あぶれませんでした"
    },
    "example_sentences": [
      { "jp": "席があぶれた。", "en": "I couldn't get a seat." },
      { "jp": "仕事からあぶれた。", "en": "I was left out of the job." }
    ]
  },
  {
    "word": "あべこべ",
    "kanji": [],
    "meaning": ["upside down", "inside out", "contrary", "opposite", "reverse"],
    "part_of_speech": "adj-na, n, adv",
    "all_8_forms": {
      "plain": "あべこべ",
      "plain_past": "あべこべだった",
      "plain_negative": "あべこべではない",
      "plain_negative_past": "あべこべではなかった",
      "polite": "あべこべです",
      "polite_past": "あべこべでした",
      "polite_negative": "あべこべではありません",
      "polite_negative_past": "あべこべではありませんでした"
    },
    "example_sentences": [
      { "jp": "靴をあべこべに履いている。", "en": "You're wearing your shoes on the wrong feet." },
      { "jp": "話があべこべだ。", "en": "The story is the exact opposite of what happened." }
    ]
  },
  {
    "word": "阿呆んだら",
    "kanji": ["阿呆んだら"],
    "meaning": ["idiot", "fool", "damn fool"],
    "part_of_speech": "n, adj-na",
    "all_8_forms": {
      "plain": "あほんだら",
      "plain_past": "あほんだらだった",
      "plain_negative": "あほんだらではない",
      "plain_negative_past": "あほんだらではなかった",
      "polite": "あほんだらです",
      "polite_past": "あほんだらでした",
      "polite_negative": "あほんだらではありません",
      "polite_negative_past": "あほんだらではありませんでした"
    },
    "example_sentences": [
      { "jp": "このあほんだらが！", "en": "You damn fool!" }
    ]
  },
  {
    "word": "アマゴ",
    "kanji": [],
    "meaning": ["amago (Oncorhynchus masou macrostomus), a salmonid fish"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "川でアマゴを釣った。", "en": "I caught an amago in the river." }
    ]
  },
  {
    "word": "あやす",
    "kanji": ["あやす"],
    "meaning": ["to dandle", "to lull", "to play with (a baby)", "to soothe", "to amuse"],
    "part_of_speech": "v5s",
    "all_8_forms": {
      "plain": "あやす",
      "plain_past": "あやした",
      "plain_negative": "あやさない",
      "plain_negative_past": "あやさなかった",
      "polite": "あやします",
      "polite_past": "あやしました",
      "polite_negative": "あやしません",
      "polite_negative_past": "あやしませんでした"
    },
    "example_sentences": [
      { "jp": "赤ちゃんをあやす。", "en": "To dandle a baby." },
      { "jp": "子供をあやして泣きやませた。", "en": "I soothed the child and made them stop crying." }
    ]
  },
  {
    "word": "曖昧",
    "kanji": ["曖昧"],
    "meaning": ["uncertain", "vague", "ambiguous", "hazy", "dubious", "shaky"],
    "part_of_speech": "adj-na, n",
    "all_8_forms": {
      "plain": "あやふや",
      "plain_past": "あやふやだった",
      "plain_negative": "あやふやではない",
      "plain_negative_past": "あやふやではなかった",
      "polite": "あやふやです",
      "polite_past": "あやふやでした",
      "polite_negative": "あやふやではありません",
      "polite_negative_past": "あやふやではありませんでした"
    },
    "example_sentences": [
      { "jp": "彼の証言はあやふやだ。", "en": "His testimony is dubious." },
      { "jp": "あやふやな態度をとるな。", "en": "Don't take an ambiguous attitude." }
    ]
  },
  {
    "word": "あら",
    "kanji": [],
    "meaning": ["oh", "ah", "my (female exclamatory particle)"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あら、素敵！", "en": "Oh, how lovely!" },
      { "jp": "あらー、大変ね。", "en": "Oh dear, that's tough." }
    ]
  },
  {
    "word": "粗",
    "kanji": ["粗"],
    "meaning": ["defect", "flaw", "blemish", "imperfection", "coarse", "rough", "crude"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "文章の粗を指摘する。", "en": "To point out flaws in the writing." },
      { "jp": "アラが見つかった。", "en": "A defect was found." }
    ]
  },
  {
    "word": "あれ",
    "kanji": [],
    "meaning": [
      "that (indicating something distant from both speaker and listener, or something not visible to either)",
      "that (referring to a previous topic or something known to both)",
      "oh",
      "ah",
      "well",
      "come on (when one cannot remember the word)"
    ],
    "part_of_speech": "pn, int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あれは何ですか。", "en": "What is that?" },
      { "jp": "あれ、鍵がない。", "en": "Oh, I don't have my key." }
    ]
  },
  {
    "word": "あんな",
    "kanji": [],
    "meaning": ["such", "that kind of", "like that"],
    "part_of_speech": "adj-pn",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "あんなことは二度としない。", "en": "I won't do such a thing again." },
      { "jp": "あんな人が好きだ。", "en": "I like people like that." }
    ]
  },
  {
    "word": "いい加減にしなさい",
    "kanji": ["いい加減にしなさい"],
    "meaning": ["that's enough!", "stop it!", "don't be silly!", "cut it out!"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "いい加減にしなさい、もう十分だ。", "en": "That's enough, it's already enough." }
    ]
  },
  {
    "word": "いい年をして",
    "kanji": ["いい年をして"],
    "meaning": ["at your age", "for someone your age"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "いい年をして、そんなことをするなんて。", "en": "To do such a thing at your age!" }
    ]
  },
  {
    "word": "いやいや",
    "kanji": [],
    "meaning": ["no, no (used to express polite denial or modesty)", "oh no", "not at all"],
    "part_of_speech": "int, adv",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "「ありがとう」いやいや、どういたしまして。", "en": "“Thank you.” “No, no, you’re welcome.”" },
      { "jp": "いえいえ、とんでもないです。", "en": "Oh no, not at all." }
    ]
  },
  {
    "word": "疑わしい",
    "kanji": ["疑わしい"],
    "meaning": ["suspicious", "dubious", "questionable", "shady", "fishy", "indecent", "unbecoming"],
    "part_of_speech": "adj-i",
    "all_8_forms": {
      "plain": "いかがわしい",
      "plain_past": "いかがわしかった",
      "plain_negative": "いかがわしくない",
      "plain_negative_past": "いかがわしくなかった",
      "polite": "いかがわしいです",
      "polite_past": "いかがわしかったです",
      "polite_negative": "いかがわしくありません",
      "polite_negative_past": "いかがわしくありませんでした"
    },
    "example_sentences": [
      { "jp": "いかがわしい店には入らない方がいい。", "en": "You'd better not enter suspicious shops." },
      { "jp": "彼の話はいかがわしい。", "en": "His story is dubious." }
    ]
  },
  {
    "word": "いかす",
    "kanji": [],
    "meaning": ["to be smart", "to be cool", "to be sharp", "to be stylish"],
    "part_of_speech": "v5s",
    "all_8_forms": {
      "plain": "いかす",
      "plain_past": "いかした",
      "plain_negative": "いかさない",
      "plain_negative_past": "いかさなかった",
      "polite": "いかします",
      "polite_past": "いかしました",
      "polite_negative": "いかしません",
      "polite_negative_past": "いかしませんでした"
    },
    "example_sentences": [
      { "jp": "彼のファッションは本当にイカしている。", "en": "His fashion is really cool." },
      { "jp": "この音楽、マジでイカすよ！", "en": "This music is seriously awesome!" },
      { "jp": "彼女はイカす車に乗っていた。", "en": "She was driving a stylish car." }
    ]
  },
  {
    "word": "いかなる場合でも",
    "kanji": ["いかなる場合でも"],
    "meaning": ["in any case", "under any circumstances", "no matter what"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "いかなる場合でも、諦めてはいけない。", "en": "You must not give up under any circumstances." }
    ]
  },
  {
    "word": "如何にも",
    "kanji": ["如何にも"],
    "meaning": ["indeed", "truly", "surely", "no doubt", "quite", "very", "as expected", "as one would expect"],
    "part_of_speech": "adv",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "いかにも彼らしい考えだ。", "en": "It's truly a thought typical of him." },
      { "jp": "いかにもプロらしい技だった。", "en": "It was indeed a professional-like technique." }
    ]
  },
  {
    "word": "幾つも",
    "kanji": ["幾つも"],
    "meaning": ["any number of", "many"],
    "part_of_speech": "adv",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "幾つもの問題がある。", "en": "There are many problems." },
      { "jp": "幾つも質問された。", "en": "I was asked many questions." }
    ]
  },
  {
    "word": "いけない",
    "kanji": [],
    "meaning": [
      "must not do",
      "must not be",
      "bad",
      "wrong",
      "no good",
      "unacceptable",
      "naughty",
      "wicked",
      "regrettable",
      "sorry",
      "too bad",
      "oh dear"
    ],
    "part_of_speech": "adj-i",
    "all_8_forms": {
      "plain": "いけない",
      "plain_past": "いけなかった",
      "plain_negative": "いけなくない",
      "plain_negative_past": "いけなくなかった",
      "polite": "いけないです",
      "polite_past": "いけなかったです",
      "polite_negative": "いけなくありません",
      "polite_negative_past": "いけなくありませんでした"
    },
    "example_sentences": [
      { "jp": "そんなことをしてはいけない。", "en": "You must not do such a thing." },
      { "jp": "ああ、いけない！財布を忘れた。", "en": "Oh, no! I forgot my wallet." }
    ]
  },
  {
    "word": "いごっそう",
    "kanji": [],
    "meaning": ["stubborn person (Kochi dialect)", "man of strong will", "man of spirit"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "彼は土佐のいごっそうだ。", "en": "He's a true Tosa 'igossou' [stubborn, spirited person]." }
    ]
  },
  {
    "word": "居座",
    "kanji": ["居座"],
    "meaning": ["now", "at last", "at this very moment", "when it comes to", "in case of"],
    "part_of_speech": "adv",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "いざという時が来た。", "en": "The critical moment has come." },
      { "jp": "いざとなれば私がやる。", "en": "If it comes to it, I'll do it." }
    ]
  },
  {
    "word": "いざこざ",
    "kanji": [],
    "meaning": ["trouble", "dispute", "quarrel", "strife"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "家族間のいざこざが絶えない。", "en": "Family disputes are incessant." }
    ]
  },
  {
    "word": "いじいじ",
    "kanji": [],
    "meaning": ["hesitantly", "fidgeting", "tinkering (with something, for pleasure)"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "いじいじ",
      "plain_past": "いじいじした",
      "plain_negative": "いじいじしない",
      "plain_negative_past": "いじいじしなかった",
      "polite": "いじいじします",
      "polite_past": "いじいじしました",
      "polite_negative": "いじいじしません",
      "polite_negative_past": "いじいじしませんでした"
    },
    "example_sentences": [
      { "jp": "彼はいつもいじいじしている。", "en": "He's always fidgeting." },
      { "jp": "いじいじと返事をためらった。", "en": "He hesitated to answer." }
    ]
  },
  {
    "word": "委縮",
    "kanji": ["委縮"],
    "meaning": [
      "to be timid",
      "to cower",
      "to be diffident",
      "to feel small",
      "to shrink away",
      "to be disheartened",
      "to be dispirited"
    ],
    "part_of_speech": "v1",
    "all_8_forms": {
      "plain": "いじける",
      "plain_past": "いじけた",
      "plain_negative": "いじけない",
      "plain_negative_past": "いじけなかった",
      "polite": "いじけます",
      "polite_past": "いじけました",
      "polite_negative": "いじけません",
      "polite_negative_past": "いじけませんでした"
    },
    "example_sentences": [
      { "jp": "彼は人前ではいじけてしまう。", "en": "He becomes timid in front of people." },
      { "jp": "寒さで体がすっかりいじけた。", "en": "My body was completely shriveled from the cold." }
    ]
  },
  {
    "word": "いじましい",
    "kanji": [],
    "meaning": ["miserable", "pitiable", "wretched", "mean", "stingy", "greedy"],
    "part_of_speech": "adj-i",
    "all_8_forms": {
      "plain": "いじましい",
      "plain_past": "いじましかった",
      "plain_negative": "いじましくない",
      "plain_negative_past": "いじましくなかった",
      "polite": "いじましいです",
      "polite_past": "いじましかったです",
      "polite_negative": "いじましくありません",
      "polite_negative_past": "いじましくありませんでした"
    },
    "example_sentences": [
      { "jp": "いじましい生活を送っている。", "en": "He's leading a miserable life." }
    ]
  },
  {
    "word": "いじらしい",
    "kanji": [],
    "meaning": ["innocent", "sweet", "charming", "pathetic", "pitiful"],
    "part_of_speech": "adj-i",
    "all_8_forms": {
      "plain": "いじらしい",
      "plain_past": "いじらしかった",
      "plain_negative": "いじらしくない",
      "plain_negative_past": "いじらしくなかった",
      "polite": "いじらしいです",
      "polite_past": "いじらしかったです",
      "polite_negative": "いじらしくありません",
      "polite_negative_past": "いじらしくありませんでした"
    },
    "example_sentences": [
      { "jp": "いじらしい子供の姿。", "en": "The sweet figure of a child." },
      { "jp": "健気に頑張る姿がいじらしい。", "en": "Her courageous effort is moving." }
    ]
  },
  {
    "word": "いじりまわす",
    "kanji": [],
    "meaning": ["to tamper with", "to fiddle with", "to play about with", "to manipulate"],
    "part_of_speech": "v5s",
    "all_8_forms": {
      "plain": "いじりまわす",
      "plain_past": "いじりまわした",
      "plain_negative": "いじりまわさない",
      "plain_negative_past": "いじりまわさなかった",
      "polite": "いじりまわします",
      "polite_past": "いじりまわしました",
      "polite_negative": "いじりまわしません",
      "polite_negative_past": "いじりまわしませんでした"
    },
    "example_sentences": [
      { "jp": "機械をいじりまわすのはやめなさい。", "en": "Stop tampering with the machine." },
      { "jp": "彼はいつも携帯をいじりまわしている。", "en": "He's always fiddling with his phone." }
    ]
  },
  {
    "word": "磯々",
    "kanji": ["磯々"],
    "meaning": ["cheerfully", "eagerly", "with alacrity"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "いそいそ",
      "plain_past": "いそいそした",
      "plain_negative": "いそいそしない",
      "plain_negative_past": "いそいそしなかった",
      "polite": "いそいそします",
      "polite_past": "いそいそしました",
      "polite_negative": "いそいそしません",
      "polite_negative_past": "いそいそしませんでした"
    },
    "example_sentences": [
      { "jp": "彼女はいそいそと出かけていった。", "en": "She went out cheerfully." }
    ]
  },
  {
    "word": "イチャイチャ",
    "kanji": [],
    "meaning": ["flirting", "cooing", "being lovey-dovey"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "イチャイチャ",
      "plain_past": "イチャイチャした",
      "plain_negative": "イチャイチャしない",
      "plain_negative_past": "イチャイチャしなかった",
      "polite": "イチャイチャします",
      "polite_past": "イチャイチャしました",
      "polite_negative": "イチャイチャしません",
      "polite_negative_past": "イチャイチャしませんでした"
    },
    "example_sentences": [
      { "jp": "人前でイチャイチャするのはやめてほしい。", "en": "I wish they'd stop being lovey-dovey in public." }
    ]
  },
  {
    "word": "いちゃつく",
    "kanji": [],
    "meaning": ["to flirt", "to coo", "to be lovey-dovey", "to neck", "to fool around"],
    "part_of_speech": "v5k",
    "all_8_forms": {
      "plain": "いちゃつく",
      "plain_past": "いちゃついた",
      "plain_negative": "いちゃつかない",
      "plain_negative_past": "いちゃつかなかった",
      "polite": "いちゃつきます",
      "polite_past": "いちゃつきました",
      "polite_negative": "いちゃつきません",
      "polite_negative_past": "いちゃつきませんでした"
    },
    "example_sentences": [
      { "jp": "公園でカップルがいちゃついていた。", "en": "A couple was being lovey-dovey in the park." }
    ]
  },
  {
    "word": "いつもより",
    "kanji": ["いつもより"],
    "meaning": ["more than usual", "than always"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "今日はいつもより早く起きた。", "en": "I woke up earlier than usual today." },
      { "jp": "彼はいつもより元気だった。", "en": "He was more energetic than usual." }
    ]
  },
  {
    "word": "いとも簡単に",
    "kanji": ["いとも簡単に"],
    "meaning": ["with the utmost ease", "very easily"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "彼はその問題をいとも簡単に解いた。", "en": "He solved the problem with the utmost ease." }
    ]
  },
  {
    "word": "鯔背",
    "kanji": ["鯔背"],
    "meaning": [
      "stylish",
      "chic",
      "dashing",
      "smart",
      "swaggering (esp. of a Edo period commoner, esp. a fishmonger)"
    ],
    "part_of_speech": "adj-na, n",
    "all_8_forms": {
      "plain": "いなせ",
      "plain_past": "いなせだった",
      "plain_negative": "いなせではない",
      "plain_negative_past": "いなせではなかった",
      "polite": "いなせです",
      "polite_past": "いなせでした",
      "polite_negative": "いなせではありません",
      "polite_negative_past": "いなせではありませんでした"
    },
    "example_sentences": [
      { "jp": "いなせな兄貴。", "en": "A dashing older brother." },
      { "jp": "彼はいつもいなせな格好をしている。", "en": "He always dresses stylishly." }
    ]
  },
  {
    "word": "嘶く",
    "kanji": ["嘶く"],
    "meaning": ["to neigh", "to whinny"],
    "part_of_speech": "v5k",
    "all_8_forms": {
      "plain": "いななく",
      "plain_past": "いなないた",
      "plain_negative": "いななかない",
      "plain_negative_past": "いななかなかった",
      "polite": "いななきます",
      "polite_past": "いななきました",
      "polite_negative": "いななきません",
      "polite_negative_past": "いななきませんでした"
    },
    "example_sentences": [
      { "jp": "馬がいなないた。", "en": "The horse neighed." }
    ]
  },
  {
    "word": "嘶き",
    "kanji": ["嘶き"],
    "meaning": ["neigh", "whinny"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "馬のいななきが聞こえた。", "en": "I heard the neigh of a horse." }
    ]
  },
  {
    "word": "苛める",
    "kanji": ["苛める"],
    "meaning": ["to torment", "to bully", "to persecute", "to harass", "to pick on"],
    "part_of_speech": "v5r",
    "all_8_forms": {
      "plain": "いびる",
      "plain_past": "いびった",
      "plain_negative": "いびらない",
      "plain_negative_past": "いびらなかった",
      "polite": "いびります",
      "polite_past": "いびりました",
      "polite_negative": "いびりません",
      "polite_negative_past": "いびりませんでした"
    },
    "example_sentences": [
      { "jp": "彼はいじめっ子にいびられた。", "en": "He was bullied by the bully." },
      { "jp": "部下をいびる上司。", "en": "A boss who harasses his subordinates." }
    ]
  },
  {
    "word": "いやに",
    "kanji": [],
    "meaning": ["awfully", "terribly", "unusually", "strangely", "unpleasantly", "annoyingly"],
    "part_of_speech": "adv",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "今日はやけに寒い。", "en": "It's unusually cold today." },
      { "jp": "いやに静かだ。", "en": "It's strangely quiet." }
    ]
  },
  {
    "word": "いらっしゃい",
    "kanji": [],
    "meaning": [
      "welcome (to a customer)",
      "come in",
      "come on in",
      "please come",
      "please go",
      "please be (honorific, polite)"
    ],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "いらっしゃいませ！", "en": "Welcome!" },
      { "jp": "さあ、いらっしゃい。", "en": "Come on in." }
    ]
  },
  {
    "word": "いらっしゃいませ",
    "kanji": [],
    "meaning": ["welcome (to a customer, very polite)"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "お店に入ると「いらっしゃいませ」と声をかけられた。", "en": "When I entered the shop, I was greeted with \"Welcome!\"" }
    ]
  },
  {
    "word": "いらっしゃる",
    "kanji": [],
    "meaning": [
      "to be (honorific of いる)",
      "to come (honorific of くる)",
      "to go (honorific of いく)"
    ],
    "part_of_speech": "v5r",
    "all_8_forms": {
      "plain": "いらっしゃる",
      "plain_past": "いらっしゃった",
      "plain_negative": "いらっしゃらない",
      "plain_negative_past": "いらっしゃらなかった",
      "polite": "いらっしゃいます",
      "polite_past": "いらっしゃいました",
      "polite_negative": "いらっしゃいません",
      "polite_negative_past": "いらっしゃいませんでした"
    },
    "example_sentences": [
      { "jp": "先生がいらっしゃいました。", "en": "The teacher has come." },
      { "jp": "どちらへいらっしゃいますか。", "en": "Where are you going?" }
    ]
  },
  {
    "word": "うじうじ",
    "kanji": [],
    "meaning": ["hesitantly", "indecisively", "fidgeting", "grumbling to oneself"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うじうじ",
      "plain_past": "うじうじした",
      "plain_negative": "うじうじしない",
      "plain_negative_past": "うじうじしなかった",
      "polite": "うじうじします",
      "polite_past": "うじうじしました",
      "polite_negative": "うじうじしません",
      "polite_negative_past": "うじうじしませんでした"
    },
    "example_sentences": [
      { "jp": "いつもうじうじして決断できない。", "en": "He's always indecisive and can't make up his mind." }
    ]
  },
  {
    "word": "うじゃうじゃ",
    "kanji": [],
    "meaning": ["swarming", "teeming", "crawling (with insects, etc.)"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うじゃうじゃ",
      "plain_past": "うじゃうじゃした",
      "plain_negative": "うじゃうじゃしない",
      "plain_negative_past": "うじゃうじゃしなかった",
      "polite": "うじゃうじゃします",
      "polite_past": "うじゃうじゃしました",
      "polite_negative": "うじゃうじゃしません",
      "polite_negative_past": "うじゃうじゃしませんでした"
    },
    "example_sentences": [
      { "jp": "虫がうじゃうじゃいる。", "en": "There are insects crawling all over the place." }
    ]
  },
  {
    "word": "うずうず",
    "kanji": [],
    "meaning": ["itching to do something", "eager to do something", "antsy", "fidgety", "prickling (sensation)"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うずうず",
      "plain_past": "うずうずした",
      "plain_negative": "うずうずしない",
      "plain_negative_past": "うずうずしなかった",
      "polite": "うずうずします",
      "polite_past": "うずうずしました",
      "polite_negative": "うずうずしません",
      "polite_negative_past": "うずうずしませんでした"
    },
    "example_sentences": [
      { "jp": "旅行に行きたくてうずうずしている。", "en": "I'm itching to go on a trip." },
      { "jp": "足がうずうずする。", "en": "My legs are tingling." }
    ]
  },
  {
    "word": "うぞうぞ",
    "kanji": [],
    "meaning": ["wriggling (like worms)", "squirming", "swarming"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うぞうぞ",
      "plain_past": "うぞうぞした",
      "plain_negative": "うぞうぞしない",
      "plain_negative_past": "うぞうぞしなかった",
      "polite": "うぞうぞします",
      "polite_past": "うぞうぞしました",
      "polite_negative": "うぞうぞしません",
      "polite_negative_past": "うぞうぞしませんでした"
    },
    "example_sentences": [
      { "jp": "虫がうぞうぞと出てきた。", "en": "Insects came wriggling out." }
    ]
  },
  {
    "word": "うだうだ",
    "kanji": [],
    "meaning": ["grumbling", "complaining", "dawdling", "loitering", "rambling (on and on)"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うだうだ",
      "plain_past": "うだうだした",
      "plain_negative": "うだうだしない",
      "plain_negative_past": "うだうだしなかった",
      "polite": "うだうだします",
      "polite_past": "うだうだしました",
      "polite_negative": "うだうだしません",
      "polite_negative_past": "うだうだしませんでした"
    },
    "example_sentences": [
      { "jp": "いつもうだうだ文句を言っている。", "en": "He's always grumbling." }
    ]
  },
  {
    "word": "うっかり",
    "kanji": [],
    "meaning": ["carelessly", "thoughtlessly", "inadvertently"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うっかり",
      "plain_past": "うっかりした",
      "plain_negative": "うっかりしない",
      "plain_negative_past": "うっかりしなかった",
      "polite": "うっかりします",
      "polite_past": "うっかりしました",
      "polite_negative": "うっかりしません",
      "polite_negative_past": "うっかりしませんでした"
    },
    "example_sentences": [
      { "jp": "うっかり鍵を忘れた。", "en": "I carelessly forgot my key." },
      { "jp": "うっかり口を滑らせた。", "en": "I inadvertently let something slip." }
    ]
  },
  {
    "word": "うとうと",
    "kanji": [],
    "meaning": ["dozing lightly", "nodding off"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うとうと",
      "plain_past": "うとうとした",
      "plain_negative": "うとうとしない",
      "plain_negative_past": "うとうとしなかった",
      "polite": "うとうとします",
      "polite_past": "うとうとしました",
      "polite_negative": "うとうとしません",
      "polite_negative_past": "うとうとしませんでした"
    },
    "example_sentences": [
      { "jp": "電車の中でうとうと眠ってしまった。", "en": "I dozed off on the train." }
    ]
  },
  {
    "word": "うねうね",
    "kanji": [],
    "meaning": ["winding", "meandering", "twisting", "wiggling"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うねうね",
      "plain_past": "うねうねした",
      "plain_negative": "うねうねしない",
      "plain_negative_past": "うねうねしなかった",
      "polite": "うねうねします",
      "polite_past": "うねうねしました",
      "polite_negative": "うねうねしません",
      "polite_negative_past": "うねうねしませんでした"
    },
    "example_sentences": [
      { "jp": "道がうねうねと続いている。", "en": "The road winds on and on." }
    ]
  },
  {
    "word": "うねり",
    "kanji": ["うねり"],
    "meaning": ["wave", "undulation", "swell", "coil", "twist"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "海のうねりが大きい。", "en": "The swell of the ocean is big." }
    ]
  },
  {
    "word": "うろうろ",
    "kanji": [],
    "meaning": ["wandering aimlessly", "loitering", "prowling"],
    "part_of_speech": "adv, adv-to, vs",
    "all_8_forms": {
      "plain": "うろうろ",
      "plain_past": "うろうろした",
      "plain_negative": "うろうろしない",
      "plain_negative_past": "うろうろできなかった",
      "polite": "うろうろします",
      "polite_past": "うろうろしました",
      "polite_negative": "うろうろしません",
      "polite_negative_past": "うろうろできませんでした"
    },
    "example_sentences": [
      { "jp": "不審者が家の周りをうろうろしている。", "en": "A suspicious person is loitering around the house." }
    ]
  },
  {
    "word": "うろたえる",
    "kanji": [],
    "meaning": ["to be flustered", "to be confused", "to panic", "to lose one's composure"],
    "part_of_speech": "v1",
    "all_8_forms": {
      "plain": "うろたえる",
      "plain_past": "うろたえた",
      "plain_negative": "うろたえない",
      "plain_negative_past": "うろたえなかった",
      "polite": "うろたえます",
      "polite_past": "うろたえました",
      "polite_negative": "うろたえません",
      "polite_negative_past": "うろたえませんでした"
    },
    "example_sentences": [
      { "jp": "彼は予期せぬ事態にうろたえた。", "en": "He was flustered by the unexpected situation." }
    ]
  },
  {
    "word": "うん",
    "kanji": [],
    "meaning": ["uh-huh", "yeah", "yes (casual)"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "「これ、食べる？」うん、食べる。", "en": "\"Will you eat this?\" \"Uh-huh, I'll eat it.\"" }
    ]
  },
  {
    "word": "うんこ",
    "kanji": [],
    "meaning": ["poop", "feces"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "犬がうんこをした。", "en": "The dog pooped." }
    ]
  },
  {
    "word": "うんざり",
    "kanji": [],
    "meaning": ["fed up", "bored", "disgusted", "weary"],
    "part_of_speech": "adj-na, adv, vs",
    "all_8_forms": {
      "plain": "うんざり",
      "plain_past": "うんざりした",
      "plain_negative": "うんざりしない",
      "plain_negative_past": "うんざりしなかった",
      "polite": "うんざりします",
      "polite_past": "うんざりしました",
      "polite_negative": "うんざりしません",
      "polite_negative_past": "うんざりしませんでした"
    },
    "example_sentences": [
      { "jp": "彼の愚痴にはもううんざりだ。", "en": "I'm already fed up with his complaints." }
    ]
  },
  {
    "word": "ウンチ",
    "kanji": [],
    "meaning": ["poop", "feces (child's language)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "赤ちゃんがウンチをした。", "en": "The baby pooped." }
    ]
  },
  {
    "word": "えい",
    "kanji": [],
    "meaning": ["(exclamation of sudden exertion, e.g. when throwing, hitting, etc.)", "hey!", "take that!"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "えい、やー！", "en": "Hey, yah!" }
    ]
  },
  {
    "word": "ええ",
    "kanji": [],
    "meaning": ["yes", "yeah", "well", "uh-huh"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "ええ、そうです。", "en": "Yes, that's right." },
      { "jp": "えー、本当？", "en": "Really?" }
    ]
  },
  {
    "word": "えっと",
    "kanji": [],
    "meaning": ["um", "er", "well", "let's see (used when trying to recall something or thinking what to say)"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "えっと、次の予定は何でしたっけ。", "en": "Um, what was the next plan again?" }
    ]
  },
  {
    "word": "えげつない",
    "kanji": [],
    "meaning": ["unscrupulous", "nasty", "dirty", "mean", "harsh", "disagreeable", "vulgar"],
    "part_of_speech": "adj-i",
    "all_8_forms": {
      "plain": "えげつない",
      "plain_past": "えげつなかった",
      "plain_negative": "えげつなくない",
      "plain_negative_past": "えげつなくなかった",
      "polite": "えげつないです",
      "polite_past": "えげつなかったです",
      "polite_negative": "えげつなくありません",
      "polite_negative_past": "えげつなくありませんでした"
    },
    "example_sentences": [
      { "jp": "えげつないやり方だ。", "en": "That's an unscrupulous way of doing things." }
    ]
  },
  {
    "word": "えつ",
    "kanji": [],
    "meaning": ["(exclamation of surprise, disgust, etc.)", "ugh!", "eww!"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "えつ、何これ？", "en": "Eww, what's this?" }
    ]
  },
  {
    "word": "おいでになる",
    "kanji": ["おいでになる"],
    "meaning": ["to come", "to go", "to be (honorific of 来る, 行く, いる)"],
    "part_of_speech": "v5r",
    "all_8_forms": {
      "plain": "おいでになる",
      "plain_past": "おいでになった",
      "plain_negative": "おいでにならない",
      "plain_negative_past": "おいでにならなかった",
      "polite": "おいでになります",
      "polite_past": "おいでになりました",
      "polite_negative": "おいでになりません",
      "polite_negative_past": "おいでになりませんでした"
    },
    "example_sentences": [
      { "jp": "先生はもうおいでになりましたか。", "en": "Has the teacher already arrived?" }
    ]
  },
  {
    "word": "おいでやす",
    "kanji": [],
    "meaning": ["welcome (Kyoto dialect)", "please come in"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "ようこそおいでやす。", "en": "Welcome." }
    ]
  },
  {
    "word": "おい",
    "kanji": [],
    "meaning": ["hey!", "oy! (used to call someone's attention)"],
    "part_of_speech": "int",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "おい、待てよ！", "en": "Hey, wait up!" }
    ]
  },
  {
    "word": "おけさ",
    "kanji": ["おけさ"],
    "meaning": ["Okesa (folk dance, esp. Sado Okesa)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "佐渡おけさを踊る。", "en": "To dance Sado Okesa." }
    ]
  },
  {
    "word": "おけさぶし",
    "kanji": ["おけさ節"],
    "meaning": ["Okesa-bushi (Sado folk song and dance)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "おけさ節を歌う。", "en": "To sing Okesa-bushi." }
    ]
  },
  {
    "word": "おこしやす",
    "kanji": [],
    "meaning": ["welcome (Kyoto dialect, polite)"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "どうぞ、おこしやす。", "en": "Please come in, welcome." }
    ]
  },
  {
    "word": "おざなりになる",
    "kanji": ["おざなりになる"],
    "meaning": ["to become superficial", "to become perfunctory", "to be neglected"],
    "part_of_speech": "exp",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "仕事がおざなりになる。", "en": "My work becomes superficial." }
    ]
  },
  {
    "word": "おしっこ",
    "kanji": [],
    "meaning": ["pee", "urine (child's language)"],
    "part_of_speech": "n",
    "all_8_forms": null,
    "example_sentences": [
      { "jp": "おしっこがしたい。", "en": "I want to pee." }
    ]
  }
]
