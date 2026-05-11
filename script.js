// ============================================
// DATA HARGA LENGKAP UNTUK UMUR 20-60
// ============================================

// RM500 Deductible (Standard) - Page 14-15
const standardData = {
    180: {
        male: {20:1079,21:1153,22:1169,23:1178,24:1180,25:1186,26:1244,27:1246,28:1249,29:1260,30:1277,31:1336,32:1356,33:1374,34:1405,35:1423,36:1440,37:1471,38:1490,39:1505,40:1521,41:1637,42:1703,43:1763,44:1842,45:1863,46:1978,47:2046,48:2092,49:2159,50:2220,51:2360,52:2560,53:2760,54:2960,55:3160,56:3360,57:3560,58:3760,59:3960,60:4160},
        female: {20:1077,21:1096,22:1116,23:1126,24:1136,25:1145,26:1155,27:1166,28:1176,29:1185,30:1195,31:1315,32:1335,33:1374,34:1395,35:1415,36:1425,37:1474,38:1514,39:1554,40:1574,41:1673,42:1702,43:1734,44:1773,45:1972,46:2072,47:2171,48:2271,49:2370,50:2458,51:2580,52:2780,53:2980,54:3180,55:3380,56:3580,57:3780,58:3980,59:4180,60:4380}
    },
    250: {
        male: {20:1220,21:1269,22:1286,23:1296,24:1298,25:1305,26:1369,27:1371,28:1373,29:1386,30:1405,31:1469,32:1492,33:1511,34:1545,35:1566,36:1584,37:1618,38:1639,39:1656,40:1673,41:1800,42:1875,43:1938,44:2027,45:2049,46:2176,47:2252,48:2396,49:2458,50:2554,51:2750,52:2980,53:3210,54:3440,55:3670,56:3900,57:4130,58:4360,59:4590,60:4820},
        female: {20:1237,21:1259,22:1283,23:1294,24:1305,25:1317,26:1329,27:1340,28:1351,29:1363,30:1374,31:1511,32:1534,33:1580,34:1603,35:1626,36:1637,37:1694,38:1740,39:1786,40:1809,41:1924,42:1957,43:1992,44:2038,45:2266,46:2381,47:2496,48:2610,49:2725,50:2827,51:2949,52:3070,53:3200,54:3340,55:3740,56:3850,57:3970,58:4100,59:4250,60:4450}
    },
    350: {
        male: {20:1403,21:1416,22:1429,23:1443,24:1467,25:1494,26:1519,27:1546,28:1571,29:1611,30:1649,31:1689,32:1713,33:1753,34:1792,35:1832,36:1836,37:1840,38:1863,39:1906,40:1943,41:2123,42:2213,43:2288,44:2392,45:2418,46:2567,47:2657,48:2827,49:2900,50:3014,51:3250,52:3520,53:3790,54:4060,55:4330,56:4600,57:4870,58:5140,59:5410,60:5680},
        female: {20:1423,21:1448,22:1475,23:1489,24:1501,25:1515,26:1529,27:1541,28:1555,29:1568,30:1581,31:1738,32:1765,33:1818,34:1843,35:1870,36:1884,37:1950,38:2002,39:2055,40:2081,41:2271,42:2310,43:2351,44:2405,45:2675,46:2811,47:2945,48:3080,49:3216,50:3336,51:3500,52:3750,53:4000,54:4250,55:4500,56:4750,57:5000,58:5250,59:5500,60:5750}
    }
};

