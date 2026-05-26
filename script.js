/* ═══════════════════════════════════════════
   AUDIO SYSTEM
═══════════════════════════════════════════ */
let audioPlayed = false;

function playWelcomeAudio() {
  if (audioPlayed) return;
  audioPlayed = true;

  const takbeer = document.getElementById('audioTakbeer');
  const labaik = document.getElementById('audioLabaik');

  if (!takbeer) return;

  // Play takbeer first
  takbeer.volume = 0.7;
  takbeer.play().then(() => {
    // When takbeer ends, play labaik
    takbeer.addEventListener('ended', () => {
      if (labaik) {
        labaik.volume = 0.7;
        labaik.play().catch(() => {});
      }
    }, { once: true });
  }).catch(() => {
    // Autoplay blocked — will play on first user interaction
    document.addEventListener('click', () => {
      if (!audioPlayed) return;
      takbeer.play().catch(() => {});
    }, { once: true });
  });
}

/* ═══════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════ */
const TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    navHome: 'الرئيسية',
    navDhikr: 'الذكر',
    navDuas: 'الدعاء',
    navPlan: 'الخطة',
    navMore: 'الإعدادات',
    appTitle: 'رفيق عرفة',
    headerQuote: '"خير الدعاء دعاء يوم عرفة" — النبي محمد ﷺ',
    phasePill: 'استعد',
    countdownTitle: 'الوقت المتبقي ليوم عرفة',
    countdownSubtitle: 'أعدّ قلبك، قائمة دعائك، ونيتك.',
    cdDaysLabel: 'أيام',
    cdHoursLabel: 'ساعات',
    cdMinutesLabel: 'دقائق',
    cdSecondsLabel: 'ثواني',
    investTime: 'استثمر هذا الوقت الثمين ✨',
    rightNowLabel: 'الآن',
    nowTitle: 'أعدّ قائمة دعائك',
    nowActionBtn: 'افتح الإجراء المقترح',
    statChecklistLabel: 'الخطة',
    statDhikrLabel: 'الذكر',
    statDuasLabel: 'الأدعية',
    quickPathLabel: 'ابدأ الآن',
    whatNeedTitle: 'ماذا تحتاج الآن؟',
    bigBoxDhikrTitle: 'ابدأ الذكر',
    bigBoxDhikrSub: 'عدّ بتركيز وحضور',
    bigBoxDuaTitle: 'وضع الدعاء',
    bigBoxDuaSub: 'أدعية بشاشة كاملة',
    bigBoxPlanTitle: 'خطة العبادة',
    bigBoxPlanSub: 'المهام الأساسية',
    bigBoxTimelineTitle: 'الجدول الزمني',
    bigBoxTimelineSub: 'أفضل اللحظات',
    bigBoxRescueTitle: 'خطة الإنقاذ',
    bigBoxRescueSub: 'إذا كان وقتك قصيراً، ابدأ هنا',
    worshipProgressLabel: 'تقدم العبادة',
    progressMessage: 'ابدأ قليلاً. عمل صادق واحد يكفي.',
    progressHint: 'الهدف ليس الكمال، الهدف قلب صادق.',
    rescueLabel: 'خطة إنقاذ عرفة',
    rescueTitle: 'ضاع وقتي... ماذا أفعل؟',
    rescueText: 'لا تستسلم. دقائق قليلة بصدق قد تكون ثمينة جداً.',
    rescueButton: 'افتح وضع الدعاء',
    shareGoodLabel: 'شارك الخير',
    shareGoodTitle: 'ذكّر شخصاً اليوم',
    shareGoodText: 'أرسل تذكيراً لطيفاً برابط التطبيق.',
    shareReminderBtn: 'انسخ التذكير',
    shareProgressBtn: 'شارك التقدم',
    makerDuaLabel: 'دعوة منك',
    makerDuaTitle: 'لا تنسَ الدعاء لصانع/صانعة التطبيق 🤲',
    makerDuaText: 'ادعُ لمن صنع هذا التطبيق بالقبول والبركة. جزاك الله خيراً.',
    dhikrEyebrow: 'عداد الذكر',
    dhikrTitle: 'كلمات صغيرة. أجر عظيم.',
    tapLabel: 'اضغط',
    resetDhikrBtn: 'إعادة تعيين',
    duasEyebrow: 'الأدعية والقائمة الشخصية',
    duasTitle: 'اسأل كأن كل شيء ممكن.',
    duaModeSmall: 'بلا تشتيت',
    duaModeTitle: 'وضع الدعاء',
    duaModeDesc: 'بطاقات بشاشة كاملة لأدعيتك، واحدة تلو الأخرى.',
    openDuaModeBtn: 'ادخل وضع الدعاء',
    builderLabel: 'أضف دعائي',
    builderTitle: 'اختر اقتراحًا أو اكتب دعاءك الخاص',
    savePersonalDuaBtn: 'أضف دعائي',
    checklistEyebrow: 'خطة العبادة',
    checklistTitle: 'اختر التقدم، لا الضغط.',
    tabEssential: 'الأساسي',
    tabRecommended: 'المستحب',
    tabBonus: 'إضافي',
    tabCustom: 'مهامي',
    customTaskLabel: 'أضف مهمتك الخاصة',
    addCustomTaskBtn: 'أضف',
    timelineEyebrow: 'أفضل اللحظات',
    timelineTitle: 'رحلتك في يوم عرفة.',
    stickyPhase: 'يبدأ عرفة قريباً',
    currentLanguageLabel: 'العربية',
    darkModeLabel: 'الوضع الداكن',
    prevDua: '← السابق',
    nextDua: 'التالي →',
  },
  en: {
    dir: 'ltr',
    navHome: 'Home',
    navDhikr: 'Dhikr',
    navDuas: 'Duas',
    navPlan: 'Plan',
    navMore: 'Settings',
    appTitle: 'Arafah Companion',
    headerQuote: '"The best dua is the dua of Arafah" — Prophet Muhammad ﷺ',
    phasePill: 'Get ready',
    countdownTitle: 'Time left for Arafah Day',
    countdownSubtitle: 'Prepare your heart, dua list, and intention.',
    cdDaysLabel: 'days',
    cdHoursLabel: 'hours',
    cdMinutesLabel: 'min',
    cdSecondsLabel: 'sec',
    investTime: 'Invest this precious time ✨',
    rightNowLabel: 'Right now',
    nowTitle: 'Prepare your dua list',
    nowActionBtn: 'Open suggested action',
    statChecklistLabel: 'Checklist',
    statDhikrLabel: 'Dhikr',
    statDuasLabel: 'Duas said',
    quickPathLabel: 'Quick path',
    whatNeedTitle: 'What do you need now?',
    bigBoxDhikrTitle: 'Start dhikr',
    bigBoxDhikrSub: 'Count with focus',
    bigBoxDuaTitle: 'Dua mode',
    bigBoxDuaSub: 'Full-screen duas',
    bigBoxPlanTitle: 'Worship plan',
    bigBoxPlanSub: 'Essential tasks',
    bigBoxTimelineTitle: 'Timeline',
    bigBoxTimelineSub: 'Best moments',
    bigBoxRescueTitle: 'Rescue plan',
    bigBoxRescueSub: "If time is short, start here",
    worshipProgressLabel: 'Worship progress',
    progressMessage: 'Start small. One sincere action is enough.',
    progressHint: 'The goal is not perfection. The goal is a sincere heart.',
    rescueLabel: 'Arafah rescue plan',
    rescueTitle: "I've lost time… what now?",
    rescueText: "Don't give up. A few sincere minutes can be very precious.",
    rescueButton: 'Open dua mode',
    shareGoodLabel: 'Share the good',
    shareGoodTitle: 'Remind someone today',
    shareGoodText: 'Send a gentle reminder with the app link.',
    shareReminderBtn: 'Copy reminder',
    shareProgressBtn: 'Share progress',
    makerDuaLabel: 'A small request',
    makerDuaTitle: "Don’t forget to pray for the app maker 🤲",
    makerDuaText: 'A sincere dua is enough. May Allah reward you with good.',
    dhikrEyebrow: 'Dhikr counter',
    dhikrTitle: 'Small words. Great reward.',
    tapLabel: 'tap',
    resetDhikrBtn: 'Reset',
    duasEyebrow: 'Duas & personal list',
    duasTitle: 'Ask as if anything is possible.',
    duaModeSmall: 'No distraction',
    duaModeTitle: 'Dua Mode',
    duaModeDesc: 'Full-screen cards for your duas, one by one.',
    openDuaModeBtn: 'Enter dua mode',
    builderLabel: 'Add my dua',
    builderTitle: 'Choose a prompt or write your own dua',
    savePersonalDuaBtn: 'Add my dua',
    checklistEyebrow: 'Worship plan',
    checklistTitle: 'Choose progress, not pressure.',
    tabEssential: 'Essential',
    tabRecommended: 'Recommended',
    tabBonus: 'Bonus',
    tabCustom: 'My tasks',
    customTaskLabel: 'Add your own task',
    addCustomTaskBtn: 'Add',
    timelineEyebrow: 'Best moments',
    timelineTitle: 'Your Arafah journey.',
    stickyPhase: 'Arafah starts soon',
    currentLanguageLabel: 'English',
    darkModeLabel: 'Dark mode',
    prevDua: '← Previous',
    nextDua: 'Next →',
  },
  fr: {
    dir: 'ltr',
    navHome: 'Accueil',
    navDhikr: 'Dhikr',
    navDuas: 'Douas',
    navPlan: 'Plan',
    navMore: 'Paramètres',
    appTitle: 'Compagnon d\'Arafah',
    headerQuote: '"La meilleure doua est celle du jour d\'Arafah" — Prophète Muhammad ﷺ',
    phasePill: 'Préparez-vous',
    countdownTitle: 'Temps restant pour Arafah',
    countdownSubtitle: 'Préparez votre cœur, votre liste de doua et votre intention.',
    cdDaysLabel: 'jours',
    cdHoursLabel: 'heures',
    cdMinutesLabel: 'min',
    cdSecondsLabel: 'sec',
    investTime: 'Investissez ce temps précieux ✨',
    rightNowLabel: 'Maintenant',
    nowTitle: 'Préparez votre liste de doua',
    nowActionBtn: 'Ouvrir l\'action suggérée',
    statChecklistLabel: 'Checklist',
    statDhikrLabel: 'Dhikr',
    statDuasLabel: 'Douas dites',
    quickPathLabel: 'Chemin rapide',
    whatNeedTitle: 'De quoi avez-vous besoin?',
    bigBoxDhikrTitle: 'Commencer dhikr',
    bigBoxDhikrSub: 'Compter avec focus',
    bigBoxDuaTitle: 'Mode doua',
    bigBoxDuaSub: 'Douas plein écran',
    bigBoxPlanTitle: 'Plan d\'adoration',
    bigBoxPlanSub: 'Tâches essentielles',
    bigBoxTimelineTitle: 'Calendrier',
    bigBoxTimelineSub: 'Meilleurs moments',
    bigBoxRescueTitle: 'Plan de secours',
    bigBoxRescueSub: 'Si le temps manque, commencez ici',
    worshipProgressLabel: 'Progression',
    progressMessage: 'Commencez petit. Une action sincère suffit.',
    progressHint: 'Le but n\'est pas la perfection. C\'est un cœur sincère.',
    rescueLabel: 'Plan de secours Arafah',
    rescueTitle: "J'ai perdu du temps… que faire?",
    rescueText: "N'abandonnez pas. Quelques minutes sincères peuvent être précieuses.",
    rescueButton: 'Ouvrir mode doua',
    shareGoodLabel: 'Partager le bien',
    shareGoodTitle: 'Rappeler quelqu\'un aujourd\'hui',
    shareGoodText: 'Envoyez un rappel avec le lien de l\'appli.',
    shareReminderBtn: 'Copier le rappel',
    shareProgressBtn: 'Partager la progression',
    makerDuaLabel: 'Petite demande',
    makerDuaTitle: "N’oubliez pas de faire une douaa pour la personne qui a créé l’application 🤲",
    makerDuaText: "Une invocation sincère suffit. Qu’Allah vous récompense.",
    dhikrEyebrow: 'Compteur de dhikr',
    dhikrTitle: 'Petits mots. Grande récompense.',
    tapLabel: 'appuyez',
    resetDhikrBtn: 'Réinitialiser',
    duasEyebrow: 'Douas & liste personnelle',
    duasTitle: 'Demandez comme si tout était possible.',
    duaModeSmall: 'Sans distraction',
    duaModeTitle: 'Mode Doua',
    duaModeDesc: 'Cartes plein écran pour vos douas, une par une.',
    openDuaModeBtn: 'Entrer mode doua',
    builderLabel: 'Ajouter ma doua',
    builderTitle: 'Choisis une proposition ou écris ta doua',
    savePersonalDuaBtn: 'Ajouter ma doua',
    checklistEyebrow: 'Plan d\'adoration',
    checklistTitle: 'Choisissez la progression, pas la pression.',
    tabEssential: 'Essentiel',
    tabRecommended: 'Recommandé',
    tabBonus: 'Bonus',
    tabCustom: 'Mes tâches',
    customTaskLabel: 'Ajouter votre tâche',
    addCustomTaskBtn: 'Ajouter',
    timelineEyebrow: 'Meilleurs moments',
    timelineTitle: 'Votre voyage Arafah.',
    stickyPhase: 'Arafah commence bientôt',
    currentLanguageLabel: 'Français',
    darkModeLabel: 'Mode sombre',
    prevDua: '← Précédent',
    nextDua: 'Suivant →',
  }
};

