const quizData = [
    {
        question: "ما هو التعريف الصحيح للشبكة؟",
        answers: [
            "إنشاء اتصال بين جهاز واحد بالإنترنت لأغراض الاستكشاف الفردي",
            "استخدام جهاز كمركز لتخزين البيانات دون مشاركة مع أجهزة أخرى",
            "توصيل الأجهزة معًا ضمن شبكة محلية دون السماح بتبادل البيانات",
            "تكوين بنية تحتية تربط جهازين أو أكثر لتمكين تبادل البيانات والموارد بشكل فعال"
        ],
        correctAnswer: 3,
    },
    {
        question: "ما الذي يُمكن تحقيقه من خلال استخدام شبكة الحاسوب؟",
        answers: [
            "تقليل عدد الأجهزة المطلوبة للتشغيل",
            "مشاركة التطبيقات والموارد مما يسهم في تقليل التكاليف المادية",
            "زيادة سرعة المعالجة في الأجهزة بشكل منفصل",
            "تخزين البيانات بشكل مركزي دون إمكانية الوصول إليها من الأجهزة الأخرى"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هي الفائدة الأساسية من استخدام شبكة الحاسوب لتبادل البيانات؟",
        answers: [
            "تحسين جودة عرض الشاشة",
            "زيادة سرعة الاتصال وتبادل البيانات",
            "إدارة التطبيقات المشتركة بكفاءة",
            "تقليل استهلاك الطاقة للأجهزة المتصلة"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هو النوع المناسب للشبكة التي تُستخدم في المكاتب الصغيرة والمنازل وتدار من قبل شخص واحد؟",
        answers: [
            "الشبكة المحلية (LAN)",
            "الشبكة الواسعة (WAN)",
            "الشبكة الشخصية (PAN)",
            "شبكة المدينة (MAN)"
        ],
        correctAnswer: 2,
    },
    {
        question: "ما هو النوع المناسب للشبكة التي تُستخدم داخل مبنى واحد أو عدة مبانٍ صغيرة متقاربة؟",
        answers: [
            "الشبكة الواسعة (WAN)",
            "الشبكة المحلية (LAN)",
            "الشبكة الشخصية (PAN)",
            "شبكة المدينة (MAN)"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هو النوع المناسب للشبكة التي تغطي عدة مبانٍ على مستوى مدينة واحدة؟",
        answers: [
            "الشبكة المحلية (LAN)",
            "شبكة المدينة (MAN)",
            "الشبكة الواسعة (WAN)",
            "الشبكة الشخصية (PAN)"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هي المكونات الأساسية لشبكة الحاسوب؟",
        answers: [
            "وحدة المعالجة المركزية وبرنامج مكافحة الفيروسات",
            "بطاقة الشبكة ونظام التشغيل",
            "الفأرة ولوحة المفاتيح",
            "جهاز العرض ووحدة التخزين"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هو دور المجمع (Hub) في الشبكات؟",
        answers: [
            "إدارة عناوين IP في الشبكة",
            "ربط الأجهزة في شبكة محلية وتوزيع البيانات إلى جميع المنافذ",
            "تحديد المسار الأفضل لنقل البيانات",
            "حماية الشبكة من الهجمات الخارجية"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هو الفرق الرئيسي بين المبدل (Switch) والمجمع (Hub) في توزيع البيانات؟",
        answers: [
            "المبدل يُرسل البيانات لجميع الأجهزة المتصلة، بينما المجمع يُحدد الجهاز المرسل إليه",
            "المجمع يُرسل البيانات لجميع الأجهزة المتصلة، بينما المبدل يُحدد الجهاز المرسل إليه",
            "المبدل يعتمد على عناوين IP فقط، بينما المجمع يعتمد على عناوين MAC فقط",
            "المجمع يوفر الأمان للشبكة، بينما المبدل يزيد من سرعة الاتصال"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما الفرق بين الموجه (Router) والمبدل (Switch) في التعامل مع البيانات؟",
        answers: [
            "الموجه يقوم بتوجيه البيانات بين الشبكات، بينما المبدل يتعامل مع البيانات داخل نفس الشبكة",
            "المبدل يقوم بتوجيه البيانات بين الشبكات، بينما الموجه يتعامل مع البيانات داخل الشبكة",
            "الموجه يوفر حماية البيانات، بينما المبدل يزيد من سرعة الاتصال",
            "الموجه يستخدم عناوين MAC، بينما المبدل يستخدم عناوين IP"
        ],
        correctAnswer: 0,
    },
    {
        question: "ما الفرق بين المودم (Modem) ونقطة الوصول (Access Point) من حيث الوظيفة؟",
        answers: [
            "المودم يقوم بتوصيل الإنترنت، بينما نقطة الوصول توفر الاتصال اللاسلكي",
            "نقطة الوصول تقوم بتوصيل الإنترنت، بينما المودم يوفر الاتصال اللاسلكي",
            "كلاهما يعملان على تقوية إشارة الشبكة",
            "المودم يربط الشبكات اللاسلكية، بينما نقطة الوصول تعمل على توصيل الكابلات"
        ],
        correctAnswer: 0,
    },
    {
        question: "ما هو عنوان MAC؟",
        answers: [
            "رقم تسلسلي يتم تعيينه للجهاز لتمييزه عن غيره",
            "عنوان يستخدم للوصول إلى الإنترنت فقط",
            "بروتوكول يحدد كيفية إرسال البيانات بين الشبكات",
            "عنوان بروتوكول الإنترنت الذي يمكن تغييره"
        ],
        correctAnswer: 0,
    },
    {
        question: "لماذا يُعتبر عنوان MAC فريدًا لكل جهاز؟",
        answers: [
            "لأنه يتم تغييره بواسطة المستخدم",
            "لأنه يعين من قبل الشركة المصنعة بشكل دائم",
            "لأنه يعتمد على عنوان IP الخاص بالجهاز",
            "لأنه يتكون من أرقام فقط"
        ],
        correctAnswer: 1,
    },
    {
        question: "كيف يمكن استخدام عنوان MAC لتحسين الأمان في الشبكات؟",
        answers: [
            "من خلال تغيير العنوان بانتظام",
            "بتحديد الأجهزة المسموح لها بالاتصال بالشبكة بناءً على عنوان MAC",
            "باستخدامه كبروتوكول للاتصال",
            "بإرسال البيانات عبر عنوان MAC بدلاً من IP"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما الفرق بين عنوان MAC وعنوان IP؟",
        answers: [
            "عنوان MAC يمكن تغييره، بينما عنوان IP يتم تعيينه بواسطة الشركة المصنعة",
            "عنوان IP يتم تعيينه من قبل الشبكة، بينما عنوان MAC يتم تعيينه من قبل الشركة المصنعة",
            "كلاهما يمكن تغييره حسب الحاجة",
            "عنوان MAC يستخدم للوصول إلى الإنترنت، بينما IP يستخدم للتواصل داخل الشبكة"
        ],
        correctAnswer: 1,
    },
    {
        question: "كيف يمكن دمج استخدام عنوان MAC وعنوان IP لتحسين تتبع الأجهزة في الشبكة؟",
        answers: [
            "باستخدام عنوان MAC فقط لتحديد الموقع الجغرافي للجهاز",
            "بإرسال البيانات مباشرة عبر عنوان IP بدون استخدام MAC",
            "باستخدام عنوان MAC لتعريف الجهاز وعنوان IP لتوجيه البيانات إليه",
            "بإخفاء عنوان IP عند استخدام عنوان MAC"
        ],
        correctAnswer: 2,
    },
    {
        question: "ما هي الفائدة الرئيسية من وجود عنوان MAC ثابت لكل جهاز في الشبكة؟",
        answers: [
            "لإتاحة تغيير العنوان عند الحاجة",
            "لضمان التعرف على الجهاز بشكل فريد في جميع الأوقات",
            "لتحديد سرعة الاتصال بالشبكة",
            "لإرسال البيانات عبر الشبكات اللاسلكية فقط"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هو عنوان IP؟",
        answers: [
            "عنوان يستخدم للوصول إلى الإنترنت بشكل مؤقت",
            "رقم مميز لكل جهاز على الشبكة يستخدم للتخاطب بين الأجهزة",
            "عنوان يتم تغييره يدويًا من قبل المستخدم",
            "بروتوكول يحدد طريقة إرسال البيانات"
        ],
        correctAnswer: 1,
    },
    {
        question: "لماذا يتم استخدام عنوان IP في الشبكات؟",
        answers: [
            "لتحديد الأجهزة التي يمكنها الاتصال بالإنترنت فقط",
            "لتمكين الأجهزة من التواصل وتبادل البيانات فيما بينها",
            "لتحديد الأجهزة التي يمكنها إرسال البريد الإلكتروني",
            "لتمكين الأجهزة من الاتصال دون الحاجة إلى شبكة"
        ],
        correctAnswer: 1,
    },
    {
        question: "كيف يمكنك استخدام عنوان IP للاتصال بجهاز معين على الشبكة؟",
        answers: [
            "من خلال استخدام عنوان MAC فقط",
            "بتحديد عنوان IP للجهاز المستهدف في إعدادات الشبكة",
            "عن طريق تعيين عنوان IP جديد في كل مرة",
            "باستخدام عنوان URL بدلاً من عنوان IP"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما الفرق بين عنوان IP الثابت وعنوان IP الديناميكي؟",
        answers: [
            "العنوان الثابت يتم تغييره تلقائيًا، بينما الديناميكي يبقى ثابتًا",
            "العنوان الثابت يُعين يدويًا، بينما الديناميكي يُعين تلقائيًا من قبل الخادم",
            "العنوان الديناميكي لا يمكن تغييره، بينما الثابت يمكن تغييره في أي وقت",
            "كلاهما يُستخدم لتحديد الجهاز بشكل دائم"
        ],
        correctAnswer: 1,
    },
    {
        question: "كيف يمكن دمج استخدام عناوين IP مع عناوين MAC لتحسين أداء الشبكة؟",
        answers: [
            "بإخفاء عناوين MAC واستخدام IP فقط",
            "باستخدام عناوين IP لتحديد الجهاز وعناوين MAC لتعريف موقع الجهاز",
            "باستخدام عناوين MAC فقط لتحسين سرعة الشبكة",
            "باستخدام عناوين IP لحماية الأجهزة من الهجمات الخارجية"
        ],
        correctAnswer: 1,
    },
    {
        question: "ما هي الفائدة من استخدام عنوان IP ثابت للأجهزة الحساسة في الشبكة؟",
        answers: [
            "لتقليل احتمالية انقطاع الاتصال",
            "لتمكين تغيير عنوان الجهاز بسهولة",
            "لزيادة أمان البيانات في الشبكة",
            "لتحسين سرعة الاتصال بالأجهزة المتصلة"
        ],
        correctAnswer: 0,
    },
    {
        question: "بناءً على تصنيف عناوين IP في الجدول، ما الفئة التي تُستخدم في المؤسسات الصغيرة والمتوسطة؟",
        answers: [
            "الفئة A (1 إلى 127)",
            "الفئة B (128 إلى 191)",
            "الفئة C (192 إلى 223)",
            "لا يوجد علاقة بين الفئة وحجم المؤسسة"
        ],
        correctAnswer: 2,
    },
    {
        question: "إذا كنت ترغب في تحسين الأمان في شبكتك المحلية عن طريق تحديد الأجهزة المسموح لها بالاتصال، كيف يمكن استخدام كل من عنوان IP وعنوان Mac في ذلك؟",
        answers: [
            "استخدام عنوان IP لتحديد الأجهزة في الشبكة، ومنع الاتصال من أي جهاز يحمل عنوان IP مختلف.",
            "استخدام عنوان Mac لتحديد الأجهزة الموثوقة، والسماح لها فقط بالوصول إلى الشبكة، بينما يتم تغيير عنوان IP ديناميكيًا.",
            "استخدام عنوان IP لتحديد الأجهزة التي تعمل فقط على طبقة الإنترنت، مع تغيير عنوان Mac لكل جهاز بشكل دوري.",
            "استخدام عنوان Mac لتغيير عناوين الأجهزة في الشبكة تلقائيًا، وتحديد نطاق عنوان IP مسبقًا."
        ],
        correctAnswer: 1,
    }
];


let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime, endTime;
let shuffledQuestions = [];
let totalQuestions = 0;
let timer;
const timePerQuestion = 120; // عدد الثواني المخصصة لكل سؤال
let timeLeft = timePerQuestion;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const studentName = document.getElementById("student-name").value.trim();
    const studentGrade = document.getElementById("student-grade").value.trim();
    const questionCount = document.getElementById("question-count").value;

    if (studentName === "" || studentGrade === "") {
        alert("الرجاء إدخال الاسم والصف قبل البدء.");
        return;
    }

    startTime = new Date();
    shuffledQuestions = shuffle([...quizData]);

    // تحديد عدد الأسئلة بناءً على اختيار الطالب
    if (questionCount === "10") {
        shuffledQuestions = shuffledQuestions.slice(0, 10);
    }

    totalQuestions = shuffledQuestions.length;

    document.querySelector('.design-credit').classList.add('hidden');
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("question-number");
    const questionImageElement = document.getElementById("question-image");

    const questionData = shuffledQuestions[currentQuestionIndex];

    questionNumberElement.innerText = `السؤال ${currentQuestionIndex + 1} من ${totalQuestions}`;
    questionElement.innerText = questionData.question;

    // إخفاء الصورة إذا لم تكن موجودة
    if (questionData.image) {
        questionImageElement.src = questionData.image;
        questionImageElement.style.display = "block";
    } else {
        questionImageElement.style.display = "none";
    }

    const shuffledAnswers = shuffle([...questionData.answers]);

    document.querySelectorAll('.answer-buttons .btn').forEach((button, index) => {
        button.innerText = shuffledAnswers[index];
        button.disabled = false;
        button.style.backgroundColor = "#3498db";
    });

    document.getElementById('next-btn').classList.add('hidden');

    // إعادة ضبط العداد الزمني
    timeLeft = timePerQuestion;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000); // تحديث العداد كل ثانية
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(null); // إذا انتهى الوقت، يتم الانتقال للسؤال التالي تلقائياً
    }
}

function selectAnswer(index) {
    clearInterval(timer); // إيقاف العداد الزمني عند اختيار الإجابة

    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const correctAnswerText = shuffledQuestions[currentQuestionIndex].answers[correctAnswer];

    document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
        button.disabled = true;
    });

    if (index !== null && document.querySelectorAll('.answer-buttons .btn')[index].innerText === correctAnswerText) {
        document.getElementById(`btn${index + 1}`).style.backgroundColor = "green";
        correctAnswers++;
        document.getElementById("correct-sound").play();
    } else {
        if (index !== null) {
            document.getElementById(`btn${index + 1}`).style.backgroundColor = "red";
        }
        document.getElementById("wrong-sound").play();
        document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
            if (button.innerText === correctAnswerText) {
                button.style.backgroundColor = "green";
            }
        });
        wrongAnswers++;
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    endTime = new Date();
    let timeSpent = Math.floor((endTime - startTime) / 1000);
    let minutes = Math.floor(timeSpent / 60);
    let seconds = timeSpent % 60;

    document.querySelector('.design-credit').classList.remove('hidden');
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("student-info").innerText = `${document.getElementById('student-name').value}, الصف ${document.getElementById('student-grade').value}`;
    document.getElementById("correct-answers").innerText = correctAnswers;
    document.getElementById("wrong-answers").innerText = wrongAnswers;
    document.getElementById("time-spent").innerText = `${minutes} دقيقة و ${seconds} ثانية`;
    document.getElementById("final-score").innerText = `${(correctAnswers / totalQuestions) * 100}%`;
}