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

// Leadership Team - Official executive council & leadership members
// (No individual numbering displayed as per user specifications)
import type { LeadershipMember } from '../types';

export const leadershipMembers: LeadershipMember[] = [
  {
    id: "sandip-jadhav",
    roleMr: "राष्ट्रीय अध्यक्ष",
    roleEn: "National President",
    nameMr: "श्री. संदिप जाधव",
    nameEn: "Shri Sandip Jadhav",
    image: "/rot.png",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    subtitleMr: "पत्रकार | प्रभावी वक्ते | निवडणूक रणनीतिकार | राजकीय विश्लेषक | संस्थापक Hashtag Media Network",
    subtitleEn: "Journalist | Public Speaker | Election Strategist | Political Analyst | Founder, Hashtag Media Network",
    profileMr: "राष्ट्रीय धोरण व सर्वोच्च नेतृत्व — ८+ वर्षांहून अधिक काळ राज्य व राष्ट्रीय पत्रकारितेचा दांडगा अनुभव, शोध पत्रकारिता व देशव्यापी पत्रकारांच्या हक्कांचे संरक्षण.",
    profileEn: "Apex National Leadership — 8+ years extensive experience across state and national media houses, investigative journalism & defender of press freedom.",
    highlightsMr: [
      "Hashtag Media Network या अग्रगण्य मीडिया व कम्युनिकेशन कंपनीचे संस्थापक तथा व्यवस्थापकीय संचालक (Founder & MD)",
      "ग्राउंड रिपोर्टिंग, शोध पत्रकारिता, राजकीय विश्लेषण आणि जनहिताशी संबंधित विषयांवरील प्रभावी मांडणी",
      "देशातील प्रमुख सहा पत्रकार संघटनांमध्ये राज्य व राष्ट्रीय पातळीवर विविध नेतृत्वाच्या जबाबदाऱ्या",
      "दिल्ली, पश्चिम बंगाल, महाराष्ट्र, बिहार, गोवा निवडणूक मोहिमांमध्ये राजकीय रणनीती व कॅम्पेन मॅनेजमेंट",
      "संविधान, लोकशाही, महापुरुषांचे विचार आणि पत्रकारितेची जबाबदारी या विषयांवर सातत्याने प्रबोधन करणारे प्रभावी वक्ते"
    ],
    highlightsEn: [
      "Founder & Managing Director of Hashtag Media Network",
      "Specialist in ground investigative journalism, political analysis, and democratic advocacy",
      "Led key responsibilities across 6 major national and state journalist federations",
      "Election management and strategic campaigns across Delhi, West Bengal, Maharashtra, Bihar, and Goa",
      "Eminent public speaker on Constitutional values, democratic rights, and media accountability"
    ],
    fullBioMr: [
      "पत्रकार संदिप जाधव हे महाराष्ट्रातील तसेच राष्ट्रीय स्तरावर कार्यरत असलेले पत्रकार, प्रभावी वक्ते आणि निवडणूक रणनीतिकार आहेत. गेल्या ८ वर्षांहून अधिक काळ त्यांनी राज्य आणि देशपातळीवरील नामांकित माध्यम समूहांमध्ये काम केले आहे.",
      "पत्रकारिता, राजकीय संवाद, निवडणूक व्यवस्थापन आणि सामाजिक प्रश्नांवरील अभ्यासपूर्ण कार्यातून जाधव यांनी स्वतःची एक वेगळी ओळख निर्माण केली आहे. आज ते Hashtag Media Network या मीडिया आणि कम्युनिकेशन कंपनीचे संस्थापक तथा व्यवस्थापकीय संचालक (Founder & Managing Director) आहेत.",
      "ग्राउंड रिपोर्टिंग, शोध पत्रकारिता, राजकीय विश्लेषण आणि जनहिताशी संबंधित विषयांवरील प्रभावी मांडणी ही संदिप यांची प्रमुख ताकद आहे. सत्याधारित पत्रकारिता, निष्पक्ष दृष्टिकोन आणि लोकशाही मूल्यांप्रती असलेली बांधिलकी त्यांच्या कार्याचा केंद्रबिंदू आहे. गैरव्यवहार, प्रशासकीय त्रुटी, दुर्गम भागातील समस्या व नागरिकांच्या मूलभूत प्रश्नांना व्यापक स्तरावर मांडण्याचे काम त्यांनी सातत्याने केले आहे.",
      "देशातील प्रमुख सहा पत्रकार संघटनांमध्ये राज्य व राष्ट्रीय पातळीवर विविध नेतृत्वाच्या जबाबदाऱ्या सांभाळत पत्रकारांच्या न्याय्य हक्कांसाठी सातत्याने लढा दिला आहे. त्यांच्या नेतृत्वाखाली अनेक महत्त्वपूर्ण आंदोलने व उपक्रम राबविण्यात आले आहेत.",
      "पत्रकारितेबरोबरच निवडणूक व्यवस्थापन आणि राजकीय संवाद क्षेत्रात दिल्ली, पश्चिम बंगाल, महाराष्ट्र, बिहार, गोवा येथे राजकीय रणनीती व कॅम्पेन मॅनेजमेंटचे काम केले आहे. राज्यातील प्रमुख मंत्री व लोकप्रतिनिधींचे राजकीय सल्लागार म्हणूनही जबाबदारी पार पाडली आहे.",
      "यासोबतच संदिप हे प्रभावी वक्ते (Public Speaker) असून संविधान, लोकशाही, महापुरुषांचे विचार, सामाजिक परिवर्तन आणि पत्रकारितेची जबाबदारी या विषयांवर विविध व्यासपीठांवर सातत्याने मार्गदर्शन करत असतात."
    ],
    fullBioEn: [
      "Shri Sandip Jadhav is a prominent journalist, public orator, and election strategist with over 8 years of distinguished media tenure at national and state levels.",
      "He serves as the Founder and Managing Director of Hashtag Media Network, leading modern media communications and strategic advisory.",
      "Recognized for courageous on-ground investigative journalism, exposing governance loopholes, administrative inefficiencies, and championing the struggles of underprivileged communities.",
      "Has helmed senior leadership responsibilities across six prestigious press associations in India, spearheading legal safeguards, social security, and welfare movements for mediapersons.",
      "Accomplished election campaign strategist having orchestrated major electoral narratives in Delhi, Maharashtra, West Bengal, Bihar, and Goa, serving as a trusted political advisor to ministers and legislators.",
      "Dedicated constitutional evangelist addressing statewide forums on democratic resilience, social justice, and journalistic integrity."
    ]
  },
  {
    id: "santoshkumar-jaiswal",
    roleMr: "राष्ट्रीय उपाध्यक्ष",
    roleEn: "National Vice President",
    nameMr: "डॉ. संतोषकुमार आर. जयस्वाल",
    nameEn: "Dr. Santoshkumar R. Jaiswal",
    image: "/%E0%A4%A1%E0%A5%89.%20%E0%A4%B8%E0%A4%82%E0%A4%A4%E0%A5%8B%E0%A4%B7%E0%A4%95%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%B0%20%E0%A4%86%E0%A4%B0.%20%E0%A4%9C%E0%A4%AF%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B2.jpeg",
    stateMr: "मुंबई / महाराष्ट्र / भारत",
    stateEn: "Mumbai / Maharashtra / India",
    subtitleMr: "निवृत्त न्यायाधीश | ज्येष्ठ विधिज्ञ | कायदेविषयक सल्लागार | लवाद व मध्यस्थी तज्ज्ञ",
    subtitleEn: "Former Judge | Senior Jurist | Legal Counsel | Arbitration & Mediation Expert",
    profileMr: "न्यायदानाचा प्रदीर्घ अनुभव, कायद्याचे सखोल ज्ञान आणि समाजसेवेची बांधिलकी — मेट्रोपॉलिटन मॅजिस्ट्रेट व मुख्य न्यायदंडाधिकारी पदांवर गौरवशाली सेवा.",
    profileEn: "Decades of judicial excellence, profound legal scholarship and public service — distinguished career as Metropolitan Magistrate & Chief Judicial Magistrate.",
    highlightsMr: [
      "मेट्रोपॉलिटन मॅजिस्ट्रेट (एस्प्लनेड न्यायालय व अंधेरी न्यायालय, मुंबई) येथे न्यायिक जबाबदाऱ्या",
      "मुंबई व वांद्रे येथील लघूवाद न्यायालयात न्यायाधीश म्हणून सेवा",
      "मालेगाव-नाशिक, वाशिम आणि मंगरूळपीर येथे दिवाणी न्यायाधीश (वरिष्ठ स्तर)",
      "भंडारा व गोंदिया येथे मुख्य न्यायदंडाधिकारी (Chief Judicial Magistrate)",
      "मुंबई पोर्ट ट्रस्ट (Mumbai Port Trust) चे कायदेविषयक सल्लागार",
      "शैक्षणिक पात्रता: बी.एस्सी., बी.जर्नॅलिझम, डी.फार्म., एलएल.एम. आणि पीएच.डी. (कायदा)"
    ],
    highlightsEn: [
      "Metropolitan Magistrate at Esplanade Court and Andheri Court, Mumbai",
      "Judge at Court of Small Causes, Mumbai & Bandra",
      "Civil Judge (Senior Division) at Malegaon-Nashik, Washim, and Mangrulpir",
      "Chief Judicial Magistrate at Bhandara and Gondia districts",
      "Legal Advisor to Mumbai Port Trust (MbPT)",
      "Qualifications: B.Sc., B.Journalism, D.Pharm., LL.M., Ph.D. in Law"
    ],
    fullBioMr: [
      "डॉ. संतोषकुमार आर. जयस्वाल हे न्यायिक, कायदेविषयक, प्रशासकीय आणि सामाजिक क्षेत्रातील प्रदीर्घ अनुभव असलेले व्यक्तिमत्त्व आहेत. निवृत्त न्यायाधीश, ज्येष्ठ विधिज्ञ, कायदेविषयक सल्लागार आणि लवाद व मध्यस्थी क्षेत्रातील तज्ज्ञ म्हणून त्यांनी विविध जबाबदाऱ्या सांभाळल्या आहेत. न्यायव्यवस्थेतील अनुभव, कायद्याचा सखोल अभ्यास आणि सामान्य नागरिकांच्या प्रश्नांविषयीची जाणीव ही त्यांच्या कार्याची वैशिष्ट्ये आहेत.",
      "त्यांनी मेट्रोपॉलिटन मॅजिस्ट्रेट (एस्प्लनेड न्यायालय व अंधेरी न्यायालय, मुंबई) येथे न्यायिक जबाबदाऱ्या सांभाळल्या. तसेच मुंबई व वांद्रे येथील लघूवाद न्यायालयात न्यायाधीश म्हणून, मालेगाव-नाशिक, वाशिम आणि मंगरूळपीर येथे दिवाणी न्यायाधीश (वरिष्ठ स्तर) म्हणून, तसेच भंडारा व गोंदिया येथे मुख्य न्यायदंडाधिकारी म्हणून सेवा बजावली आहे.",
      "याशिवाय ग्राहकांच्या तक्रारींचे निवारण, दिवाणी व फौजदारी प्रकरणे, सार्वजनिक हिताशी संबंधित प्रश्न आणि कायद्याच्या चौकटीत न्याय मिळवून देण्याच्या प्रक्रियेत त्यांनी दांडगा अनुभव संपादन केला आहे. न्यायप्रक्रियेतील बारकावे, कायद्याचे व्यावहारिक पैलू आणि नागरिकांना न्याय मिळवताना येणाऱ्या अडचणींची त्यांना सखोल जाण आहे.",
      "डॉ. जयस्वाल यांनी मुंबई पोर्ट ट्रस्ट (Mumbai Port Trust) येथे कायदेविषयक सल्लागार म्हणूनही जबाबदारी सांभाळली आहे. संस्थात्मक आणि प्रशासकीय कामकाजामध्ये कायद्याचे महत्त्व आणि नियमानुसार निर्णय प्रक्रियेत त्यांचे योगदान मोलाचे ठरले आहे.",
      "शैक्षणिक पात्रता: बी.एस्सी., बी.जर्नॅलिझम, डी.फार्म., एलएल.एम. आणि पीएच.डी. (कायदा). कायद्याविषयी जागरूकता निर्माण करणे, विद्यार्थ्यांना व नागरिकांना कायदेशीर बाबी समजावून सांगणे आणि न्यायप्रक्रियेबद्दल योग्य माहिती उपलब्ध करून देणे यासाठी ते सतत तत्पर असतात."
    ],
    fullBioEn: [
      "Dr. Santoshkumar R. Jaiswal is an eminent former Judge, veteran legal scholar, arbitration practitioner, and public ombudsman with rich judicial expertise across Mumbai and Maharashtra.",
      "His judicial appointments include Metropolitan Magistrate at Esplanade and Andheri Courts (Mumbai), Judge at Small Causes Court (Mumbai & Bandra), Civil Judge Senior Division at Malegaon, Washim, and Mangrulpir, and Chief Judicial Magistrate at Bhandara and Gondia.",
      "Possesses deep mastery over civil and criminal jurisprudence, consumer grievance redressal, public interest law, and institutional governance.",
      "Served as Chief Legal Advisor to Mumbai Port Trust, advising on major regulatory frameworks and administrative compliance.",
      "His rigorous academic profile includes B.Sc., Bachelor of Journalism, D.Pharm., LL.M., and Ph.D. in Law. He actively mentors emerging journalists and citizen advocates on constitutional remedies."
    ]
  },
  {
    id: "prataprao-salunkhe",
    roleMr: "राष्ट्रीय कार्याध्यक्ष",
    roleEn: "National Working President",
    nameMr: "मा. प्रतापराव साळूंखे",
    nameEn: "Hon. Prataprao Salunkhe",
    image: "/%E0%A4%AE%E0%A4%BE.%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%E0%A4%BE%E0%A4%AA%E0%A4%B0%E0%A4%BE%E0%A4%B5%20%20%E0%A4%B8%E0%A4%BE%E0%A4%B3%E0%A5%82%E0%A4%82%E0%A4%96%E0%A5%87.jpeg",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    subtitleMr: "संपादक, सुपर महाराष्ट्र न्यूज | ख्यातनाम उद्योजक व सामाजिक नेते",
    subtitleEn: "Editor, Super Maharashtra News | Renowned Industrialist & Social Leader",
    profileMr: "राष्ट्रीय संघटनात्मक नियोजन व संचालन — 'सुपर महाराष्ट्र न्यूज'च्या माध्यमातून निर्भीड पत्रकारिता, उद्योग क्षेत्रात ठसा आणि सामाजिक न्यायासाठी समर्पित कार्य.",
    profileEn: "National Operations & Executive Leadership — Fearless editor of 'Super Maharashtra News', accomplished industrialist and champion of social justice.",
    highlightsMr: [
      "सुपर महाराष्ट्र न्यूजचे संपादक असून स्वतःच्या वर्तमानपत्राच्या माध्यमातून पत्रकारितेचे कार्य",
      "महाराष्ट्रातील ख्यातनाम उद्योजक व उद्योग जगतातील आदरणीय व्यक्तिमत्त्व",
      "शोषित, वंचित आणि पीडित घटकांच्या प्रश्नांना लेखणीच्या माध्यमातून वाचा फोडण्याचे कार्य",
      "शासन-प्रशासन आणि सामान्य जनता यांच्यात विश्वासाचा सेतू व दुवा",
      "महाराष्ट्र व संपूर्ण भारतभर पत्रकारितेची बांधिलकी आणि सामाजिक न्यायाचा विस्तार"
    ],
    highlightsEn: [
      "Chief Editor of 'Super Maharashtra News' daily newspaper",
      "Prominent industrialist and leading entrepreneur of Maharashtra",
      "Dedicated advocate for oppressed, marginalized, and underserved communities",
      "Vital facilitator bridging government administration and citizen welfare",
      "Expands the national footprint of Lokshahi Patrakar Mahasangh across all states"
    ],
    fullBioMr: [
      "मा. प्रतापराव साळूंखे हे लोकशाही पत्रकार महासंघ भारताचे राष्ट्रीय कार्याध्यक्ष असून पत्रकारिता, उद्योग आणि सामाजिक क्षेत्रातील एक प्रतिष्ठित व्यक्तिमत्त्व आहेत. ते 'सुपर महाराष्ट्र न्यूज'चे संपादक असून स्वतःच्या वर्तमानपत्राच्या माध्यमातूनही पत्रकारितेचे कार्य अविरत करत आहेत.",
      "महाराष्ट्रातील ख्यातनाम उद्योजक म्हणून ओळख असलेल्या प्रतापराव साळूंखे यांनी उद्योग क्षेत्रासोबतच सामाजिक क्षेत्रातही उल्लेखनीय योगदान दिले आहे.",
      "आपल्या लेखणीच्या माध्यमातून शोषित, वंचित आणि पीडित घटकांच्या प्रश्नांना वाचा फोडत, शासन-प्रशासन आणि सामान्य जनता यांच्यात दुवा म्हणून ते कार्य करतात.",
      "महाराष्ट्रासह संपूर्ण भारतभर विस्तारलेले त्यांचे कार्य पत्रकारितेची बांधिलकी, सामाजिक न्याय आणि जनहिताप्रती असलेली निष्ठा अधोरेखित करते."
    ],
    fullBioEn: [
      "Hon. Prataprao Salunkhe is the National Working President of Lokshahi Patrakar Mahasangh Bharat, combining decades of leadership across news journalism, commercial enterprise, and public philanthropy.",
      "As Chief Editor of 'Super Maharashtra News', he has fearlessly held public institutions accountable while providing a strong voice for grassroots citizen concerns.",
      "A distinguished industrial visionary in Maharashtra who actively channels commercial success toward social upliftment, scholarships, and healthcare assistance.",
      "His nationwide organizational dedication reinforces the federation's mission of press integrity, democratic rights, and media welfare."
    ]
  },
  {
    id: "ramakant-patil",
    roleMr: "राष्ट्रीय कायदेशीर सल्लागार",
    roleEn: "National Legal Advisor",
    nameMr: "ॲड. रमकांत पाटील",
    nameEn: "Adv. Ramakant Patil",
    image: "/%E0%A5%B2%E0%A4%A1.%20%E0%A4%B0%E0%A4%AE%E0%A4%95%E0%A4%BE%E0%A4%82%E0%A4%A4%20%E0%A4%AA%E0%A4%BE%E0%A4%9F%E0%A5%80%E0%A4%B2.jpeg",
    stateMr: "नवी मुंबई / महाराष्ट्र / भारत",
    stateEn: "Navi Mumbai / Maharashtra / India",
    subtitleMr: "ज्येष्ठ विधिज्ञ | मुंबई उच्च न्यायालय व सर्वोच्च न्यायालय",
    subtitleEn: "Senior Advocate | Bombay High Court & Supreme Court of India",
    profileMr: "पत्रकार हक्क, विधी संरक्षण व कायदेशीर मार्गदर्शन — १२+ वर्षे वकिली क्षेत्रात अनुभव, उच्च व सर्वोच्च न्यायालयात पत्रकारांच्या संरक्षणासाठी तत्पर.",
    profileEn: "Media legal defense & constitutional advisory — 12+ years appellate law practice across Bombay High Court and Supreme Court of India.",
    highlightsMr: [
      "गेल्या १२ वर्षांपासून वकिली क्षेत्रात कार्यरत असलेले अनुभवी विधिज्ञ आणि कायद्याचे सखोल अभ्यासक",
      "मुंबई उच्च न्यायालयासह सर्वोच्च न्यायालय, जिल्हा न्यायालये व कनिष्ठ न्यायालयांमध्ये दांडगा अनुभव",
      "फौजदारी कायदा, महसुली प्रशासन आणि कायदेशीर बाबींमध्ये पक्षकारांना मार्गदर्शन व न्यायप्रक्रियेत मदत",
      "सर्वसामान्य नागरिकांना न्याय मिळवून देण्याची बांधिलकी जपत पत्रकार व सामाजिक संघटनांसोबत कार्य",
      "नवी मुंबईसह संपूर्ण भारतभर महासंघाला कायदेशीर मार्गदर्शन देण्याची महत्त्वपूर्ण जबाबदारी"
    ],
    highlightsEn: [
      "Over 12 years of specialized legal practice as Senior Advocate",
      "Extensive litigation experience across Bombay High Court, Supreme Court, and District Courts",
      "Expertise in criminal jurisprudence, revenue administration, and press protection statutes",
      "Dedicated defense counsel for working journalists, citizen whistleblowers, and grassroots NGOs",
      "Leads the national legal aid cell of Lokshahi Patrakar Mahasangh Bharat"
    ],
    fullBioMr: [
      "ॲड. रमकांत पाटील हे गेल्या १२ वर्षांपासून वकिली क्षेत्रात कार्यरत असलेले अनुभवी विधिज्ञ आणि कायद्याचे सखोल अभ्यासक आहेत. मुंबई उच्च न्यायालयासह सर्वोच्च न्यायालय, जिल्हा न्यायालये तसेच विविध कनिष्ठ न्यायालयांमध्ये कायदेशीर प्रकरणांवर काम करण्याचा त्यांना प्रदीर्घ अनुभव आहे.",
      "फौजदारी कायदा, महसुली प्रशासन आणि विविध कायदेशीर बाबींमध्ये ते पक्षकारांना मार्गदर्शन व न्यायप्रक्रियेत मदत करतात. सर्वसामान्य नागरिकांना न्याय मिळवून देण्याची बांधिलकी जपत त्यांनी पत्रकार आणि विविध सामाजिक संघटनांसोबतही कार्य केले आहे.",
      "नवी मुंबई येथील ॲड. रमकांत पाटील यांचे कार्यक्षेत्र महाराष्ट्रापुरते मर्यादित नसून संपूर्ण भारतभर विस्तारलेले आहे. कायदेशीर ज्ञान, न्यायनिष्ठा आणि सामाजिक बांधिलकी यांच्या बळावर ते लोकशाही पत्रकार महासंघ भारताचे राष्ट्रीय कायदेशीर सल्लागार म्हणून संघटनेला कायदेशीर मार्गदर्शन देण्याची महत्त्वपूर्ण जबाबदारी सांभाळतात."
    ],
    fullBioEn: [
      "Adv. Ramakant Patil brings more than 12 years of distinguished legal practice in appellate courts, specializing in constitutional rights, criminal law, and regulatory compliance.",
      "Practices before the High Court of Bombay and the Supreme Court of India, having secured critical judicial relief for independent media outlets and journalists facing wrongful intimidation.",
      "Based out of Navi Mumbai with an all-India litigation footprint, he guides the federation's 24/7 Legal Helpdesk, advising members on press freedom and public interest matters."
    ]
  },
  {
    id: "t-madhav",
    roleMr: "राष्ट्रीय महामंत्री",
    roleEn: "National General Secretary",
    nameMr: "टी. माधव",
    nameEn: "T. Madhav",
    image: "/%E0%A4%9F%E0%A5%80.%20%E0%A4%AE%E0%A4%BE%E0%A4%A7%E0%A4%B5.jpeg",
    stateMr: "नवी दिल्ली / महाराष्ट्र / भारत",
    stateEn: "New Delhi / Maharashtra / India",
    subtitleMr: "पत्रकारिता • मंत्रालयीन अनुभव • प्रशासकीय समन्वय • जनसंपर्क",
    subtitleEn: "Journalism • Ministerial Liaison • Administrative Coordination • Public Affairs",
    profileMr: "केंद्रीय मंत्रालयीन समन्वय, प्रशासकीय संवाद व देशव्यापी पत्रव्यवहार — कायदा व पत्रकारिता शिक्षण, केंद्र सरकार समित्यांमध्ये समन्वयक म्हणून कार्य.",
    profileEn: "Central ministerial affairs, national administrative liaison & PR — law and journalism education with high-level governmental coordination experience.",
    highlightsMr: [
      "कायदा व पत्रकारितेचे शिक्षण, नामांकित वर्तमानपत्रांमध्ये विविध विषयांवर महत्त्वपूर्ण लिखाण",
      "दिल्ली येथे केंद्र सरकारच्या विविध विभागांत व समित्यांमध्ये समन्वयक म्हणून कार्य",
      "विदेशी परकीय कंपन्यांची गुंतवणूक भारतात आणण्यासाठी महत्त्वपूर्ण भूमिका",
      "रोजगार निर्मितीच्या क्षेत्रात केंद्र सरकार व स्वयंसेवी संस्थांच्या माध्यमातून भरीव कार्य",
      "सर्वसामान्य नागरिक आणि प्रशासकीय यंत्रणा यांच्यात समन्वय साधून समस्यांचे निराकरण"
    ],
    highlightsEn: [
      "Formally educated in Law and Journalism with extensive editorial contributions",
      "Served as Institutional Coordinator across Central Government Ministries in New Delhi",
      "Instrumental in facilitating foreign direct investments and industrial partnerships in India",
      "Spearheaded employment generation programs through civil society organizations",
      "Coordinates nationwide administrative affairs and inter-state liaison for the federation"
    ],
    fullBioMr: [
      "टी. माधव हे पत्रकारिता, केंद्रीय मंत्रालयीन कामकाज आणि प्रशासकीय समन्वयाचा प्रदीर्घ अनुभव असलेले व्यक्तिमत्त्व आहेत. कायदा व पत्रकारितेचे शिक्षण घेतल्यानंतर त्यांनी देशातील नामांकित वर्तमानपत्रांमध्ये विविध महत्त्वपूर्ण विषयांवर लिखाण केले आहे.",
      "त्यांनी दिल्ली येथे केंद्र सरकारच्या विविध विभागांत व समित्यांमध्ये समन्वयक म्हणून काम केले आहे. त्यानंतर विदेशी परकीय कंपन्यांची गुंतवणूक भारतात आणण्यासाठी त्यांनी महत्त्वपूर्ण भूमिका बजावली आहे.",
      "यासोबतच रोजगार निर्मितीच्या क्षेत्रातही केंद्र सरकार व स्वयंसेवी संस्थांच्या माध्यमातून त्यांनी महत्त्वपूर्ण काम केले आहे.",
      "सर्वसामान्य नागरिक आणि प्रशासकीय यंत्रणा यांच्यात समन्वय साधणे, नागरिकांच्या प्रश्नांना योग्य व्यासपीठ मिळवून देण्यासाठी प्रयत्न करणे आणि प्रशासकीय प्रक्रियांमध्ये मार्गदर्शन करणे, हे त्यांच्या कार्याचे महत्त्वाचे पैलू आहेत."
    ],
    fullBioEn: [
      "Shri T. Madhav commands broad experience at the intersection of media journalism, central ministerial coordination, and national governance.",
      "Educated in both Law and Media, he has contributed sharp analytical articles to leading national publications on administrative reform and citizen welfare.",
      "Operated in New Delhi facilitating communications between parliamentary committees, industrial groups, and grassroots civil bodies, driving socio-economic employment projects.",
      "Oversees the central general secretariat of Lokshahi Patrakar Mahasangh Bharat, ensuring smooth correspondence and policy implementation across all state committees."
    ]
  },
  {
    id: "dnyaneshwar-budhwat",
    roleMr: "राष्ट्रीय संघटन मंत्री",
    roleEn: "National Organizing Secretary",
    nameMr: "ज्ञानेश्वर बुधवत",
    nameEn: "Dnyaneshwar Budhwat",
    image: "/%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%20%E0%A4%AC%E0%A5%81%E0%A4%A7%E0%A4%B5%E0%A4%A4.jpeg",
    stateMr: "मराठवाडा / विदर्भ / महाराष्ट्र",
    stateEn: "Marathwada / Vidarbha / Maharashtra",
    subtitleMr: "मुख्य संपादक, दैनिक लोकनेता | निर्भीड पत्रकार | राज्यस्तरीय पुरस्कार विजेते",
    subtitleEn: "Chief Editor, Daily Lokneta | Fearless Journalist | State Award Winner",
    profileMr: "देशव्यापी संघटन विस्तार व सदस्य संपर्क — 'दैनिक लोकनेता'चे मुख्य संपादक, मराठवाडा व विदर्भातील शेतकरी व वंचितांच्या प्रश्नांची निर्भीड मांडणी.",
    profileEn: "National organization builder & membership expansion — Chief Editor of 'Dainik Lokneta', fearless voice for farmers and agrarian welfare.",
    highlightsMr: [
      "महाराष्ट्रातील 'दैनिक लोकनेता' या वर्तमानपत्राचे मुख्य संपादक",
      "निर्भीड पत्रकारिता, सामाजिक बांधिलकी आणि जनहिताच्या प्रश्नांवरील परखड लेखणी",
      "मराठवाडा व विदर्भातील शेतकऱ्यांच्या समस्या, हक्क आणि संघर्षांना प्रभावी व्यासपीठ",
      "पत्रकार संघटनांमधील प्रदीर्घ अनुभव व सामाजिक चळवळींतील सक्रिय सहभाग",
      "विविध संघ-महासंघांकडून राज्यस्तरीय पुरस्कारांनी सन्मानित",
      "राष्ट्रीय स्तरावर संघटनात्मक बळकटीकरण आणि पत्रकारांच्या न्याय्य हक्कांचे संरक्षण"
    ],
    highlightsEn: [
      "Chief Editor of leading Marathi daily newspaper 'Dainik Lokneta'",
      "Renowned for intrepid investigative reporting and unapologetic editorials",
      "Champion of agrarian issues, farmer rights, and drought-affected regions of Marathwada & Vidarbha",
      "Recipient of prestigious state-level journalism awards for courageous public reporting",
      "Architect of the federation's grassroots organization building across Indian states"
    ],
    fullBioMr: [
      "ज्ञानेश्वर बुधवत हे महाराष्ट्रातील 'दैनिक लोकनेता' या वर्तमानपत्राचे मुख्य संपादक असून निर्भीड पत्रकारिता, सामाजिक बांधिलकी आणि जनहिताच्या प्रश्नांवरील परखड लेखणीसाठी ओळखले जातात. आपल्या लेखणीच्या माध्यमातून त्यांनी शोषित, वंचित आणि पीडित घटकांच्या प्रश्नांना वाचा फोडण्यासोबतच मराठवाडा व विदर्भातील शेतकऱ्यांच्या समस्या, हक्क आणि संघर्षांना प्रभावीपणे व्यासपीठ मिळवून दिले आहे.",
      "विविध पत्रकार संघटनांमधील प्रदीर्घ अनुभव, सामाजिक चळवळींतील सक्रिय सहभाग आणि विविध विषयांवरील अभ्यासपूर्ण लेखन यांच्या बळावर त्यांनी पत्रकारिता क्षेत्रात आपली स्वतंत्र ओळख निर्माण केली आहे. जनहिताच्या प्रश्नांचा सातत्यपूर्ण पाठपुरावा, अन्यायाविरुद्ध निर्भीड भूमिका आणि सत्ताधाऱ्यांना जनतेच्या प्रश्नांची जाणीव करून देणारी पत्रकारिता ही त्यांच्या कार्याची प्रमुख वैशिष्ट्ये आहेत.",
      "त्यांच्या याच कार्याची विविध संघ, महासंघांनी दखल घेऊन त्यांना राज्यस्तरीय पुरस्काराने सन्मानित केले आहे.",
      "लोकशाही पत्रकार महासंघ भारताचे राष्ट्रीय संघटन मंत्री म्हणून ते राष्ट्रीय स्तरावर संघटनात्मक बळकटीकरण, पत्रकारांच्या न्याय्य हक्कांचे संरक्षण आणि निर्भीड पत्रकारितेच्या संवर्धनासाठी कार्यरत आहेत. महाराष्ट्रासह देशभरातील पत्रकारांना संघटनात्मक व्यासपीठ मिळवून देणे, पत्रकारितेतील एकजूट वाढवणे आणि लोकशाही मूल्यांचे संरक्षण करणे हे त्यांच्या कार्याचे उद्दिष्ट आहे."
    ],
    fullBioEn: [
      "Shri Dnyaneshwar Budhwat is the Chief Editor of 'Dainik Lokneta', celebrated for relentless frontline journalism and unwavering dedication to farmers and rural workers in Marathwada and Vidarbha.",
      "Through incisive columns and investigative ground reporting, he has consistently confronted systemic corruption and administrative lethargy.",
      "Decorated with numerous state-level honours and citations from prominent press bodies.",
      "As National Organizing Secretary, he coordinates regional committees, oversees membership drives, and builds an impenetrable protective network for local correspondents facing harassment."
    ]
  },
  {
    id: "kishor-pawar",
    roleMr: "प्रदेश अध्यक्ष, महाराष्ट्र राज्य",
    roleEn: "Maharashtra State President",
    nameMr: "मा. श्री. किशोर दादा पवार",
    nameEn: "Hon. Shri Kishor Dada Pawar",
    image: "/%E0%A4%AE%E0%A4%BE.%20%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80.%20%E0%A4%95%E0%A4%BF%E0%A4%B6%E0%A5%8B%E0%A4%B0%20%E0%A4%A6%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%AA%E0%A4%B5%E0%A4%BE%E0%A4%B0.jpeg",
    stateMr: "महाराष्ट्र",
    stateEn: "Maharashtra",
    subtitleMr: "पत्रकार | संघटनात्मक नेतृत्व | संस्थापक-अध्यक्ष, Seva Social Welfare Global Foundation",
    subtitleEn: "Journalist | Organizational Leader | Founder-President, Seva Foundation",
    profileMr: "राज्यस्तरीय नेतृत्व, समन्वय व धोरण — गेल्या ७ वर्षांपासून पत्रकारितेत सक्रिय, ग्रामीण भागातील प्रश्नांना वाचा फोडणे व सेवा फाउंडेशनद्वारे समाजकल्याण.",
    profileEn: "State chapter president & humanitarian leader — 7+ years in grassroots journalism, rural advocacy, and founder of Seva Social Welfare Global Foundation.",
    highlightsMr: [
      "गेल्या ६–७ वर्षांपासून पत्रकारिता क्षेत्रात सक्रिय, जनहिताचे प्रश्न व ग्रामीण समस्या मांडण्याचे कार्य",
      "लोकशाही पत्रकार महासंघ महाराष्ट्र प्रदेश अध्यक्ष म्हणून पत्रकारांची सक्षम संघटनात्मक बांधणी",
      "संस्थापक-अध्यक्ष — Seva Social Welfare Global Foundation",
      "आरोग्य, शिक्षण, महिला सक्षमीकरण, रोजगारनिर्मिती आणि जनकल्याणकारी योजनांचे प्रसारक",
      "महाराष्ट्रातील विविध जिल्हे, तालुके आणि ग्रामीण भागांत संपर्क व समन्वयाचे व्यापक जाळे"
    ],
    highlightsEn: [
      "6-7 years of active grassroots and investigative journalism in Maharashtra",
      "Consolidates journalist welfare, district units, and legal safety as Maharashtra State President",
      "Founder-President of Seva Social Welfare Global Foundation",
      "Dedicated humanitarian focus on rural healthcare, education, women empowerment, and skill development",
      "Extensive organizational network across all districts and talukas of Maharashtra"
    ],
    fullBioMr: [
      "मा. श्री. किशोर दादा पवार हे गेल्या ६–७ वर्षांपासून पत्रकारिता क्षेत्रात सक्रिय असून जनहिताचे प्रश्न, सामाजिक समस्या, प्रशासन आणि ग्रामीण भागातील प्रश्नांना प्रभावीपणे वाचा फोडण्याचे कार्य करत आहेत.",
      "लोकशाही पत्रकार महासंघ, भारत — महाराष्ट्र प्रदेश अध्यक्ष म्हणून पत्रकारांना संघटित करणे, त्यांच्या हक्कांसाठी व्यासपीठ निर्माण करणे आणि महाराष्ट्रभर संघटनेची सक्षम बांधणी करण्यासाठी ते अहोरात्र प्रयत्नशील आहेत.",
      "सामाजिक कार्य व जनकल्याण: समाजातील गरजू व वंचित घटकांसाठी आरोग्य, शिक्षण, महिला सक्षमीकरण, रोजगारनिर्मिती आणि युवक विकासाच्या उपक्रमांना त्यांनी प्राधान्य दिले आहे.",
      "संस्थापक-अध्यक्ष — Seva Social Welfare Global Foundation: फाउंडेशनच्या माध्यमातून महाराष्ट्रभर सामाजिक कार्याचा विस्तार, जनजागृती, गरजू नागरिकांना मदत आणि केंद्र व राज्य शासनाच्या जनकल्याणकारी योजनांची माहिती पोहोचविण्यासाठी सक्रिय पुढाकार घेतला आहे.",
      "पत्रकारिता, सामाजिक आणि सार्वजनिक जीवनातील अनुभवाच्या बळावर महाराष्ट्रातील विविध जिल्हे, तालुके आणि ग्रामीण भागांत संपर्क व समन्वयाचे व्यापक जाळे उभारून समाजहितासाठी कार्यरत आहेत."
    ],
    fullBioEn: [
      "Hon. Kishor Dada Pawar has been a driving force in Maharashtra journalism for over seven years, spotlighting rural public grievances, administrative apathy, and agrarian crises.",
      "As State President for Maharashtra, he directs the unionization and capacity-building of thousands of rural and urban press correspondents.",
      "He is the Founder-President of Seva Social Welfare Global Foundation, executing high-impact welfare programs in preventative medicine, educational scholarships, and women self-help initiatives.",
      "Maintains proactive ties across all revenue divisions, ensuring the federation's legal and social safety net reaches remote taluka reporters."
    ]
  },
  {
    id: "sanam-patil",
    roleMr: "महाराष्ट्र प्रदेश कार्याध्यक्ष",
    roleEn: "Maharashtra State Working President",
    nameMr: "श्री. सनम पाटील",
    nameEn: "Shri Sanam Patil",
    image: "/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80.%20%E0%A4%B8%E0%A4%A8%E0%A4%AE%20%E0%A4%AA%E0%A4%BE%E0%A4%9F%E0%A5%80%E0%A4%B2.jpeg",
    stateMr: "नवी मुंबई / मुंबई / महाराष्ट्र",
    stateEn: "Navi Mumbai / Mumbai / Maharashtra",
    subtitleMr: "नवी मुंबई क्राईम न्यूज, नवी मुंबई समाचार न्यूज | सामाजिक बांधिलकी",
    subtitleEn: "Navi Mumbai Crime News, Navi Mumbai Samachar News | Media Advocate",
    profileMr: "राज्यस्तरीय दैनंदिन कामकाज व कार्यक्रम संचालन — प्रिंट व डिजिटल मीडियात जनतेच्या प्रश्नांची प्रभावी मांडणी, अन्यायाविरुद्ध निर्भीड लढा.",
    profileEn: "State executive operations & youth mobilization — print and digital investigative coverage, fighting corruption and injustice.",
    highlightsMr: [
      "नवी मुंबई क्राईम न्यूज, नवी मुंबई समाचार न्यूज तसेच विथ महाराष्ट्र माध्यमसमूहांमध्ये कार्य",
      "प्रिंट मीडिया आणि डिजिटल मीडियाच्या माध्यमातून जनतेचे प्रश्न प्रभावीपणे मांडण्यात महत्त्वपूर्ण योगदान",
      "अन्यायाविरुद्ध निर्भीडपणे आवाज उठवणे, शोषित व पीडित घटकांच्या प्रश्नांना वाचा फोडणे",
      "सामान्य नागरिकांना न्याय मिळवून देण्यासाठी सातत्याने प्रयत्नशील",
      "पत्रकारांच्या हक्कांचे संरक्षण, संघटनात्मक बळकटीकरण आणि प्रभावी व्यासपीठ"
    ],
    highlightsEn: [
      "Served across Navi Mumbai Crime News, Navi Mumbai Samachar News, and With Maharashtra networks",
      "Pioneer in high-velocity print and digital news reporting for Mumbai metropolitan region",
      "Aggressive legal and social defense for journalists targeted by unlawful coercion",
      "Strong bridge between active digital creators, print editors, and working photojournalists",
      "Manages day-to-day federation operations and regional grievance intake across Maharashtra"
    ],
    fullBioMr: [
      "श्री. सनम पाटील हे पत्रकारितेच्या क्षेत्रातील एक सक्रिय आणि सामाजिक बांधिलकी जपणारे व्यक्तिमत्त्व आहेत. नवी मुंबई क्राईम न्यूज, नवी मुंबई समाचार न्यूज तसेच विथ महाराष्ट्र यांसारख्या माध्यमसमूहांमध्ये त्यांनी काम केले असून, प्रिंट मीडिया आणि डिजिटल मीडियाच्या माध्यमातून जनतेचे प्रश्न प्रभावीपणे मांडण्यात त्यांनी महत्त्वपूर्ण योगदान दिले आहे.",
      "अन्यायाविरुद्ध निर्भीडपणे आवाज उठवणे, शोषित, पीडित आणि वंचित घटकांच्या प्रश्नांना वाचा फोडणे तसेच सामान्य नागरिकांना न्याय मिळवून देण्यासाठी सातत्याने प्रयत्नशील राहणे, ही त्यांच्या पत्रकारितेची प्रमुख वैशिष्ट्ये आहेत.",
      "मुंबई आणि नवी मुंबई परिसरात पत्रकारितेच्या माध्यमातून जनहिताचे प्रश्न मांडणारे श्री. सनम पाटील हे लोकशाही मूल्ये, सामाजिक न्याय आणि पत्रकारितेची बांधिलकी जपणारे कार्यकर्ते आहेत.",
      "लोकशाही पत्रकार महासंघ भारताचे महाराष्ट्र प्रदेश कार्याध्यक्ष म्हणून ते पत्रकारांच्या हक्कांचे संरक्षण, संघटनात्मक बळकटीकरण आणि सर्वसामान्य जनतेच्या प्रश्नांना प्रभावी व्यासपीठ मिळवून देण्यासाठी कार्यरत आहेत. निर्भीड पत्रकारिता, जनसेवेची तळमळ आणि अन्यायाविरुद्ध लढण्याची भूमिका ही त्यांच्या कार्याची खरी ओळख आहे."
    ],
    fullBioEn: [
      "Shri Sanam Patil is a dynamic investigative journalist and working president who has made substantial contributions across Navi Mumbai Crime News and Navi Mumbai Samachar News.",
      "Specializes in civic crime investigation, highlighting municipal anomalies and securing justice for victims of bureaucratic indifference.",
      "Drives the daily executive operations of the Maharashtra State Unit, standing at the forefront of prompt legal and organizational interventions whenever media professionals face institutional obstacles.",
      "Passionate defender of digital journalists' credentials, accreditations, and constitutional rights."
    ]
  },
  {
    id: "anil-patil",
    roleMr: "राष्ट्रीय समन्वयक व सल्लागार",
    roleEn: "National Coordinator & Advisor",
    nameMr: "डॉ. अनिल दिलीप पाटील",
    nameEn: "Dr. Anil Dilip Patil",
    image: "/%E0%A4%A1%E0%A5%89.%20%E0%A4%85%E0%A4%A8%E0%A4%BF%E0%A4%B2%20%E0%A4%A6%E0%A4%BF%E0%A4%B2%E0%A5%80%E0%A4%AA%20%E0%A4%AA%E0%A4%BE%E0%A4%9F%E0%A5%80%E0%A4%B2.jpeg",
    stateMr: "महाराष्ट्र / भारत",
    stateEn: "Maharashtra / India",
    subtitleMr: "उद्योजक • पत्रकार • सामाजिक व राजकीय कार्यकर्ते | Saitech Group",
    subtitleEn: "Entrepreneur • Journalist • Social & Political Leader | Saitech Group",
    profileMr: "उद्योग व पत्रकारिता समन्वय, Saitech Group — जनहिताचे प्रश्न, सामाजिक जनजागृती आणि संघटनात्मक संपर्काचे भरीव योगदान.",
    profileEn: "Enterprise & media synergy, Saitech Group — civic journalism, industrial expertise, and extensive organizational networking.",
    highlightsMr: [
      "पत्रकारिता क्षेत्रात सक्रिय असून जनहिताचे प्रश्न, सामाजिक विषय व नागरिकांच्या समस्यांची मांडणी",
      "Saitech Group च्या माध्यमातून उद्योग व व्यवसाय क्षेत्रात स्वतंत्र ओळख निर्माण",
      "सामाजिक प्रश्नांबाबत जनजागृती, जनसंपर्क वाढविणे आणि समाजहिताच्या उपक्रमांमध्ये सहभाग",
      "पत्रकारिता, उद्योग आणि सामाजिक क्षेत्रातील विविध घटकांशी संपर्क व समन्वय",
      "सार्वजनिक जीवनात सक्रिय योगदान व महासंघाच्या राष्ट्रीय विस्तारात मोलाचे सहकार्य"
    ],
    highlightsEn: [
      "Active journalist advocating for public causes and civic solutions",
      "Leader of Saitech Group, pioneering commercial enterprise and technology initiatives",
      "Directs statewide community outreach, public awareness, and welfare programs",
      "Seamlessly connects industrial stakeholders, media leaders, and civic activists",
      "Advises the national board on strategic outreach and institutional sustainability"
    ],
    fullBioMr: [
      "डॉ. अनिल दिलीप पाटील हे उद्योजक, पत्रकार आणि सामाजिक व राजकीय कार्यकर्ते म्हणून बहुआयामी व्यक्तिमत्त्व आहेत.",
      "पत्रकारिता क्षेत्रातील कार्य: पत्रकारिता क्षेत्रात सक्रिय असून जनहिताचे प्रश्न, सामाजिक विषय आणि नागरिकांच्या समस्या मांडण्याचे कार्य सातत्याने करत आहेत.",
      "उद्योजकीय योगदान: Saitech Group च्या माध्यमातून उद्योग व व्यवसाय क्षेत्रात कार्यरत असून व्यावसायिक क्षेत्रात आपली स्वतंत्र ओळख निर्माण करण्यासाठी ते सदैव प्रयत्नशील आहेत.",
      "सामाजिक व सार्वजनिक कार्य: सामाजिक प्रश्नांबाबत जनजागृती करणे, जनसंपर्क वाढविणे आणि समाजहिताच्या उपक्रमांमध्ये सहभाग घेणे यावर त्यांचा भर आहे.",
      "जनसंपर्क व संघटनात्मक कार्य: पत्रकारिता, उद्योग आणि सामाजिक क्षेत्रातील विविध व्यक्तींशी संपर्क व समन्वय साधून सार्वजनिक जीवनात आणि लोकशाही पत्रकार महासंघाच्या कार्यात ते सक्रिय योगदान देत आहेत."
    ],
    fullBioEn: [
      "Dr. Anil Dilip Patil represents a modern synergy of business enterprise, fearless civic journalism, and active community leadership.",
      "Through Saitech Group, he leads industrial operations while channeling resources toward civic journalism, educational sponsorships, and digital outreach.",
      "Passionate about raising citizen awareness on fundamental rights, administrative accountability, and media literacy.",
      "Serves as National Coordinator and Strategic Advisor to Lokshahi Patrakar Mahasangh Bharat, bridging corporate capabilities with grassroots journalist welfare across Maharashtra and India."
    ]
  }
];