/* ═══════════════════════════════════════════
   TIMELINE DATA
═══════════════════════════════════════════ */
const TIMELINE_DATA = [
  {
    id: 'eve',
    icon: '🌙',
    time: '25 مايو · بعد المغرب',
    title: 'يبدأ عرفة',
    ar: 'جدّد النية، اكتب أدعيتك، نم مبكرًا، وحضّر قلبك.',
    en: 'Renew your intention, write your duas, sleep early, prepare your heart.',
    fr: 'Renouvelez votre intention, écrivez vos douas, dormez tôt, préparez votre cœur.',
  },
  {
    id: 'fajr',
    icon: '🌅',
    time: 'الفجر',
    title: 'ابدأ بنقاء',
    ar: 'صلِّ الفجر، أذكار الصباح، وابدأ الصيام إن استطعت.',
    en: 'Pray Fajr, morning dhikr, and start fasting if you can.',
    fr: 'Priez Fajr, dhikr du matin, et commencez le jeûne si vous pouvez.',
  },
  {
    id: 'morning',
    icon: '📖',
    time: 'الصباح',
    title: 'قرآن وذكر',
    ar: 'اقرأ القرآن وابدأ أهداف ذكر سهلة قبل زحمة اليوم.',
    en: 'Read Quran and start easy dhikr goals before the day gets busy.',
    fr: 'Lisez le Coran et commencez des objectifs de dhikr faciles avant que la journée ne s\'emballe.',
  },
  {
    id: 'dhuhr',
    icon: '🕌',
    time: 'الظهر',
    title: 'جدّد النية',
    ar: 'صلِّ في الوقت وجدّد نيتك.',
    en: 'Pray on time and renew your intention.',
    fr: 'Priez à l\'heure et renouvelez votre intention.',
  },
  {
    id: 'asr',
    icon: '🤲',
    time: 'العصر',
    title: 'نافذة الدعاء العميق',
    ar: 'قلل التشتيت وانتقل من المهام إلى الدعاء بحضور.',
    en: 'Reduce distractions and shift from tasks to heartfelt dua.',
    fr: 'Réduisez les distractions et passez des tâches à une doua sincère.',
  },
  {
    id: 'golden',
    icon: '🌄',
    time: 'آخر ساعة قبل المغرب · الآن',
    title: 'الساعة الذهبية',
    ar: 'أكثر الدعاء: مغفرة، والدين، مستقبل، أمة، جنة.',
    en: 'Increase dua: forgiveness, parents, future, ummah, paradise.',
    fr: 'Augmentez la doua : pardon, parents, avenir, oumma, paradis.',
    isNow: true,
  },
  {
    id: 'maghrib',
    icon: '🥛',
    time: 'المغرب',
    title: 'افطر بشكر',
    ar: 'اسأل الله القبول، أفطر، وحافظ على عادة بعد عرفة.',
    en: 'Ask Allah for acceptance, break your fast, and maintain good habits after Arafah.',
    fr: 'Demandez à Allah l\'acceptation, rompez le jeûne et maintenez de bonnes habitudes après Arafah.',
  },
];

