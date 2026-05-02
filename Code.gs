/**
 * منصة نطاق منى - Google Apps Script
 * النسخة النهائية الشاملة والدقيقة (بدون أي اختصارات)
 * تحتوي على كافة نقاط الانتشار (148 نقطة) وإحداثياتها الدقيقة المستخرجة من المنصة
 */

const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();

const SECTOR_COORDINATES = {
  "الجمرات": {
    "lat": 21.422293294285712,
    "lng": 39.871535882857145
  },
  "القطارات": {
    "lat": 21.415470989655173,
    "lng": 39.876487489655176
  },
  "بطن منى الجنوبي": {
    "lat": 21.412538233333333,
    "lng": 39.88501350952382
  },
  "بطن منى الشمالي": {
    "lat": 21.416105684615385,
    "lng": 39.886412823076924
  },
  "الشعيبين": {
    "lat": 21.41924806666667,
    "lng": 39.900101088888896
  },
  "منى الجديد 1": {
    "lat": 21.407291758333333,
    "lng": 39.89409621666666
  },
  "منى الجديد 2": {
    "lat": 21.40100726875,
    "lng": 39.90083236875
  }
};

const TEAMS_DATA = {
  "الجمرات": {
    "الصباحية": { lead: "راكان منصور الحصيني", assistants: ["فواز حميد الظفيري", "تركي أحمد عبدالله الغامدي", "محمد علي عبدالله القحطاني", "فيصل جري المطيري"] },
    "المسائية": { lead: "محمد عبدالکريم إبراهيم الدعيجي", assistants: ["عبدالله علي القحطاني", "عبدالعزيز محمد الجهني", "أحمد عبدالرحمن التركستاني", ""] }
  },
  "بطن منى الشمالي": {
    "الصباحية": { lead: "حمود سويد العنزي", assistants: ["إبراهيم علي إبراهيم جبران", "مشاري حامد العتيبي", "", ""] },
    "المسائية": { lead: "فيصل حمود عبيد العتيبي", assistants: ["ناصر عبدالله زوايد", "", "", ""] }
  },
  "بطن منى الجنوبي": {
    "الصباحية": { lead: "سلمان نهير العنزي", assistants: ["عبدالرحمن عبدالعزيز السهلي", "مساعد حمد الدغيمان", "", ""] },
    "المسائية": { lead: "محمد منديل المنديل", assistants: ["فيصل محمد مقبول السيالي", "", "", ""] }
  },
  "القطارات": {
    "الصباحية": { lead: "مرزوق معيلي الدوسري", assistants: ["عبيد سالم رشيدان الرويس", "خالد محمد عبدالمجيد العياضي", "", ""] },
    "المسائية": { lead: "خالد نايف لطيف الشمري", assistants: ["خالد علي العنزي", "محمد إبراهيم بحري", "", ""] }
  },
  "منى الجديد 1": {
    "الصباحية": { lead: "عبدالله صالح محمد الغامدي", assistants: ["وليد حمود العنزي", "فهد حمد الشمري", "", ""] },
    "المسائية": { lead: "عبدالله باني العنزي", assistants: ["سعدون فريح الشمري", "", "", ""] }
  },
  "منى الجديد 2": {
    "الصباحية": { lead: "جاسم عبدالجواد جاسم الجريدان", assistants: ["فيصل صقر المطيري", "زياد سعيد الشهراني", "", ""] },
    "المسائية": { lead: "بندر أحمد علواني", assistants: ["حاكم سعد الدعرمي", "تركي نزال السبيعي", "", ""] }
  },
  "الشعيبين": {
    "الصباحية": { lead: "موسى علي أحمد غروي", assistants: ["طلال علي الشمري", "فهد حمود الشمري", "", ""] },
    "المسائية": { lead: "فواز فهد الأشجعي", assistants: ["علي سلامة العنزي", "مبارك محسن العجمي", "", ""] }
  }
};