// SMART Option Data (RM500 Deductible with SMART Option) - Page 16
const smartData = {
    180: {
        male: {20:863,21:922,22:935,23:942,24:944,25:949,26:995,27:997,28:999,29:1008,30:1022,31:1069,32:1085,33:1099,34:1124,35:1138,36:1152,37:1177,38:1192,39:1204,40:1217,41:1310,42:1362,43:1410,44:1474,45:1490,46:1582,47:1637,48:1674,49:1727,50:1776,51:1888,52:2048,53:2208,54:2368,55:2528,56:2688,57:2848,58:3008,59:3168,60:3328},
        female: {20:862,21:877,22:893,23:901,24:909,25:916,26:924,27:933,28:941,29:948,30:956,31:1052,32:1068,33:1099,34:1116,35:1132,36:1140,37:1179,38:1211,39:1243,40:1259,41:1338,42:1362,43:1387,44:1418,45:1578,46:1658,47:1737,48:1817,49:1896,50:1966,51:2064,52:2224,53:2384,54:2544,55:2704,56:2864,57:3024,58:3184,59:3344,60:3504}
    },
    250: {
        male: {20:976,21:1015,22:1029,23:1037,24:1038,25:1044,26:1095,27:1097,28:1098,29:1109,30:1124,31:1175,32:1194,33:1209,34:1236,35:1253,36:1267,37:1294,38:1311,39:1325,40:1338,41:1440,42:1500,43:1550,44:1622,45:1639,46:1741,47:1802,48:1917,49:1966,50:2043,51:2200,52:2384,53:2568,54:2752,55:2936,56:3120,57:3304,58:3488,59:3672,60:3856},
        female: {20:990,21:1007,22:1026,23:1035,24:1044,25:1054,26:1063,27:1072,28:1081,29:1090,30:1099,31:1209,32:1227,33:1264,34:1282,35:1301,36:1310,37:1355,38:1392,39:1429,40:1447,41:1539,42:1566,43:1594,44:1630,45:1813,46:1905,47:1997,48:2088,49:2180,50:2262,51:2359,52:2456,53:2560,54:2672,55:2992,56:3080,57:3176,58:3280,59:3400,60:3560}
    },
    350: {
        male: {20:1122,21:1133,22:1143,23:1154,24:1174,25:1195,26:1215,27:1237,28:1257,29:1289,30:1319,31:1351,32:1370,33:1402,34:1434,35:1466,36:1469,37:1472,38:1490,39:1525,40:1554,41:1698,42:1770,43:1830,44:1914,45:1934,46:2054,47:2126,48:2262,49:2320,50:2411,51:2600,52:2816,53:3032,54:3248,55:3464,56:3680,57:3896,58:4112,59:4328,60:4544},
        female: {20:1138,21:1158,22:1180,23:1191,24:1201,25:1212,26:1223,27:1233,28:1244,29:1254,30:1265,31:1390,32:1412,33:1454,34:1474,35:1496,36:1507,37:1560,38:1602,39:1644,40:1665,41:1817,42:1848,43:1880,44:1924,45:2140,46:2249,47:2356,48:2464,49:2572,50:2668,51:2800,52:3000,53:3200,54:3400,55:3600,56:3800,57:4000,58:4200,59:4400,60:4600}
    }
};

// RM20,000 Deductible Data - Page 18-19
const deductible20kData = {
    180: {
        male: {20:486,21:486,22:486,23:486,24:486,25:486,26:486,27:486,28:486,29:486,30:545,31:546,32:602,33:657,34:697,35:736,36:776,37:815,38:855,39:879,40:902,41:927,42:951,43:975,44:1024,45:1073,46:1123,47:1171,48:1220,49:1250,50:1280,51:1309,52:1340,53:1369,54:1517,55:1665,56:1813,57:1960,58:2108,59:2473,60:2838},
        female: {20:486,21:486,22:486,23:486,24:486,25:486,26:486,27:486,28:486,29:486,30:486,31:486,32:486,33:499,34:526,35:552,36:579,37:606,38:633,39:685,40:738,41:790,42:843,43:895,44:920,45:944,46:968,47:993,48:1017,49:1066,50:1116,51:1165,52:1214,53:1263,54:1372,55:1481,56:1590,57:1698,58:1807,59:2131,60:2455}
    },
    250: {
        male: {20:535,21:535,22:535,23:535,24:535,25:535,26:535,27:535,28:535,29:535,30:599,31:601,32:661,33:723,34:766,35:809,36:853,37:897,38:940,39:966,40:993,41:1019,42:1046,43:1073,44:1127,45:1180,46:1234,47:1288,48:1342,49:1375,50:1408,51:1440,52:1474,53:1506,54:1669,55:1831,56:1993,57:2156,58:2318,59:2720,60:3122},
        female: {20:535,21:535,22:535,23:535,24:535,25:535,26:535,27:535,28:535,29:535,30:535,31:535,32:535,33:549,34:578,35:609,36:638,37:667,38:696,39:754,40:812,41:869,42:927,43:984,44:1011,45:1038,46:1065,47:1092,48:1118,49:1173,50:1227,51:1281,52:1335,53:1389,54:1509,55:1629,56:1749,57:1869,58:1988,59:2344,60:2700}
    },
    350: {
        male: {20:616,21:616,22:616,23:616,24:616,25:616,26:616,27:616,28:616,29:616,30:688,31:691,32:761,33:831,34:881,35:931,36:981,37:1031,38:1080,39:1111,40:1142,41:1203,42:1234,43:1265,44:1329,45:1393,46:1456,47:1520,48:1584,49:1623,50:1660,51:1699,52:1738,53:1777,54:1968,55:2160,56:2352,57:2544,58:2736,59:3209,60:3683},
        female: {20:616,21:616,22:616,23:616,24:616,25:616,26:616,27:616,28:616,29:616,30:616,31:616,32:616,33:631,34:666,35:699,36:733,37:767,38:801,39:867,40:934,41:1025,42:1093,43:1161,44:1193,45:1225,46:1257,47:1288,48:1320,49:1384,50:1448,51:1511,52:1575,53:1640,54:1780,55:1922,56:2063,57:2205,58:2346,59:2766,60:3186}
    }
};

