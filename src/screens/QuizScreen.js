import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import FinalScore from "./FinalScore";

const questionsData = [
  {
    question: "ما هي عاصمة كندا؟",
    options: ["تورنتو", "فانكوفر", "أوتاوا", "مونتريال"],
    correctAnswer: "أوتاوا",
  },
  {
    question: "من هو مؤلف كتاب 'الخليفة الراشد'؟",
    options: [
      "ابن خلدون",
      "أحمد شوقي",
      "أبو بكر الرازي",
      "عبد الرحمن الكواكبي",
    ],
    correctAnswer: "ابن خلدون",
  },
  {
    question: "ما هو العنصر الكيميائي الذي يرمز له بالرمز Hg؟",
    options: ["الزئبق", "الحديد", "الذهب", "الفضة"],
    correctAnswer: "الزئبق",
  },
  {
    question: "ما هي أكبر قارة في العالم؟",
    options: ["أفريقيا", "آسيا", "أمريكا الشمالية", "أوروبا"],
    correctAnswer: "آسيا",
  },
  {
    question: "ما هو اسم المركبة التي أرسلتها وكالة ناسا لاستكشاف المريخ؟",
    options: ["فوياجر", "كاسيني", "كيوريوسيتي", "سبايس إكس"],
    correctAnswer: "كيوريوسيتي",
  },
  {
    question: "ما هو عدد أسنان البالغ الطبيعي؟",
    options: ["28", "30", "32", "34"],
    correctAnswer: "32",
  },
  {
    question: "من هي أول امرأة حصلت على جائزة نوبل في الليتراتور؟",
    options: ["جوستافا ماير", "سيلما لاغيرلوف", "سوزان والد", "سيلفيا بلاث"],
    correctAnswer: "سيلما لاغيرلوف",
  },
  {
    question: "ما هو اسم أطول نهر في العالم؟",
    options: ["النيل", "الأمازون", "المسيسيبي", "اليانغتسي"],
    correctAnswer: "الأمازون",
  },

  {
    question: "ما هي عاصمة العراق",
    options: ["لندن", "برلين", "بغداد", "مدريد"],
    correctAnswer: "بغداد",
  },
  {
    question: "ما هي عاصمة الصين؟",
    options: ["المريخ", "الزهرة", "المشتري", "زحل"],
    correctAnswer: "المشتري",
  },
  {
    question: "ما هي عاصمة البرازيل؟",
    options: ["برازيليا", "ريو دي جانيرو", "ساو باولو", "بوينس آيرس"],
    correctAnswer: "برازيليا",
  },
  // {
  //   question: "ما هي عاصمة فرنسا؟",
  //   options: ["لندن", "برلين", "باريس", "مدريد"],
  //   correctAnswer: "باريس",
  // },
  // {
  //   question: "ما هي عاصمة ألمانيا؟",
  //   options: ["لندن", "برلين", "باريس", "مدريد"],
  //   correctAnswer: "برلين",
  // },
  // {
  //   question: "ما هي عاصمة إيطاليا؟",
  //   options: ["روما", "ميلان", "فلورنسا", "نابولي"],
  //   correctAnswer: "روما",
  // },
  // {
  //   question: "من هو أول إنسان وقع على سطح القمر؟",
  //   options: ["نيل أرمسترونغ", "باز ألدرين", "جون جلين", "يوري غاجارين"],
  //   correctAnswer: "نيل أرمسترونغ",
  // },
  // {
  //   question: "من هو مؤلف كتاب 'حكاية الحضارة'؟",
  //   options: ["ويل ديورانت", "دان براون", "جورج أورويل", "آرثر كلارك"],
  //   correctAnswer: "ويل ديورانت",
  // },
  // {
  //   question: "ما هي اللغة الرسمية في البرازيل؟",
  //   options: ["البرتغالية", "الإسبانية", "الإنجليزية", "الفرنسية"],
  //   correctAnswer: "البرتغالية",
  // },
  // {
  //   question: "ما هو اسم أعلى قمة جبلية في العالم؟",
  //   options: ["إفرست", "كيليمنجارو", "ماكينلي", "أكونكاجوا"],
  //   correctAnswer: "إفرست",
  // },
  // {
  //   question: "من هو مؤلف رواية 'مائة عام من العزلة'؟",
  //   options: [
  //     "غابرييل غارسيا ماركيز",
  //     "ألبرت كاموس",
  //     "فرانتس كافكا",
  //     "إرنست همنغواي",
  //   ],
  //   correctAnswer: "غابرييل غارسيا ماركيز",
  // },
  // {
  //   question: "من هو أول رئيس لروسيا بعد تفكك الاتحاد السوفييتي؟",
  //   options: [
  //     "بوريس يلتسين",
  //     "فلاديمير بوتين",
  //     "ميخائيل غورباتشوف",
  //     "دميتري ميدفيديف",
  //   ],
  //   correctAnswer: "بوريس يلتسين",
  // },
  // {
  //   question: "ما هي الدولة التي يسميها سكانها 'البلد الأم الأصلي'؟",
  //   options: ["أستراليا", "نيوزيلندا", "كندا", "الولايات المتحدة الأمريكية"],
  //   correctAnswer: "نيوزيلندا",
  // },
  // {
  //   question: "من هو مؤلف كتاب 'حرب وسلام'؟",
  //   options: [
  //     "ليو تولستوي",
  //     "فيودور دوستويفسكي",
  //     "ألكسندر بوشكين",
  //     "أنطون تشيخوف",
  //   ],
  //   correctAnswer: "ليو تولستوي",
  // },

  // {
  //   question: "ما هي عاصمة الهند؟",
  //   options: ["نيودلهي", "مومباي", "كولكاتا", "بنغالور"],
  //   correctAnswer: "نيودلهي",
  // },
  // {
  //   question: "ما هي عاصمة الولايات المتحدة الأمريكية؟",
  //   options: ["نيويورك", "واشنطن العاصمة", "لوس أنجلوس", "شيكاغو"],
  //   correctAnswer: "واشنطن العاصمة",
  // },
  // {
  //   question: "ما هو اسم أكبر نهر في العالم؟",
  //   options: ["النيل", "الأمازون", "المسيسيبي", "اليانغتسي"],
  //   correctAnswer: "الأمازون",
  // },
  // {
  //   question: "من هو مؤسس شركة مايكروسوفت؟",
  //   options: ["بيل غيتس", "ستيف جوبز", "مارك زوكربيرج", "لاري بيج"],
  //   correctAnswer: "بيل غيتس",
  // },
  // {
  //   question: "من هو أول رئيس لجنوب أفريقيا بعد نهاية نظام الفصل العنصري؟",
  //   options: [
  //     "نيلسون مانديلا",
  //     "ثابو مبيكي",
  //     "فريديك دي كليرك",
  //     "كريستيان دي كليرك",
  //   ],
  //   correctAnswer: "نيلسون مانديلا",
  // },
  // {
  //   question: "ما هو عدد كواكب المجموعة الشمسية؟",
  //   options: ["8", "9", "7", "10"],
  //   correctAnswer: "8",
  // },
  // {
  //   question: "ما هو العنصر الكيميائي الذي يرمز له بالرمز Fe؟",
  //   options: ["الحديد", "الزئبق", "الذهب", "الفضة"],
  //   correctAnswer: "الحديد",
  // },
  // {
  //   question: "ما هي عاصمة إسبانيا؟",
  //   options: ["مدريد", "برشلونة", "فالنسيا", "سيفيا"],
  //   correctAnswer: "مدريد",
  // },
  // {
  //   question: "ما هو القارة التي تحتوي على أكبر عدد من الدول؟",
  //   options: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الشمالية"],
  //   correctAnswer: "آسيا",
  // },
  // {
  //   question: "من هو مؤلف كتاب 'العالم الجديد'؟",
  //   options: ["آلدوس هكسلي", "جورج أورويل", "ألبرت كاموس", "هربرت ويلز"],
  //   correctAnswer: "آلدوس هكسلي",
  // },
  // {
  //   question: "من هي أول امرأة فازت بجائزة نوبل للسلام؟",
  //   options: ["ماري كوري", "مادلين أولبرايت", "جيني أوشفيتز", "ميريل ستريب"],
  //   correctAnswer: "مادلين أولبرايت",
  // },

  // {
  //   question: "ما هي عاصمة اليابان؟",
  //   options: ["طوكيو", "أوساكا", "كيوتو", "ناغويا"],
  //   correctAnswer: "طوكيو",
  // },
];

const QuizScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [uncurrect, setuncurrect] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timerAnimation] = useState(new Animated.Value(0));
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);

  useEffect(() => {
    // Shuffle the questionsData array and select the first 10 elements
    const shuffledQuestions = shuffleArray(questionsData).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  useEffect(() => {
    let interval;
    if (!showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            handleAnswer("timeout");
            return 60;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentQuestionIndex, showScore]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleAnswer = (selectedAnswer) => {
    clearInterval(timer);
    setShowCorrectAnswer(false);
    setShowWrongAnswer(false);

    if (selectedAnswer === "timeout") {
      // Timeout, move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(60);
      return;
    }

    const currentQuestion = questionsData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      // Correct answer animation
      setShowCorrectAnswer(true);
      setShowWrongAnswer(true);
    } else {
      setShowCorrectAnswer(true);
      setuncurrect(uncurrect + 1);

      // Wrong answer animation
      setShowWrongAnswer(true);
    }

    // Move to the next question after 1 second delay
    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questionsData.length) {
        setShowCorrectAnswer(false);
        setShowWrongAnswer(false);
        setCurrentQuestionIndex(nextQuestionIndex);
        setTimer(60);
      } else {
        setShowCorrectAnswer(false);
        setShowWrongAnswer(false);

        setShowScore(true);
      }
    }, 300);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setTimer(60);
  };
  const restart = () => {
    setShowScore(false);
  };
  return (
    <View>
      {showScore ? (
        <FinalScore
          navigation={navigation}
          score={score}
          currentQuestionIndex={currentQuestionIndex}
          uncurrect={uncurrect}
          restart={resetQuiz}
        ></FinalScore>
      ) : (
        // <View className="mt-20">
        //   <Text>
        //     Your Score: {score} / {questionsData.length}
        //   </Text>
        //   <TouchableOpacity onPress={resetQuiz}>
        //     <Text>Try Again</Text>
        //   </TouchableOpacity>
        // </View>
        <View className="h-full">
          <View className="h-1/3 w-full bg-[#A05AD7] flex justify-center items-center rounded-b-3xl relative">
            <View className="bg-white absolute -right-40 bottom-3 w-52 h-52 opacity-10 rounded-full"></View>
            <View className="bg-white absolute -left-12 top-3 w-32 h-32 opacity-10 rounded-full"></View>
            <View className="bg-white absolute right-12 top-12 w-12 h-12 opacity-10 rounded-full"></View>
            <View className="bg-white absolute  -bottom-28 w-[90%] h-52 rounded-lg flex justify-center items-center ">
              <View className="h-24 w-24 absolute -top-12  bg-white shadow-xl  justify-center items-center rounded-full">
                <Text className="text-xl font-bold">{timer}</Text>
              </View>
              <View className="flex flex-col justify-center items-center  ">
                <Text className="text-md text-purple-700">
                  السؤال رقم {currentQuestionIndex + 1}
                </Text>

                <Text className="text-lg font-bold mt-6">
                  {questionsData[currentQuestionIndex].question}
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center justify-center h-2/3">
            <View></View>
            {questionsData[currentQuestionIndex].options.map(
              (option, index) => (
                <TouchableOpacity
                  className={` ${
                    showCorrectAnswer &&
                    option === questionsData[currentQuestionIndex].correctAnswer
                      ? "bg-green-200 border-green-200"
                      : showWrongAnswer &&
                        option !==
                          questionsData[currentQuestionIndex].correctAnswer
                      ? "bg-red-200 border-red-200"
                      : "bg-white"
                  } px-5 py-4 w-2/3 text-center flex justify-center items-center border-gray-300 my-2 rounded-lg  border `}
                  key={index}
                  onPress={() => handleAnswer(option)}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default QuizScreen;