/* ═══════════════════════════════════════════
   DHIKR DATA
═══════════════════════════════════════════ */
const DHIKR_LIST = [
  { id: 'subhan', ar: 'سُبْحَانَ اللهِ', meaning: 'Glory be to Allah | سبحان الله' },
  { id: 'hamd', ar: 'الْحَمْدُ لِلَّهِ', meaning: 'All praise to Allah | الحمد لله' },
  { id: 'takbir', ar: 'اللهُ أَكْبَرُ', meaning: 'Allah is Greatest | الله أكبر' },
  { id: 'tahlil', ar: 'لَا إِلَهَ إِلَّا اللهُ', meaning: 'No god but Allah | لا إله إلا الله' },
  { id: 'istighfar', ar: 'أَسْتَغْفِرُ اللهَ', meaning: 'I seek forgiveness | أستغفر الله' },
  { id: 'salawat', ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّد', meaning: 'Send blessings on the Prophet ﷺ' },
];

/* ═══════════════════════════════════════════
   DUA DATA
═══════════════════════════════════════════ */
const DUA_LIST = [
  { id: 1, cat: 'essential', ar: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', en: 'None has the right to be worshipped but Allah, alone, without partner. To Him belongs all that exists, and to Him belongs all praise, and He is powerful over all things.', source: 'Best dua of Arafah' },
  { id: 2, cat: 'forgiveness', ar: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', en: 'O Allah, You are Forgiving and love forgiveness, so forgive me.', source: 'Tirmidhi' },
  { id: 3, cat: 'dunya', ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', en: 'Our Lord, give us good in this world and good in the Hereafter and save us from the punishment of the Fire.', source: 'Quran 2:201' },
  { id: 4, cat: 'parents', ar: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ', en: 'My Lord, forgive me and my parents and the believers the Day the account is established.', source: 'Quran 14:41' },
  { id: 5, cat: 'ummah', ar: 'اللَّهُمَّ أَصْلِحْ أُمَّةَ مُحَمَّدٍ، اللَّهُمَّ فَرِّجْ عَنْ أُمَّةِ مُحَمَّدٍ', en: 'O Allah, reform the Ummah of Muhammad. O Allah, relieve the Ummah of Muhammad.', source: 'General supplication' },
  { id: 6, cat: 'jannah', ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ', en: 'O Allah, I ask You for Paradise and I seek refuge in You from the Fire.', source: 'Abu Dawud' },
];

/* ═══════════════════════════════════════════
   CHECKLIST DATA
═══════════════════════════════════════════ */
const CHECKLIST_DATA = {
  essential: [
    {
      id: 'e1',
      phase: 'الفجر',
      ar: 'صلاة الفجر في وقتها',
      en: 'Pray Fajr on time',
      fr: "Prier Fajr à l'heure",
      descAr: 'ابدأ يومك بطاعة واضحة وقلب حاضر.'
    },
    {
      id: 'e2',
      phase: 'الليلة السابقة',
      ar: 'اعقد نية صادقة',
      en: 'Intention for Arafah day',
      fr: "Intention pour le jour d'Arafah",
      descAr: 'اجعل يومك للمغفرة والدعاء والرجوع إلى الله.'
    },
    {
      id: 'e3',
      phase: 'كل اليوم',
      ar: 'صم يوم عرفة',
      en: 'Fast if able',
      fr: 'Jeûner si possible',
      descAr: 'لغير الحجاج: صيامه يكفّر ذنوب السنة الماضية والقادمة بإذن الله.'
    },
    {
      id: 'e4',
      phase: 'الصباح',
      ar: 'اقرأ القرآن ولو آيات',
      en: 'Read Quran',
      fr: 'Lire le Coran',
      descAr: 'القليل بصدق خير من الكثير بلا حضور.'
    },
    {
      id: 'e5',
      phase: 'بعد العصر',
      ar: 'ادعُ بعد العصر',
      en: 'Dua after Asr',
      fr: 'Doua après Asr',
      descAr: 'خفف التشتت وابدأ دعاءً حاضرًا من قلبك.'
    },
    {
      id: 'e6',
      phase: 'آخر ساعة',
      ar: 'أكثر من الدعاء في الساعة الأخيرة',
      en: 'Increase dua in the last hour',
      fr: 'Augmenter la doua dans la dernière heure',
      descAr: 'ادعُ للمغفرة، والوالدين، والمستقبل، والأمة، والجنة.'
    }
  ],

  recommended: [
    {
      id: 'r1',
      phase: 'الصباح',
      ar: 'أذكار الصباح',
      en: 'Morning adhkar',
      fr: 'Adhkar du matin',
      descAr: 'ابدأ يومك بالذكر والطمأنينة.'
    },
    {
      id: 'r2',
      phase: 'أي وقت',
      ar: 'الاستغفار 100 مرة',
      en: 'Istighfar 100 times',
      fr: 'Istighfar 100 fois',
      descAr: 'أستغفر الله وأتوب إليه، بقلب صادق.'
    },
    {
      id: 'r3',
      phase: 'أي وقت',
      ar: 'الصلاة على النبي ﷺ',
      en: 'Salawat on the Prophet ﷺ',
      fr: 'Salawat sur le Prophète ﷺ',
      descAr: 'اللهم صلِّ وسلم على نبينا محمد.'
    },
    {
      id: 'r4',
      phase: 'الصباح أو المساء',
      ar: 'تلاوة سورة الكهف',
      en: 'Read Surah Al-Kahf',
      fr: 'Lire Sourate Al-Kahf',
      descAr: 'اقرأ ما تقدر عليه بخشوع وهدوء.'
    }
  ],

  bonus: [
    {
      id: 'b1',
      phase: 'كل اليوم',
      ar: '1000 تسبيحة',
      en: '1000 dhikr',
      fr: '1000 dhikr',
      descAr: 'قسّمها على اليوم حتى لا تشعر بالضغط.'
    },
    {
      id: 'b2',
      phase: 'بعد الظهر',
      ar: 'كتابة رسائل دعاء لأحبائك',
      en: 'Write dua messages for loved ones',
      fr: 'Écrire des messages de doua pour vos proches',
      descAr: 'ذكّر غيرك بالخير وخذ أجر التذكير.'
    },
    {
      id: 'b3',
      phase: 'قبل المغرب',
      ar: 'الصدقة اليوم',
      en: 'Give charity today',
      fr: "Donner la charité aujourd'hui",
      descAr: 'حتى القليل إذا خرج بصدق فهو عظيم.'
    }
  ],

  custom: []
};
function getChecklistStorage() {
  const saved = localStorage.getItem('arafahChecklistNewStyle');

  if (!saved) {
    return {
      done: {},
      custom: []
    };
  }

  return JSON.parse(saved);
}

function saveChecklistStorage(data) {
  localStorage.setItem('arafahChecklistNewStyle', JSON.stringify(data));
}

function checklistLevelLabel(level) {
  if (level === 'essential') return 'أساسي';
  if (level === 'recommended') return 'مستحب';
  if (level === 'bonus') return 'إضافي';
  return 'مهامي';
}

function getChecklistTitle(item) {
  if (currentLang === 'en') return item.en || item.ar;
  if (currentLang === 'fr') return item.fr || item.ar;
  return item.ar;
}

function getChecklistDescription(item) {
  return item.descAr || 'عمل بسيط بنية صادقة.';
}

function renderChecklist() {
  const list = document.getElementById('checklistList');
  if (!list) return;

  const storage = getChecklistStorage();

  const tasks = [
    ...CHECKLIST_DATA.essential.map(item => ({ ...item, level: 'essential' })),
    ...CHECKLIST_DATA.recommended.map(item => ({ ...item, level: 'recommended' })),
    ...CHECKLIST_DATA.bonus.map(item => ({ ...item, level: 'bonus' })),
    ...storage.custom.map(item => ({ ...item, level: 'custom' }))
  ];

  list.innerHTML = tasks.map(item => {
    const done = storage.done[item.id] === true;

    return `
      <article class="check-item ${item.level} ${done ? 'done' : ''}" data-id="${item.id}">
        <button class="check-box" type="button" aria-label="تحديد المهمة"></button>

        <div class="check-content">
          <div class="check-top">
            <span>⏱ ${item.phase || 'كل اليوم'}</span>
            <span class="level-badge">${checklistLevelLabel(item.level)}</span>
          </div>

          <h4>${getChecklistTitle(item)}</h4>
          <p>${getChecklistDescription(item)}</p>

          ${
            item.level === 'custom'
              ? `<button class="delete-custom-task" type="button" data-delete="${item.id}">حذف المهمة</button>`
              : ''
          }
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.check-item .check-box').forEach(box => {
    box.addEventListener('click', () => {
      const item = box.closest('.check-item');
      const id = item.dataset.id;

      const latest = getChecklistStorage();
      latest.done[id] = !latest.done[id];

      saveChecklistStorage(latest);
      renderChecklist();
    });
  });

  document.querySelectorAll('[data-delete]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.delete;

      const latest = getChecklistStorage();
      latest.custom = latest.custom.filter(item => item.id !== id);
      delete latest.done[id];

      saveChecklistStorage(latest);
      renderChecklist();
    });
  });
}

function addCustomChecklistTask() {
  const input = document.getElementById('customTaskInput');
  if (!input) return;

  const value = input.value.trim();

  if (!value) {
    alert('اكتب المهمة أولًا');
    return;
  }

  const storage = getChecklistStorage();

  storage.custom.push({
    id: 'custom-' + Date.now(),
    phase: 'مهمتي الخاصة',
    ar: value,
    en: value,
    fr: value,
    descAr: 'مهمة خاصة أضفتها أنت.'
  });

  saveChecklistStorage(storage);

  input.value = '';
  renderChecklist();
}

document.addEventListener('DOMContentLoaded', () => {
  renderChecklist();

  const addBtn = document.getElementById('addCustomTaskBtn');
  const input = document.getElementById('customTaskInput');

  if (addBtn) {
    addBtn.addEventListener('click', addCustomChecklistTask);
  }

  if (input) {
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        addCustomChecklistTask();
      }
    });
  }
});
/* ═══════════════════════════════════════════
   RESCUE DATA
═══════════════════════════════════════════ */
const RESCUE_LIST = {
  ar: [
    'قل لا إله إلا الله 100 مرة الآن',
    'استغفر الله 100 مرة',
    'ادعُ بدعاء عرفة الأساسي',
    'أكثر الصلاة على النبي ﷺ',
  ],
  en: [
    'Say La ilaha illa Allah 100 times now',
    'Say Astaghfirullah 100 times',
    'Make the essential Arafah dua',
    'Send lots of blessings on the Prophet ﷺ',
  ],
  fr: [
    'Dites La ilaha illa Allah 100 fois maintenant',
    'Dites Astaghfirullah 100 fois',
    'Faites la doua essentielle d\'Arafah',
    'Envoyez beaucoup de bénédictions sur le Prophète ﷺ',
  ]
};

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
let currentLang = localStorage.getItem('arafah_lang') || 'ar';
let isDark = localStorage.getItem('arafah_theme') !== 'light';
let dhikrCounts = JSON.parse(localStorage.getItem('dhikr_counts') || '{}');
let dhikrTarget = parseInt(localStorage.getItem('dhikr_target') || '33');
let currentDhikrId = 'subhan';
let checkedItems = JSON.parse(localStorage.getItem('checked_items') || '{}');
let customTasks = JSON.parse(localStorage.getItem('custom_tasks') || '[]');
let saidDuas = JSON.parse(localStorage.getItem('said_duas') || '[]');
let personalDuas = JSON.parse(localStorage.getItem('personal_duas') || '[]');
let currentDuaModeIndex = 0;
let currentTab = 'essential';
let currentMoreTab = 'timeline';
let currentDuaCategory = 'all';
let intentionSaved = localStorage.getItem('arafah_intention') || '';
let onboardDone = localStorage.getItem('onboard_done') === 'true';

/* ═══════════════════════════════════════════
   ONBOARDING
═══════════════════════════════════════════ */
function selectLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('arafah_lang', lang);

  // Play audio on first interaction
  playWelcomeAudio();

  // Translate step 2
  applyTranslationsToOnboard(lang);

  // Transition
  document.getElementById('onboardStep1').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('onboardStep2').classList.remove('hidden');
  }, 300);
}

function applyTranslationsToOnboard(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.ar;

  // Welcome step translations
  const titles = {
    ar: 'رفيقك في يوم عرفة',
    en: 'Your Arafah Companion',
    fr: 'Votre Compagnon d\'Arafah'
  };
  const ctaLabels = {
    ar: 'ابدأ رحلتك 🌟',
    en: 'Begin your journey 🌟',
    fr: 'Commencez votre voyage 🌟'
  };
  const enterLabels = {
    ar: 'ادخل التطبيق ←',
    en: 'Enter the app →',
    fr: 'Entrer dans l\'app →'
  };

  const welcomeTitle = document.getElementById('welcomeTitle');
  if (welcomeTitle) welcomeTitle.textContent = titles[lang] || titles.ar;

  const ctaBtn = document.getElementById('welcomeCtaBtn');
  if (ctaBtn) ctaBtn.textContent = ctaLabels[lang] || ctaLabels.ar;

  const enterLabel = document.getElementById('enterAppLabel');
  if (enterLabel) enterLabel.textContent = enterLabels[lang] || enterLabels.ar;

  // Feature translations
  const features = {
    ar: [
      ['العد التنازلي', 'تتبع أفضل لحظات يومك'],
      ['الذكر', 'عدّاد تفاعلي بنية حاضرة'],
      ['الدعاء', 'أدعية مأثورة ومساحة خاصة بك'],
      ['خطة العبادة', 'قائمة مهام من الفجر إلى المغرب'],
    ],
    en: [
      ['Countdown', 'Track your day\'s best moments'],
      ['Dhikr', 'Interactive counter with presence'],
      ['Duas', 'Authentic duas and personal space'],
      ['Worship Plan', 'Task list from Fajr to Maghrib'],
    ],
    fr: [
      ['Compte à rebours', 'Suivez les meilleurs moments'],
      ['Dhikr', 'Compteur interactif avec présence'],
      ['Douas', 'Douas authentiques et espace personnel'],
      ['Plan d\'adoration', 'Liste de tâches du Fajr au Maghrib'],
    ]
  };

  const featureData = features[lang] || features.ar;
  ['feat1Title', 'feat2Title', 'feat3Title', 'feat4Title'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = featureData[i][0];
  });
  ['feat1Desc', 'feat2Desc', 'feat3Desc', 'feat4Desc'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = featureData[i][1];
  });

  // Build onboard timeline
  buildOnboardTimeline(lang);
}

function goToStep3() {
  document.getElementById('onboardStep2').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('onboardStep3').classList.remove('hidden');
    buildOnboardTimeline(currentLang);
  }, 300);
}

function buildOnboardTimeline(lang) {
  const container = document.getElementById('onboardTimeline');
  if (!container) return;

  container.innerHTML = '';
  TIMELINE_DATA.forEach(item => {
    const div = document.createElement('div');
    div.className = `onboard-tl-item${item.isNow ? ' active-moment' : ''}`;
    const text = item[lang] || item.ar;
    div.innerHTML = `
      <div class="onboard-tl-dot">${item.icon}</div>
      <div class="onboard-tl-content">
        <div class="onboard-tl-time">${item.time}</div>
        <div class="onboard-tl-title">${item.title}</div>
        <div class="onboard-tl-ar">${text}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function enterApp() {
  localStorage.setItem('onboard_done', 'true');
  onboardDone = true;

  // Hide all onboard overlays
  ['onboardStep1', 'onboardStep2', 'onboardStep3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  // Show app
  const shell = document.getElementById('appShell');
  shell.classList.add('active');

  // Apply language
  applyLanguage(currentLang);
  applyTheme();
  initApp();
}

/* ═══════════════════════════════════════════
   LANGUAGE APPLICATION
═══════════════════════════════════════════ */
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.ar;
  document.documentElement.lang = lang;
  document.body.lang = lang;
  document.body.style.fontFamily = lang === 'ar' ? 'var(--font-ar)' : 'var(--font-en)';
  document.documentElement.dir = t.dir;

  // Map element IDs to translation keys
  const map = {
    navHome: 'navHome', navDhikr: 'navDhikr', navDuas: 'navDuas',
    navPlan: 'navPlan', navMore: 'navMore',
    appTitle: 'appTitle', headerQuote: 'headerQuote',
    phasePill: 'phasePill', countdownTitle: 'countdownTitle',
    countdownSubtitle: 'countdownSubtitle',
    cdDaysLabel: 'cdDaysLabel', cdHoursLabel: 'cdHoursLabel',
    cdMinutesLabel: 'cdMinutesLabel', cdSecondsLabel: 'cdSecondsLabel',
    investTimeText: 'investTime',
    rightNowLabel: 'rightNowLabel', nowTitle: 'nowTitle',
    nowActionBtn: 'nowActionBtn',
    statChecklistLabel: 'statChecklistLabel', statDhikrLabel: 'statDhikrLabel',
    statDuasLabel: 'statDuasLabel',
    quickPathLabel: 'quickPathLabel', whatNeedTitle: 'whatNeedTitle',
    bigBoxDhikrTitle: 'bigBoxDhikrTitle', bigBoxDhikrSub: 'bigBoxDhikrSub',
    bigBoxDuaTitle: 'bigBoxDuaTitle', bigBoxDuaSub: 'bigBoxDuaSub',
    bigBoxPlanTitle: 'bigBoxPlanTitle', bigBoxPlanSub: 'bigBoxPlanSub',
    bigBoxTimelineTitle: 'bigBoxTimelineTitle', bigBoxTimelineSub: 'bigBoxTimelineSub',
    bigBoxRescueTitle: 'bigBoxRescueTitle', bigBoxRescueSub: 'bigBoxRescueSub',
    worshipProgressLabel: 'worshipProgressLabel',
    progressMessage: 'progressMessage', progressHint: 'progressHint',
    rescueLabel: 'rescueLabel', rescueTitle: 'rescueTitle',
    rescueText: 'rescueText', rescueButton: 'rescueButton',
    shareGoodLabel: 'shareGoodLabel', shareGoodTitle: 'shareGoodTitle',
    shareGoodText: 'shareGoodText',
    shareReminderBtn: 'shareReminderBtn', shareProgressBtn: 'shareProgressBtn',
    makerDuaLabel: 'makerDuaLabel', makerDuaTitle: 'makerDuaTitle',
    makerDuaText: 'makerDuaText',
    dhikrEyebrow: 'dhikrEyebrow', dhikrTitle: 'dhikrTitle',
    tapLabel: 'tapLabel', resetDhikrBtn: 'resetDhikrBtn',
    duasEyebrow: 'duasEyebrow', duasTitle: 'duasTitle',
    duaModeSmall: 'duaModeSmall', duaModeTitle: 'duaModeTitle',
    duaModeDesc: 'duaModeDesc', openDuaModeBtn: 'openDuaModeBtn',
    builderLabel: 'builderLabel', builderTitle: 'builderTitle',
    savePersonalDuaBtn: 'savePersonalDuaBtn',
    checklistEyebrow: 'checklistEyebrow', checklistTitle: 'checklistTitle',
    tabEssential: 'tabEssential', tabRecommended: 'tabRecommended',
    tabBonus: 'tabBonus', tabCustom: 'tabCustom',
    customTaskLabel: 'customTaskLabel', addCustomTaskBtn: 'addCustomTaskBtn',
    timelineEyebrow: 'timelineEyebrow', timelineTitle: 'timelineTitle',
    stickyPhase: 'stickyPhase',
    currentLanguageLabel: 'currentLanguageLabel',
    darkModeLabel: 'darkModeLabel',
    prevDuaModeBtn: 'prevDua', nextDuaModeBtn: 'nextDua',
  };

  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.textContent = t[key];
  });

  // Update language mini buttons
  document.querySelectorAll('.language-mini').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ═══════════════════════════════════════════
   THEME
═══════════════════════════════════════════ */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  const themeState = document.getElementById('themeState');
  const themeToggle = document.getElementById('themeToggle');
  if (themeState) {
    themeState.textContent = isDark ?
      (currentLang === 'ar' ? 'مفعّل' : currentLang === 'fr' ? 'Activé' : 'On') :
      (currentLang === 'ar' ? 'معطّل' : currentLang === 'fr' ? 'Désactivé' : 'Off');
  }
  if (themeToggle) themeToggle.textContent = isDark ? '☀️' : '🌙';
}

/* ═══════════════════════════════════════════
   COUNTDOWN
═══════════════════════════════════════════ */
// Arafah: May 26, 2026 — defaults to Tunis Maghrib times
let ARAFAH_START = new Date('2026-05-25T18:26:00Z');
let ARAFAH_END   = new Date('2026-05-26T18:27:00Z');

function updateSourceNote() {
  const note = document.getElementById('sourceNote');
  if (!note) return;
  const fmt = d => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const t25 = fmt(ARAFAH_START);
  const t26 = fmt(ARAFAH_END);
  if (currentLang === 'en') {
    note.textContent = `Countdown based on Maghrib at your location: May 25 at ${t25} → May 26 at ${t26}.`;
  } else if (currentLang === 'fr') {
    note.textContent = `Compte à rebours basé sur le Maghrib à votre emplacement : 25 mai à ${t25} → 26 mai à ${t26}.`;
  } else {
    note.textContent = `العد التنازلي يعتمد وقت المغرب في موقعك: 25 مايو الساعة ${t25} ← 26 مايو الساعة ${t26}.`;
  }
}

function initPrayerTimes() {
  // Update note immediately with the default (Tunis) times
  updateSourceNote();

  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      // Calculate Maghrib using the sun's depression angle (≈18° standard)
      // Simple formula: Maghrib ≈ sunset, computed from lat/lng/date
      function sunsetUTC(year, month, day, latDeg, lngDeg) {
        const rad = x => x * Math.PI / 180;
        const deg = x => x * 180 / Math.PI;
        const N = Math.floor(275 * month / 9) - Math.floor((month + 9) / 12) *
          (1 + Math.floor((year - 4 * Math.floor(year / 4) + 2) / 3)) +
          Math.floor(30.6 * (month + 1)) + day - 694039.09;  // simplified Julian
        // Use more reliable calculation
        const d = Date.UTC(year, month - 1, day) / 86400000 - 10957; // days since J2000 approx
        const g = rad(357.529 + 0.98560028 * d);
        const q = 280.459 + 0.98564736 * d;
        const L = rad(q + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g));
        const e = rad(23.439 - 0.00000036 * d);
        const sinDec = Math.sin(e) * Math.sin(L);
        const dec = Math.asin(sinDec);
        const cosHA = (Math.sin(rad(-0.833)) - Math.sin(rad(latDeg)) * sinDec) /
                      (Math.cos(rad(latDeg)) * Math.cos(dec));
        if (Math.abs(cosHA) > 1) return null; // midnight sun / polar night
        const HA = deg(Math.acos(cosHA));
        // Transit (solar noon) in hours UTC
        const eqTime = (q - deg(L)) / 15;
        const transit = 12 - eqTime - lngDeg / 15;
        const sunset = transit + HA / 15;
        return sunset; // hours UTC
      }

      function buildDate(year, month, day, utcHours) {
        if (utcHours === null) return null;
        const h = Math.floor(utcHours);
        const m = Math.round((utcHours - h) * 60);
        return new Date(Date.UTC(year, month - 1, day, h, m, 0));
      }

      const s25 = sunsetUTC(2026, 5, 25, lat, lng);
      const s26 = sunsetUTC(2026, 5, 26, lat, lng);

      if (s25 !== null) ARAFAH_START = buildDate(2026, 5, 25, s25);
      if (s26 !== null) ARAFAH_END   = buildDate(2026, 5, 26, s26);

      updateSourceNote();
    },
    _err => {
      // Permission denied — keep Tunis fallback, note already shown
    },
    { timeout: 8000, maximumAge: 3600000 }
  );
}

function updateCountdown() {
  const now = new Date();
  let target, phase;

  if (now < ARAFAH_START) {
    target = ARAFAH_START;
    phase = currentLang === 'ar' ? 'حتى بداية عرفة' :
            currentLang === 'fr' ? 'Jusqu\'au début d\'Arafah' : 'Until Arafah begins';
  } else if (now < ARAFAH_END) {
    target = ARAFAH_END;
    phase = currentLang === 'ar' ? '⭐ يوم عرفة الآن!' :
            currentLang === 'fr' ? '⭐ Arafah est maintenant!' : '⭐ Arafah is now!';
  } else {
    phase = currentLang === 'ar' ? '✅ انتهى يوم عرفة' :
            currentLang === 'fr' ? '✅ Arafah est terminé' : '✅ Arafah has passed';
    ['cdDays','cdHours','cdMinutes','cdSeconds'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    const sp = document.getElementById('stickyPhase');
    if (sp) sp.textContent = phase;
    const st = document.getElementById('stickyTime');
    if (st) st.textContent = '00:00:00';
    return;
  }

  const diff = target - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const pad = n => String(n).padStart(2, '0');
  const el = id => document.getElementById(id);

  if (el('cdDays')) el('cdDays').textContent = pad(d);
  if (el('cdHours')) el('cdHours').textContent = pad(h);
  if (el('cdMinutes')) el('cdMinutes').textContent = pad(m);
  if (el('cdSeconds')) el('cdSeconds').textContent = pad(s);

  const sp = document.getElementById('stickyPhase');
  if (sp) sp.textContent = phase;
  const st = document.getElementById('stickyTime');
  if (st) st.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
}

/* ═══════════════════════════════════════════
   NOW CARD
═══════════════════════════════════════════ */
function updateNowCard() {
  const now = new Date();
  const h = now.getHours();

  let item;
  if (h < 6) item = TIMELINE_DATA[0];
  else if (h < 9) item = TIMELINE_DATA[1];
  else if (h < 12) item = TIMELINE_DATA[2];
  else if (h < 15) item = TIMELINE_DATA[3];
  else if (h < 18) item = TIMELINE_DATA[4];
  else if (h < 19) item = TIMELINE_DATA[5];
  else item = TIMELINE_DATA[6];

  const iconEl = document.getElementById('nowIcon');
  const titleEl = document.getElementById('nowTitle');
  const textEl = document.getElementById('nowText');

  if (iconEl) iconEl.textContent = item.icon;
  if (titleEl) titleEl.textContent = item.title;
  if (textEl) textEl.textContent = item[currentLang] || item.ar;
}

/* ═══════════════════════════════════════════
   TIMELINE RENDER
═══════════════════════════════════════════ */
function renderTimeline() {
  const container = document.getElementById('timelineList');
  if (!container) return;
  container.innerHTML = '';

  const now = new Date();
  const h = now.getHours();

  TIMELINE_DATA.forEach((item, i) => {
    const div = document.createElement('div');
    const isNow = item.isNow || false;
    div.className = `tl-item${isNow ? ' now-moment' : ''}`;
    const text = item[currentLang] || item.ar;
    div.innerHTML = `
      <div class="tl-dot">${item.icon}</div>
      <div class="tl-content">
        <div class="tl-time">${item.time}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-ar">${text}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

/* ═══════════════════════════════════════════
   DHIKR RENDER
═══════════════════════════════════════════ */
function renderDhikrChips() {
  const container = document.getElementById('dhikrChips');
  if (!container) return;
  container.innerHTML = '';

  DHIKR_LIST.forEach(d => {
    const btn = document.createElement('button');
    btn.className = `chip${d.id === currentDhikrId ? ' active' : ''}`;
    btn.textContent = d.ar;
    btn.addEventListener('click', () => {
      currentDhikrId = d.id;
      renderDhikrChips();
      updateDhikrDisplay();
    });
    container.appendChild(btn);
  });
}

function updateDhikrDisplay() {
  const d = DHIKR_LIST.find(x => x.id === currentDhikrId);
  if (!d) return;
  const arabicEl = document.getElementById('dhikrArabic');
  const meaningEl = document.getElementById('dhikrMeaning');
  const countEl = document.getElementById('dhikrCount');
  const fillEl = document.getElementById('dhikrProgressFill');
  const targetTextEl = document.getElementById('dhikrTargetText');

  if (arabicEl) arabicEl.textContent = d.ar;
  if (meaningEl) meaningEl.textContent = d.meaning;

  const count = dhikrCounts[currentDhikrId] || 0;
  if (countEl) countEl.textContent = count;

  const pct = Math.min(100, (count / dhikrTarget) * 100);
  if (fillEl) fillEl.style.width = pct + '%';

  if (targetTextEl) {
    const remaining = Math.max(0, dhikrTarget - count);
    targetTextEl.textContent = remaining > 0
      ? (currentLang === 'ar' ? `${remaining} متبقي من ${dhikrTarget}` : `${remaining} remaining of ${dhikrTarget}`)
      : (currentLang === 'ar' ? `✅ أتممت ${dhikrTarget}!` : `✅ Completed ${dhikrTarget}!`);
  }

  // Update stats
  const totalDhikr = Object.values(dhikrCounts).reduce((a, b) => a + b, 0);
  const statEl = document.getElementById('statDhikr');
  if (statEl) statEl.textContent = totalDhikr;
}

/* ═══════════════════════════════════════════
   DUAS RENDER
═══════════════════════════════════════════ */
function renderDuaCategoryChips() {
  const container = document.getElementById('duaCategoryChips');
  if (!container) return;

  const categories = {
    all: { ar: 'الكل', en: 'All', fr: 'Tout' },
    essential: { ar: 'الأساسي', en: 'Essential', fr: 'Essentiel' },
    forgiveness: { ar: 'المغفرة', en: 'Forgiveness', fr: 'Pardon' },
    dunya: { ar: 'الدنيا', en: 'Worldly', fr: 'Mondain' },
    parents: { ar: 'الوالدان', en: 'Parents', fr: 'Parents' },
    ummah: { ar: 'الأمة', en: 'Ummah', fr: 'Oumma' },
    jannah: { ar: 'الجنة', en: 'Jannah', fr: 'Paradis' },
  };

  container.innerHTML = '';
  Object.entries(categories).forEach(([key, labels]) => {
    const btn = document.createElement('button');
    btn.className = `chip${key === currentDuaCategory ? ' active' : ''}`;
    btn.textContent = labels[currentLang] || labels.ar;
    btn.addEventListener('click', () => {
      currentDuaCategory = key;
      renderDuaCategoryChips();
      renderDuas();
    });
    container.appendChild(btn);
  });
}

function renderDuas(query = '') {
  const container = document.getElementById('duasList');
  if (!container) return;

  let list = DUA_LIST;
  if (currentDuaCategory !== 'all') list = list.filter(d => d.cat === currentDuaCategory);
  if (query) list = list.filter(d => d.ar.includes(query) || d.en.toLowerCase().includes(query.toLowerCase()));

  container.innerHTML = '';
  list.forEach(dua => {
    const said = saidDuas.includes(dua.id);
    const div = document.createElement('div');
    div.className = 'dua-item';
    div.innerHTML = `
      <p class="dua-arabic">${dua.ar}</p>
      <p class="dua-translation">${dua[currentLang] || dua.en}</p>
      <p class="dua-source">${dua.source}</p>
      <div class="dua-actions">
        <button class="dua-said-btn${said ? ' said' : ''}" data-id="${dua.id}">
          ${said ? '✓ ' : ''}${currentLang === 'ar' ? 'قلتها' : currentLang === 'fr' ? 'Dite' : 'Said'}
        </button>
      </div>
    `;
    div.querySelector('.dua-said-btn').addEventListener('click', () => {
      if (said) {
        saidDuas = saidDuas.filter(x => x !== dua.id);
      } else {
        saidDuas.push(dua.id);
      }
      localStorage.setItem('said_duas', JSON.stringify(saidDuas));
      renderDuas(query);
      updateStats();
    });
    container.appendChild(div);
  });
}

function renderPersonalDuas() {
  const container = document.getElementById('personalDuasList');
  if (!container) return;
  container.innerHTML = '';

  personalDuas.forEach((dua, i) => {
    const div = document.createElement('div');
    div.className = 'dua-item';
    div.innerHTML = `
      <p class="dua-arabic" style="font-size:16px">${dua}</p>
      <div class="dua-actions">
        <button class="dua-said-btn" style="color:var(--text-faint)" data-idx="${i}">
          ${currentLang === 'ar' ? '🗑 احذف' : currentLang === 'fr' ? '🗑 Supprimer' : '🗑 Delete'}
        </button>
      </div>
    `;
    div.querySelector('.dua-said-btn').addEventListener('click', () => {
      personalDuas.splice(i, 1);
      localStorage.setItem('personal_duas', JSON.stringify(personalDuas));
      renderPersonalDuas();
    });
    container.appendChild(div);
  });
}

/* ═══════════════════════════════════════════
   DUA MODE
═══════════════════════════════════════════ */
function openDuaMode() {
  currentDuaModeIndex = 0;
  renderDuaModeCard();
  const overlay = document.getElementById('duaModeOverlay');
  if (overlay) {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }
}

function renderDuaModeCard() {
  const dua = DUA_LIST[currentDuaModeIndex];
  if (!dua) return;
  const counterEl = document.getElementById('duaModeCounter');
  const arabicEl = document.getElementById('duaModeArabic');
  const textEl = document.getElementById('duaModeText');
  const sourceEl = document.getElementById('duaModeSource');

  if (counterEl) counterEl.textContent = `${currentLang === 'ar' ? 'دعاء' : 'Dua'} ${currentDuaModeIndex + 1}/${DUA_LIST.length}`;
  if (arabicEl) arabicEl.textContent = dua.ar;
  if (textEl) textEl.textContent = dua[currentLang] || dua.en;
  if (sourceEl) sourceEl.textContent = dua.source;
}

/* ═══════════════════════════════════════════
   CHECKLIST RENDER
═══════════════════════════════════════════ */
function renderChecklistOldTabbed() {
  const container = document.getElementById('checklistList');
  if (!container) return;
  container.innerHTML = '';

  const customCard = document.getElementById('customTaskCard');
  if (customCard) customCard.style.display = currentTab === 'custom' ? 'block' : 'none';

  let items = [];
  if (currentTab === 'custom') {
    items = customTasks.map((t, i) => ({ id: `c${i}`, text: t, isCustom: true }));
  } else {
    items = (CHECKLIST_DATA[currentTab] || []).map(item => ({
      id: item.id,
      text: item[currentLang] || item.ar,
      isCustom: false,
    }));
  }

  items.forEach(item => {
    const done = !!checkedItems[item.id];
    const div = document.createElement('div');
    div.className = `checklist-item${done ? ' done' : ''}`;
    div.innerHTML = `
      <div class="check-box">${done ? '✓' : ''}</div>
      <div>
        <div class="check-text">${item.text}</div>
      </div>
      ${item.isCustom ? `<button class="tiny-button" style="margin-right:auto;color:var(--text-faint)" data-del="${item.id}">🗑</button>` : ''}
    `;
    div.addEventListener('click', e => {
      if (e.target.dataset.del) return;
      checkedItems[item.id] = !checkedItems[item.id];
      localStorage.setItem('checked_items', JSON.stringify(checkedItems));
      renderChecklist();
      updateStats();
    });
    if (item.isCustom) {
      div.querySelector('[data-del]')?.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(item.id.slice(1));
        customTasks.splice(idx, 1);
        localStorage.setItem('custom_tasks', JSON.stringify(customTasks));
        delete checkedItems[item.id];
        localStorage.setItem('checked_items', JSON.stringify(checkedItems));
        renderChecklist();
      });
    }
    container.appendChild(div);
  });
}

/* ═══════════════════════════════════════════
   STATS UPDATE
═══════════════════════════════════════════ */
function updateStats() {
  const allItems = [...CHECKLIST_DATA.essential, ...CHECKLIST_DATA.recommended, ...CHECKLIST_DATA.bonus];
  const done = allItems.filter(item => checkedItems[item.id]).length;
  const pct = allItems.length > 0 ? Math.round((done / allItems.length) * 100) : 0;

  const progressEl = document.getElementById('statProgress');
  if (progressEl) progressEl.textContent = pct + '%';

  const ringEl = document.getElementById('progressRing');
  if (ringEl) ringEl.style.setProperty('--progress', pct);

  const ringTextEl = document.getElementById('progressRingText');
  if (ringTextEl) ringTextEl.textContent = pct + '%';

  const totalDhikr = Object.values(dhikrCounts).reduce((a, b) => a + b, 0);
  const dhikrEl = document.getElementById('statDhikr');
  if (dhikrEl) dhikrEl.textContent = totalDhikr;

  const duasEl = document.getElementById('statDuas');
  if (duasEl) duasEl.textContent = saidDuas.length;
}

/* ═══════════════════════════════════════════
   RESCUE LIST
═══════════════════════════════════════════ */
function renderRescueList() {
  const container = document.getElementById('rescueList');
  if (!container) return;
  const items = RESCUE_LIST[currentLang] || RESCUE_LIST.ar;
  container.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

/* ═══════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════ */
function goToScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));

  const screenMap = {
    home: 'homeScreen',
    dhikr: 'dhikrScreen',
    duas: 'duasScreen',
    checklist: 'checklistScreen',
    more: 'moreScreen',
  };

  const screenEl = document.getElementById(screenMap[screen]);
  if (screenEl) screenEl.classList.add('active');

  const navBtn = document.querySelector(`.nav-button[data-go="${screen}"]`);
  if (navBtn) navBtn.classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (screen === 'more') renderTimeline();
  if (screen === 'checklist') renderChecklist();
  if (screen === 'dhikr') { renderDhikrChips(); updateDhikrDisplay(); }
  if (screen === 'duas') { renderDuaCategoryChips(); renderDuas(); renderPersonalDuas(); }
}

/* ═══════════════════════════════════════════
   TOAST
═══════════════════════════════════════════ */
function showToast(msg, duration = 2500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ═══════════════════════════════════════════
   INIT APP
═══════════════════════════════════════════ */
function initApp() {
  // Compute real Maghrib times from user location
  initPrayerTimes();

  // Render initial state
  updateCountdown();
  setInterval(updateCountdown, 1000);
  updateNowCard();
  setInterval(updateNowCard, 60000);
  renderTimeline();
  renderRescueList();
  renderDhikrChips();
  updateDhikrDisplay();
  renderDuaCategoryChips();
  renderDuas();
  renderPersonalDuas();
  renderChecklist();
  updateStats();

  // Restore intention
  const intentionInput = document.getElementById('intentionInput');
  if (intentionInput && intentionSaved) intentionInput.value = intentionSaved;

  // Apply language
  applyLanguage(currentLang);

  // ─── EVENT LISTENERS ───

  // Navigation (top nav + quick cards + big boxes)
  document.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dest = btn.dataset.go;
      if (dest) goToScreen(dest);
    });
  });

  // Rescue quick btn
  const rescueQuickBtn = document.getElementById('rescueQuickBtn');
  if (rescueQuickBtn) {
    rescueQuickBtn.addEventListener('click', () => {
      document.getElementById('rescueCard').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Rescue button
  const rescueButton = document.getElementById('rescueButton');
  if (rescueButton) {
    rescueButton.addEventListener('click', () => goToScreen('duas'));
  }

  // Now action button
  const nowActionBtn = document.getElementById('nowActionBtn');
  if (nowActionBtn) {
    nowActionBtn.addEventListener('click', () => goToScreen('duas'));
  }

  // Dhikr button
  const dhikrBtn = document.getElementById('dhikrButton');
  if (dhikrBtn) {
    dhikrBtn.addEventListener('click', () => {
      dhikrCounts[currentDhikrId] = (dhikrCounts[currentDhikrId] || 0) + 1;
      localStorage.setItem('dhikr_counts', JSON.stringify(dhikrCounts));
      updateDhikrDisplay();
      updateStats();
      // Pulse animation
      dhikrBtn.style.transform = 'scale(0.95)';
      setTimeout(() => dhikrBtn.style.transform = '', 100);
    });
  }

  // Target buttons
  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      dhikrTarget = parseInt(btn.dataset.target);
      localStorage.setItem('dhikr_target', dhikrTarget);
      updateDhikrDisplay();
    });
  });

  // Reset dhikr
  const resetBtn = document.getElementById('resetDhikrBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      dhikrCounts[currentDhikrId] = 0;
      localStorage.setItem('dhikr_counts', JSON.stringify(dhikrCounts));
      updateDhikrDisplay();
      updateStats();
      showToast(currentLang === 'ar' ? 'تم إعادة التعيين' : 'Reset done');
    });
  }

  // Dua search
  const duaSearch = document.getElementById('duaSearch');
  if (duaSearch) {
    duaSearch.addEventListener('input', e => renderDuas(e.target.value));
  }

  // Open dua mode
  const openDuaBtn = document.getElementById('openDuaModeBtn');
  if (openDuaBtn) openDuaBtn.addEventListener('click', openDuaMode);

  // Close dua mode
  const closeDuaBtn = document.getElementById('closeDuaModeBtn');
  if (closeDuaBtn) {
    closeDuaBtn.addEventListener('click', () => {
      const overlay = document.getElementById('duaModeOverlay');
      if (overlay) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Dua mode nav
  document.getElementById('prevDuaModeBtn')?.addEventListener('click', () => {
    currentDuaModeIndex = Math.max(0, currentDuaModeIndex - 1);
    renderDuaModeCard();
  });
  document.getElementById('nextDuaModeBtn')?.addEventListener('click', () => {
    currentDuaModeIndex = Math.min(DUA_LIST.length - 1, currentDuaModeIndex + 1);
    renderDuaModeCard();
  });

  // Save personal dua
  const savePersonalBtn = document.getElementById('savePersonalDuaBtn');
  if (savePersonalBtn) {
    savePersonalBtn.addEventListener('click', () => {
      const input = document.getElementById('personalDuaInput');
      if (input && input.value.trim()) {
        personalDuas.push(input.value.trim());
        localStorage.setItem('personal_duas', JSON.stringify(personalDuas));
        input.value = '';
        renderPersonalDuas();
        showToast(currentLang === 'ar' ? 'تم حفظ الدعاء ✓' : 'Dua saved ✓');
      }
    });
  }

  // Checklist tabs
  document.getElementById('checklistTabs')?.addEventListener('click', e => {
    const chip = e.target.closest('[data-tab]');
    if (!chip) return;
    currentTab = chip.dataset.tab;
    document.querySelectorAll('#checklistTabs .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderChecklist();
  });


  // More tabs
  document.querySelectorAll('.more-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMoreTab = btn.dataset.more;
      document.querySelectorAll('.more-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.more-section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const section = document.getElementById(`more${currentMoreTab.charAt(0).toUpperCase() + currentMoreTab.slice(1)}`);
      if (section) section.classList.add('active');
    });
  });

  // Theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  document.getElementById('toggleThemeRow')?.addEventListener('click', toggleTheme);

  function toggleTheme() {
    isDark = !isDark;
    localStorage.setItem('arafah_theme', isDark ? 'dark' : 'light');
    applyTheme();
  }

  // Language settings
  document.getElementById('settingsLangGrid')?.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    currentLang = btn.dataset.lang;
    localStorage.setItem('arafah_lang', currentLang);
    applyLanguage(currentLang);
    renderDuaCategoryChips();
    renderDuas();
    renderChecklist();
    renderTimeline();
    renderRescueList();
    updateNowCard();
    updateSourceNote();
    showToast(currentLang === 'ar' ? 'تم تغيير اللغة' : currentLang === 'fr' ? 'Langue changée' : 'Language changed');
  });

  // Share buttons
  document.getElementById('shareReminderBtn')?.addEventListener('click', () => {
    const msgs = {
      ar: '🌙 اليوم يوم عرفة! أكثر من الدعاء والذكر. جعله الله مقبولاً منا ومنك.',
      en: '🌙 Today is Arafah Day! Increase your duas and dhikr. May Allah accept from us all.',
      fr: '🌙 Aujourd\'hui c\'est le jour d\'Arafah! Augmentez vos douas. Qu\'Allah accepte de nous tous.',
    };
    navigator.clipboard.writeText(msgs[currentLang] || msgs.ar)
      .then(() => showToast(currentLang === 'ar' ? 'تم نسخ التذكير ✓' : 'Copied ✓'))
      .catch(() => showToast('Copy failed'));
  });

  document.getElementById('shareProgressBtn')?.addEventListener('click', () => {
    const totalDhikr = Object.values(dhikrCounts).reduce((a, b) => a + b, 0);
    const msg = currentLang === 'ar'
      ? `يوم عرفة: أدعيتي ${saidDuas.length} · ذكري ${totalDhikr} · خطتي ${document.getElementById('statProgress')?.textContent || '0%'} ✨`
      : `Arafah Day: ${saidDuas.length} duas · ${totalDhikr} dhikr · Plan ${document.getElementById('statProgress')?.textContent || '0%'} ✨`;
    navigator.clipboard.writeText(msg)
      .then(() => showToast(currentLang === 'ar' ? 'تم نسخ التقدم ✓' : 'Copied ✓'))
      .catch(() => showToast('Copy failed'));
  });

  document.getElementById('shareAppBtn')?.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({ title: 'رفيق عرفة', text: 'تطبيق يوم عرفة', url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => showToast('Link copied ✓'));
    }
  });

  // Export data
  document.getElementById('exportDataBtn')?.addEventListener('click', () => {
    const data = { dhikrCounts, checkedItems, saidDuas, personalDuas, customTasks, intention: intentionSaved };
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
      .then(() => showToast(currentLang === 'ar' ? 'تم تصدير البيانات ✓' : 'Data exported ✓'))
      .catch(() => showToast('Export failed'));
  });

  // Reset all
  document.getElementById('resetAllBtn')?.addEventListener('click', () => {
    const msg = currentLang === 'ar' ? 'هل أنت متأكد؟ سيتم مسح كل البيانات.' :
                currentLang === 'fr' ? 'Êtes-vous sûr? Toutes les données seront effacées.' :
                'Are you sure? All data will be cleared.';
    if (confirm(msg)) {
      localStorage.clear();
      dhikrCounts = {}; checkedItems = {}; saidDuas = []; personalDuas = []; customTasks = [];
      updateStats(); renderChecklist(); renderDuas(); renderPersonalDuas(); updateDhikrDisplay();
      showToast(currentLang === 'ar' ? 'تم إعادة التعيين' : 'Reset complete');
    }
  });

  // Save intention (removed from UI but keep functionality)
  document.getElementById('saveIntentionBtn')?.addEventListener('click', () => {
    const input = document.getElementById('intentionInput');
    if (input) {
      intentionSaved = input.value;
      localStorage.setItem('arafah_intention', intentionSaved);
      showToast(currentLang === 'ar' ? 'تم حفظ النية ✓' : 'Intention saved ✓');
    }
  });
}



/* ═══════════════════════════════════════════
   FINAL JS OVERRIDES — requested behavior
═══════════════════════════════════════════ */
currentMoreTab = 'settings';

const DUA_PROMPT_BOXES = {
  ar: [
    { label: 'المغفرة', text: 'اللهم اغفر لي ذنبي كله، دقه وجله، أوله وآخره، سره وعلانيته.' },
    { label: 'العائلة', text: 'اللهم احفظ عائلتي وبارك في أعمارهم وارزقهم الصحة والسكينة.' },
    { label: 'الدراسة / الامتحانات', text: 'اللهم افتح عليّ فتوح العارفين ويسّر لي فهمي ونجاحي.' },
    { label: 'الرزق', text: 'اللهم ارزقني رزقًا حلالًا طيبًا واسعًا وبارك لي فيه.' },
    { label: 'الزواج', text: 'اللهم ارزقني زوجًا صالحًا وبيتًا مطمئنًا مليئًا بالمودة والرحمة.' },
    { label: 'النجاح', text: 'اللهم افتح لي أبواب الخير واجعل عملي نافعًا ومباركًا.' },
    { label: 'الصحة', text: 'اللهم عافني في بدني وقلبي وسمعي وبصري واشفِ كل مريض.' },
    { label: 'الآخرة', text: 'اللهم ارزقني الجنة بغير حساب ولا سابقة عذاب وأعذني من النار.' }
  ],
  en: [
    { label: 'Forgiveness', text: 'O Allah, forgive all my sins, the small and the great, the hidden and the public.' },
    { label: 'Family', text: 'O Allah, protect my family, bless their lives, and grant them health and peace.' },
    { label: 'Studies / exams', text: 'O Allah, open my understanding, make my exams easy, and grant me success.' },
    { label: 'Rizq', text: 'O Allah, grant me halal, pure, spacious rizq and place barakah in it.' },
    { label: 'Marriage', text: 'O Allah, grant me a righteous spouse and a peaceful home full of mercy.' },
    { label: 'Success', text: 'O Allah, open the doors of goodness and make my work beneficial and blessed.' },
    { label: 'Health', text: 'O Allah, grant health to my body and heart, and heal every sick person.' },
    { label: 'Akhirah', text: 'O Allah, grant me Jannah without reckoning and protect me from the Fire.' }
  ],
  fr: [
    { label: 'Pardon', text: 'Ô Allah, pardonne tous mes péchés, petits et grands, cachés et visibles.' },
    { label: 'Famille', text: 'Ô Allah, protège ma famille, bénis leurs vies et accorde-leur santé et paix.' },
    { label: 'Études / examens', text: 'Ô Allah, ouvre ma compréhension, facilite mes examens et accorde-moi la réussite.' },
    { label: 'Rizq', text: 'Ô Allah, accorde-moi un rizq halal, pur, large et béni.' },
    { label: 'Mariage', text: 'Ô Allah, accorde-moi un conjoint pieux et un foyer paisible rempli de miséricorde.' },
    { label: 'Succès', text: 'Ô Allah, ouvre-moi les portes du bien et rends mon travail utile et béni.' },
    { label: 'Santé', text: 'Ô Allah, accorde la santé à mon corps et à mon cœur, et guéris chaque malade.' },
    { label: 'Akhirah', text: 'Ô Allah, accorde-moi le Paradis sans jugement et protège-moi du Feu.' }
  ]
};

function renderDuaPrompts() {
  const wrap = document.getElementById('duaPrompts');
  if (!wrap) return;
  const items = DUA_PROMPT_BOXES[currentLang] || DUA_PROMPT_BOXES.ar;
  wrap.className = 'dua-prompt-boxes';
  wrap.innerHTML = items.map(p => `<button class="dua-prompt-box" type="button" data-prompt="${String(p.text).replace(/"/g, '&quot;')}">${p.label}</button>`).join('');
  wrap.querySelectorAll('.dua-prompt-box').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('personalDuaInput');
      if (!input) return;
      input.value = btn.dataset.prompt || '';
      input.focus();
    });
  });
}


function allChecklistTasks() {
  let newStorage = { custom: [] };
  try { newStorage = getChecklistStorage(); } catch (e) {}
  const legacyCustom = Array.isArray(customTasks) ? customTasks : [];
  const customFromNew = Array.isArray(newStorage.custom) ? newStorage.custom : [];
  const mergedCustom = customFromNew.length ? customFromNew : legacyCustom;

  return [
    ...CHECKLIST_DATA.essential.map(item => ({ ...item, level: 'essential' })),
    ...CHECKLIST_DATA.recommended.map(item => ({ ...item, level: 'recommended' })),
    ...CHECKLIST_DATA.bonus.map(item => ({ ...item, level: 'bonus' })),
    ...mergedCustom.map((task, index) => {
      if (typeof task === 'string') {
        return { id: 'custom-' + index, level: 'custom', phase: 'مهمتي الخاصة', ar: task, en: task, fr: task, descAr: 'مهمة خاصة أضفتها أنت.' };
      }
      return { ...task, level: 'custom' };
    })
  ];
}

function getChecklistDoneState() {
  const done = {};
  try { Object.assign(done, JSON.parse(localStorage.getItem('checked_items') || '{}')); } catch (e) {}
  try { Object.assign(done, getChecklistStorage().done || {}); } catch (e) {}
  return done;
}

function saveChecklistDoneState(done) {
  localStorage.setItem('checked_items', JSON.stringify(done));
  const storage = getChecklistStorage();
  storage.done = done;
  saveChecklistStorage(storage);
}

renderChecklist = function() {
  const list = document.getElementById('checklistList');
  if (!list) return;

  const tasks = allChecklistTasks();
  const doneState = getChecklistDoneState();

  if (tasks.length === 0) return; // keep the static HTML fallback instead of showing an empty list

  list.innerHTML = tasks.map(item => {
    const done = doneState[item.id] === true;
    return `
      <article class="check-item ${item.level} ${done ? 'done' : ''}" data-id="${item.id}">
        <button class="check-box" type="button" aria-label="تحديد المهمة"></button>
        <div class="check-content">
          <div class="check-top">
            <span>⏱ ${item.phase || 'كل اليوم'}</span>
            <span class="level-badge">${checklistLevelLabel(item.level)}</span>
          </div>
          <h4>${getChecklistTitle(item)}</h4>
          <p>${getChecklistDescription(item)}</p>
          ${item.level === 'custom' ? `<button class="delete-custom-task" type="button" data-delete="${item.id}">حذف المهمة</button>` : ''}
        </div>
      </article>`;
  }).join('');

  list.querySelectorAll('.check-box').forEach(box => {
    box.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      const item = box.closest('.check-item');
      if (!item) return;
      const id = item.dataset.id;
      const latest = getChecklistDoneState();
      latest[id] = !latest[id];
      saveChecklistDoneState(latest);
      renderChecklist();
      if (typeof updateStats === 'function') updateStats();
    });
  });

  list.querySelectorAll('[data-delete]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      const id = button.dataset.delete;
      const storage = getChecklistStorage();
      storage.custom = (storage.custom || []).filter(item => item.id !== id);
      saveChecklistStorage(storage);
      customTasks = (Array.isArray(customTasks) ? customTasks : []).filter((task, index) => {
        const taskId = typeof task === 'string' ? 'custom-' + index : task.id;
        return taskId !== id;
      });
      localStorage.setItem('custom_tasks', JSON.stringify(customTasks));
      const latest = getChecklistDoneState();
      delete latest[id];
      saveChecklistDoneState(latest);
      renderChecklist();
      if (typeof updateStats === 'function') updateStats();
    });
  });
};