// Booster Prices (A-Plus MediBoost-i) - Page 27-28
const boosterData = {
    250: {
        male: {20:206,21:224,22:224,23:224,24:224,25:224,26:224,27:224,28:224,29:224,30:252,31:252,32:252,33:252,34:252,35:252,36:273,37:273,38:273,39:273,40:301,41:301,42:301,43:301,44:301,45:301,46:331,47:331,48:331,49:331,50:368,51:389,52:410,53:431,54:452,55:492,56:495,57:558,58:612,59:680,60:744},
        female: {20:196,21:208,22:208,23:208,24:208,25:208,26:208,27:208,28:208,29:208,30:231,31:231,32:231,33:231,34:231,35:231,36:250,37:250,38:250,39:250,40:250,41:279,42:279,43:279,44:279,45:279,46:294,47:294,48:294,49:294,50:311,51:347,52:383,53:419,54:455,55:472,56:525,57:556,58:597,59:623,60:641}
    },
    350: {
        male: {20:289,21:289,22:289,23:289,24:289,25:289,26:289,27:289,28:289,29:289,30:337,31:337,32:337,33:337,34:337,35:337,36:366,37:366,38:366,39:366,40:416,41:416,42:416,43:416,44:416,45:416,46:450,47:450,48:450,49:450,50:566,51:575,52:587,53:617,54:647,55:708,56:725,57:759,58:833,59:926,60:975},
        female: {20:254,21:276,22:276,23:276,24:276,25:276,26:276,27:276,28:276,29:276,30:312,31:312,32:312,33:312,34:312,35:312,36:337,37:337,38:337,39:337,40:340,41:380,42:380,43:380,44:380,45:380,46:391,47:391,48:391,49:391,50:414,51:469,52:518,53:566,54:614,55:638,56:709,57:751,58:805,59:841,60:943}
    }
};

// A-Plus MediRecover-i (Page 31 - per RM1,000, minimum RM10,000)
const apmriData = {
    male: {20:2.51,21:3.25,22:3.27,23:3.28,24:3.29,25:3.29,26:3.29,27:3.30,28:3.31,29:3.32,30:3.59,31:3.60,32:3.61,33:3.62,34:3.63,35:3.64,36:3.99,37:4.00,38:4.01,39:4.02,40:4.11,41:5.50,42:5.50,43:5.50,44:5.56,45:5.56,46:7.30,47:7.30,48:7.30,49:7.30,50:8.03,51:8.06,52:8.17,53:8.50,54:9.12,55:9.65,56:10.81,57:11.59,58:12.06,59:12.72,60:13.34},
    female: {20:2.30,21:2.81,22:2.82,23:2.85,24:2.85,25:2.86,26:2.86,27:2.87,28:2.88,29:2.89,30:3.02,31:3.04,32:3.05,33:3.06,34:3.07,35:3.08,36:3.30,37:3.30,38:3.30,39:3.30,40:3.37,41:5.37,42:5.37,43:5.37,44:5.39,45:5.39,46:6.30,47:6.35,48:6.43,49:6.43,50:7.09,51:7.33,52:7.92,53:8.37,54:8.76,55:9.16,56:9.22,57:9.47,58:9.78,59:10.36,60:10.94}
};

const APMRI_SUM = 10000;
const PAYMENT_LOADING = { annual: 1, half: 1.022, quarter: 1.011, monthly: 1.044 };
const CLASS_LOADING = { 1: 1, 2: 1, 3: 1, 4: 1.4 };
const COST_OPTIONS = { rm500: 'standard', smart: 'smart', rm20000: '20k' };