// Future Roadmap 8 Phases strictly matching PDF Pages 11 & 12
export const futureRoadmapPhases = [
  {
    phase: "PHASE 01",
    phaseMr: "टप्पा ०१",
    phaseEn: "PHASE 01",
    titleMr: "संघटन विस्तार",
    titleEn: "Organisational Expansion",
    descMr: "भारताच्या विविध राज्यांमध्ये महासंघाचे संघटनात्मक जाळे मजबूत करणे.",
    descEn: "Strengthening the organisational network across various states of India."
  },
  {
    phase: "PHASE 02",
    phaseMr: "टप्पा ०२",
    phaseEn: "PHASE 02",
    titleMr: "पत्रकार मदत कक्ष",
    titleEn: "Journalist Help Desk",
    descMr: "पत्रकारांच्या प्रश्नांसाठी राष्ट्रीय पातळीवर संपर्क व मार्गदर्शन व्यवस्था विकसित करणे.",
    descEn: "Developing a national-level contact and guidance mechanism for journalists' issues."
  },
  {
    phase: "PHASE 03",
    phaseMr: "टप्पा ०३",
    phaseEn: "PHASE 03",
    titleMr: "प्रशिक्षण व कौशल्य विकास",
    titleEn: "Training & Skill Development",
    descMr: "डिजिटल पत्रकारिता, सोशल मीडिया, तथ्य पडताळणी, सायबर सुरक्षा, कायदेशीर जागरूकता आणि आधुनिक पत्रकारितेसाठी प्रशिक्षण उपक्रम व पत्रकार कार्यशाळेचे आयोजन. सोबतच ‘मीट द प्रेस’ (Meet the Press) वार्तालाप, पत्रकार सुरक्षा व हक्क संरक्षण अभियान, माध्यम संशोधन व अभ्यास प्रकल्प, मानवाधिकार जनजागृती उपक्रम, पर्यावरण संरक्षण मोहिमा, पत्रकारिता नैतिकता विषयक मार्गदर्शन, स्मरणिका, नियतकालिके आणि डिजिटल प्रकाशन, सामाजिक सेवा आणि जनहिताचे विशेष अभियान.",
    descEn: "Training programs and journalist workshops on digital journalism, social media, fact checking, cyber security, legal awareness, Meet the Press events, and public interest initiatives."
  },
  {
    phase: "PHASE 04",
    phaseMr: "टप्पा ०४",
    phaseEn: "PHASE 04",
    titleMr: "पत्रकार हक्क अभियान",
    titleEn: "Journalist Rights Campaign",
    descMr: "पत्रकारांच्या न्याय्य हक्क आणि प्रश्नांसाठी राष्ट्रीय स्तरावर जनजागृती व संघटनात्मक अभियान.",
    descEn: "National awareness campaigns and advocacy drives for journalists' legitimate rights and issues."
  },
  {
    phase: "PHASE 05",
    phaseMr: "टप्पा ०५",
    phaseEn: "PHASE 05",
    titleMr: "सामाजिक जनहित अभियान",
    titleEn: "Public Welfare Initiative",
    descMr: "देशभरातील जनहिताचे प्रश्न संबंधित शासन-प्रशासनापर्यंत पोहोचवण्यासाठी सामाजिक उपक्रम.",
    descEn: "Social initiatives to bring public interest issues across the country to relevant government administrations."
  },
  {
    phase: "PHASE 06",
    phaseMr: "टप्पा ०६",
    phaseEn: "PHASE 06",
    titleMr: "डिजिटल पत्रकार नेटवर्क",
    titleEn: "Digital Journalist Network",
    descMr: "देशभरातील सदस्य पत्रकारांना जोडणारे डिजिटल नेटवर्क तयार करणे.",
    descEn: "Creating a digital network connecting member journalists across India."
  },
  {
    phase: "PHASE 07",
    phaseMr: "टप्पा ०७",
    phaseEn: "PHASE 07",
    titleMr: "राष्ट्रीय पत्रकार अधिवेशन व परिषद",
    titleEn: "National Media & Journalist Convention",
    descMr: "देशभरातील पत्रकारांना एका व्यासपीठावर आणण्यासाठी राष्ट्रीय स्तरावरील परिषद/अधिवेशन व देशव्यापी चर्चासत्रांचे आयोजन.",
    descEn: "Organizing national-level conventions and nationwide symposiums to bring journalists together on one platform."
  },
  {
    phase: "PHASE 08",
    phaseMr: "टप्पा ०८",
    phaseEn: "PHASE 08",
    titleMr: "संशोधन व दस्तऐवजीकरण",
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