const oldGoToScreen = goToScreen;
goToScreen = function(screen) {
  oldGoToScreen(screen);
  if (screen === 'more') {
    document.querySelectorAll('.more-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.more-section').forEach(s => s.classList.remove('active'));
    document.getElementById('moreSettings')?.classList.add('active');
    document.querySelector('.more-tab[data-more="settings"]')?.classList.add('active');
  }
  if (screen === 'duas') renderDuaPrompts();
};

const oldApplyLanguage = applyLanguage;
applyLanguage = function(lang) {
  oldApplyLanguage(lang);
  const labels = {
    ar: ['الإعدادات', 'أضف دعائي', 'اختر اقتراحًا أو اكتب دعاءك الخاص', 'أضف دعائي'],
    en: ['Settings', 'Add my dua', 'Choose a prompt or write your own dua', 'Add my dua'],
    fr: ['Paramètres', 'Ajouter ma doua', 'Choisis une proposition ou écris ta doua', 'Ajouter ma doua']
  };
  const l = labels[lang] || labels.ar;
  const navMoreEl = document.getElementById('navMore'); if (navMoreEl) navMoreEl.textContent = l[0];
  const builderLabel = document.getElementById('builderLabel'); if (builderLabel) builderLabel.textContent = l[1];
  const builderTitle = document.getElementById('builderTitle'); if (builderTitle) builderTitle.textContent = l[2];
  const saveBtn = document.getElementById('savePersonalDuaBtn'); if (saveBtn) saveBtn.textContent = l[3];
  renderDuaPrompts();
};