function getValue(dataObj, age, gender, defaultValue = 0) {
    if (!dataObj || !dataObj[gender]) return defaultValue;
    if (dataObj[gender][age]) return dataObj[gender][age];
    
    let ages = Object.keys(dataObj[gender]).map(Number).sort((a,b)=>a-b);
    let closest = ages[0];
    for (let a of ages) if (a <= age) closest = a;
    return dataObj[gender][closest] || defaultValue;
}

function getBasicPrice(plan, age, gender, option) {
    let dataSource;
    if (option === 'smart') dataSource = smartData;
    else if (option === '20k') dataSource = deductible20kData;
    else dataSource = standardData;
    
    if (!dataSource[plan]) return 0;
    return getValue(dataSource[plan], age, gender, 0);
}

function getBoosterPrice(plan, age, gender) {
    if (plan === 180) return 0;
    if (!boosterData[plan]) return 0;
    return getValue(boosterData[plan], age, gender, 0);
}

function getApmriPrice(age, gender) {
    let rate = getValue(apmriData, age, gender, 0);
    return (rate * APMRI_SUM) / 1000;
}

function formatCurrency(value) {
    return value.toFixed(2);
}

function getOptionDisplay(option) {
    if (option === 'smart') return 'RM500 Deductible with SMART Option';
    if (option === '20k') return 'RM20,000 Deductible';
    return 'RM500 Deductible (Standard)';
}

function getOptionInfo(option) {
    if (option === 'smart') {
        return '<i class="fas fa-info-circle"></i> SMART Option: Deductible RM500 + 20% co-pay (max RM20,000) jika tidak ikut panel SMART';
    }
    if (option === '20k') {
        return '<i class="fas fa-info-circle"></i> RM20,000 Deductible: Premium lebih rendah, anda tanggung RM20,000 setiap tahun polisi';
    }
    return '<i class="fas fa-info-circle"></i> RM500 Deductible: Standard plan dengan deductible RM500 per disability';
}

