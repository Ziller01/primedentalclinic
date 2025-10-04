let components = [
    //! >>===========================================>> Arabic
    { id: "ar", title: "ابدأ", values: [{ title: "كبار (13+)", next: "ar-adult" }, { title: "صغار (13-)", next: "ar-kids" },] },
    { id: "ar-adult", title: "كبار (+13)", values: [{ title: "ألم", next: "ar-adult-pain" }, { title: "تورم", next: "ar-adult-swelling" }, { title: "فقدان", next: "ar-adult-loss" }, { title: "تجميل", next: "ar-adult-cosmotic" }, { title: "نزيف", next: "ar-adult-bleeding" }, { title: "رائحة كريهة", next: "ar-adult-halitosis" },] },
    { id: "ar-adult-filling", title: "حشو أسنان", values: [{ title: "حشو مؤقت", value: 300 }, { title: "حشو علاجي", value: 900 }, { title: "حشو دائم (كومبوزيد)", value: 1_200 },] },
    { id: "ar-adult-rct", title: "حشو عصب", values: [{ title: "سن امامي", value: 2_600 }, { title: "ضرس امامي", value: 3_000 }, { title: "ضرس خلفي", value: 3_400 },] },
    { id: "ar-adult-rerct", title: "اعادة حشو عصب", values: [{ title: "سن امامي", value: 3_100 }, { title: "ضرس امامي", value: 3_500 }, { title: "ضرس خلفي", value: 4_000 },] },
    { id: "ar-adult-gum", title: "علاج خراج لثوي", values: [{ title: "فتح خراج لثواي وتنظيف لثة", value: 1_300 },] },
    { id: "ar-adult-halitosis", title: "علاج رائحة الفم الكريهة", values: [{ title: "تنظيف وازالة الرواسب الجيرية", value: 800 },] },
    { id: "ar-adult-oooo", title: "علاج اللثة", values: [{ title: "فتح خراج لثوس", value: 500 }, { title: "تنظيف لثة", value: 800 }, { title: "تلميع الأسنان", value: 400 }, { title: "ازالة لثة", value: 300 },] },
    { id: "ar-adult-er", title: "طوارئ", type: "er", values: [{ title: "اتصل بنا فوراً!", value: "(+20) 01111-33-8461", notPrice: true },] },
    { id: "ar-adult-pain", title: "ألم الاسنان", values: [{ title: "سن/ضرس معالج من قبل", next: "ar-adult-pain-treated" }, { title: "سن/ضرس طبيعي/تسوس", next: "ar-adult-pain-natural" },] },
    { id: "ar-adult-pain-treated", title: "سن/ضرس معالج", values: [{ title: "معالج حشو مؤقت/دائم", next: "ar-adult-pain-treated-filled" }, { title: "معالج حشو عصب", next: "ar-adult-rerct" },] },
    { id: "ar-adult-pain-treated-filled", title: "حشو مؤقت/دائم", values: [{ title: "الألم مستمر", next: "ar-adult-rct" }, { title: "الألم مع الاكل/العض", next: "ar-adult-filling" },] },
    { id: "ar-adult-pain-natural", title: "سن/ضرس طبيعي", values: [{ title: "مستمر", next: "ar-adult-rct" }, { title: "مع الاكل/العض", next: "ar-adult-filling" },] },
    { id: "ar-adult-swelling", title: "تورم الأسنان", values: [{ title: "تورم موضعي", next: "ar-adult-swelling-local" }, { title: "تورم عام", next: "ar-adult-swelling-general" },] },
    { id: "ar-adult-swelling-local", title: "تورم موضعي", values: [{ title: "خراج لثوي", next: "ar-adult-gum" }, { title: "خراج من سن/ضرس", next: "ar-adult-rct" },] },
    { id: "ar-adult-swelling-general", title: "تورم عام", values: [{ title: "تورم في الوجه", next: "ar-adult-er" }, { title: "تورم تحت الفك", next: "ar-adult-er" },] },
    { id: "ar-adult-bleeding", title: "نزيف لثوي", values: [{ title: "نزيف في اللثة", next: "ar-adult-gum" }, { title: "نزيف في الأسنان", next: "ar-adult-gum" },] },
    { id: "ar-adult-loss", title: "فقدان الأسنان", values: [{ title: "سن/ضرس واحد", next: "ar-adult-loss-s" }, { title: "من 2 الي 4 أسنان/أضراس", next: "ar-adult-loss-s" }, { title: "اكثر من 5 أسنان/اضراس", next: "ar-adult-loss-s" },] },
    { id: "ar-adult-loss-s", title: "علاج فقدان الأسنان", values: [{ title: "زراعة الأسنان", value: "8,500-25,000 ج.م / الزرعة" }, { title: "سن/ضرس متحرك", value: "150-700 ج.م / سن-ضرس" }, { title: "كبري/جسر", value: "6,000-15,000 ج.م / كبري-جسر" },] },
    { id: "ar-adult-cosmotic", title: "تجميل الأسنان", values: [{ title: "تبييض الأسنان", value: 4_000 }, { title: "القشور الخزفية", value: "3,500 ج.م / القشرة" }, { title: "الحشوات التجميلية", value: "1,200 ج.م / سن" },] },
    { id: "ar-kids", title: "صغار (-13)", values: [{ title: "ألم", next: "ar-kids-pain" }, { title: "فقدان", next: "ar-kids-loss" }, { title: "تورم", next: "ar-kids-swelling" },] },
    { id: "ar-kids-pain", title: "صغار (-13)", values: [{ title: "ألم مع الأكل", next: "ar-kids-filling" }, { title: "ألم مستمر", next: "ar-kids-rct-extractions" },] },
    { id: "ar-kids-filling", title: "حشو", values: [{ title: "حشو ضوئي", value: 600 }, { title: "حشو علاجي", value: 800 },] },
    { id: "ar-kids-rct-extractions", title: "علاج عصب مع خلع", values: [{ title: "علاج العصب كامل", value: 1_800 }, { title: "علاج العصب جزئي", value: 1_000 }, { title: "خلع", value: 400 },] },
    { id: "ar-kids-loss", title: "فقدار الأسنان", values: [{ title: "حافظ مسافة", value: 1_500 }, { title: "سن/ضرس متحرك", value: 600 }, { title: "طربوش معدن", value: 800 },] },
    { id: "ar-kids-swelling", title: "تورم الأسنان", values: [{ title: "علاج العصب كامل", value: 1_800 }, { title: "علاج العصب جزئي", value: 1_000 }, { title: "فتح خراج لثواي", value: 500 },] },

    //! >>===========================================>> English
    { id: "en", title: "Adult", values: [{ title: "Adult (+13)", next: "en-adult" }, { title: "Kids (-13)", next: "en-kids" },] },
    { id: "en-adult", title: "Adult (+13)", values: [{ title: "Dental", next: "en-adult-pain" }, { title: "Pain", next: "en-adult-pain" }, { title: "Swelling", next: "en-adult-swelling" }, { title: "Bleeding", next: "en-adult-bleeding" }, { title: "Tooth Loss", next: "en-adult-loss" }, { title: "Cosmetic", next: "en-adult-cosmotic" },] },
    { id: "en-adult-filling", title: "Tooth Filling", values: [{ title: "Filling for a tooth", value: "300-900" }, { title: "Filling for a tooth (with root canal treatment)", value: 1_200 }, { title: "Filling for a tooth (with crown)", value: 1_800 },] },
    { id: "en-adult-rct", title: "Tooth Extraction", values: [{ title: "Simple extraction", value: 2_600 }, { title: "Surgical extraction", value: 3_000 }, { title: "Extraction with bone graft", value: 3_400 },] },
    { id: "en-adult-rerct", title: "Tooth Extraction", values: [{ title: "Simple extraction", value: 3_100 }, { title: "Surgical extraction", value: 3_500 }, { title: "Extraction with bone graft", value: 4_000 },] },
    { id: "en-adult-gum", title: "Gum Surgery", values: [{ title: "Removal of gum tissue", value: 1_300 },] },
    { id: "en-adult-halitosis", title: "Halitosis Treatment", values: [{ title: "Treatment of bad breath", value: 800 },] },
    { id: "en-adult-ooo", title: "Tooth Whitening", values: [{ title: "Whitening tooth paste", value: 500 }, { title: "Whitening tooth strip", value: 800 }, { title: "Whitening tooth gel", value: 400 }, { title: "Whitening tooth laser", value: 3_000 },] },
    { id: "en-adult-er", title: "Emergency Contact", type: "er", values: [{ title: "Call us for emergency!", value: "(+20) 01111-33-8461", notPrice: true },] },
    { id: "en-adult-pain", title: "Tooth Pain", values: [{ title: "Tooth Pain Treatment", next: "en-adult-pain-treated" }, { title: "Natural Tooth Pain Treatment", next: "en-adult-pain-natural" },] },
    { id: "en-adult-pain-treated", title: "Tooth Pain Treatment", values: [{ title: "Treatment with filling", next: "en-adult-pain-treated-filled" }, { title: "Treatment with extraction", next: "en-adult-rerct" },] },
    { id: "en-adult-pain-treated-filled", title: "Filling for a tooth", values: [{ title: "Fillings for a tooth", value: "1,500-2,500" }, { title: "Fillings for a tooth (with root canal treatment)", value: 1_200 }, { title: "Fillings for a tooth (with crown)", value: 1_800 },] },
    { id: "en-adult-pain-natural", title: "Natural Tooth Pain Treatment", values: [{ title: "Natural treatment", next: "en-adult-rct" }, { title: "Natural treatment with filling", next: "en-adult-filling" },] },
    { id: "en-adult-swelling", title: "Swelling Treatment", values: [{ title: "Local Swelling", next: "en-adult-swelling-local" }, { title: "General Swelling", next: "en-adult-swelling-general" },] },
    { id: "en-adult-swelling-local", title: "Local Swelling", values: [{ title: "Removal of gum tissue", value: 1_300 }, { title: "Removal of tooth", value: 1_800 },] },
    { id: "en-adult-swelling-general", title: "General Swelling", values: [{ title: "Swelling in the face", next: "en-adult-er" }, { title: "Swelling under the gum", next: "en-adult-er" },] },
    { id: "en-adult-bleeding", title: "Bleeding Treatment", values: [{ title: "Bleeding in the gum", value: 500 }, { title: "Bleeding in the tooth", value: 800 },] },
    { id: "en-adult-loss", title: "Tooth Loss Treatment", values: [{ title: "Treatment for tooth loss", next: "en-adult-loss-s" }, { title: "Treatment for tooth loss (1-2 teeth)", next: "en-adult-loss-s" }, { title: "Treatment for tooth loss (3-4 teeth)", next: "en-adult-loss-s" },] },
    { id: "en-adult-loss-s", title: "Treatment for tooth loss", values: [{ title: "Treatment for tooth loss", value: "8,500-25,000 ج.م / Treatment" }, { title: "Treatment for tooth loss (per tooth)", value: "150-700 ج.م / Treatment" }, { title: "Bridge/Crown", value: "6,000-15,000 ج.م / Bridge/Crown" },] },
    { id: "en-adult-cosmotic", title: "Cosmetic Treatment", values: [{ title: "Teeth Whitening", value: 4_000 }, { title: "Veneers", value: "3,500 ج.م / Veneers" }, { title: "Dental Implants", value: "1,200 ج.م / Implant" },] },
    { id: "en-kids", title: "Kids (-13)", values: [{ title: "Dental", next: "en-kids-pain" }, { title: "Tooth Loss", next: "en-kids-loss" }, { title: "Swelling", next: "en-kids-swelling" },] },
    { id: "en-kids-pain", title: "Kids (-13)", values: [{ title: "Pain Treatment", next: "en-kids-filling" }, { title: "Pain Treatment (per tooth)", next: "en-kids-rct-extractions" },] },
    { id: "en-kids-filling", title: "Filling for a tooth", values: [{ title: "Filling for a tooth", value: 600 }, { title: "Filling for a tooth (with root canal treatment)", value: 1_800 },] },
    { id: "en-kids-rct-extractions", title: "Tooth Extraction", values: [{ title: "Simple extraction", value: 1_800 }, { title: "Surgical extraction", value: 1_000 }, { title: "Extraction with bone graft", value: 1_400 },] },
    { id: "en-kids-loss", title: "Tooth Loss Treatment", values: [{ title: "Bad Breath Treatment", value: 1_500 }, { title: "Tooth Loss Treatment (per tooth)", value: 600 }, { title: "Tooth Loss Treatment (3-4 teeth)", value: 2_400 },] },
    { id: "en-kids-swelling", title: "Swelling Treatment", values: [{ title: "Swelling in the face", next: "en-adult-er" }, { title: "Swelling under the gum", next: "en-adult-er" },] },
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
    let lang = document.documentElement.lang
    if (id == "restart") {
        document.getElementById("chats").innerHTML = `
          <div id="start" class="w-full flex justify-start gap-5 text-black">
            <!-- Roadmap CheckPoint -->
            <div id="roadmap-point" class="w-12 min-w-fit min-h-full relative flex justify-center items-center overflow-hidden">
              <span class="size-8 p-2 bg-blue-600/50 rounded-full flex justify-center items-center"><span class="size-full bg-blue-600 rounded-full"></span></span>
              <span id="roadmap-line" class="h-full w-0.5 absolute bg-blue-600 top-1/2 translate-x-1/2 start-1/2 hidden"></span>
            </div>
            <!-- Slections -->
            <div class="max-w-full my-2.5 flex flex-col gap-2.5 glass-chat-default overflow-hidden">
              <span class="h-full aspect-square rounded-full absolute top-0 start-0 translate-x-1/2 ltr:-translate-x-1/2" style="background: radial-gradient(circle, rgba(37, 99, 235, 0.25), transparent 60%)"></span>
              <div id="options" class="max-w-full w-[36rem] flex flex-col lg:flex-row justify-center gap-5">
                <button id="start-btn" class="w-full glass-btn-default rounded-xl" onclick="nextQuestion('${lang == "ar" ? "ar" : "en"}','start')">${lang == "ar" ? "ابدأ" : "start"}</button>
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
            btn.textContent = lang == "ar" ? "أعد المحاولة" : "restart"
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
    nubi.src = isValue ? (question.type == 'er' ? '`../media/Nubi 104.png' : '`../media/Nubi 103.png') : '`../media/Nubi 102.png';
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
    chat.innerHTML += `
        <div id="${id}" class="w-full flex justify-start gap-5 text-black">
            <!-- Roadmap CheckPoint -->
            <div id="roadmap-point" class="w-12 min-w-fit min-h-full relative flex justify-center items-center overflow-hidden">
                <span class="size-8 p-2 ${bg_color}/50 rounded-full flex justify-center items-center"><span class="size-full ${bg_color} rounded-full"></span></span>
                <span id="roadmap-line" class="${checkPoints.last} ${bg_color}"></span>
            </div>
            <!-- Slections -->
            <div id="selections" class="max-w-full my-2.5 flex flex-col gap-2.5 ${glass_chat} overflow-hidden">
                <span id="light" class="h-full aspect-square rounded-full absolute top-0 start-0 translate-x-1/2 ltr:-translate-x-1/2" style="background: radial-gradient(circle, ${gradient_color}, transparent 60%)"></span>
                <div id="options" class="max-w-full w-[36rem] flex flex-col lg:flex-row justify-center gap-5">
                ${btns.map(m => `<button id="${_id(m)}" class="w-full whitespace-nowrap ${glass_btn} rounded-xl" ${onclick(m)}>${btn_message(m)}</button>`).join("\n")}
                </div>
            </div>
        </div>
    `
};