/* ═══════════════════════════════════════════
   CLEAN AUDIO PATCH — one listener only, no replay on mute
═══════════════════════════════════════════ */
(function () {
  const PROMPT_KEY = 'labbaik_prompt_answered_v3';
  let askThenContinueToTimeline = false;

  const audioLabels = {
    ar: {
      listen: 'استمع',
      choose: 'اختر ما تريد سماعه',
      sub: 'هذا القسم للصوت فقط: التكبير أو لبيك.',
      takbeer: 'التكبير',
      labaik: 'لبيك',
      playingTakbeer: 'تم تشغيل التكبير',
      playingLabaik: 'تم تشغيل لبيك',
      stopped: 'تم إيقاف الصوت',
      tapAgain: 'اضغط مرة أخرى لتشغيل الصوت'
    },
    en: {
      listen: 'Listen',
      choose: 'Choose what to play',
      sub: 'This section is only for audio: Takbeer or Labbaik.',
      takbeer: 'Takbeer',
      labaik: 'Labbaik',
      playingTakbeer: 'Takbeer playing',
      playingLabaik: 'Labbaik playing',
      stopped: 'Audio stopped',
      tapAgain: 'Tap again to play audio'
    },
    fr: {
      listen: 'Écouter',
      choose: 'Choisis quoi écouter',
      sub: 'Cette section est seulement pour l’audio : Takbeer ou Labbaik.',
      takbeer: 'Takbeer',
      labaik: 'Labbaik',
      playingTakbeer: 'Takbeer lancé',
      playingLabaik: 'Labbaik lancé',
      stopped: 'Audio arrêté',
      tapAgain: 'Appuie encore une fois pour lancer le son'
    }
  };

  // No sound should start when the language is chosen.
  window.playWelcomeAudio = function () {};
  try { playWelcomeAudio = window.playWelcomeAudio; } catch (e) {}

  function labels() {
    return audioLabels[currentLang] || audioLabels.ar;
  }

  function getAudio(choice) {
    return choice === 'takbeer'
      ? document.getElementById('audioTakbeer')
      : document.getElementById('audioLabaik');
  }

  function allAudio() {
    return ['audioTakbeer', 'audioLabaik']
      .map(id => document.getElementById(id))
      .filter(Boolean);
  }

  function isAnyAudioPlaying() {
    return allAudio().some(a => !a.paused && !a.ended);
  }

  function updateMuteButton(isPlaying) {
    const btns = [
      document.getElementById('muteAudioBtn'),
      document.getElementById('muteChoiceBtn'),
    ].filter(Boolean);
    btns.forEach(btn => {
      btn.classList.toggle('audio-on', !!isPlaying);
      btn.setAttribute('aria-label', isPlaying ? 'Stop audio' : 'Start audio');
      btn.title = isPlaying ? 'Stop audio' : 'Start audio';
    });
    // Header button uses emoji text
    const headerBtn = document.getElementById('muteAudioBtn');
    if (headerBtn) headerBtn.textContent = isPlaying ? '🔊' : '🔇';
    // Audio section button uses icon + text spans
    const iconEl = document.getElementById('muteAudioIcon');
    const textEl = document.getElementById('muteAudioText');
    if (iconEl) iconEl.textContent = isPlaying ? '🔊' : '🔇';
    const l = labels();
    if (textEl) textEl.textContent = isPlaying ? l.stopped : (l.stopped || 'إيقاف الصوت');
  }

  function markChoice(choice) {
    document.querySelectorAll('[data-audio-choice]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.audioChoice === choice && isAnyAudioPlaying());
    });
  }

  window.stopAllArafahAudio = function () {
    allAudio().forEach(a => {
      a.pause();
      a.currentTime = 0;
      a.loop = false;
      a.onended = null;
    });
    localStorage.setItem('arafah_audio_muted', 'true');
    updateMuteButton(false);
    markChoice(localStorage.getItem('arafah_audio_choice') || 'labaik');
  };

  window.playArafahAudio = function (choice) {
    const selected = choice === 'takbeer' ? 'takbeer' : 'labaik';

    // Important: stop both first, so switching never creates two sounds.
    allAudio().forEach(a => {
      a.pause();
      a.currentTime = 0;
      a.loop = false;
      a.onended = null;
    });

    const audio = getAudio(selected);
    localStorage.setItem('arafah_audio_choice', selected);
    localStorage.setItem('arafah_audio_muted', 'false');

    if (!audio) {
      updateMuteButton(false);
      return;
    }

    audio.volume = 0.75;
    audio.loop = true;

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          updateMuteButton(true);
          markChoice(selected);
        })
        .catch(() => {
          localStorage.setItem('arafah_audio_muted', 'true');
          updateMuteButton(false);
          markChoice(selected);
          if (typeof showToast === 'function') showToast(labels().tapAgain);
        });
    } else {
      updateMuteButton(true);
      markChoice(selected);
    }
  };

  window.playLabbaikAudio = function () {
    window.playArafahAudio('labaik');
  };

  window.toggleArafahAudio = function () {
    if (isAnyAudioPlaying()) {
      window.stopAllArafahAudio();
      if (typeof showToast === 'function') showToast(labels().stopped);
    } else {
      window.playArafahAudio(localStorage.getItem('arafah_audio_choice') || 'labaik');
    }
  };

  function showPrompt(context) {
    askThenContinueToTimeline = context === 'welcome';
    const modal = document.getElementById('labbaikModal');
    if (modal) modal.classList.remove('hidden');
  }

  function closePrompt() {
    const modal = document.getElementById('labbaikModal');
    if (modal) modal.classList.add('hidden');
    localStorage.setItem(PROMPT_KEY, 'true');
    localStorage.setItem('labbaik_prompt_answered', 'true');
    localStorage.setItem('labbaik_prompt_answered_v2', 'true');
  }

  const originalGoToStep3 = goToStep3;
  goToStep3 = function () {
    if (localStorage.getItem(PROMPT_KEY) === 'true') {
      originalGoToStep3();
      return;
    }
    showPrompt('welcome');
  };

  window.startLabbaikSafe = function () {
    closePrompt();
    window.playArafahAudio('labaik');
    if (askThenContinueToTimeline) {
      askThenContinueToTimeline = false;
      setTimeout(originalGoToStep3, 160);
    }
  };

  window.stopLabbaikSafe = function () {
    closePrompt();
    window.stopAllArafahAudio();
    if (askThenContinueToTimeline) {
      askThenContinueToTimeline = false;
      setTimeout(originalGoToStep3, 160);
    }
  };

  function applyAudioTexts() {
    const l = labels();
    const eyebrow = document.getElementById('audioSectionEyebrow');
    const title = document.getElementById('bigBoxListenTitle');
    const sub = document.getElementById('bigBoxListenSub');
    const takbeer = document.getElementById('listenTakbeerBtn');
    const labaik = document.getElementById('listenLabbaikBtn');
    if (eyebrow) eyebrow.textContent = l.listen;
    if (title) title.textContent = l.choose;
    if (sub) sub.textContent = l.sub;
    if (takbeer) takbeer.querySelector('strong').textContent = l.takbeer;
    if (labaik) labaik.querySelector('strong').textContent = l.labaik;
    updateMuteButton(isAnyAudioPlaying());
    markChoice(localStorage.getItem('arafah_audio_choice') || 'labaik');
  }

  const previousApplyLanguageForAudio = applyLanguage;
  applyLanguage = function (lang) {
    previousApplyLanguageForAudio(lang);
    applyAudioTexts();
  };

  document.addEventListener('click', function (event) {
    const muteBtn = event.target.closest('#muteAudioBtn, #muteChoiceBtn');
    if (muteBtn) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.toggleArafahAudio();
      return;
    }

    const startBtn = event.target.closest('#startLabbaikBtn');
    if (startBtn) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.startLabbaikSafe();
      return;
    }

    const skipBtn = event.target.closest('#skipLabbaikBtn');
    if (skipBtn) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.stopLabbaikSafe();
      return;
    }

    const audioChoice = event.target.closest('[data-audio-choice]');
    if (audioChoice) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const choice = audioChoice.dataset.audioChoice === 'takbeer' ? 'takbeer' : 'labaik';
      window.playArafahAudio(choice);
      if (typeof showToast === 'function') {
        showToast(choice === 'takbeer' ? labels().playingTakbeer : labels().playingLabaik);
      }
    }
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    applyAudioTexts();
    updateMuteButton(false);
  });
})();