function refresh() {
    let age = parseInt(document.getElementById('age').value);
    let gender = document.querySelector('input[name="gender"]:checked').value.toLowerCase();
    let plan = parseInt(document.getElementById('planSelect').value);
    let costOptionElem = document.getElementById('costSavingOption');
    let costOption = costOptionElem ? costOptionElem.value : 'rm500';
    let optionKey = costOption === 'smart' ? 'smart' : (costOption === 'rm20000' ? '20k' : 'standard');
    
    let job = parseInt(document.getElementById('jobClass').value);
    let payMode = document.getElementById('paymentMode').value;
    let boost = document.getElementById('booster').checked;
    let recover = document.getElementById('apmri').checked;
    
    if (isNaN(age) || age < 20 || age > 60) {
        alert("Umur mesti antara 20 hingga 60 tahun.");
        return;
    }
    
    // Booster note
    let boosterNote = document.getElementById('boosterNote');
    if (plan === 180 && boost) {
        boosterNote.innerHTML = '<i class="fas fa-info-circle"></i> Nota: A-Plus MediBoost-i tidak tersedia untuk Plan 180. Rider akan diabaikan.';
    } else if (plan === 180) {
        boosterNote.innerHTML = '';
    } else {
        boosterNote.innerHTML = '';
    }
    
    let actualBoost = (plan !== 180 && boost);
    
    let basicYearly = getBasicPrice(plan, age, gender, optionKey);
    let boosterYearly = actualBoost ? getBoosterPrice(plan, age, gender) : 0;
    let apmriYearly = recover ? getApmriPrice(age, gender) : 0;
    
    let subtotalYearly = basicYearly + boosterYearly + apmriYearly;
    
    let paymentFactor = PAYMENT_LOADING[payMode];
    let classFactor = CLASS_LOADING[job];
    let totalYearly = subtotalYearly * paymentFactor * classFactor;
    let loadingAmount = totalYearly - subtotalYearly;
    
    let displayAmount = totalYearly;
    let displayPeriod = "tahun";
    let equivalentMonthly = totalYearly / 12;
    
    if (payMode === 'monthly') {
        displayAmount = totalYearly / 12;
        displayPeriod = "bulan";
    } else if (payMode === 'quarter') {
        displayAmount = totalYearly / 4;
        displayPeriod = "suku tahun";
    } else if (payMode === 'half') {
        displayAmount = totalYearly / 2;
        displayPeriod = "setengah tahun";
    }
    
    let basicDisplay = basicYearly;
    let boosterDisplay = boosterYearly;
    let apmriDisplay = apmriYearly;
    
    if (payMode === 'monthly') {
        basicDisplay = basicYearly / 12;
        boosterDisplay = boosterYearly / 12;
        apmriDisplay = apmriYearly / 12;
    } else if (payMode === 'quarter') {
        basicDisplay = basicYearly / 4;
        boosterDisplay = boosterYearly / 4;
        apmriDisplay = apmriYearly / 4;
    } else if (payMode === 'half') {
        basicDisplay = basicYearly / 2;
        boosterDisplay = boosterYearly / 2;
        apmriDisplay = apmriYearly / 2;
    }
    
    let paymentLabel = { annual: 'Tahunan', half: 'Setengah Tahunan', quarter: 'Suku Tahunan', monthly: 'Bulanan' }[payMode];
    let periodText = payMode === 'monthly' ? 'bulan' : (payMode === 'quarter' ? 'suku tahun' : (payMode === 'half' ? 'setengah tahun' : 'tahun'));
    
    let resultHtml = `
        <div class="quotation-item">
            <span>A-Life MediFlex-i Plan ${plan} (${getOptionDisplay(costOption)})</span>
            <span class="price">RM${formatCurrency(basicDisplay)} <small>/ ${periodText}</small></span>
        </div>`;
    
    if (actualBoost) {
        resultHtml += `<div class="quotation-item">
            <span>A-Plus MediBoost-i (Booster Annual Limit)</span>
            <span class="price">RM${formatCurrency(boosterDisplay)} <small>/ ${periodText}</small></span>
        </div>`;
    }
    
    if (recover) {
        resultHtml += `<div class="quotation-item">
            <span>A-Plus MediRecover-i (RM${APMRI_SUM.toLocaleString()})</span>
            <span class="price">RM${formatCurrency(apmriDisplay)} <small>/ ${periodText}</small></span>
        </div>`;
    }
    
    resultHtml += `
        <div class="subtotal-item">
            <span>Subtotal (Sebelum Loading)</span>
            <span class="price">RM${formatCurrency(subtotalYearly)} <small>/ tahun</small></span>
        </div>
    `;
    
    document.getElementById('resultDetails').innerHTML = resultHtml;
    document.getElementById('costSavingInfo').innerHTML = getOptionInfo(costOption);
    
    document.getElementById('loadingInfo').innerHTML = `
        <div class="loading-item">
            <span>Loading ${paymentLabel} (${((paymentFactor-1)*100).toFixed(1)}%) + Kelas ${job} (${((classFactor-1)*100).toFixed(0)}%)</span>
            <span class="price">+ RM${formatCurrency(loadingAmount)}</span>
        </div>
    `;
    
    document.getElementById('totalAmountValue').innerHTML = formatCurrency(displayAmount);
    
    let totalLabel = { monthly: 'Bulanan', quarterly: 'Suku Tahunan', half: 'Setengah Tahunan', annual: 'Tahunan' }[payMode] || 'Bulanan';
    document.querySelector('#totalAmount .label').innerHTML = `Jumlah Caruman (${totalLabel})`;
    
    if (payMode !== 'monthly') {
        document.getElementById('equivalentNote').innerHTML = `✨ Setara dengan RM${formatCurrency(equivalentMonthly)}/bulan (purata)`;
    } else {
        document.getElementById('equivalentNote').innerHTML = `💜 Caruman bulanan seperti dinyatakan di atas (termasuk +4.4% loading untuk bayaran bulanan)`;
    }
}

// Event Listeners
document.getElementById('age').addEventListener('input', refresh);
document.querySelectorAll('input[name="gender"]').forEach(r => r.addEventListener('change', refresh));
document.getElementById('planSelect').addEventListener('change', refresh);
document.getElementById('costSavingOption').addEventListener('change', refresh);
document.getElementById('jobClass').addEventListener('change', refresh);
document.getElementById('paymentMode').addEventListener('change', refresh);
document.getElementById('booster').addEventListener('change', refresh);
document.getElementById('apmri').addEventListener('change', refresh);
document.getElementById('shareBtn').addEventListener('click', () => {
    let total = document.getElementById('totalAmountValue').innerText;
    let plan = document.getElementById('planSelect').options[document.getElementById('planSelect').selectedIndex].text;
    alert(`💜 AIA Quotation\nPlan: ${plan}\nJumlah Caruman: RM${total}\n\nTerima kasih!`);
});

refresh();