const ALL_DEPLOYMENT_POINTS = {
  "الجمرات": [
    {
      "id": "MH1",
      "lat": 21.425546,
      "lng": 39.86387
    },
    {
      "id": "MH2",
      "lat": 21.424468,
      "lng": 39.863626
    },
    {
      "id": "MH3",
      "lat": 21.425116,
      "lng": 39.865597
    },
    {
      "id": "MH4",
      "lat": 21.4250659,
      "lng": 39.8659837
    },
    {
      "id": "MH5",
      "lat": 21.425314,
      "lng": 39.867029
    },
    {
      "id": "MH6",
      "lat": 21.425174,
      "lng": 39.86701
    },
    {
      "id": "MH7",
      "lat": 21.423748,
      "lng": 39.865322
    },
    {
      "id": "MH8",
      "lat": 21.424757,
      "lng": 39.86711
    },
    {
      "id": "MH9",
      "lat": 21.425946,
      "lng": 39.870235
    },
    {
      "id": "MH10",
      "lat": 21.424427,
      "lng": 39.868784
    },
    {
      "id": "MH11",
      "lat": 21.4226793,
      "lng": 39.8764637
    },
    {
      "id": "MH12",
      "lat": 21.4245944,
      "lng": 39.872963
    },
    {
      "id": "MH13",
      "lat": 21.4225412,
      "lng": 39.8764999
    },
    {
      "id": "MH14",
      "lat": 21.42235,
      "lng": 39.868068
    },
    {
      "id": "MH15",
      "lat": 21.421914,
      "lng": 39.869211
    },
    {
      "id": "MH16",
      "lat": 21.4236195,
      "lng": 39.8730425
    },
    {
      "id": "MH17",
      "lat": 21.419938,
      "lng": 39.872258
    },
    {
      "id": "MH18",
      "lat": 21.4192968,
      "lng": 39.8737655
    },
    {
      "id": "MH19",
      "lat": 21.4228831,
      "lng": 39.8712326
    },
    {
      "id": "MH20",
      "lat": 21.4207064,
      "lng": 39.8766112
    },
    {
      "id": "MH21",
      "lat": 21.4201379,
      "lng": 39.8767965
    },
    {
      "id": "MH22",
      "lat": 21.4253017,
      "lng": 39.8670914
    },
    {
      "id": "MH23",
      "lat": 21.420791,
      "lng": 39.8768115
    },
    {
      "id": "MH24",
      "lat": 21.4203237,
      "lng": 39.8712934
    },
    {
      "id": "MH25",
      "lat": 21.4200672,
      "lng": 39.8776463
    },
    {
      "id": "MH26",
      "lat": 21.416968,
      "lng": 39.8770642
    },
    {
      "id": "MH27",
      "lat": 21.4234574,
      "lng": 39.8713077
    },
    {
      "id": "MH28",
      "lat": 21.4187865,
      "lng": 39.877496
    },
    {
      "id": "MH29",
      "lat": 21.4179375,
      "lng": 39.8771044
    },
    {
      "id": "MH30",
      "lat": 21.4213962,
      "lng": 39.8708725
    },
    {
      "id": "MH31",
      "lat": 21.4223201,
      "lng": 39.8713338
    },
    {
      "id": "MH32",
      "lat": 21.4206621,
      "lng": 39.8727285
    },
    {
      "id": "MH33",
      "lat": 21.4214612,
      "lng": 39.8732703
    },
    {
      "id": "MH34",
      "lat": 21.419973,
      "lng": 39.8737746
    },
    {
      "id": "MH35",
      "lat": 21.4205972,
      "lng": 39.8744827
    }
  ],
  "القطارات": [
    {
      "id": "MH36",
      "lat": 21.414271,
      "lng": 39.8782808
    },
    {
      "id": "MH37",
      "lat": 21.4160506,
      "lng": 39.8770301
    },
    {
      "id": "MH38",
      "lat": 21.4153602,
      "lng": 39.8767243
    },
    {
      "id": "MH39",
      "lat": 21.413141,
      "lng": 39.881431
    },
    {
      "id": "MH40",
      "lat": 21.4136279,
      "lng": 39.8809927
    },
    {
      "id": "MH41",
      "lat": 21.4123168,
      "lng": 39.8824058
    },
    {
      "id": "MH42",
      "lat": 21.4085071,
      "lng": 39.8861372
    },
    {
      "id": "MH43",
      "lat": 21.407028,
      "lng": 39.887845
    },
    {
      "id": "MH44",
      "lat": 21.4152823,
      "lng": 39.8769795
    },
    {
      "id": "MH45",
      "lat": 21.42343,
      "lng": 39.861696
    },
    {
      "id": "MH46",
      "lat": 21.412738,
      "lng": 39.882661
    },
    {
      "id": "MH47",
      "lat": 21.4121327,
      "lng": 39.88039
    },
    {
      "id": "MH48",
      "lat": 21.4114845,
      "lng": 39.8840906
    },
    {
      "id": "MH49",
      "lat": 21.4125658,
      "lng": 39.8819877
    },
    {
      "id": "MH50",
      "lat": 21.4229275,
      "lng": 39.8654266
    },
    {
      "id": "MH51",
      "lat": 21.4208641,
      "lng": 39.8683662
    },
    {
      "id": "MH52",
      "lat": 21.4201062,
      "lng": 39.8691237
    },
    {
      "id": "MH53",
      "lat": 21.419427,
      "lng": 39.870766
    },
    {
      "id": "MH54",
      "lat": 21.419418,
      "lng": 39.87085
    },
    {
      "id": "MH55",
      "lat": 21.4202552,
      "lng": 39.8694404
    },
    {
      "id": "MH56",
      "lat": 21.4233439,
      "lng": 39.8631645
    },
    {
      "id": "MH57",
      "lat": 21.419053,
      "lng": 39.871377
    },
    {
      "id": "MH58",
      "lat": 21.4173595,
      "lng": 39.8736606
    },
    {
      "id": "MH59",
      "lat": 21.4124092,
      "lng": 39.8796805
    },
    {
      "id": "MH60",
      "lat": 21.4138865,
      "lng": 39.8773178
    },
    {
      "id": "MH61",
      "lat": 21.4192661,
      "lng": 39.8708881
    },
    {
      "id": "MH62",
      "lat": 21.4157995,
      "lng": 39.8752371
    },
    {
      "id": "MH63",
      "lat": 21.4099329,
      "lng": 39.8851583
    },
    {
      "id": "MH64",
      "lat": 21.4066742,
      "lng": 39.8890287
    }
  ],
  "بطن منى الجنوبي": [
    {
      "id": "MH65",
      "lat": 21.4101968,
      "lng": 39.8894904
    },
    {
      "id": "MH66",
      "lat": 21.4098272,
      "lng": 39.8886697
    },
    {
      "id": "MH67",
      "lat": 21.4145719,
      "lng": 39.8849757
    },
    {
      "id": "MH68",
      "lat": 21.4125191,
      "lng": 39.8856227
    },
    {
      "id": "MH69",
      "lat": 21.4086113,
      "lng": 39.8874781
    },
    {
      "id": "MH70",
      "lat": 21.4140273,
      "lng": 39.8836217
    },
    {
      "id": "MH71",
      "lat": 21.4144967,
      "lng": 39.8813124
    },
    {
      "id": "MH72",
      "lat": 21.4162396,
      "lng": 39.8806847
    },
    {
      "id": "MH73",
      "lat": 21.4178627,
      "lng": 39.8799981
    },
    {
      "id": "MH74",
      "lat": 21.4112106,
      "lng": 39.8857311
    },
    {
      "id": "MH75",
      "lat": 21.4076471,
      "lng": 39.8899628
    },
    {
      "id": "MH76",
      "lat": 21.4093845,
      "lng": 39.8907603
    },
    {
      "id": "MH77",
      "lat": 21.4133375,
      "lng": 39.8826844
    },
    {
      "id": "MH78",
      "lat": 21.4163028,
      "lng": 39.883399
    },
    {
      "id": "MH79",
      "lat": 21.4078273,
      "lng": 39.8901072
    },
    {
      "id": "MH80",
      "lat": 21.4166004,
      "lng": 39.8789371
    },
    {
      "id": "MH81",
      "lat": 21.4138466,
      "lng": 39.88183
    },
    {
      "id": "MH82",
      "lat": 21.4136918,
      "lng": 39.8820177
    },
    {
      "id": "MH83",
      "lat": 21.4134848,
      "lng": 39.8824484
    },
    {
      "id": "MH84",
      "lat": 21.4122543,
      "lng": 39.8875193
    },
    {
      "id": "MH85",
      "lat": 21.4093626,
      "lng": 39.8880329
    }
  ],
  "بطن منى الشمالي": [
    {
      "id": "MH86",
      "lat": 21.4193403,
      "lng": 39.8812049
    },
    {
      "id": "MH87",
      "lat": 21.4142091,
      "lng": 39.892582
    },
    {
      "id": "MH88",
      "lat": 21.4165745,
      "lng": 39.8846857
    },
    {
      "id": "MH89",
      "lat": 21.4203267,
      "lng": 39.8812256
    },
    {
      "id": "MH90",
      "lat": 21.4203141,
      "lng": 39.8811459
    },
    {
      "id": "MH91",
      "lat": 21.4197049,
      "lng": 39.8839032
    },
    {
      "id": "MH92",
      "lat": 21.4106591,
      "lng": 39.8919189
    },
    {
      "id": "MH93",
      "lat": 21.4128478,
      "lng": 39.8925071
    },
    {
      "id": "MH94",
      "lat": 21.4154277,
      "lng": 39.8905918
    },
    {
      "id": "MH95",
      "lat": 21.4137018,
      "lng": 39.888756
    },
    {
      "id": "MH96",
      "lat": 21.418529,
      "lng": 39.8845792
    },
    {
      "id": "MH97",
      "lat": 21.4161219,
      "lng": 39.8882369
    },
    {
      "id": "MH98",
      "lat": 21.4193403,
      "lng": 39.8812049
    },
    {
      "id": "MH99",
      "lat": 21.4178668,
      "lng": 39.885717
    },
    {
      "id": "MH100",
      "lat": 21.4171427,
      "lng": 39.8836652
    },
    {
      "id": "MH101",
      "lat": 21.4155846,
      "lng": 39.8878333
    },
    {
      "id": "MH102",
      "lat": 21.4182014,
      "lng": 39.8809615
    },
    {
      "id": "MH103",
      "lat": 21.4176508,
      "lng": 39.8823898
    },
    {
      "id": "MH104",
      "lat": 21.4138279,
      "lng": 39.8904369
    },
    {
      "id": "MH105",
      "lat": 21.412497,
      "lng": 39.8903364
    },
    {
      "id": "MH106",
      "lat": 21.4153377,
      "lng": 39.8861448
    },
    {
      "id": "MH107",
      "lat": 21.4183002,
      "lng": 39.8834344
    },
    {
      "id": "MH108",
      "lat": 21.4148416,
      "lng": 39.8871924
    },
    {
      "id": "MH109",
      "lat": 21.4168485,
      "lng": 39.8862187
    },
    {
      "id": "MH110",
      "lat": 21.4131959,
      "lng": 39.8883795
    },
    {
      "id": "MH111",
      "lat": 21.4103555,
      "lng": 39.8914814
    }
  ],
  "الشعيبين": [
    {
      "id": "MH112",
      "lat": 21.4131758,
      "lng": 39.9008867
    },
    {
      "id": "MH113",
      "lat": 21.4185277,
      "lng": 39.895871
    },
    {
      "id": "MH114",
      "lat": 21.419911,
      "lng": 39.8925505
    },
    {
      "id": "MH115",
      "lat": 21.4294735,
      "lng": 39.9054542
    },
    {
      "id": "MH116",
      "lat": 21.4244071,
      "lng": 39.8998937
    },
    {
      "id": "MH117",
      "lat": 21.4205294,
      "lng": 39.8923298
    },
    {
      "id": "MH118",
      "lat": 21.4240413,
      "lng": 39.8951289
    },
    {
      "id": "MH119",
      "lat": 21.4116982,
      "lng": 39.9093006
    },
    {
      "id": "MH120",
      "lat": 21.4114686,
      "lng": 39.9094944
    }
  ],
  "منى الجديد 1": [
    {
      "id": "MH121",
      "lat": 21.4125453,
      "lng": 39.8959471
    },
    {
      "id": "MH122",
      "lat": 21.4030243,
      "lng": 39.8948683
    },
    {
      "id": "MH123",
      "lat": 21.4031416,
      "lng": 39.8940651
    },
    {
      "id": "MH124",
      "lat": 21.405504,
      "lng": 39.8891763
    },
    {
      "id": "MH125",
      "lat": 21.4110131,
      "lng": 39.8987977
    },
    {
      "id": "MH126",
      "lat": 21.4070409,
      "lng": 39.8974509
    },
    {
      "id": "MH127",
      "lat": 21.4122599,
      "lng": 39.8960615
    },
    {
      "id": "MH128",
      "lat": 21.4092911,
      "lng": 39.8915339
    },
    {
      "id": "MH129",
      "lat": 21.4116284,
      "lng": 39.8929019
    },
    {
      "id": "MH130",
      "lat": 21.4054508,
      "lng": 39.8901446
    },
    {
      "id": "MH131",
      "lat": 21.4028988,
      "lng": 39.8948493
    },
    {
      "id": "MH132",
      "lat": 21.4037029,
      "lng": 39.893358
    }
  ],
  "منى الجديد 2": [
    {
      "id": "MH133",
      "lat": 21.4013019,
      "lng": 39.8964704
    },
    {
      "id": "MH134",
      "lat": 21.397855,
      "lng": 39.8995292
    },
    {
      "id": "MH135",
      "lat": 21.3952977,
      "lng": 39.90072
    },
    {
      "id": "MH136",
      "lat": 21.4017411,
      "lng": 39.905956
    },
    {
      "id": "MH137",
      "lat": 21.3995185,
      "lng": 39.8998245
    },
    {
      "id": "MH138",
      "lat": 21.4029697,
      "lng": 39.8979496
    },
    {
      "id": "MH139",
      "lat": 21.4030097,
      "lng": 39.8979496
    },
    {
      "id": "MH140",
      "lat": 21.4058664,
      "lng": 39.9019533
    },
    {
      "id": "MH141",
      "lat": 21.4104178,
      "lng": 39.9018903
    },
    {
      "id": "MH142",
      "lat": 21.4028911,
      "lng": 39.8980762
    },
    {
      "id": "MH143",
      "lat": 21.4028661,
      "lng": 39.8981352
    },
    {
      "id": "MH144",
      "lat": 21.4059077,
      "lng": 39.8978724
    },
    {
      "id": "MH145",
      "lat": 21.4011816,
      "lng": 39.9003908
    },
    {
      "id": "MH146",
      "lat": 21.3959698,
      "lng": 39.9073243
    },
    {
      "id": "MH147",
      "lat": 21.3958074,
      "lng": 39.9038401
    },
    {
      "id": "MH148",
      "lat": 21.3935148,
      "lng": 39.905436
    }
  ]
};