/* ═══════════════════════════════════════════
   BUTTON RELIABILITY PATCH — no dead clicks
═══════════════════════════════════════════ */
(function () {
  function copyTextSafe(text, successMessage) {
    const ok = successMessage || 'Copied ✓';
    const fallbackCopy = () => {
      try {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        area.style.pointerEvents = 'none';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
        if (typeof showToast === 'function') showToast(ok);
      } catch (err) {
        if (typeof showToast === 'function') showToast(text);
      }
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text)
        .then(() => { if (typeof showToast === 'function') showToast(ok); })
        .catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  }

  window.askLabbaikAfterWelcome = function () {
    if (typeof goToStep3 === 'function') goToStep3();
  };

  document.addEventListener('DOMContentLoaded', function () {
    const welcomeBtn = document.getElementById('welcomeCtaBtn');
    if (welcomeBtn) {
      welcomeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        window.askLabbaikAfterWelcome();
      });
    }
  });

  document.addEventListener('click', function (event) {
    const shareTop = event.target.closest('#shareAppBtn');
    if (shareTop) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const shareData = {
        title: document.getElementById('appTitle')?.textContent || 'Arafah Companion',
        text: currentLang === 'ar'
          ? 'رفيق عرفة: تطبيق بسيط للذكر والدعاء وخطة يوم عرفة.'
          : currentLang === 'fr'
            ? 'Compagnon Arafah : une appli simple pour le dhikr, les douas et le plan du jour.'
            : 'Arafah Companion: a simple app for dhikr, duas, and the Arafah day plan.',
        url: window.location.href
      };
      if (navigator.share && window.isSecureContext) {
        navigator.share(shareData).catch(function () {
          copyTextSafe(shareData.url, currentLang === 'ar' ? 'تم نسخ الرابط ✓' : 'Link copied ✓');
        });
      } else {
        copyTextSafe(shareData.url, currentLang === 'ar' ? 'تم نسخ الرابط ✓' : 'Link copied ✓');
      }
      return;
    }

    const reminder = event.target.closest('#shareReminderBtn');
    if (reminder) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const msg = currentLang === 'ar'
        ? '🌙 اليوم يوم عرفة! أكثر من الدعاء والذكر. جعله الله مقبولاً منا ومنك.'
        : currentLang === 'fr'
          ? '🌙 Aujourd’hui c’est le jour d’Arafah ! Multipliez les douas et le dhikr. Qu’Allah accepte de nous tous.'
          : '🌙 Today is Arafah Day! Increase your duas and dhikr. May Allah accept from us all.';
      copyTextSafe(msg, currentLang === 'ar' ? 'تم نسخ التذكير ✓' : 'Copied ✓');
      return;
    }

    const progress = event.target.closest('#shareProgressBtn');
    if (progress) {
      event.preventDefault();
      event.stopImmediatePropagation();
      const totalDhikr = Object.values(dhikrCounts || {}).reduce((a, b) => a + b, 0);
      const plan = document.getElementById('statProgress')?.textContent || '0%';
      const msg = currentLang === 'ar'
        ? `يوم عرفة: أدعيتي ${saidDuas.length} · ذكري ${totalDhikr} · خطتي ${plan} ✨`
        : `Arafah Day: ${saidDuas.length} duas · ${totalDhikr} dhikr · Plan ${plan} ✨`;
      copyTextSafe(msg, currentLang === 'ar' ? 'تم نسخ التقدم ✓' : 'Copied ✓');
      return;
    }

    const goBtn = event.target.closest('[data-go]');
    if (goBtn && document.getElementById('appShell')?.classList.contains('active')) {
      const dest = goBtn.dataset.go;
      if (dest && typeof goToScreen === 'function') {
        event.preventDefault();
        event.stopImmediatePropagation();
        goToScreen(dest);
      }
    }
  }, true);
})();




/* ═══════════════════════════════════════════
   STARTUP
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();

  // If already onboarded, skip directly to app
  if (onboardDone && localStorage.getItem('arafah_lang')) {
    currentLang = localStorage.getItem('arafah_lang');
    ['onboardStep1', 'onboardStep2', 'onboardStep3'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });
    const shell = document.getElementById('appShell');
    shell.classList.add('active');
    applyLanguage(currentLang);
    initApp();
  }
  // Otherwise, show step 1
});
