export interface CommitteeItem {
  id: number;
  nameMr: string;
  nameEn: string;
  categoryMr: string;
  categoryEn: string;
}

// All 78 Committees exactly as enumerated in PDF Pages 7, 8, 9
export const all78Committees: CommitteeItem[] = [
  { id: 1, nameMr: "मंत्रालय कामकाज समिती", nameEn: "Ministry Affairs Committee", categoryMr: "प्रशासन", categoryEn: "Administration" },
  { id: 2, nameMr: "पोलीस विकास समिती", nameEn: "Police Welfare Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" },
  { id: 3, nameMr: "महिला अन्याय अत्याचार निर्मूलन समिती", nameEn: "Women Anti-Atrocities & Justice Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 4, nameMr: "न्यूज पेपर एजन्सी विकास समिती", nameEn: "Newspaper Agency Development Committee", categoryMr: "मीडिया", categoryEn: "Media" },
  { id: 5, nameMr: "ग्राहक संरक्षण विकास समिती", nameEn: "Consumer Protection Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 6, nameMr: "आरोग्य कर्मचारी विकास समिती", nameEn: "Healthcare Workers Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 7, nameMr: "क्रीडा विकास समिती", nameEn: "Sports Development Committee", categoryMr: "क्रीडा", categoryEn: "Sports" },
  { id: 8, nameMr: "शिक्षक वर्ग विकास समिती", nameEn: "Teachers Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 9, nameMr: "प्राध्यापक वर्ग विकास समिती", nameEn: "Professors Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 10, nameMr: "महिला बचत गट उद्योग विकास समिती", nameEn: "Women Self-Help Groups (SHG) Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 11, nameMr: "एस.टी. कर्मचारी विकास समिती", nameEn: "MSRTC State Transport Workers Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 12, nameMr: "व्यापारी विकास समिती", nameEn: "Traders & Merchants Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 13, nameMr: "शेतकरी विकास समिती", nameEn: "Farmers Welfare Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 14, nameMr: "बँक विकास समिती", nameEn: "Banking Sector Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 15, nameMr: "कार, ट्रक ड्रायव्हर विकास समिती", nameEn: "Car & Truck Drivers Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 16, nameMr: "नॅशनल व राज्य रस्ते विकास समिती", nameEn: "National & State Highways Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 17, nameMr: "गुत्तेदार विकास समिती", nameEn: "Contractors Welfare Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 18, nameMr: "इंग्लिश स्कूल विकास समिती", nameEn: "English Medium Schools Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 19, nameMr: "रिक्षा चालक, मालक विकास समिती", nameEn: "Auto Rickshaw Drivers & Owners Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 20, nameMr: "प्रवासी विकास समिती", nameEn: "Commuters & Passengers Welfare Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 21, nameMr: "पर्यटन विकास समिती", nameEn: "Tourism Development Committee", categoryMr: "पर्यटन", categoryEn: "Tourism" },
  { id: 22, nameMr: "पाणी पुरवठा विकास समिती", nameEn: "Water Supply Welfare Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 23, nameMr: "डॉक्टर विकास समिती", nameEn: "Doctors & Medical Practitioners Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 24, nameMr: "आयुर्वेदिक विकास समिती", nameEn: "Ayurveda Development Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 25, nameMr: "विद्यार्थी विकास समिती", nameEn: "Students Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 26, nameMr: "टी.व्ही., यूट्यूब चॅनेल विकास समिती", nameEn: "TV & YouTube News Channels Committee", categoryMr: "मीडिया", categoryEn: "Media" },
  { id: 27, nameMr: "ऊर्जा विकास समिती", nameEn: "Energy & Power Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 28, nameMr: "प्रशासन विभाग विकास समिती", nameEn: "Administrative Affairs Committee", categoryMr: "प्रशासन", categoryEn: "Administration" },
  { id: 29, nameMr: "राजकारण विकास समिती", nameEn: "Political Analysis & Civic Affairs Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 30, nameMr: "सामाजिक कार्य विकास समिती", nameEn: "Social Work & Philanthropy Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 31, nameMr: "शेती पूरक जोड धंदे विकास समिती", nameEn: "Agro-Allied Businesses Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 32, nameMr: "शेती आधारित प्रक्रिया उद्योग विकास समिती", nameEn: "Agro-Processing Industries Committee", categoryMr: "कृषी", categoryEn: "Agriculture" },
  { id: 33, nameMr: "व्यसनमुक्ती विकास समिती", nameEn: "De-Addiction & Rehab Welfare Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 34, nameMr: "उद्योग विकास समिती", nameEn: "Industries & MSME Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 35, nameMr: "जिल्हा कोर कमिटी", nameEn: "District Core Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 36, nameMr: "विभागीय कार्यकारणी विकास समिती", nameEn: "Divisional Executive Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 37, nameMr: "तंटा मुक्ती विकास समिती", nameEn: "Dispute-Free Village & Harmony Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" },
  { id: 38, nameMr: "समाजकल्याण विकास समिती", nameEn: "Social Welfare Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 39, nameMr: "सरपंच, ग्रामपंचायत विकास समिती", nameEn: "Sarpanch & Gram Panchayat Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 40, nameMr: "जिल्हा परिषद विकास समिती", nameEn: "Zilla Parishad Affairs Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 41, nameMr: "पंचायत राज विकास समिती", nameEn: "Panchayati Raj Empowerment Committee", categoryMr: "स्थानिक स्वराज्य", categoryEn: "Local Governance" },
  { id: 42, nameMr: "दारू बंदी विकास समिती", nameEn: "Liquor Prohibition & Awareness Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 43, nameMr: "वजन मापे विकास समिती", nameEn: "Weights & Measures Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 44, nameMr: "वसतिगृह विकास समिती", nameEn: "Hostels Welfare Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 45, nameMr: "महिला व बाल कल्याण विकास समिती", nameEn: "Women & Child Welfare Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 46, nameMr: "बालवाडी, अंगणवाडी विकास समिती", nameEn: "Anganwadi & Balwadi Workers Committee", categoryMr: "महिला व बालक", categoryEn: "Women & Child" },
  { id: 47, nameMr: "नर्सेस व ब्रदर्स विकास समिती", nameEn: "Nursing Staff & Healthcare Workers Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 48, nameMr: "शिक्षण विकास समिती", nameEn: "Education Reforms Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 49, nameMr: "नागरी समस्या विकास समिती", nameEn: "Civic Issues & Urban Affairs Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 50, nameMr: "अतिक्रमण धारक विकास समिती", nameEn: "Encroachment & Rehabilitation Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 51, nameMr: "कामगार कल्याण विकास समिती", nameEn: "Labor Welfare Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 52, nameMr: "एन.जी.ओ. विकास समिती", nameEn: "NGOs Coordination Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 53, nameMr: "अस्वच्छ कामगार विकास समिती", nameEn: "Sanitation Workers Welfare Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 54, nameMr: "पाणी विकास समिती", nameEn: "Water Resources & Irrigation Committee", categoryMr: "पायाभूत सुविधा", categoryEn: "Infrastructure" },
  { id: 55, nameMr: "विभागीय विकास समिती", nameEn: "Divisional Regional Development Committee", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 56, nameMr: "अर्थ नियोजन विकास समिती", nameEn: "Financial Planning & Economic Welfare Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 57, nameMr: "सी.एस.आर. फंड विकास समिती", nameEn: "CSR Funds Utilization Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 58, nameMr: "लोकशाही पत्रकार कार्यक्रम समिती, मुंबई", nameEn: "Lokshahi Events Committee, Mumbai", categoryMr: "संघटना", categoryEn: "Organisation" },
  { id: 59, nameMr: "महाराष्ट्र सरकारी कर्मचारी समिती", nameEn: "Maharashtra Government Employees Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 60, nameMr: "मराठी, हिंदी कलाकार विकास समिती", nameEn: "Marathi & Hindi Artists Committee", categoryMr: "कला व संस्कृती", categoryEn: "Art & Culture" },
  { id: 61, nameMr: "रिक्षा, टॅक्सी चालक मालक विकास समिती", nameEn: "Taxi & Cab Operators Committee", categoryMr: "वाहतूक", categoryEn: "Transport" },
  { id: 62, nameMr: "तृतीय पंथी विकास समिती", nameEn: "Transgender Community Rights Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 63, nameMr: "पशु, पक्षी, प्राणी विकास समिती", nameEn: "Animal Welfare & Veterinary Committee", categoryMr: "पर्यावरण", categoryEn: "Environment" },
  { id: 64, nameMr: "एस.टी. महामंडळ कर्मचारी विकास समिती", nameEn: "State Road Transport Corporation Committee", categoryMr: "कामगार", categoryEn: "Labor" },
  { id: 65, nameMr: "हॉटेल अँड बार विकास समिती", nameEn: "Hospitality & Restaurant Committee", categoryMr: "व्यापार", categoryEn: "Commerce" },
  { id: 66, nameMr: "शालेय शिक्षण विकास समिती", nameEn: "Primary School Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 67, nameMr: "माध्यमिक शिक्षण विकास समिती", nameEn: "Secondary Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 68, nameMr: "उच्च शिक्षण विकास समिती", nameEn: "Higher Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 69, nameMr: "कनिष्ठ महाविद्यालय विकास समिती", nameEn: "Junior College Affairs Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 70, nameMr: "तांत्रिक व व्यावसायिक शिक्षण विकास समिती", nameEn: "Technical & Vocational Education Committee", categoryMr: "शिक्षण", categoryEn: "Education" },
  { id: 71, nameMr: "सहकार क्षेत्र विकास समिती", nameEn: "Cooperative Sector Committee", categoryMr: "अर्थ", categoryEn: "Finance" },
  { id: 72, nameMr: "अन्न व औषध प्रशासन विकास समिती", nameEn: "Food & Drug Administration Committee", categoryMr: "आरोग्य", categoryEn: "Health" },
  { id: 73, nameMr: "पर्यावरण संरक्षण विकास समिती", nameEn: "Environmental Conservation Committee", categoryMr: "पर्यावरण", categoryEn: "Environment" },
  { id: 74, nameMr: "माहिती तंत्रज्ञान (IT) विकास समिती", nameEn: "Information Technology (IT) Committee", categoryMr: "तंत्रज्ञान", categoryEn: "Technology" },
  { id: 75, nameMr: "युवा व क्रीडा प्रबोधन विकास समिती", nameEn: "Youth & Sports Empowerment Committee", categoryMr: "क्रीडा", categoryEn: "Sports" },
  { id: 76, nameMr: "दिव्यांग कल्याण विकास समिती", nameEn: "Divyang & Special Needs Welfare Committee", categoryMr: "सामाजिक", categoryEn: "Social" },
  { id: 77, nameMr: "गृहनिर्माण व सोसायटी विकास समिती", nameEn: "Housing Societies Welfare Committee", categoryMr: "जनहित", categoryEn: "Public Interest" },
  { id: 78, nameMr: "कायदा व सुव्यवस्था विकास समिती", nameEn: "Law & Order Assistance Committee", categoryMr: "कायदा व सुरक्षा", categoryEn: "Law & Security" }
];

// Leadership designations strictly as per PDF Pages 15 & 16:
// Photo + Name + Designation + State + Short Profile
export const leadershipMembers = [
  {
    roleMr: "राष्ट्रीय कार्याध्यक्ष",
    roleEn: "National Working President",
    nameMr: "मा. प्रतापराव साळूंखे",
    nameEn: "Hon. Prataprao Salunkhe",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "मा. प्रतापराव साळूंखे हे लोकशाही पत्रकार महासंघ भारताचे राष्ट्रीय कार्याध्यक्ष असून, पत्रकारिता, उद्योग आणि सामाजिक क्षेत्रातील प्रतिष्ठित व्यक्तिमत्त्व आहेत. ते सुपर महाराष्ट्र न्यूजचे संपादक असून, स्वतःच्या वर्तमानपत्राच्या माध्यमातूनही पत्रकारितेचे कार्य करतात. महाराष्ट्रातील ख्यातनाम उद्योजक म्हणून त्यांनी उद्योगासोबतच सामाजिक क्षेत्रात उल्लेखनीय योगदान दिले आहे. शोषित, वंचित आणि पीडित घटकांच्या प्रश्नांना वाचा फोडत, शासन-प्रशासन आणि सामान्य जनता यांच्यात दुवा म्हणून ते कार्य करतात. महाराष्ट्रासह संपूर्ण भारतभर विस्तारलेले त्यांचे कार्य पत्रकारितेची बांधिलकी, सामाजिक न्याय आणि जनहिताप्रती असलेली निष्ठा अधोरेखित करते.",
    profileEn: "A respected journalist, entrepreneur, and social worker serving as National Working President, editor of Super Maharashtra News, and a bridge between citizens and public administration."
  },
  {
    roleMr: "राष्ट्रीय कायदेशीर सल्लागार",
    roleEn: "National Legal Advisor",
    nameMr: "ॲड. रमकांत पाटील",
    nameEn: "Adv. Ramakant Patil",
    stateMr: "नवी मुंबई / भारत",
    stateEn: "Navi Mumbai / India",
    profileMr: "ॲड. रमकांत पाटील हे गेल्या १२ वर्षांपासून वकिली क्षेत्रात कार्यरत असलेले अनुभवी विधिज्ञ आणि कायद्याचे सखोल अभ्यासक आहेत. मुंबई उच्च न्यायालयासह सर्वोच्च न्यायालय, जिल्हा न्यायालये तसेच विविध कनिष्ठ न्यायालयांमध्ये कायदेशीर प्रकरणांवर काम करण्याचा त्यांना अनुभव आहे. फौजदारी कायदा, महसुली प्रशासन आणि विविध कायदेशीर बाबींमध्ये ते पक्षकारांना मार्गदर्शन करतात. सर्वसामान्य नागरिकांना न्याय मिळवून देण्याची बांधिलकी जपत त्यांनी पत्रकार आणि सामाजिक संघटनांसोबतही कार्य केले आहे. त्यांचे कार्यक्षेत्र संपूर्ण भारतभर विस्तारलेले आहे.",
    profileEn: "An experienced advocate with 12 years of practice across the Supreme Court, Bombay High Court, district courts, and subordinate courts, advising on criminal law, revenue administration, and public legal matters."
  },
  {
    roleMr: "राष्ट्रीय महामंत्री",
    roleEn: "National General Secretary",
    nameMr: "टी. माधव",
    nameEn: "T. Madhav",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "पत्रकारिता, मंत्रालयीन अनुभव, प्रशासकीय समन्वय आणि जनसंपर्काचा अनुभव असलेले टी. माधव यांनी कायदा व पत्रकारितेचे शिक्षण घेतल्यानंतर नामांकित वर्तमानपत्रांमध्ये लिखाण केले आहे. दिल्ली येथे केंद्र सरकारच्या विविध विभागांत व समित्यांमध्ये समन्वयक म्हणून त्यांनी काम केले. परकीय गुंतवणूक भारतात आणणे, रोजगारनिर्मिती आणि स्वयंसेवी संस्थांच्या माध्यमातून जनहिताचे काम यांत त्यांनी महत्त्वपूर्ण भूमिका बजावली आहे. नागरिक आणि प्रशासकीय यंत्रणा यांच्यात समन्वय साधणे हे त्यांच्या कार्याचे महत्त्वाचे वैशिष्ट्य आहे.",
    profileEn: "A journalist and public affairs professional with experience in central ministries, administrative coordination, foreign investment facilitation, employment initiatives, and citizen-government liaison."
  },
  {
    roleMr: "सामाजिक व राजकीय कार्यकर्ते",
    roleEn: "Social & Political Worker",
    nameMr: "डॉ. अनिल दिलीप पाटील",
    nameEn: "Dr. Anil Dilip Patil",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "डॉ. अनिल दिलीप पाटील हे पत्रकार, उद्योजक तसेच सामाजिक व राजकीय कार्यकर्ते आहेत. गेल्या एक वर्षापासून ते जनहिताचे प्रश्न, सामाजिक विषय आणि नागरिकांच्या समस्या मांडत आहेत. Saitech Group च्या माध्यमातून उद्योग व व्यवसाय क्षेत्रात कार्यरत असून, सामाजिक प्रश्नांबाबत जनजागृती, जनसंपर्क आणि समाजहिताच्या उपक्रमांमध्ये ते सक्रिय सहभाग घेतात. पत्रकारिता, उद्योग आणि सामाजिक क्षेत्रातील व्यक्तींशी संपर्क व समन्वय साधून ते सार्वजनिक जीवनात योगदान देत आहेत.",
    profileEn: "A journalist, entrepreneur, and social and political worker focused on public-interest issues, civic awareness, business through Saitech Group, and community coordination."
  },
  {
    roleMr: "महाराष्ट्र प्रदेश अध्यक्ष",
    roleEn: "Maharashtra State President",
    nameMr: "मा. श्री. किशोर दादा पवार",
    nameEn: "Hon. Shri Kishor Dada Pawar",
    stateMr: "महाराष्ट्र",
    stateEn: "Maharashtra",
    profileMr: "गेल्या ६–७ वर्षांपासून पत्रकारितेत सक्रिय असलेले किशोर दादा पवार जनहिताचे प्रश्न, सामाजिक समस्या, प्रशासन आणि ग्रामीण भागातील प्रश्न प्रभावीपणे मांडतात. महाराष्ट्र प्रदेश अध्यक्ष म्हणून ते पत्रकारांना संघटित करणे, त्यांच्या हक्कांसाठी व्यासपीठ निर्माण करणे आणि संघटनेची सक्षम बांधणी करण्यासाठी प्रयत्नशील आहेत. Seva Social Welfare Global Foundation चे संस्थापक-अध्यक्ष म्हणून आरोग्य, शिक्षण, महिला सक्षमीकरण, रोजगारनिर्मिती आणि युवक विकासाच्या उपक्रमांना ते प्राधान्य देतात.",
    profileEn: "A journalist and organisational leader with 6–7 years of experience, serving as Maharashtra State President and Founder-President of Seva Social Welfare Global Foundation."
  },
  {
    roleMr: "राष्ट्रीय संघटन मंत्री",
    roleEn: "National Organising Minister",
    nameMr: "ज्ञानेश्वर बुधवत",
    nameEn: "Dnyaneshwar Budhwat",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "ज्ञानेश्वर बुधवत हे दैनिक लोकनेता या वर्तमानपत्राचे मुख्य संपादक असून, निर्भीड पत्रकारिता, सामाजिक बांधिलकी आणि जनहिताच्या प्रश्नांवरील परखड लेखणीसाठी ओळखले जातात. त्यांनी शोषित, वंचित आणि पीडित घटकांसह मराठवाडा व विदर्भातील शेतकऱ्यांच्या समस्या, हक्क आणि संघर्षांना प्रभावी व्यासपीठ मिळवून दिले आहे. विविध पत्रकार संघटनांतील अनुभव, सामाजिक चळवळीतील सहभाग आणि अभ्यासपूर्ण लेखनाच्या बळावर ते राष्ट्रीय स्तरावर संघटन बळकटीकरण, पत्रकारांच्या हक्कांचे संरक्षण आणि निर्भीड पत्रकारितेच्या संवर्धनासाठी कार्यरत आहेत.",
    profileEn: "Editor-in-chief of Dainik Lokneta, known for fearless journalism, farmer-focused reporting, social commitment, and strengthening journalists' rights and organisation nationwide."
  },
  {
    roleMr: "महाराष्ट्र प्रदेश कार्याध्यक्ष",
    roleEn: "Maharashtra State Working President",
    nameMr: "श्री. सनम पाटील",
    nameEn: "Shri Sanam Patil",
    stateMr: "मुंबई व नवी मुंबई / महाराष्ट्र",
    stateEn: "Mumbai & Navi Mumbai / Maharashtra",
    profileMr: "श्री. सनम पाटील हे पत्रकारितेच्या क्षेत्रातील सक्रिय आणि सामाजिक बांधिलकी जपणारे व्यक्तिमत्त्व आहेत. नवी मुंबई क्राईम न्यूज, नवी मुंबई समाचार न्यूज तसेच विथ महाराष्ट्र यांसारख्या माध्यमसमूहांमध्ये त्यांनी काम केले आहे. प्रिंट आणि डिजिटल मीडियाच्या माध्यमातून जनतेचे प्रश्न मांडणे, अन्यायाविरुद्ध आवाज उठवणे आणि शोषित, पीडित व वंचित घटकांना न्याय मिळवून देण्यासाठी प्रयत्न करणे ही त्यांच्या पत्रकारितेची वैशिष्ट्ये आहेत. महाराष्ट्र प्रदेश कार्याध्यक्ष म्हणून ते पत्रकारांच्या हक्कांचे संरक्षण आणि संघटनात्मक बळकटीकरणासाठी कार्यरत आहेत.",
    profileEn: "An active print and digital journalist associated with multiple news groups, working for public issues, social justice, journalist rights, and organisational strengthening in Maharashtra."
  },
  {
    roleMr: "राष्ट्रीय सरचिटणीस",
    roleEn: "National General Secretary",
    nameMr: "हलीमा शेख",
    nameEn: "Halima Shaikh",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "हलीमा शेख गेल्या तीस वर्षांपासून सामाजिक कार्य, पत्रकारिता आणि जनसेवेच्या क्षेत्रात सक्रिय आहेत. स्वयंप्रेरणा विकास संस्थेच्या अध्यक्षा म्हणून त्यांनी महिला सक्षमीकरण, सामाजिक न्याय, शिक्षण, आरोग्य, जनजागृती आणि सामाजिक परिवर्तनासाठी उल्लेखनीय कार्य केले आहे. विविध प्रिंट मीडिया संस्थांमध्ये पत्रकार आणि उपसंपादक म्हणून त्यांनी जनतेचे प्रश्न निर्भीडपणे, संवेदनशीलतेने आणि वस्तुनिष्ठ पद्धतीने मांडले. अन्याय, भ्रष्टाचार, सामाजिक विषमता आणि प्रशासनातील त्रुटींविरोधात आवाज उठवत त्यांनी लोकशाही मूल्ये आणि जबाबदार सार्वजनिक संवाद यांना बळ दिले आहे.",
    profileEn: "A social worker, journalist, and public servant with 30 years of experience, advancing women’s empowerment, education, health, social justice, and responsible journalism."
  },
  {
    roleMr: "राष्ट्रीय उपाध्यक्ष",
    roleEn: "National Vice President",
    nameMr: "डॉ. संतोषकुमार आर. जयस्वाल",
    nameEn: "Dr. Santoshkumar R. Jaiswal",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "डॉ. संतोषकुमार आर. जयस्वाल हे निवृत्त न्यायाधीश, ज्येष्ठ विधिज्ञ, कायदेविषयक सल्लागार तसेच लवाद व मध्यस्थी तज्ज्ञ आहेत. त्यांनी मेट्रोपॉलिटन मॅजिस्ट्रेट, लघुवाद न्यायालयातील न्यायाधीश, दिवाणी न्यायाधीश आणि मुख्य न्यायदंडाधिकारी म्हणून विविध न्यायिक जबाबदाऱ्या सांभाळल्या आहेत. मुंबई पोर्ट ट्रस्टचे कायदेविषयक सल्लागार म्हणूनही त्यांनी काम केले आहे. बी.एस्सी., बी.जर्नॅलिझम, डी.फार्म., एलएल.एम. आणि पीएच.डी. (कायदा) या शैक्षणिक पात्रतेच्या बळावर ते कायदेविषयक मार्गदर्शन आणि नागरिकांमध्ये कायदेविषयक जागरूकता निर्माण करण्यासाठी कार्यरत आहेत.",
    profileEn: "A retired judge, senior advocate, legal advisor, and arbitration and mediation expert with extensive judicial experience and qualifications including LL.M. and Ph.D. in Law."
  },
  {
    roleMr: "पत्रकार व निवडणूक रणनीतिकार",
    roleEn: "Journalist & Election Strategist",
    nameMr: "श्री. संदिप जाधव",
    nameEn: "Shri Sandip Jadhav",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    profileMr: "श्री. संदिप जाधव हे पत्रकार, प्रभावी वक्ते, निवडणूक रणनीतिकार, राजकीय विश्लेषक आणि Hashtag Media Network चे संस्थापक आहेत. गेल्या ८ वर्षांहून अधिक काळ त्यांनी राज्य व देशपातळीवरील माध्यम समूहांमध्ये काम केले आहे. ग्राउंड रिपोर्टिंग, शोध पत्रकारिता, राजकीय विश्लेषण आणि जनहिताच्या विषयांची तथ्याधारित मांडणी ही त्यांची प्रमुख ताकद आहे. विविध राज्यांतील निवडणूक मोहिमा, राजकीय संवाद आणि कॅम्पेन मॅनेजमेंटमध्ये त्यांनी भूमिका बजावली असून, संविधान, लोकशाही, सामाजिक परिवर्तन आणि पत्रकारितेची जबाबदारी या विषयांवर ते मार्गदर्शन करतात.",
    profileEn: "A journalist, public speaker, political analyst, election strategist, and founder of Hashtag Media Network, known for ground reporting, campaign management, and fact-based public communication."
  }
];

// Future Roadmap 8 Phases strictly matching PDF Pages 11 & 12
export const futureRoadmapPhases = [
  {
    phase: "PHASE 01",
    titleMr: "संघटन विस्तार",
    titleEn: "Organisational Expansion",
    descMr: "भारताच्या विविध राज्यांमध्ये महासंघाचे संघटनात्मक जाळे मजबूत करणे.",
    descEn: "Strengthening the organisational network across various states of India."
  },
  {
    phase: "PHASE 02",
    titleMr: "Journalist Help Desk",
    titleEn: "Journalist Help Desk",
    descMr: "पत्रकारांच्या प्रश्नांसाठी राष्ट्रीय पातळीवर संपर्क व मार्गदर्शन व्यवस्था विकसित करणे.",
    descEn: "Developing a national-level contact and guidance mechanism for journalists' issues."
  },
  {
    phase: "PHASE 03",
    titleMr: "प्रशिक्षण व कौशल्य विकास",
    titleEn: "Training & Skill Development",
    descMr: "डिजिटल पत्रकारिता, सोशल मीडिया, तथ्य पडताळणी, सायबर सुरक्षा, कायदेशीर जागरूकता आणि आधुनिक पत्रकारितेसाठी प्रशिक्षण उपक्रम व पत्रकार कार्यशाळेचे आयोजन.सोबतच Meet the Press कार्यक्रम, पत्रकार सुरक्षा व हक्क संरक्षण अभियान, माध्यम संशोधन व अभ्यास प्रकल्प,मानवाधिकार जनजागृती उपक्रम,पर्यावरण संरक्षण मोहिमा,पत्रकारिता नैतिकता विषयक मार्गदर्शन,स्मरणिका, नियतकालिके आणि डिजिटल प्रकाशन,सामा���िक सेवा आणि जनहिताचे विशेष अभियान",
    descEn: "Training programs and journalist workshops on digital journalism, social media, fact checking, cyber security, legal awareness, Meet the Press events, and public interest initiatives."
  },
  {
    phase: "PHASE 04",
    titleMr: "पत्रकार हक्क अभियान",
    titleEn: "Journalist Rights Campaign",
    descMr: "पत्रकारांच्या न्याय्य हक्क आणि प्रश्नांसाठी राष्ट्रीय स्तरावर जनजागृती व संघटनात्मक अभियान.",
    descEn: "National awareness campaigns and advocacy drives for journalists' legitimate rights and issues."
  },
  {
    phase: "PHASE 05",
    titleMr: "सामाजिक जनहित अभियान",
    titleEn: "Public Welfare Initiative",
    descMr: "देशभरातील जनहिताचे प्रश्न संबंधित शासन-प्रशासनापर्यंत पोहोचवण्यासाठी सामाजिक उपक्रम.",
    descEn: "Social initiatives to bring public interest issues across the country to relevant government administrations."
  },
  {
    phase: "PHASE 06",
    titleMr: "Digital Journalist Network",
    titleEn: "Digital Journalist Network",
    descMr: "देशभरातील सदस्य पत्रकारांना जोडणारे डिजिटल नेटवर्क तयार करणे.",
    descEn: "Creating a digital network connecting member journalists across India."
  },
  {
    phase: "PHASE 07",
    titleMr: "National Media & Journalist Convention",
    titleEn: "National Media & Journalist Convention",
    descMr: "देशभरातील पत्रकारांना एका व्यासपीठावर आणण्यासाठी राष्ट्रीय स्तरावरील परिषद/अधिवेशन व देशव्यापी चर्चासत्रांचे आयोजन.",
    descEn: "Organizing national-level conventions and nationwide symposiums to bring journalists together on one platform."
  },
  {
    phase: "PHASE 08",
    titleMr: "Research & Documentation",
    titleEn: "Research & Documentation",
    descMr: "पत्रकारांचे प्रश्न, पत्रकारितेतील बदल आणि सामाजिक प्रश्नांवर अभ्यास व दस्तऐवजीकरण.",
    descEn: "Study and documentation of journalists' issues, media evolution, and social questions."
  }
];

// Event Cards specifications matching PDF Page 13:
// प्रत्येक Event Card मध्ये: कार्यक्रमाचे नाव, 📍 ठिकाण, 📅 दिनांक, 👥 आयोजक / समिती, 📝 कार्यक्रमाची माहिती, 📷 फोटो, 🎥 व्हिडिओ
export const sampleEvents = [
  {
    id: 1,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  },
  {
    id: 2,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  },
  {
    id: 3,
    titleMr: "कार्यक्रमाचे नाव",
    titleEn: "Event Name",
    placeMr: "ठिकाण",
    placeEn: "Location",
    dateMr: "दिनांक",
    dateEn: "Date",
    organizerMr: "आयोजक / समिती",
    organizerEn: "Organizer / Committee",
    descMr: "कार्यक्रमाची माहिती",
    descEn: "Program Details"
  }
];
