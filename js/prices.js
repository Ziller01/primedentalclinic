let components = [

    // !--------------------------------------------------------------------------- [AR]

    {
        id: "ar",
        title: "ابدأ",
        values: [
            { title: "كبار (13+)", next: "ar-adult" },
            { title: "صغار (13-)", next: "ar-kids" },
        ]
    },

    // !--------------------------------------------------------------------------- [AR] -> Adult (+13)

    {
        id: "ar-adult",
        title: "كبار (+13)",
        values: [
            { title: "ألم", next: "ar-adult-pain" },
            { title: "تورم", next: "ar-adult-swelling" },
            { title: "فقدان", next: "ar-adult-loss" },
            { title: "تجميل", next: "ar-adult-cosmotic" },
            { title: "نزيف", next: "ar-adult-bleeding" },
            { title: "رائحة كريهة", next: "ar-adult-halitosis" },
        ]
    },

    // ?--------------------------------------------------------------------------- [AR] -> Adult -> [Fixed] 

    // -------------------------------------- [AR] -> Adult -> RCT-Re-TCT / Filling

    {
        id: "ar-adult-filling",
        title: "حشو أسنان",
        values: [
            { title: "حشو مؤقت", value: 300 },
            { title: "حشو علاجي", value: 900 },
            { title: "حشو دائم (كومبوزيد)", value: 1_200 },
        ]
    },
    {
        id: "ar-adult-rct",
        title: "حشو عصب",
        values: [
            { title: "سن امامي", value: 2_600 },
            { title: "ضرس امامي", value: 3_000 },
            { title: "ضرس خلفي", value: 3_400 },
        ]
    },
    {
        id: "ar-adult-rerct",
        title: "اعادة حشو عصب",
        values: [
            { title: "سن امامي", value: 3_100 },
            { title: "ضرس امامي", value: 3_500 },
            { title: "ضرس خلفي", value: 4_000 },
        ]
    },

    // -------------------------------------- [AR] -> Adult -> Gum / Halitosis

    {
        id: "ar-adult-gum",
        title: "علاج خراج لثوي",
        values: [
            { title: "فتح خراج لثواي وتنظيف لثة", value: 1_300 },
        ]
    },

    {
        id: "ar-adult-halitosis",
        title: "علاج رائحة الفم الكريهة",
        values: [
            { title: "تنظيف وازالة الرواسب الجيرية", value: 800 },
        ]
    },

    {
        id: "ar-adult-oooo",
        title: "علاج اللثة",
        values: [
            { title: "فتح خراج لثوس", value: 500 },
            { title: "تنظيف لثة", value: 800 },
            { title: "تلميع الأسنان", value: 400 },
            { title: "ازالة لثة", value: 300 },
        ]
    },

    // -------------------------------------- [AR] -> Adult -> Emergancy

    {
        id: "ar-adult-er",
        title: "طوارئ",
        type: "er",
        values: [
            { title: "اتصل بنا فوراً!", value: "(+20) 01111-33-8461", notPrice: true },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Adult -> Pain

    {
        id: "ar-adult-pain",
        title: "ألم الاسنان",
        values: [
            { title: "سن/ضرس معالج من قبل", next: "ar-adult-pain-treated" },
            { title: "سن/ضرس طبيعي/تسوس", next: "ar-adult-pain-natural" },
        ]
    },

    // -------------------------------------- [AR] -> Adult -> Pain -> treated

    {
        id: "ar-adult-pain-treated",
        title: "سن/ضرس معالج",
        values: [
            { title: "معالج حشو مؤقت/دائم", next: "ar-adult-pain-treated-filled" },
            { title: "معالج حشو عصب", next: "ar-adult-rerct" },
        ]
    },

    {
        id: "ar-adult-pain-treated-filled",
        title: "حشو مؤقت/دائم",
        values: [
            { title: "الألم مستمر", next: "ar-adult-rct" },
            { title: "الألم مع الاكل/العض", next: "ar-adult-filling" },
        ]
    },

    {
        id: "ar-adult-pain-natural",
        title: "سن/ضرس طبيعي",
        values: [
            { title: "مستمر", next: "ar-adult-rct" },
            { title: "مع الاكل/العض", next: "ar-adult-filling" },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Adult -> Swelling

    {
        id: "ar-adult-swelling",
        title: "تورم الأسنان",
        values: [
            { title: "تورم موضعي", next: "ar-adult-swelling-local" },
            { title: "تورم عام", next: "ar-adult-swelling-general" },
        ]
    },

    // -------------------------------------- [AR] -> Adult -> Swelling -> Local

    {
        id: "ar-adult-swelling-local",
        title: "تورم موضعي",
        values: [
            { title: "خراج لثوي", next: "ar-adult-gum" },
            { title: "خراج من سن/ضرس", next: "ar-adult-rct" },
        ]
    },

    // -------------------------------------- [AR] -> Adult -> Swelling -> General

    {
        id: "ar-adult-swelling-general",
        title: "تورم عام",
        values: [
            { title: "تورم في الوجه", next: "ar-adult-er" },
            { title: "تورم تحت الفك", next: "ar-adult-er" },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Adult -> Bleeding

    {
        id: "ar-adult-bleeding",
        title: "نزيف لثوي",
        values: [
            { title: "نزيف في اللثة", next: "ar-adult-gum" },
            { title: "نزيف في الأسنان", next: "ar-adult-gum" },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Adult -> Loss

    {
        id: "ar-adult-loss",
        title: "فقدان الأسنان",
        values: [
            { title: "سن/ضرس واحد", next: "ar-adult-loss-s" },
            { title: "من 2 الي 4 أسنان/أضراس", next: "ar-adult-loss-s" },
            { title: "اكثر من 5 أسنان/اضراس", next: "ar-adult-loss-s" },
        ]
    },

    // -------------------------------------- [AR] -> Adult -> Loss -> S

    {
        id: "ar-adult-loss-s",
        title: "علاج فقدان الأسنان",
        values: [
            { title: "زراعة الأسنان", value: "8,500-25,000 ج.م / الزرعة" },
            { title: "سن/ضرس متحرك", value: "150-700 ج.م / سن-ضرس" },
            { title: "كبري/جسر", value: "6,000-15,000 ج.م / كبري-جسر" },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Adult -> Cosmotic

    {
        id: "ar-adult-cosmotic",
        title: "تجميل الأسنان",
        values: [
            { title: "تبييض الأسنان", value: 4_000 },
            { title: "القشور الخزفية", value: "3,500 ج.م / القشرة" },
            { title: "الحشوات التجميلية", value: "1,200 ج.م / سن" },
        ]
    },

    // !--------------------------------------------------------------------------- [AR] -> Kids (-13)

    {
        id: "ar-kids",
        title: "صغار (-13)",
        values: [
            { title: "ألم", next: "ar-kids-pain" },
            { title: "فقدان", next: "ar-kids-loss" },
            { title: "تورم", next: "ar-kids-swelling" },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Kids -> Pain

    {
        id: "ar-kids-pain",
        title: "صغار (-13)",
        values: [
            { title: "ألم مع الأكل", next: "ar-kids-filling" },
            { title: "ألم مستمر", next: "ar-kids-rct-extractions" },
        ]
    },

    {
        id: "ar-kids-filling",
        title: "حشو",
        values: [
            { title: "حشو ضوئي", value: 600 },
            { title: "حشو علاجي", value: 800 },
        ]
    },

    {
        id: "ar-kids-rct-extractions",
        title: "علاج عصب مع خلع",
        values: [
            { title: "علاج العصب كامل", value: 1_800 },
            { title: "علاج العصب جزئي", value: 1_000 },
            { title: "خلع", value: 400 },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Kids -> Loss

    {
        id: "ar-kids-loss",
        title: "فقدار الأسنان",
        values: [
            { title: "حافظ مسافة", value: 1_500 },
            { title: "سن/ضرس متحرك", value: 600 },
            { title: "طربوش معدن", value: 800 },
        ]
    },

    // ?---------------------------------------------------------------------------- [AR] -> Kids -> Swelling

    {
        id: "ar-kids-swelling",
        title: "تورم الأسنان",
        values: [
            { title: "علاج العصب كامل", value: 1_800 },
            { title: "علاج العصب جزئي", value: 1_000 },
            { title: "فتح خراج لثواي", value: 500 },
        ]
    },
];

// ----------------------------------------------------

const chat = document.getElementById("chats");
const checkPoints = {
    none: "hidden",
    start: "h-full w-0.5 absolute bg-blue-600 top-1/2 translate-x-1/2 start-1/2",
    mid: "h-full w-0.5 absolute bg-blue-600 top-0 translate-x-1/2 start-1/2",
    last: "h-full w-0.5 absolute bg-blue-600 -top-1/2 translate-x-1/2 start-1/2",
}
let y = 0;

// ----------------------------------------------------


const nextQuestion = (id, lastId, isValue) => {
    if (!id) return
    if (id == "restart") {
        document.getElementById("chats").innerHTML = `
          <div id="start" class="w-full flex justify-start gap-5 text-black">
            <!-- Roadmap CheckPoint -->
            <div id="roadmap-point" class="w-12 min-h-full relative flex justify-center items-center overflow-hidden">
              <span class="size-8 p-2 bg-blue-600/50 rounded-full flex justify-center items-center"><span class="size-full bg-blue-600 rounded-full"></span></span>
              <span id="roadmap-line" class="h-full w-0.5 absolute bg-blue-600 top-1/2 translate-x-1/2 start-1/2 hidden"></span>
            </div>
            <!-- Slections -->
            <div class="min-w-[36rem] my-2.5 flex flex-col gap-2.5 glass-tab rounded-3xl border-s-px border-s-blue-600 relative overflow-hidden">
              <span class="h-full aspect-square rounded-full absolute top-0 start-0 translate-x-1/2 ltr:-translate-x-1/2" style="background: radial-gradient(circle, rgba(37, 99, 235, 0.25), transparent 60%)"></span>
              <!-- <h2 class="text-lg font-semibold">هل انت مستعد؟</h2> -->
              <div id="options" class="w-full flex flex-col lg:flex-row justify-center gap-5">
                <button id="start-btn" class="w-full glass-btn-default rounded-xl" onclick="nextQuestion('ar','start')">ابدأ</button>
              </div>
            </div>
          </div>
        `
        return
    }
    let question = components.find(f => f.id == (id || lastId))
    if (!question && !isValue) return console.log("Question Not Found");

    // --------------------------
    let lastQuestion = document.getElementById(lastId)
    // --------------------------
    let lastCheckPoint = document.querySelector(`#${lastId} #roadmap-line`)
    lastCheckPoint.classList.value = lastId == "start" ? checkPoints.start : checkPoints.mid
    // --------------------------
    let lastBtns = document.querySelectorAll(`#${lastId} button`)
    lastBtns.forEach(btn => {
        if (lastId == "start") {
            btn.textContent = "أعد المحاولة"
            btn.attributes.getNamedItem("onclick").value = "nextQuestion('restart','start')"
        } else {
            btn.classList.replace("glass-btn-default", btn.id == id ? "glass-btn-selected" : "glass-btn-disabled")
            btn.attributes.setNamedItem(document.createAttribute("disabled"));
        }
    })
    // --------------------------

    //? -------------------------- Setup
    let nubi = document.getElementById("nubi")
    question = isValue ? components.find(f => f.id == lastId) : question
    let value = isValue ? components.find(f => f.id == lastId).values.find(v => v.title == id) : null
    let bg_color = isValue ? (question.type == 'er' ? 'bg-red-600' : 'bg-green-600') : 'bg-blue-600';
    let gradient_color = isValue ? (question.type == 'er' ? 'rgba(220, 38, 38, 0.25)' : 'rgba(22, 163, 74, 0.25)') : 'rgba(37, 99, 235, 0.25)';
    let glass_btn = isValue ? (question.type == 'er' ? 'glass-btn-error' : 'glass-btn-success') : 'glass-btn-default';
    let glass_chat = isValue ? (question.type == 'er' ? 'glass-chat-emergency' : 'glass-chat-success') : 'glass-chat-default';
    let _id = (m) => m?.next || m.title
    let btn_message = (m) => isValue ? (typeof value.value == 'number' ? `${value.value} ج.م` : value.value) : m.title;
    let onclick = (m) => isValue ? `onclick="nextQuestion('${_id(m)}', '${id}')"` : `onclick="nextQuestion('${_id(m)}','${id}',${Boolean(m.value)})"`;
    let btns = isValue ? [0] : question.values

    // y += 5;
    // nubi.style.translate = `0 ${y}px`;
    // console.log(nubi.style.translate);


    //? -------------------------- Apply
    nubi.src = isValue ? `../media/Nubi 103.png` : `../media/Nubi 102.png`
    chat.innerHTML += `
        <div id="${id}" class="w-full flex justify-start gap-5 text-black">
            <!-- Roadmap CheckPoint -->
            <div id="roadmap-point" class="w-12 min-h-full relative flex justify-center items-center overflow-hidden">
                <span class="size-8 p-2 ${bg_color}/50 rounded-full flex justify-center items-center"><span class="size-full ${bg_color} rounded-full"></span></span>
                <span id="roadmap-line" class="${checkPoints.last} ${bg_color}"></span>
            </div>
            <!-- Slections -->
            <div id="selections" class="min-w-[36rem] my-2.5 flex flex-col gap-2.5 ${glass_chat} overflow-hidden">
                <span id="light" class="h-full aspect-square rounded-full absolute top-0 start-0 translate-x-1/2 ltr:-translate-x-1/2" style="background: radial-gradient(circle, ${gradient_color}, transparent 60%)"></span>
                <div id="options" class="w-full flex flex-col lg:flex-row justify-center gap-5">
                ${btns.map(m => `<button id="${_id(m)}" class="w-full whitespace-nowrap ${glass_btn} rounded-xl" ${onclick(m)}>${btn_message(m)}</button>`).join("\n")}
                </div>
            </div>
        </div>
    `
};