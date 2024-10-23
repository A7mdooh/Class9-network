const quizData = [
    {
        question: "ما هو التعريف الصحيح للشبكة؟",
        answers: [
            "إنشاء اتصال بين جهاز واحد بالإنترنت لأغراض الاستكشاف الفردي",
            "استخدام جهاز كمركز لتخزين البيانات دون مشاركة مع أجهزة أخرى",
            "توصيل الأجهزة معًا ضمن شبكة محلية دون السماح بتبادل البيانات",
            "تكوين بنية تحتية تربط جهازين أو أكثر لتمكين تبادل البيانات والموارد بشكل فعال"
        ],
        correctAnswer: 3
    },
    {
        question: "ما الذي يُمكن تحقيقه من خلال استخدام شبكة الحاسوب؟",
        answers: [
            "تقليل عدد الأجهزة المطلوبة للتشغيل",
            "مشاركة التطبيقات والموارد مما يسهم في تقليل التكاليف المادية",
            "زيادة سرعة المعالجة في الأجهزة بشكل منفصل",
            "تخزين البيانات بشكل مركزي دون إمكانية الوصول إليها من الأجهزة الأخرى"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هو سلك متحد المحور المستخدم في الشبكات؟",
        answers: [
            "كابل يستخدم لنقل البيانات والإشارات عبر الأسلاك المحورية",
            "كابل يستخدم لتوصيل الأجهزة عبر الشبكة اللاسلكية",
            "كابل يتميز بسرعة نقل البيانات داخل الشبكات الضوئية",
            "كابل يستخدم فقط لنقل الطاقة الكهربائية"
        ],
        correctAnswer: 0,
        image: "assets/images/Coaxial.jpg"
    },
    {
        question: "ما هو الجهاز الذي يستخدم لإيصال جهاز الحاسوب بشبكة الإنترنت؟",
        answers: [
            "المودم",
            "الموجه (Router)",
            "المحول (Switch)",
            "نقطة الوصول (Access Point)"
        ],
        correctAnswer: 0
    },
    {
        question: "أي من الأنواع التالية يُعد نوعًا من الشبكات التي تغطي مناطق جغرافية صغيرة جدًا، مثل المنازل والمكاتب الصغيرة؟",
        answers: [
            "الشبكة المحلية (LAN)",
            "الشبكة الواسعة (WAN)",
            "الشبكة الشخصية (PAN)",
            "شبكة المدينة (MAN)"
        ],
        correctAnswer: 0
    },
    {
        question: "أي بروتوكول يُستخدم لتعيين عنوان آي بي تلقائيًا للأجهزة المتصلة بالشبكة؟",
        answers: [
            "DNS",
            "DHCP",
            "FTP",
            "HTTP"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هو عنوان (ماك)؟",
        answers: [
            "عنوان يستخدم للوصول إلى الإنترنت",
            "عنوان فريد يُعطى لكل جهاز على الشبكة",
            "عنوان يُستخدم لتحديد موقع موقع الويب",
            "بروتوكول يُستخدم لتبادل البيانات"
        ],
        correctAnswer: 1
    },
    {
        question: "أي من الأوامر التالية يُستخدم للتحقق من الاتصال بجهاز آخر في الشبكة؟",
        answers: [
            "ipconfig",
            "ping",
            "netstat",
            "tracert"
        ],
        correctAnswer: 1
    },
    {
        question: "أي نوع من الكابلات يُعتبر مثاليًا للاستخدام في نقل البيانات عبر مسافات طويلة؟",
        answers: [
            "كابل متحد المحور (Coaxial)",
            "كابل الألياف البصرية",
            "الكابل المزدوج المجدول",
            "كابل الطاقة"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هو نوع الشبكة التي تربط الأجهزة داخل نفس المبنى أو بين عدة مبانٍ قريبة؟",
        answers: [
            "الشبكة الواسعة (WAN)",
            "الشبكة المحلية (LAN)",
            "الشبكة الشخصية (PAN)",
            "شبكة المدينة (MAN)"
        ],
        correctAnswer: 1
    },
    {
        question: "أي من الأجهزة التالية يُستخدم لتقسيم الشبكة وتوجيه البيانات بناءً على عناوين ماك؟",
        answers: [
            "الموجه (Router)",
            "المحول (Switch)",
            "المجمع (Hub)",
            "نقطة الوصول (Access Point)"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هو الغرض من استخدام بروتوكول HTTP؟",
        answers: [
            "لنقل الملفات عبر الإنترنت",
            "لتصفح مواقع الويب",
            "لتأمين الاتصال عبر الشبكة",
            "لتعيين عناوين IP للأجهزة"
        ],
        correctAnswer: 1
    },
    {
        question: "أي من الأوامر التالية يُستخدم لعرض إعدادات الشبكة في نظام وندوز؟",
        answers: [
            "ipconfig",
            "ping",
            "tracert",
            "netstat"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هي الشبكة التي تُستخدم للربط بين أجهزة الشبكة داخل نطاق جغرافي محدود؟",
        answers: [
            "الشبكة الشخصية",
            "الشبكة المحلية",
            "الشبكة الواسعة",
            "شبكة المدينة"
        ],
        correctAnswer: 1
    },
    {
        question: "في أي بنية شبكية يؤثر فشل جهاز واحد على عمل الشبكة في الأجهزة الأخرى؟",
        answers: [
            "البنية النجمية",
            "البنية الحلقية",
            "البنية الخطية",
            "البنية الشجرية"
        ],
        correctAnswer: 2
    },
    {
        question: "ما هو سلك مصنوع من الزجاج أو البلاستيك ويُعتبر أسرع الكابلات في نقل البيانات؟",
        answers: [
            "الأسلاك المجدولة غير المغطاة",
            "الأسلاك المجدولة المغطاة",
            "سلك متحد المحور",
            "سلك الألياف البصرية"
        ],
        correctAnswer: 3
    },
    {
        question: "ما هو الجهاز الذي يعتمد عمله على جمع عناوين IP للأجهزة المتصلة لتحديد الجهاز المرسل إليه؟",
        answers: [
            "المجمع",
            "الموجه",
            "المبدل",
            "بطاقة الشبكة"
        ],
        correctAnswer: 2
    },
    {
        question: "أي من أنواع الأسلاك يحتوي على موصل نحاسي مغطى بمادة عازلة؟",
        answers: [
            "سلك متحد المحور",
            "سلك الألياف البصرية",
            "الأسلاك المجدولة",
            "الأسلاك الشريطية"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هي البنية الشبكية التي تحتوي على نهاية طرفية لامتصاص البيانات؟",
        answers: [
            "البنية النجمية",
            "البنية الحلقية",
            "البنية الخطية",
            "البنية الشجرية"
        ],
        correctAnswer: 2
    },
    {
        question: "ما هي البنية الشبكية التي تحتوي على جهاز مركزي يُسمى 'نقطة وصول'؟",
        answers: [
            "البنية النجمية",
            "البنية الحلقية",
            "البنية الخطية",
            "البنية الشجرية"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هو الجهاز الذي يربط بين شبكتين أو أكثر؟",
        answers: [
            "الموجه",
            "الأسلاك",
            "المجمع",
            "المبدل"
        ],
        correctAnswer: 0
    },
    {
        question: "ما هي تقنية الشبكة اللاسلكية التي تُستخدم في شبكات المدن؟",
        answers: [
            "الواي فاي",
            "الأقمار الصناعية",
            "البلوتوث",
            "الواي ماكس"
        ],
        correctAnswer: 3
    },
    {
        question: "أي تقنية تسمح بنقل الملفات لمسافات قصيرة جدًا؟",
        answers: [
            "الشبكة اللاسلكية",
            "البلوتوث",
            "الشبكات السلكية",
            "الأقمار الصناعية"
        ],
        correctAnswer: 1
		
    },
	{
        question: "ما هي الشبكة التي تربط بين شبكات محلية داخل مدينة مثل الجامعات؟",
        answers: [
            "الشبكة الشخصية",
            "شبكة المدينة",
            "الشبكة المحلية",
            "الشبكة الواسعة"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هي الشبكة التي تشمل البلدان وتصل للعالم مثل شبكة الإنترنت؟",
        answers: [
            "الشبكة الشخصية",
            "الشبكة المحلية",
            "الشبكة الواسعة",
            "شبكة المدينة"
        ],
        correctAnswer: 2
    },
    {
        question: "أي نوع من الشبكات يُستخدم في المنازل والمكاتب الصغيرة ويديرها شخص واحد؟",
        answers: [
            "الشبكة الشخصية",
            "الشبكة المحلية",
            "الشبكة الواسعة",
            "شبكة المدينة"
        ],
        correctAnswer: 1
    },
    {
        question: "ما هي الشبكة التي تُستخدم لربط أجهزة في مبنى واحد مثل شبكة المدارس؟",
        answers: [
            "الشبكة الشخصية",
            "الشبكة المحلية",
            "الشبكة الواسعة",
            "شبكة المدينة"
        ],
        correctAnswer: 1
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
