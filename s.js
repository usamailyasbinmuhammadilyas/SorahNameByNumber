let element=document.getElementById("heading")
let element2=document.getElementById("heading2")

let surtee=["",'Al-Fatihah  الفاتحہ','Al-Baqarah  البقرہ','Aal-E-Imran   آل عمران','An-Nisa  النساء','Al-Maidah  المائدہ','Al-Anam  الأنعام','Al-Araf  الأعراف',' Al-Anfal  الأنفال',
    'At-Tawbah  التوبہ','Yunus  یونس','Hud  ہود','Yusuf  یوسف','Ar-Rad  الرعد','Ibrahim  ابراہیم','Al-Hijr  الحجر','An-Nahl  النحل',
    'Al-Isra  الإسراء','Al-Kahf  الکہف','Maryam  مریم','Ta-Ha  طہ','Al-Anbiya  الانبیاء','Al-Hajj  الحج','Al-Muminun  المؤمنون','An-Nur  النور','Al-Furqan  الفرقان',
    'Ash-Shuara  الشعراء','An-Naml  النمل','Al-Qasas  القصص','Al-Ankabut  العنکبوت','Ar-Rum  الروم','Luqman  لقمان','As-Sajda  السجدہ','Al-Ahzab  الأحزاب',
    'Saba  سبا','Fatir  فاطر','Ya-Sin  یٰس','As-Saffat  الصافات','Sad  ص','Zumar  الزمر','Ghafir  غافر','Fussilat  فصلت','Ash-Shura  الشوریٰ','Az-Zukhruf  الزخرف',
    'Ad-Dukhan  الدخان',' Al-Jathiya  الجاثیہ','Al-Ahqaf  الاحقاف','Muhammad  محمد','Al-Fath  الفتح','Al-Hujurat  الحجرات','Qaf  ق','Az-Zariyat  الذاریات',
    'At-Tur  الطور','An-Najm  النجم','Al-Qamar  القمر','Ar-Rahman  الرحمن','Waqia  الواقعہ','Al-Hadid  الحدید',' Al-Mujadila المجادلہ','Al-Hashr  الحشر',
    'Al-Mumtahina  الممتحنہ',' As-Saff  الصف','Al-Jumuah  الجمعہ','Al-Munafiqun  المنافقون','At-Taghabun  التغابن','At-Talaq  الطلاق','At-Tahrim  التحریم','Al-Mulk  الملک',
    'Al-Qalam  القلم','Al-Haqqah  الحاقہ','Al-Maarij  المعارج','Nuh  نوح','Al-Jinn  الجن','Al-Muzzammil  المزمل','Al-Muddathir   المدثر','Al-Qiyamah  القیامہ',
    'Al-Insan  الانسان','Al-Mursalat  المرسلات','النبا','النازعات','عبس','التکویر','الانفطار','المطففین',
    'الانشقاق','البروج','الطارق','الأعلى','الغاشیہ','الفجر','البلد',
    'الشمس','اللیل','الضحیٰ','الشرح','التین','العلق','القدر','البینہ','الزلزلہ',
    'العادیات','القارعہ','التکاثر','العصر','الہمزہ','الفیل','قریش','الماعون',
    'الکوثر','الکافرون','النصر','المسد','الإخلاص','الفلق','الناس']
 
function input() {
    
    let number=document.getElementById("inp").value;
   
    for (let i = 1; i <=number; i++) {
    
    element.innerHTML=surtee[number];
    }
   
}






function input2() {
   
    let number2=document.getElementById("inpu").value;
   
    for (let i = 1; i <=number2; i++) {
    
    element2.innerHTML= surtee.join("<br>");
    }
   
}