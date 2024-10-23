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
        question: "عبارة عن قطعة إلكترونية تكون مثبتة على اللوحة الأم عبر شقوق التوسعة تعمل على ربط جهاز الحاسوب مع الشبكة:",
        answers: [
            "بطاقة الرسومات",
            "بطاقة الشبكة",
            "بطاقة الصوت",
            "مشغل الأقراص المرنة"
        ],
        correctAnswer: 1
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
        question: "تُعرف الشبكة السلكية باسم..",
        answers: [
            "الإنترنت",
            "واي فاي",
            "إيثرنت",
            "وايرلس"
        ],
        correctAnswer: 2
    },
    {
        question: "  في ما يستخدم سلك متحد المحور في الشبكات؟",
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
        question: "عبارة عن رقم مميز لكل جهاز على الشبكة يعد بمثابة لغة التخاطب تسمح للأجهزة بالاتصال مع أجهزة أخرى:",
        answers: [
            "mac address",
            "dns server",
            "serial number",
            "ip address"
        ],
        correctAnswer: 3 // الإجابة الصحيحة هي "ip address"
     },
    {
        question: "ما هو الجهاز الذي يستخدم لإيصال جهاز الحاسوب بشبكة الإنترنت؟",
        answers: [
            "المودم",
            "المكرر (Repeter)",
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
            "معرّف فريد يتم تعيينه من قبل الشركة المصنعة لبطاقة الشبكة لكل جهاز",
            "عنوان يتم تعيينه للأجهزة المتصلة بالإنترنت بشكل ديناميكي",
            "عنوان يُستخدم لتوجيه البيانات بين الأجهزة على الشبكة",
            "بروتوكول يُستخدم للتحقق من صحة البيانات المرسلة"
        ],
        correctAnswer: 0
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
        question: "ما هو نوع الكابل الموضح في الصورة أدناه؟",
        answers: [
            "كابل الألياف البصرية",
            "الكابل المجدول المغطى (STP)",
            "كابل متحد المحور",
            "الكابل المجدول غير المغطى (UTP)"
        ],
        correctAnswer: 0,
        image: "assets/images/FIBER.jpg"
    },
    {
        question: "ما نوع الشبكة التي تُستخدم لربط الأجهزة الشخصية ضمن مساحة محدودة مثل غرفة أو مكتب صغير؟",
        answers: [
            "الشبكة الواسعة (WAN)",
            "الشبكة المحلية (LAN)",
            "الشبكة الشخصية (PAN)",
            "شبكة المدينة (MAN)"
        ],
        correctAnswer: 2
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
        question: "ما هو نوع الكابل الموضح في الصورة أدناه؟",
        answers: [
            "كابل الألياف البصرية",
            "الكابل المجدول المغطى (STP)",
            "كابل متحد المحور",
            "الكابل المجدول غير المغطى (UTP)"
        ],
        correctAnswer: 1,
        image: "assets/images/SPT.jpg"
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
        question: " هو سلك مصنوع من الزجاج أو البلاستيك ويُعتبر أسرع الكابلات في نقل البيانات؟",
        answers: [
            "الأسلاك المجدولة غير المغطاة",
            "الأسلاك المجدولة المغطاة",
            "سلك متحد المحور",
            "سلك الألياف البصرية"
        ],
        correctAnswer: 3
    },
	{
		question: "ما هي التقنية التي تظهر في الصوره",
		answers: [
        "التقنية الشائعة التي تُستخدم للوصول إلى الإنترنت عبر نقطة اتصال لاسلكية",
        "تقنية لاسلكية مستخدمة لربط الأجهزة عبر مسافات قصيرة",
        "التقنية المستخدمة للوصول إلى الإنترنت في الأماكن النائية مثل السفن والطائرات",
        "التقنية المستخدمة لربط شبكات المدن الكبيرة عبر مسافات طويلة"
    ],
		correctAnswer: 1,
		image: "assets/images/Bluetooth.jpg"
	},
    {
        question: "ما هو نوع الكابل الموضح في الصورة أدناه؟",
        answers: [
            "كابل الألياف البصرية",
            "الكابل المجدول المغطى (STP)",
            "كابل متحد المحور",
            "الكابل المجدول غير المغطى (UTP)"
        ],
        correctAnswer: 3,
        image: "assets/images/UPT.jpg"
   },
		{
		question: "ما هي التقنية التي تظهر في الصوره",
		answers: [
        "التقنية الشائعة التي تُستخدم للوصول إلى الإنترنت عبر نقطة اتصال لاسلكية",
        "تقنية لاسلكية مستخدمة لربط الأجهزة عبر مسافات قصيرة",
        "التقنية المستخدمة للوصول إلى الإنترنت في الأماكن النائية مثل السفن والطائرات",
        "التقنية المستخدمة لربط شبكات المدن الكبيرة عبر مسافات طويلة"
    ],
		correctAnswer: 2,
		image: "assets/images/Satellite.jpg"
	},	
	{
		question: "ما هي التقنية التي تظهر في الصوره",
		answers: [
        "التقنية الشائعة التي تُستخدم للوصول إلى الإنترنت عبر نقطة اتصال لاسلكية",
        "تقنية لاسلكية مستخدمة لربط الأجهزة عبر مسافات قصيرة",
        "التقنية المستخدمة للوصول إلى الإنترنت في الأماكن النائية مثل السفن والطائرات",
        "التقنية المستخدمة لربط شبكات المدن الكبيرة عبر مسافات طويلة"
    ],
		correctAnswer: 0,
		image: "assets/images/WiFi.jpg"
	},

	{
		question: "ما هي التقنية التي تظهر في الصوره",
		answers: [
        "التقنية الشائعة التي تُستخدم للوصول إلى الإنترنت عبر نقطة اتصال لاسلكية",
        "تقنية لاسلكية مستخدمة لربط الأجهزة عبر مسافات قصيرة",
        "التقنية المستخدمة للوصول إلى الإنترنت في الأماكن النائية مثل السفن والطائرات",
        "التقنية المستخدمة لربط شبكات المدن الكبيرة عبر مسافات طويلة"
    ],
		correctAnswer: 3,
		image: "assets/images/WiMax.jpg"
	},	
	{
		question: "ما هو بروتوكول (TCP/IP)؟",
		answers: [
        "مجموعة من البروتوكولات التي تُستخدم لتوجيه البيانات وتوصيل الأجهزة عبر الشبكة",
        "بروتوكول يوفر اتصالاً موثوقًا يضمن تسليم البيانات بشكل صحيح بين الأجهزة فقط",
        "بروتوكول يُستخدم لتحويل أسماء النطاقات إلى عناوين IP فقط",
        "بروتوكول يُستخدم لإرسال رسائل البريد الإلكتروني بين الخوادم"
    ],
		correctAnswer: 0
	},	
    {
        question: "ما هي الطبقة المسؤولة عن نقل البيانات بين الأجهزة المتصلة في الشبكة؟",
        answers: [
            "طبقة التطبيقات (Application Layer)",
            "طبقة النقل (Transport Layer)",
            "طبقة الوصل (Link Layer)",
            "طبقة الإنترنت (Internet Layer)"
        ],
        correctAnswer: 2
    },
    {
        question: "أي طبقة تتعامل مع نقل البيانات عبر الشبكات المختلفة وتحديد المسار؟",
        answers: [
            "طبقة التطبيقات (Application Layer)",
            "طبقة النقل (Transport Layer)",
            "طبقة الإنترنت (Internet Layer)",
            "طبقة الوصل (Link Layer)"
        ],
        correctAnswer: 2
    },
    {
        question: "ما هي الطبقة التي تتعامل مع التطبيقات مثل HTTP وFTP؟",
        answers: [
            "طبقة النقل (Transport Layer)",
            "طبقة الوصل (Link Layer)",
            "طبقة التطبيقات (Application Layer)",
            "طبقة الإنترنت (Internet Layer)"
        ],
        correctAnswer: 2
    },
    {
        question: "أي طبقة تُستخدم لضمان تسليم البيانات بشكل صحيح وتقسيمها إلى أجزاء صغيرة؟",
        answers: [
            "طبقة الوصل (Link Layer)",
            "طبقة التطبيقات (Application Layer)",
            "طبقة النقل (Transport Layer)",
            "طبقة الإنترنت (Internet Layer)"
        ],
        correctAnswer: 2
    },
	{
		question: "ما هي التهديدات الأمنية التي قد تؤثر على الشبكات؟",
		answers: [
        "سوء التصميم، وسوء الاستخدام، والتهديد الخارجي، والبرمجيات الضارة، وانتهاك الخصوصية",
        "ضعف الاتصال بالإنترنت فقط",
        "عدم وجود أجهزة توجيه كافية",
        "قلة عدد الأجهزة المتصلة بالشبكة"
		],
		correctAnswer: 0
	},
	{
		question: "ما المقصود بالتهديد الخارجي على الشبكات؟",
		answers: [
        "محاولات اختراق الشبكة من خارج المؤسسة للوصول إلى البيانات أو التسبب بأضرار",
        "استخدام غير صحيح للأجهزة المتصلة بالشبكة من قِبَل الأفراد",
        "تصميم غير آمن للشبكة يؤدي إلى سهولة اختراقها",
        "الانتشار غير المصرح به للبرمجيات الضارة بين الأجهزة"
		],
		correctAnswer: 0
	},
	{
		question: "ما أهمية تأمين الشبكات المنزلية؟",
		answers: [
        "لزيادة سرعة الإنترنت",
        "لحماية الأجهزة المنزلية من التهديدات الأمنية",
        "لتوفير مساحات تخزين إضافية",
        "لتقليل تكلفة الاشتراك في خدمة الإنترنت"
		],
		correctAnswer: 1
	},
	
	{
    question: "ما الهدف من استخدام التشفير في الشبكات؟",
    answers: [
        "زيادة سرعة نقل البيانات",
        "حماية البيانات المرسلة من الاطلاع غير المصرح به",
        "تقليل حجم البيانات المرسلة",
        "تغيير عنوان IP الخاص بالجهاز المرسل"
    ],
    correctAnswer: 1
	},

	{
    question: "ما هي العملية التي يتم من خلالها تحويل البيانات إلى رموز غير قابلة للقراءة؟",
    answers: [
        "التشفير",
        "ضغط البيانات",
        "التجزئة",
        "التكرار"
    ],
    correctAnswer: 0
	},

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