function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("منصة نطاق منى")
    .addItem("إعداد الأوراق والداشبورد", "setupSystem")
    .addToUi();
}

function setupSystem() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheetsConfig = {
    "تسليم المناوبة": [
      "وقت الحفظ", "القطاع", "نوع المناوبة", "التاريخ", "الوقت من", "الوقت إلى",
      "كبير المسعفين المسلم", "كبير المسعفين المستلم", "مساعد 1", "مساعد 2", "مساعد 3", "مساعد 4",
      "متوسط زمن الاستجابة", "متوسط زمن استجابة ECHO", "إجمالي البلاغات",
      "عدد الفرق الفعالة", "عدد الفرق المعتمدة", "أحداث طارئة",
      "M-حادث جسيم", "E-الموقع", "T-نوع الحادث", "H-المخاطر", "A-الوصول", "N-الإصابات", "E-الخدمات", "ملاحظات ميثان",
      "عدد مركبات الإسعاف", "عدد القولف", "عدد الاستجابة النوعية", "عدد فرق التدخل السريع",
      "العاملة", "الاحتياط", "الخارج عن الخدمة",
      "بلاغات الدعم اللوجستي", "البلاغات المفتوحة",
      "مواقع الانتشار", "الوحدات المتعطلة ومواقعها",
      "نداء الفرقة 1", "توقيت العطل 1", "نوع العطل 1", "الإجراء المتبع 1", "العودة للخدمة 1", "لوحة المركبة 1",
      "نداء الفرقة 2", "توقيت العطل 2", "نوع العطل 2", "الإجراء المتبع 2", "العودة للخدمة 2", "لوحة المركبة 2",
      "نداء الفرقة 3", "توقيت العطل 3", "نوع العطل 3", "الإجراء المتبع 3", "العودة للخدمة 3", "لوحة المركبة 3",
      "التحذيرات الجوية", "التحذيرات الأمنية", "مواقع خطرة", "إصابات العاملين", "إحاطات أخرى",
      "ملخص الأحداث", "ملخص الموارد المطلوبة وتوزيعها", "ملاحظات عامة عن المناوبة", "الرسالة النهائية"
    ],
    "العهد الشخصية": [
      "وقت الحفظ", "القطاع", "التاريخ", "فترة المناوبة",
      "عدد جهاز لوكس", "حالة جهاز لوكس", "ملاحظات جهاز لوكس",
      "عدد جهاز ميندري", "حالة جهاز ميندري", "ملاحظات جهاز ميندري",
      "عدد جهاز لايف باك", "حالة جهاز لايف باك", "ملاحظات جهاز لايف باك",
      "عدد جهاز اللاسلكي", "حالة جهاز اللاسلكي", "ملاحظات جهاز اللاسلكي",
      "عدد جهاز لوحي (تابلت)", "حالة جهاز لوحي (تابلت)", "ملاحظات جهاز لوحي (تابلت)",
      "عدد جهاز قياس العلامات الحيوية", "حالة جهاز قياس العلامات الحيوية", "ملاحظات جهاز قياس العلامات الحيوية"
    ],
    "الخزن الاستراتيجي": [
      "وقت الحفظ", "تاريخ التشييك", "وقت التشييك", "القائم بالتشييك", "موقع الخزن",
      "هل يوجد نقص طبي", "النقص الطبية"
    ],
    "العهد الشخصية للقطاعات": [
      "وقت الحفظ", "القطاع", "التاريخ", "فترة المناوبة",
      "كبير المسعفين", "مساعد 1", "مساعد 2", "مساعد 3", "مساعد 4",
      "عدد جهاز لوكس", "حالة جهاز لوكس", "ملاحظات جهاز لوكس",
      "عدد جهاز ميندري", "حالة جهاز ميندري", "ملاحظات جهاز ميندري",
      "عدد جهاز لايف باك", "حالة جهاز لايف باك", "ملاحظات جهاز لايف باك",
      "عدد جهاز اللاسلكي", "حالة جهاز اللاسلكي", "ملاحظات جهاز اللاسلكي",
      "عدد جهاز لوحي (تابلت)", "حالة جهاز لوحي (تابلت)", "ملاحظات جهاز لوحي (تابلت)",
      "عدد جهاز قياس العلامات الحيوية", "حالة جهاز قياس العلامات الحيوية", "ملاحظات جهاز قياس العلامات الحيوية"
    ],
    "رسائل ميثان": [
      "وقت الحفظ", "القطاع", "اسم المبلغ", "رقم التواصل",
      "M - حادث جسيم", "E - الموقع", "T - نوع الحادث", "H - المخاطر", "A - الوصول والمغادرة", "N - الإصابات", "E - الخدمات الإسعافية المطلوبة",
      "ملاحظات إضافية", "الرسالة النهائية"
    ],
    "خطة الدعم": [
      "التاريخ", "الوقت", "عدد الفرق", "نوع التدعيم", "وقت الحضور", "اسم مدخل البيانات",
      "الملاحظات", "القطاع المدعم منه", "القطاع المدعم له", "النطاق المدعم منه", "النطاق المدعم له"
    ],
    "خطة الانتشار": [
      "الرمز", "القطاع", "نوع الآلية", "مناوبة النقطة", "عدد الفرق الفعلي",
      "Latitude", "Longitude", "ملاحظة السجل", "الحالة"
    ],
    "التحضير اليومي": ["وقت الحفظ", "النطاق", "القطاع", "الفترة", "التاريخ والوقت", "كبير المسعفين", "مساعد1", "مساعد2", "مساعد3", "مساعد4", "الوحدات التشغيلية", "مقدمي الخدمة", "الموظفين", "المتطوعين", "المركبات", "القولف", "الراجلة", "مركبات التدخل السريع", "الملاحظات"]
  };

  const headerBgColor = "#2c3e50"; 
  const headerFontColor = "#ffffff"; 
  const alternatingRowColor1 = "#ecf0f1"; 

  Object.keys(sheetsConfig).forEach(name => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) sheet = ss.insertSheet(name);
    sheet.setRightToLeft(true);

    if (sheet.getLastColumn() === 0 || sheet.getRange(1, 1).getValue() === "") {
      sheet.getRange(1, 1, 1, sheetsConfig[name].length).setValues([sheetsConfig[name]]);
      const headerRange = sheet.getRange(1, 1, 1, sheetsConfig[name].length);
      headerRange.setFontWeight("bold").setBackground(headerBgColor).setFontColor(headerFontColor);
      sheet.setFrozenRows(1);
    }

    const numRows = 1000;
    const dataRange = sheet.getRange(2, 1, numRows, sheet.getLastColumn());
    const rule = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied("=MOD(ROW(),2)=0")
      .setBackground(alternatingRowColor1)
      .setRanges([dataRange])
      .build();
    const rules = sheet.getConditionalFormatRules();
    rules.push(rule);
    sheet.setConditionalFormatRules(rules);
    sheet.autoResizeColumns(1, sheet.getLastColumn());
  });

  let dashboardConfigSheet = ss.getSheetByName("إعدادات الداشبورد");
  if (!dashboardConfigSheet) {
    dashboardConfigSheet = ss.insertSheet("إعدادات الداشبورد");
    dashboardConfigSheet.setRightToLeft(true);
    dashboardConfigSheet.getRange("A1").setValue("إجمالي النقاط الثابتة");
    dashboardConfigSheet.getRange("B1").setValue(148); 
    dashboardConfigSheet.getRange("A1:B1").setFontWeight("bold").setBackground(headerBgColor).setFontColor(headerFontColor);
    dashboardConfigSheet.autoResizeColumns(1, 2);
  } else {
    dashboardConfigSheet.getRange("B1").setValue(148);
  }

  SpreadsheetApp.getUi().alert("تم إعداد كافة الأوراق وتطبيق الهوية البصرية بنجاح.");
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // Wait for 30 seconds for the lock

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const action = e.parameter.action;
    let sheetName;
    let rowData = [];

    // Add timestamp as the first column for all forms
    const timestamp = new Date().toLocaleString("ar-SA", { timeZone: "Asia/Riyadh" });

    switch (action) {
      case 'submitHandover':
        sheetName = 'تسليم المناوبة';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.shift,
          e.parameter.date,
          e.parameter.time_from,
          e.parameter.time_to,
          e.parameter.leader_handover,
          e.parameter.leader_receive,
          e.parameter.assistant1,
          e.parameter.assistant2,
          e.parameter.assistant3,
          e.parameter.assistant4,
          e.parameter.avg_response_time,
          e.parameter.avg_echo_response_time,
          e.parameter.total_reports,
          e.parameter.active_teams,
          e.parameter.approved_teams,
          e.parameter.ambulance_count,
          e.parameter.golf_count,
          e.parameter.special_response_count,
          e.parameter.rapid_response_count,
          e.parameter.working_units,
          e.parameter.reserve_units,
          e.parameter.emergency_events,
          e.parameter.methane_m || '',
          e.parameter.methane_e || '',
          e.parameter.methane_t || '',
          e.parameter.methane_h || '',
          e.parameter.methane_a || '',
          e.parameter.methane_n || '',
          e.parameter.methane_e2 || '',
          e.parameter.methane_notes || ''
        ];
        break;
      case 'submitPersonalEquipment':
        sheetName = 'العهد الشخصية';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.date,
          e.parameter.shift,
          e.parameter.LUCAS_count,
          e.parameter.LUCAS_status,
          e.parameter.LUCAS_notes || '',
          e.parameter.Mindray_count,
          e.parameter.Mindray_status,
          e.parameter.Mindray_notes || '',
          e.parameter.Lifepak15_count,
          e.parameter.Lifepak15_status,
          e.parameter.Lifepak15_notes || '',
          e.parameter.Wireless_count,
          e.parameter.Wireless_status,
          e.parameter.Wireless_notes || '',
          e.parameter.Tablet_count,
          e.parameter.Tablet_status,
          e.parameter.Tablet_notes || '',
          e.parameter.VitalSignsMonitor_count,
          e.parameter.VitalSignsMonitor_status,
          e.parameter.VitalSignsMonitor_notes || ''
        ];
        break;
      case 'submitStrategicStock':
        sheetName = 'الخزن الاستراتيجي';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.date,
          e.parameter.shift,
          e.parameter.medical_shortage_status,
          e.parameter.medical_shortage_list || ''
        ];
        break;
      case 'submitPersonalEquipmentUnits':
        sheetName = 'العهد الشخصية للقطاعات';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.date,
          e.parameter.shift,
          e.parameter.leader,
          e.parameter.assistant1,
          e.parameter.assistant2,
          e.parameter.assistant3,
          e.parameter.assistant4,
          e.parameter.جهاز_لوكس_count,
          e.parameter.جهاز_لوكس_status,
          e.parameter.جهاز_لوكس_notes || '',
          e.parameter.جهاز_ميندري_count,
          e.parameter.جهاز_ميندري_status,
          e.parameter.جهاز_ميندري_notes || '',
          e.parameter.جهاز_لايف_باك_count,
          e.parameter.جهاز_لايف_باك_status,
          e.parameter.جهاز_لايف_باك_notes || '',
          e.parameter.جهاز_اللاسلكي_count,
          e.parameter.جهاز_اللاسلكي_status,
          e.parameter.جهاز_اللاسلكي_notes || '',
          e.parameter.جهاز_لوحي_تابلت_count,
          e.parameter.جهاز_لوحي_تابلت_status,
          e.parameter.جهاز_لوحي_تابلت_notes || '',
          e.parameter.جهاز_قياس_العلامات_الحيوية_count,
          e.parameter.جهاز_قياس_العلامات_الحيوية_status,
          e.parameter.جهاز_قياس_العلامات_الحيوية_notes || ''
        ];
        break;
      case 'submitMethane':
        sheetName = 'رسائل ميثان';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.date,
          e.parameter.shift,
          e.parameter.m,
          e.parameter.e,
          e.parameter.t,
          e.parameter.h,
          e.parameter.a,
          e.parameter.n,
          e.parameter.e2,
          e.parameter.notes || ''
        ];
        break;
      case 'submitSupportPlan':
        sheetName = 'خطة الدعم';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.date,
          e.parameter.shift,
          e.parameter.support_type,
          e.parameter.units,
          e.parameter.location,
          e.parameter.notes || ''
        ];
        break;
      case 'submitDeploymentPlan':
        sheetName = 'خطة الانتشار';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.date,
          e.parameter.shift,
          e.parameter.deployment_point,
          e.parameter.team_id,
          e.parameter.leader_name,
          e.parameter.status,
          e.parameter.notes || ''
        ];
        break;
      case 'submitDailyPreparation':
        sheetName = 'التحضير اليومي';
        rowData = [
          timestamp,
          e.parameter.sector,
          e.parameter.date,
          e.parameter.shift,
          e.parameter.equipment_check,
          e.parameter.vehicle_check,
          e.parameter.personnel_briefing,
          e.parameter.notes || ''
        ];
        break;
      default:
        throw new Error('Invalid action: ' + action);
    }

    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      throw new Error(`Sheet not found: ${sheetName}`);
    }

    sheet.appendRow(rowData);

    SCRIPT_PROPERTIES.setProperty("lastDashboardUpdate", new Date().toISOString());
    lock.releaseLock();
    return ContentService.createTextOutput(JSON.stringify({ success: true, message: "تم الحفظ بنجاح" })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    lock.releaseLock();
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  const action = e.parameter.action;
  if (action === "getDashboardData") return ContentService.createTextOutput(JSON.stringify(getProcessedDashboardData())).setMimeType(ContentService.MimeType.JSON);
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = action === "getDeployment" ? "خطة الانتشار" : (action === "getSupport" || action === "getSupportData" ? "خطة الدعم" : null);
  
  if (sheetName) {
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
    const data = sheet.getDataRange().getValues();
    const headers = data.shift();
    const result = data.map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });
    return ContentService.createTextOutput(JSON.stringify(action === "getDeployment" ? result : { data: result })).setMimeType(ContentService.MimeType.JSON);
  }
  return HtmlService.createHtmlOutput("<h1>الوصول غير مصرح به</h1>");
}

