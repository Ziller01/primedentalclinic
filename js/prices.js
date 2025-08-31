let prices = [
    {
        id: 1,
        name: "كبار (+13)",
        value: [
            {
                id: 1,
                name: "جراحة الأسنان",
                value: [
                    {
                        id: 1,
                        name: "الخلع",
                        value: [
                            { id: 1, name: "عادي", value: 500 },
                            { id: 2, name: "ضرس العقل", value: 700 },
                            { id: 3, name: "جراحي", value: 1000 },
                            { id: 4, name: "ضرس عقل جراحيًا", value: 2000 },
                        ],
                    },
                    {
                        id: 2,
                        name: "العلاجات",
                        value: [
                            { id: 1, name: "تنظيف خراج", value: 700 },
                            { id: 2, name: "تنظيف جرح خلع", value: 400 },
                            { id: 3, name: "إزالة نتوء عظمي", value: 1000 },
                            { id: 4, name: "خياطة", value: 300 },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: "العلاج التحفظي",
                value: [
                    {
                        id: 1,
                        name: "الحشوات",
                        value: [
                            { id: 1, name: "مؤقتة", value: 300 },
                            { id: 2, name: "زجاجية علاجية", value: 900 },
                            { id: 3, name: "ضوئية أمامية", value: 1200 },
                            { id: 4, name: "ضوئية خلفية", value: 1200 },
                            { id: 5, name: "حشو مرحلتين", value: 1500 },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: "علاج الجذور",
                value: [
                    {
                        id: 1,
                        name: "الأسنان",
                        value: [
                            {
                                id: 1,
                                name: "علاج جذور",
                                value: [{ id: 1, name: "أمامية", value: 2600 }],
                            },
                            {
                                id: 2,
                                name: "إعادة علاج جذور",
                                value: [{ id: 1, name: "أمامية", value: 3100 }],
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "الضروس",
                        value: [
                            {
                                id: 1,
                                name: "علاج جذور",
                                value: [
                                    { id: 1, name: "أمامية", value: 3000 },
                                    { id: 2, name: "خلفية", value: 3400 },
                                ],
                            },
                            {
                                id: 2,
                                name: "إعادة علاج جذور",
                                value: [
                                    { id: 1, name: "أمامية", value: 3500 },
                                    { id: 2, name: "خلفية", value: 4000 },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: "اللثة",
                value: [
                    {
                        id: 1,
                        name: "تنظيف الأسنان",
                        value: [
                            { id: 1, name: "روتين (جلسة واحدة)", value: 800 },
                            { id: 2, name: "عميق (2-3 جلسات)", value: 1200 },
                            { id: 3, name: "تلميع", value: 400 },
                        ],
                    },
                    {
                        id: 2,
                        name: "العلاجات",
                        value: [
                            { id: 1, name: "إزالة جيب لثوي", value: 300 },
                            { id: 2, name: "تبييض الأسنان", value: 4000 },
                            { id: 3, name: "إزالة لثة", value: 200 },
                            {
                                id: 4,
                                name: "إزالة لحمية في ضرس العقل",
                                value: 500,
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: "تعويضات الأسنان",
                value: [
                    {
                        id: 1,
                        name: "أجهزة وقائية",
                        value: [{ id: 1, name: "عضة ليلية", value: 1000 }],
                    },
                    {
                        id: 2,
                        name: "تعويضات متحركة",
                        value: [
                            {
                                id: 1,
                                name: "طقم جزئي",
                                value: [
                                    { id: 1, name: "علوي وسفلي", value: "600/سن" },
                                    { id: 2, name: "علوي أو سفلي", value: "600/سن" },
                                ],
                            },
                            {
                                id: 2,
                                name: "طقم كامل",
                                value: [
                                    { id: 1, name: "علوي وسفلي", value: 10000 },
                                    { id: 2, name: "علوي أو سفلي", value: 5000 },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        name: "تعويضات ثابتة",
                        value: [
                            { id: 1, name: "تاج زيركونيوم كامل", value: 3000 },
                            { id: 2, name: "قشور خزفية ايماكس", value: 4000 },
                            { id: 3, name: "تثبيت تاج أو إعادة تثبيت", value: 500 },
                            { id: 4, name: "زراعة الأسنان", value: 12000 },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "أطفال (-13)",
        value: [
            { id: 1, name: "الخلع", value: 400 },
            {
                id: 2,
                name: "الحشوات",
                value: [
                    { id: 1, name: "مؤقتة", value: 300 },
                    { id: 2, name: "زجاجية علاجية", value: 700 },
                    { id: 3, name: "ضوئية", value: 800 },
                ],
            },
            {
                id: 3,
                name: "العلاجات",
                value: [
                    { id: 1, name: "نظافة الأسنان", value: 500 },
                    { id: 2, name: "تلميع الأسنان", value: 400 },
                    { id: 3, name: "إزالة لثة", value: 300 },
                ],
            },
            {
                id: 4,
                name: "التركيبات",
                value: [{ id: 1, name: "طربوش/تاج معدني", value: 800 }],
            },
            {
                id: 5,
                name: "علاج الجذور",
                value: [
                    { id: 1, name: "جزئي", value: 1000 },
                    { id: 2, name: "كامل", value: 1800 },
                ],
            },
            {
                id: 6,
                name: "أدوات حفظ",
                value: [
                    { id: 1, name: "حافظ أسنان", value: 800 },
                    { id: 2, name: "حافظ مسافة", value: 1500 },
                ],
            },
        ],
    },
];

let checkPoints = {
    none: "hidden",
    start: "h-full w-0.5 absolute bg-blue-600 top-1/2 translate-x-1/2 start-1/2",
    mid: "h-full w-0.5 absolute bg-blue-600 top-0 translate-x-1/2 start-1/2",
    last: "h-full w-0.5 absolute bg-blue-600 -top-1/2 translate-x-1/2 start-1/2",
}

let currentStep = {
    path: prices,
    obj: "Start"
};

// ----------------------------------------------------

let element = document.getElementById("chats");

// ----------------------------------------------------

// const nextObj = obj => !!obj && typeof obj === "object" && Object.values(obj).filter(v => v && typeof v === "object" && !Array.isArray(v));
const nextObjs = obj => !!obj && typeof obj === "object" && Object.entries(obj);

const getPath = (obj, target, path = []) => {
    for (let k in obj) {
        if (obj[k] === target) return [...path, k];
        if (obj[k] && typeof obj[k] === "object") {
            let p = getPath(obj[k], target, [...path, k]);
            if (p) return p;
        }
    }
};



function start() {
    const startBtn = document.getElementById("start-btn");
    const path = getPath(prices, currentStep.obj);
    // -------------------------------------------------------
    startBtn.innerHTML = "أعد البدء"
    element.innerHTML += `
            <div class="w-full flex justify-start gap-5 text-black">
                <!-- Roadmap CheckPoint -->
                <div id="roadmap-point" class="w-12 min-h-full relative flex justify-center items-center overflow-hidden">
                    <span class="size-8 p-2 bg-blue-600/50 rounded-full flex justify-center items-center"><span class="size-full bg-blue-600 rounded-full"></span></span>
                    <span id="roadmap-line" class="hidden"></span>
                </div>
                <!-- Options -->
                <div class="w-full max-w-xl my-2.5 flex flex-col gap-2.5 glass-tab rounded-3xl border-s-px border-s-blue-600 relative overflow-hidden">
                    <span class="h-full aspect-square rounded-full absolute top-0 start-0 translate-x-1/2 ltr:-translate-x-1/2" style="background: radial-gradient(circle, rgba(37, 99, 235, 0.25), transparent 60%)"></span>
                    <h2 class="text-lg font-semibold">${currentStep.obj}</h2>
                    <div id="options" class="w-full flex flex-wrap justify-center gap-5">
                        ${nextObjs(prices).map(([k, v]) => { `<button id="start-btn" class="w-full btn-base glass-btn-default rounded-xl" onclick="alert(${k})">${k}</button>` })}
                    </div>
                </div>
            </div>
        `
}


function nextStep(step) {

    if (typeof step === "object") {
        element.innerHTML += `
            <div class="w-full flex justify-start gap-5 text-black">
                <!-- Roadmap CheckPoint -->
                <div id="roadmap-point" class="w-12 min-h-full relative flex justify-center items-center overflow-hidden">
                    <span class="size-8 p-2 bg-blue-600/50 rounded-full flex justify-center items-center"><span class="size-full bg-blue-600 rounded-full"></span></span>
                    <span id="roadmap-line" class="hidden"></span>
                </div>
                <!-- Options -->
                <div class="w-full max-w-xl my-2.5 flex flex-col gap-2.5 glass-tab rounded-3xl border-s-px border-s-blue-600 relative overflow-hidden">
                    <span class="h-full aspect-square rounded-full absolute top-0 start-0 translate-x-1/2 ltr:-translate-x-1/2" style="background: radial-gradient(circle, rgba(37, 99, 235, 0.25), transparent 60%)"></span>
                    <h2 class="text-lg font-semibold">${currentStep.obj}</h2>
                    <div id="options" class="w-full flex flex-wrap justify-center gap-5">
                        ${nextObjs(prices).map(([k, v]) => { `<button id="start-btn" class="w-full btn-base glass-btn-default rounded-xl" onclick="alert(${k})">${k}</button>` })}
                    </div>
                </div>
            </div>
        `
    } else {
        alert(step)

    }
}

// ----------------------------------------------------