function getProcessedDashboardData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dashboardConfigSheet = ss.getSheetByName("إعدادات الداشبورد");
  const totalFixedPoints = dashboardConfigSheet ? dashboardConfigSheet.getRange("B1").getValue() : 148;

  const handoverSheet = ss.getSheetByName("تسليم المناوبة");
  const peUnitsSheet = ss.getSheetByName("العهد الشخصية للقطاعات");
  const handoverData = handoverSheet ? handoverSheet.getDataRange().getValues() : [];
  const peUnitsData = peUnitsSheet ? peUnitsSheet.getDataRange().getValues() : [];

  const latestHandoverEntries = getLatestEntriesBySector(handoverData);
  const latestPeUnitsEntries = getLatestEntriesBySector(peUnitsData);

  let totalDynamicTeams = 0;
  const sectorsSummary = {};
  const mapLocations = [];
  const allSectors = Object.keys(SECTOR_COORDINATES);

  allSectors.forEach(sector => {
    const handoverEntry = latestHandoverEntries[sector];
    const peUnitsEntry = latestPeUnitsEntries[sector];

    let activeTeams = handoverEntry ? parseInt(handoverEntry["عدد الفرق الفعالة"] || 0) : 0;
    let rapidResponseTeams = handoverEntry ? parseInt(handoverEntry["عدد فرق التدخل السريع"] || 0) : 0;
    let emsLead = handoverEntry ? (handoverEntry["كبير المسعفين المسلم"] || "-") : (peUnitsEntry ? (peUnitsEntry["كبير المسعفين"] || "-") : "-");
    let assistants = handoverEntry ? [handoverEntry["مساعد 1"], handoverEntry["مساعد 2"], handoverEntry["مساعد 3"], handoverEntry["مساعد 4"]] : (peUnitsEntry ? [peUnitsEntry["مساعد 1"], peUnitsEntry["مساعد 2"], peUnitsEntry["مساعد 3"], peUnitsEntry["مساعد 4"]] : ["-", "-", "-", "-"]);

    totalDynamicTeams += activeTeams;
    sectorsSummary[sector] = { activeTeams, rapidResponseTeams, emsLead, assistants, lastUpdate: (handoverEntry ? handoverEntry["وقت الحفظ"] : (peUnitsEntry ? peUnitsEntry["وقت الحفظ"] : "لا يوجد بيانات")) };

    const coords = SECTOR_COORDINATES[sector] || { lat: 21.4225, lng: 39.8262 };
    mapLocations.push({ sector, teams: activeTeams, lat: coords.lat, lng: coords.lng, status: activeTeams > 0 ? "active" : "inactive", lastUpdate: sectorsSummary[sector].lastUpdate });
  });

  return { totalPoints: totalFixedPoints, totalTeams: totalDynamicTeams, sectors: sectorsSummary, mapLocations, lastDashboardUpdate: SCRIPT_PROPERTIES.getProperty("lastDashboardUpdate") || "لا يوجد تحديث" };
}

function getLatestEntriesBySector(data) {
  if (data.length === 0) return {};
  const headers = data.shift();
  const latestEntries = {};
  data.forEach(row => {
    const entry = {};
    headers.forEach((h, i) => entry[h] = row[i]);
    const sector = entry["القطاع"];
    const timestamp = new Date(entry["وقت الحفظ"]);
    if (sector && !isNaN(timestamp) && (!latestEntries[sector] || timestamp > new Date(latestEntries[sector]["وقت الحفظ"]))) latestEntries[sector] = entry;
  });
  return latestEntries;
}
