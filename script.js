
/* ── CONSTANTS ── */
const STORAGE_KEY = 'arafah2026v2';
const ARAFAH_START = new Date('2026-05-25T18:26:00+01:00');
const ARAFAH_END   = new Date('2026-05-26T18:27:00+01:00');

/* ── I18N ── */
const I18N = {
  en: {
    name:'Arafah Companion', dir:'ltr', languageName:'English',
    headerEyebrow:'يَوْمُ عَرَفَة', headerQuote:'"خير الدعاء دعاء يوم عرفة" — Prophet Muhammad ﷺ',
    labels:{days:'days',hours:'hours',min:'min',sec:'sec',rightNow:'Right now',checklist:'Checklist',dhikr:'Dhikr',duasSaid:'Duas said',quickPath:'Quick path',whatNeed:'What do you need?',swipe:'Swipe →',intention:'Intention of the day',intentionTitle:'Make it personal',worshipProgress:'Worship progress',progressHint:'The goal is not perfection. The goal is a sincere heart.',rescue:'Arafah rescue plan',rescueTitle:'I\'ve lost time… what now?',rescueText:'Don\'t give up. A few sincere minutes can be very precious.',shareGood:'Share the good',shareTitle:'Remind someone today',shareText:'Send a gentle reminder with the app link, or share your progress.',source:'Countdown uses Maghrib time in Tunis: May 25, 2026 19:26 → May 26, 2026 19:27.',tap:'tap',target:'Target',reset:'Reset',copy:'Copy',favorite:'Favorite',unfavorite:'Favorited ✓',said:'I said this',saidDone:'Said ✓',delete:'Delete',personalDuas:'My personal duas',noPersonal:'No personal duas yet. Start with one sincere dua.',settings:'Settings',settingsTitle:'Keep it simple.',dark:'🌙 Dark mode',on:'On',off:'Off',language:'🌍 Language',export:'📦 Export my data',resetAll:'🗑️ Reset all',reminder:'Reminder',protect:'Protect your Arafah',protectText:'Put your phone on focus mode. Use this app only for dhikr, duas, and your plan.',previous:'Previous',next:'Next dua',duaCounter:'Dua',save:'Save',add:'Add',search:'Search forgiveness, parents, rizq, exams...',customTask:'Add your own task',customPlaceholder:'e.g. Call my parents',shareReminder:'Copy reminder',shareProgress:'Share my progress',openDuaMode:'Enter dua mode',openAction:'Open suggested action',rescueButton:'Open dua mode',saveIntention:'Save intention',savePersonal:'Save personal dua',personalPlaceholder:'Ya Allah, I ask You for...',intentionPlaceholder:'Today I intend to seek forgiveness and come closer to Allah...',duaModeSmall:'No distraction',duaModeTitle:'Dua Mode',duaModeDesc:'Full-screen cards for your duas, one by one.',duasEyebrow:'Duas & personal list',duasTitle:'Ask as if anything is possible.',dhikrEyebrow:'Dhikr counter',dhikrTitle:'Small words. Great reward.',checklistEyebrow:'Worship plan',checklistTitle:'Choose progress, not pressure.',timelineEyebrow:'Best moments',timelineTitle:'Your Arafah journey.',navHome:'Home',navDhikr:'Dhikr',navDuas:'Duas',navPlan:'Plan',navMore:'More',builderLabel:'Personal dua builder',builderTitle:'Write what your heart needs'},
    quick:{dhikr:['Start dhikr','Count with focus'],dua:['Dua mode','Full-screen duas'],plan:['Worship plan','Essential tasks'],timeline:['Timeline','Best moments'],rescue:['Rescue plan','If time is short']},
    phase:{before:['Get ready','Time left for Arafah Day','Prepare your heart, your dua list, and your intention.','Arafah starts soon'],during:['Arafah now','Time left for Arafah','Every minute is priceless. Make dua, dhikr, and return to Allah.','Arafah time left'],after:['Accepted, inshaAllah','Arafah has ended','May Allah accept your fasting, duas, and worship. Keep one habit alive.','Arafah ended']},
    now:{before:['🌙','Prepare your dua list','Arafah begins at Maghrib. Write your personal duas, set your intention, and sleep with a clean heart.','duas'],during:['🤲','Use this precious time','Move between dhikr, Qur\'an, personal dua, sadaqah, and protecting your tongue from distractions.','duas'],lastHour:['🌅','Golden hour: full dua mode','Leave everything you can. Make dua for forgiveness, parents, future, the Ummah, and Jannah.','duas'],after:['🤍','Arafah is complete','Break your fast with gratitude and choose one small habit to keep after Arafah.','checklist']},
    categories:{All:'All',Arafah:'Arafah',KhayrDunya:'Khayr dunya',Knowledge:'Knowledge',Rizq:'Rizq',Marriage:'Marriage',Studies:'Studies / exams',Family:'Family',Success:'Success',Forgiveness:'Forgiveness',Guidance:'Guidance',Protection:'Protection',Akhirah:'Akhirah',LoveAllah:'Love of Allah',Health:'Health'},
    tabs:{essential:'Essential',recommended:'Recommended',bonus:'Bonus',custom:'My tasks'},
    progress:['Start small. One sincere action is enough.','Beautiful start. Keep going gently.','You are building momentum. Don\'t stop now.','You are close. Make the last hours count.','Almost complete. Finish with sincere dua.','May Allah accept from you 🤍'],
    rescueItems:['Make wudu if possible.','Say istighfar 100x.','Repeat the best Arafah dhikr.','Make personal dua before Maghrib.','Give sadaqah if you can.'],
    shareReminder:`🌙 It's Arafah. Don't forget me in your duas 🤍\n\nMay Allah forgive us, guide us, accept from us, and grant us Jannah.`,
    toasts:{saved:'Saved 🤍',copied:'Copied ✨',duaSaved:'Personal dua saved 🤲',writeDua:'Write a dua first 🤍',taskFirst:'Write a task first',taskAdded:'Task added ✅',target:'Target reached 🎉',reset:'Counter reset',language:'Language updated 🌍',appCopied:'App link copied 🌙',reminderCopied:'Reminder copied with link 🤍',progressCopied:'Progress copied ✨',dataCopied:'Data copied as JSON 📦',resetConfirm:'Reset all progress?',resetDone:'Progress reset ✨'}
  },
  fr: {
    name:'Arafah Companion', dir:'ltr', languageName:'Français',
    headerEyebrow:'يَوْمُ عَرَفَة', headerQuote:'« خير الدعاء دعاء يوم عرفة » — Prophète Muhammad ﷺ',
    labels:{days:'jours',hours:'heures',min:'min',sec:'sec',rightNow:'Maintenant',checklist:'Checklist',dhikr:'Dhikr',duasSaid:'Duas dites',quickPath:'Chemin rapide',whatNeed:'De quoi as-tu besoin ?',swipe:'Glisse →',intention:'Intention du jour',intentionTitle:'Rends-la personnelle',worshipProgress:'Progression spirituelle',progressHint:'Le but n\'est pas la perfection. Le but est un cœur sincère.',rescue:'Plan de secours Arafah',rescueTitle:'J\'ai perdu du temps… que faire ?',rescueText:'Ne lâche pas. Quelques minutes sincères peuvent être très précieuses.',shareGood:'Partager le bien',shareTitle:'Rappelle quelqu\'un aujourd\'hui',shareText:'Envoie un rappel doux avec le lien de l\'app, ou partage ta progression.',source:'Le compte à rebours utilise l\'heure de Maghrib à Tunis : 25 mai 2026 19:26 → 26 mai 2026 19:27.',tap:'tape',target:'Objectif',reset:'Réinitialiser',copy:'Copier',favorite:'Favori',unfavorite:'Favori ✓',said:'Je l\'ai dite',saidDone:'Dit ✓',delete:'Supprimer',personalDuas:'Mes duas personnelles',noPersonal:'Aucune dua personnelle pour le moment. Commence par une dua sincère.',settings:'Paramètres',settingsTitle:'Garde ça simple.',dark:'🌙 Mode sombre',on:'Oui',off:'Non',language:'🌍 Langue',export:'📦 Exporter mes données',resetAll:'🗑️ Réinitialiser tout',reminder:'Rappel',protect:'Protège ton Arafah',protectText:'Mets ton téléphone en mode concentration. Utilise cette app seulement pour le dhikr, les duas et ton plan.',previous:'Précédent',next:'Dua suivante',duaCounter:'Dua',save:'Sauvegarder',add:'Ajouter',search:'Chercher pardon, parents, rizq, examens...',customTask:'Ajoute ta propre tâche',customPlaceholder:'Exemple : Faire une dua pour mon professeur',shareReminder:'Copier le rappel',shareProgress:'Partager ma progression',openDuaMode:'Entrer en mode dua',openAction:'Ouvrir l\'action proposée',rescueButton:'Ouvrir le mode dua',saveIntention:'Sauvegarder l\'intention',savePersonal:'Sauvegarder la dua',personalPlaceholder:'Ya Allah, je Te demande...',intentionPlaceholder:'Aujourd\'hui, mon intention est de chercher le pardon d\'Allah et de me rapprocher de Lui...',duaModeSmall:'Sans distraction',duaModeTitle:'Mode Dua',duaModeDesc:'Des cartes plein écran pour tes duas, une par une.',duasEyebrow:'Duas & liste personnelle',duasTitle:'Demande comme si tout était possible.',dhikrEyebrow:'Compteur de dhikr',dhikrTitle:'Petits mots. Grande récompense.',checklistEyebrow:'Plan d\'adoration',checklistTitle:'Choisis le progrès, pas la pression.',timelineEyebrow:'Meilleurs moments',timelineTitle:'Ton parcours d\'Arafah.',navHome:'Accueil',navDhikr:'Dhikr',navDuas:'Duas',navPlan:'Plan',navMore:'Plus',builderLabel:'Créateur de dua personnelle',builderTitle:'Écris ce dont ton cœur a besoin'},
    quick:{dhikr:['Commencer dhikr','Compter avec focus'],dua:['Mode dua','Duas plein écran'],plan:['Plan d\'adoration','Tâches essentielles'],timeline:['Timeline','Meilleurs moments'],rescue:['Plan secours','Si le temps manque']},
    phase:{before:['Prépare-toi','Temps restant avant Arafah','Prépare ton cœur, ta liste de duas et ton intention.','Arafah commence bientôt'],during:['Arafah maintenant','Temps restant pour Arafah','Chaque minute est précieuse. Fais dua, dhikr et reviens vers Allah.','Temps restant Arafah'],after:['Accepté, inshaAllah','Arafah est terminé','Qu\'Allah accepte ton jeûne, tes duas et ton adoration. Garde une bonne habitude.','Arafah terminé']},
    now:{before:['🌙','Prépare ta liste de duas','Arafah commence à Maghrib. Écris tes duas personnelles, fixe ton intention, et dors avec un cœur propre.','duas'],during:['🤲','Utilise ce temps précieux','Alterner entre dhikr, Qur\'an, duas personnelles, sadaqah et protection de la langue.','duas'],lastHour:['🌅','Dernière heure : mode dua','Laisse ce que tu peux. Demande pardon, pour tes parents, ton avenir, la Ummah et Jannah.','duas'],after:['🤍','Arafah est terminé','Romps ton jeûne avec gratitude et choisis une petite habitude à garder après Arafah.','checklist']},
    categories:{All:'Tout',Arafah:'Arafah',KhayrDunya:'Bien ici-bas',Knowledge:'Science',Rizq:'Rizq',Marriage:'Mariage',Studies:'Études / examens',Family:'Famille',Success:'Réussite',Forgiveness:'Pardon',Guidance:'Guidance',Protection:'Protection',Akhirah:'Akhirah',LoveAllah:'Amour d\'Allah',Health:'Santé'},
    tabs:{essential:'Essentiel',recommended:'Recommandé',bonus:'Bonus',custom:'Mes tâches'},
    progress:['Commence petit. Une action sincère suffit.','Très beau début. Continue doucement.','Tu construis de l\'élan. Ne t\'arrête pas.','Tu es proche. Profite des dernières heures.','Presque terminé. Termine par une dua sincère.','Qu\'Allah accepte de toi 🤍'],
    rescueItems:['Fais wudu si possible.','Dis istighfar 100 fois.','Répète le meilleur dhikr d\'Arafah.','Fais tes duas personnelles avant Maghrib.','Donne une sadaqah si tu peux.'],
    shareReminder:`🌙 C'est Arafah. N'oublie pas de me mentionner dans tes duas 🤍\n\nQu'Allah nous pardonne, nous guide, accepte de nous et nous accorde Jannah.`,
    toasts:{saved:'Sauvegardé 🤍',copied:'Copié ✨',duaSaved:'Dua personnelle sauvegardée 🤲',writeDua:'Écris d\'abord une dua 🤍',taskFirst:'Écris d\'abord une tâche',taskAdded:'Tâche ajoutée ✅',target:'Objectif atteint 🎉',reset:'Compteur réinitialisé',language:'Langue mise à jour 🌍',appCopied:'Lien de l\'app copié 🌙',reminderCopied:'Rappel copié avec le lien 🤍',progressCopied:'Progression copiée ✨',dataCopied:'Données copiées en JSON 📦',resetConfirm:'Réinitialiser toute la progression ?',resetDone:'Progression réinitialisée ✨'}
  },
  ar: {
    name:'رفيق عرفة', dir:'rtl', languageName:'العربية',
    headerEyebrow:'يَوْمُ عَرَفَة', headerQuote:'« خير الدعاء دعاء يوم عرفة » — النبي محمد ﷺ',
    labels:{days:'أيام',hours:'ساعات',min:'دقائق',sec:'ثواني',rightNow:'الآن',checklist:'الخطة',dhikr:'الذكر',duasSaid:'أدعية قيلت',quickPath:'طريق سريع',whatNeed:'ماذا تحتاج الآن؟',swipe:'اسحب ←',intention:'نية اليوم',intentionTitle:'اجعلها شخصية',worshipProgress:'تقدم العبادة',progressHint:'الهدف ليس الكمال، الهدف قلب صادق.',rescue:'خطة إنقاذ عرفة',rescueTitle:'ضيعت وقت… ماذا أفعل؟',rescueText:'لا تستسلم. دقائق قليلة بصدق قد تكون ثمينة.',shareGood:'انشر الخير',shareTitle:'ذكّر شخصًا اليوم',shareText:'أرسل تذكيرًا لطيفًا مع رابط التطبيق أو شارك تقدمك.',source:'العد التنازلي حسب توقيت مغرب تونس: 25 ماي 2026 19:26 → 26 ماي 2026 19:27.',tap:'اضغط',target:'الهدف',reset:'إعادة',copy:'نسخ',favorite:'مفضل',unfavorite:'مفضل ✓',said:'قلت هذا',saidDone:'تم ✓',delete:'حذف',personalDuas:'أدعيتي الشخصية',noPersonal:'لا توجد أدعية شخصية بعد. ابدأ بدعاء صادق واحد.',settings:'الإعدادات',settingsTitle:'خلّيه بسيط.',dark:'🌙 الوضع الليلي',on:'مفعل',off:'غير مفعل',language:'🌍 اللغة',export:'📦 تصدير بياناتي',resetAll:'🗑️ مسح كل التقدم',reminder:'تذكير',protect:'احمِ يوم عرفة',protectText:'ضع الهاتف في وضع التركيز. استعمل التطبيق فقط للذكر والدعاء والخطة.',previous:'السابق',next:'الدعاء التالي',duaCounter:'دعاء',save:'حفظ',add:'إضافة',search:'ابحث: مغفرة، والدين، رزق، امتحان...',customTask:'أضف مهمة خاصة',customPlaceholder:'مثال: أدعو لأستاذي',shareReminder:'نسخ التذكير',shareProgress:'مشاركة تقدمي',openDuaMode:'افتح وضع الدعاء',openAction:'افتح الاقتراح',rescueButton:'افتح وضع الدعاء',saveIntention:'حفظ النية',savePersonal:'حفظ الدعاء',personalPlaceholder:'يا رب أسألك...',intentionPlaceholder:'نيتي اليوم أن أطلب مغفرة الله وأقترب منه...',duaModeSmall:'بلا تشتيت',duaModeTitle:'وضع الدعاء',duaModeDesc:'بطاقات كاملة الشاشة لأدعيتك واحدًا بعد واحد.',duasEyebrow:'الأدعية والقائمة الشخصية',duasTitle:'ادعُ وكأن كل شيء ممكن.',dhikrEyebrow:'عداد الذكر',dhikrTitle:'كلمات قليلة. أجر عظيم.',checklistEyebrow:'خطة العبادة',checklistTitle:'اختر التقدم لا الضغط.',timelineEyebrow:'أفضل الأوقات',timelineTitle:'رحلتك في يوم عرفة.',navHome:'الرئيسية',navDhikr:'ذكر',navDuas:'دعاء',navPlan:'الخطة',navMore:'المزيد',builderLabel:'منشئ الدعاء الشخصي',builderTitle:'اكتب ما يحتاجه قلبك'},
    quick:{dhikr:['ابدأ الذكر','عدّ بتركيز'],dua:['وضع الدعاء','أدعية كاملة الشاشة'],plan:['خطة العبادة','المهام الأساسية'],timeline:['الجدول','أفضل الأوقات'],rescue:['خطة إنقاذ','لو الوقت قصير']},
    phase:{before:['استعد','الوقت المتبقي ليوم عرفة','حضّر قلبك وقائمة أدعيتك ونيتك.','عرفة يبدأ قريبًا'],during:['عرفة الآن','الوقت المتبقي لعرفة','كل دقيقة ثمينة. ادعُ واذكر الله وارجع إليه.','المتبقي لعرفة'],after:['تقبّل الله','انتهى يوم عرفة','تقبل الله صيامك ودعاءك وعبادتك. حافظ على عادة صغيرة.','انتهى عرفة']},
    now:{before:['🌙','حضّر قائمة أدعيتك','يبدأ عرفة عند المغرب. اكتب أدعيتك الشخصية، وجدّد نيتك، ونم بقلب نظيف.','duas'],during:['🤲','استثمر هذا الوقت الثمين','تنقّل بين الذكر والقرآن والدعاء الشخصي والصدقة وحفظ اللسان.','duas'],lastHour:['🌅','الساعة الذهبية: وضع الدعاء','اترك ما تستطيع. ادعُ للمغفرة والوالدين والمستقبل والأمة والجنة.','duas'],after:['🤍','اكتمل يوم عرفة','افطر بشكر واختر عادة صغيرة تستمر بها بعد عرفة.','checklist']},
    categories:{All:'الكل',Arafah:'عرفة',KhayrDunya:'خير الدنيا',Knowledge:'العلم',Rizq:'الرزق',Marriage:'الزواج',Studies:'الدراسة / الامتحانات',Family:'العائلة',Success:'النجاح',Forgiveness:'المغفرة',Guidance:'الهداية',Protection:'الحفظ',Akhirah:'الآخرة',LoveAllah:'حب الله',Health:'الصحة'},
    tabs:{essential:'أساسي',recommended:'مستحب',bonus:'إضافي',custom:'مهامي'},
    progress:['ابدأ قليلًا. عمل صادق واحد يكفي.','بداية جميلة. واصل بهدوء.','أنت تبني زخمًا. لا تتوقف.','اقتربت. استثمر الساعات الأخيرة.','تقريبًا اكتمل. اختم بدعاء صادق.','تقبل الله منك 🤍'],
    rescueItems:['توضأ إن استطعت.','قل أستغفر الله 100 مرة.','كرر أفضل ذكر يوم عرفة.','ادعُ بدعائك الشخصي قبل المغرب.','تصدق إن استطعت.'],
    shareReminder:`🌙 إنه يوم عرفة. لا تنسني من دعائك 🤍\n\nاللهم اغفر لنا واهدنا وتقبل منا وارزقنا الجنة.`,
    toasts:{saved:'تم الحفظ 🤍',copied:'تم النسخ ✨',duaSaved:'تم حفظ الدعاء 🤲',writeDua:'اكتب الدعاء أولًا 🤍',taskFirst:'اكتب المهمة أولًا',taskAdded:'تمت إضافة المهمة ✅',target:'وصلت للهدف 🎉',reset:'تمت إعادة العداد',language:'تم تغيير اللغة 🌍',appCopied:'تم نسخ رابط التطبيق 🌙',reminderCopied:'تم نسخ التذكير مع الرابط 🤍',progressCopied:'تم نسخ التقدم ✨',dataCopied:'تم نسخ البيانات JSON 📦',resetConfirm:'هل تريد مسح كل التقدم؟',resetDone:'تم مسح التقدم ✨'}
  }
};

/* ── DHIKR DATA ── */
const DHIKR = [
  {id:'subhanallah',arabic:'سُبْحَانَ اللهِ',label:{en:'SubhanAllah',fr:'SubhanAllah',ar:'سبحان الله'},meaning:{en:'Glory be to Allah',fr:'Gloire à Allah',ar:'تنزيه الله عن كل نقص'},target:33},
  {id:'alhamdulillah',arabic:'الْحَمْدُ لِلَّهِ',label:{en:'Alhamdulillah',fr:'Alhamdulillah',ar:'الحمد لله'},meaning:{en:'All praise is for Allah',fr:'Toute louange appartient à Allah',ar:'كل الحمد والثناء لله'},target:33},
  {id:'allahuakbar',arabic:'اللهُ أَكْبَر',label:{en:'Allahu Akbar',fr:'Allahu Akbar',ar:'الله أكبر'},meaning:{en:'Allah is the Greatest',fr:'Allah est le Plus Grand',ar:'الله أعظم من كل شيء'},target:34},
  {id:'tahlil',arabic:'لَا إِلٰهَ إِلَّا اللهُ',label:{en:'La ilaha illa Allah',fr:'La ilaha illa Allah',ar:'لا إله إلا الله'},meaning:{en:'There is no deity except Allah',fr:'Nulle divinité sauf Allah',ar:'لا معبود بحق إلا الله'},target:100},
  {id:'istighfar',arabic:'أَسْتَغْفِرُ اللهَ',label:{en:'Astaghfirullah',fr:'Astaghfirullah',ar:'أستغفر الله'},meaning:{en:'I seek Allah\'s forgiveness',fr:'Je demande pardon à Allah',ar:'أطلب مغفرة الله'},target:100},
  {id:'salawat',arabic:'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ',label:{en:'Salawat',fr:'Salawat',ar:'الصلاة على النبي ﷺ'},meaning:{en:'O Allah, send blessings upon Muhammad ﷺ',fr:'Ô Allah, prie sur Muhammad ﷺ',ar:'اللهم صلِّ على محمد ﷺ'},target:100}
];

/* ── DUAS DATA ── */
const DUAS = [
  {id:'arafah-dua',category:'Arafah',arabic:'لَا إِلَٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِير',translit:'Lā ilāha illallāhu waḥdahū lā sharīka lah...',text:{en:'There is none worthy of worship except Allah alone, with no partner. His is the dominion, His is all praise, and He has power over all things.',fr:'Il n\'y a de divinité qu\'Allah, Seul sans associé. À Lui la royauté, à Lui la louange, et Il est capable de toute chose.',ar:'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.'},source:'Reported in Tirmidhi 3585'},
  {id:'rabbana-atina',category:'KhayrDunya',arabic:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّار',translit:'Rabbanā ātinā fid-dunyā ḥasanah...',text:{en:'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',fr:'Notre Seigneur, accorde-nous le bien ici-bas et le bien dans l\'au-delà, et protège-nous du châtiment du Feu.',ar:'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار.'},source:'Qur\'an 2:201'},
  {id:'love-allah',category:'LoveAllah',arabic:'اللَّهُمَّ ارْزُقْنِي حُبَّكَ وَحُبَّ مَنْ يَنْفَعُنِي حُبُّهُ عِنْدَكَ',translit:'Allāhumma-rzuqnī ḥubbaka...',text:{en:'O Allah, grant me Your love and the love of those whose love will benefit me with You.',fr:'Ô Allah, accorde-moi Ton amour et l\'amour de ceux dont l\'amour me sera bénéfique auprès de Toi.',ar:'اللهم ارزقني حبك وحب من ينفعني حبه عندك.'},source:'Tirmidhi'},
  {id:'huda-tuqa',category:'Guidance',arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',translit:'Allāhumma innī as\'alukal-hudā wat-tuqa...',text:{en:'O Allah, I ask You for guidance, piety, chastity, and independence from need.',fr:'Ô Allah, je Te demande la guidée, la piété, la chasteté et la richesse du cœur.',ar:'اللهم إني أسألك الهدى والتقى والعفاف والغنى.'},source:'Muslim'},
  {id:'forgive-all',category:'Forgiveness',arabic:'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ',translit:'Allāhumma-ghfir lī dhanbī kullah...',text:{en:'O Allah, forgive all my sins: small and great, first and last, public and private.',fr:'Ô Allah, pardonne tous mes péchés : petits et grands, premiers et derniers, apparents et cachés.',ar:'اللهم اغفر لي ذنبي كله دقه وجله وأوله وآخره وعلانيته وسره.'},source:'Muslim'},
  {id:'beneficial-knowledge',category:'Knowledge',arabic:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',translit:'Allāhumma-nfaʿnī bimā ʿallamtanī...',text:{en:'O Allah, benefit me through what You taught me, teach me what benefits me, and increase me in knowledge.',fr:'Ô Allah, rends-moi utile ce que Tu m\'as appris, enseigne-moi ce qui m\'est utile et augmente-moi en science.',ar:'اللهم انفعني بما علمتني وعلمني ما ينفعني وزدني علمًا.'},source:'Ibn Majah'},
  {id:'exam-ease',category:'Studies',arabic:'رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي',translit:'Rabbi-shraḥ lī ṣadrī wa yassir lī amrī',text:{en:'My Lord, expand my chest and make my task easy for me.',fr:'Seigneur, ouvre ma poitrine et facilite-moi ma tâche.',ar:'رب اشرح لي صدري ويسر لي أمري.'},source:'Qur\'an 20:25-26'},
  {id:'rizq-halal',category:'Rizq',arabic:'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',translit:'Allāhumma-kfinī biḥalālika ʿan ḥarāmik...',text:{en:'O Allah, suffice me with what You made halal over what You made haram, and enrich me by Your bounty from needing anyone besides You.',fr:'Ô Allah, suffis-moi par Ton licite contre l\'illicite, et enrichis-moi par Ta grâce afin que je n\'aie besoin que de Toi.',ar:'اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك.'},source:'Tirmidhi'},
  {id:'parents',category:'Family',arabic:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',translit:'Rabbi-rḥamhumā kamā rabbayānī ṣaghīrā',text:{en:'My Lord, have mercy upon my parents as they raised me when I was small.',fr:'Seigneur, fais-leur miséricorde comme ils m\'ont élevé quand j\'étais petit.',ar:'رب ارحمهما كما ربياني صغيرًا.'},source:'Qur\'an 17:24'},
  {id:'marriage-good',category:'Marriage',arabic:'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',translit:'Rabbi innī limā anzalta ilayya min khayrin faqīr',text:{en:'My Lord, I am truly in need of whatever good You send down to me.',fr:'Seigneur, j\'ai grand besoin de tout bien que Tu feras descendre vers moi.',ar:'رب إني لما أنزلت إلي من خير فقير.'},source:'Qur\'an 28:24'},
  {id:'success-life',category:'Success',arabic:'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا',translit:'Allāhumma lā sahla illā mā jaʿaltahu sahlā...',text:{en:'O Allah, nothing is easy except what You make easy, and You make difficulty easy if You will.',fr:'Ô Allah, rien n\'est facile sauf ce que Tu rends facile, et Tu rends la difficulté facile si Tu veux.',ar:'اللهم لا سهل إلا ما جعلته سهلًا وأنت تجعل الحزن إذا شئت سهلًا.'},source:'Ibn Hibban'},
  {id:'heart-obedience',category:'Guidance',arabic:'اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ',translit:'Allāhumma muṣarrifal-qulūb...',text:{en:'O Turner of hearts, turn our hearts toward Your obedience.',fr:'Ô Toi qui orientes les cœurs, oriente nos cœurs vers Ton obéissance.',ar:'اللهم مصرف القلوب صرف قلوبنا على طاعتك.'},source:'Muslim'},
  {id:'protection-favors',category:'Protection',arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ',translit:'Allāhumma innī aʿūdhu bika min zawāli niʿmatik...',text:{en:'O Allah, I seek refuge in You from the decline of Your blessings, the change of wellbeing, sudden punishment, and all Your displeasure.',fr:'Ô Allah, je cherche refuge auprès de Toi contre la disparition de Tes bienfaits, le changement de la santé, la punition soudaine et tout ce qui Te déplaît.',ar:'اللهم إني أعوذ بك من زوال نعمتك وتحول عافيتك وفجاءة نقمتك وجميع سخطك.'},source:'Muslim'},
  {id:'jannah-nar',category:'Akhirah',arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّار',translit:'Allāhumma innī as\'alukal-jannah...',text:{en:'O Allah, I ask You for Paradise and seek refuge in You from the Fire.',fr:'Ô Allah, je Te demande le Paradis et je cherche refuge auprès de Toi contre le Feu.',ar:'اللهم إني أسألك الجنة وأعوذ بك من النار.'},source:'Prophetic supplication'},
  {id:'health',category:'Health',arabic:'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي',translit:'Allāhumma ʿāfinī fī badanī...',text:{en:'O Allah, grant me health in my body. O Allah, grant me health in my hearing. O Allah, grant me health in my sight.',fr:'Ô Allah, donne-moi la santé dans mon corps. Ô Allah, donne-moi la santé dans mon ouïe. Ô Allah, donne-moi la santé dans ma vue.',ar:'اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري.'},source:'Abu Dawud'}
];

/* ── PROMPTS ── */
const PROMPTS = [
  {key:'Forgiveness',en:'Ya Allah, forgive me for what I know and what I forgot...',fr:'Ô Allah, pardonne-moi ce que je connais et ce que j\'ai oublié...',ar:'اللهم اغفر لي ما أعلم وما لا أعلم...'},
  {key:'Family',en:'Ya Allah, bless my parents, protect them, and raise their ranks...',fr:'Ô Allah, bénis mes parents, protège-les et élève leur rang...',ar:'اللهم بارك في والديّ واحفظهما وارفع درجتهما...'},
  {key:'Studies',en:'Ya Allah, make my exams easy and grant me beneficial knowledge...',fr:'Ô Allah, facilite mes examens et accorde-moi une science utile...',ar:'اللهم يسّر امتحاناتي وارزقني علمًا نافعًا...'},
  {key:'Rizq',en:'Ya Allah, grant me halal rizq, barakah, and contentment...',fr:'Ô Allah, accorde-moi un rizq halal, la baraka et le contentement...',ar:'اللهم ارزقني رزقًا حلالًا وبركة وقناعة...'},
  {key:'Marriage',en:'Ya Allah, grant me a righteous spouse and a peaceful home...',fr:'Ô Allah, accorde-moi un mariage pieux et un foyer paisible...',ar:'اللهم ارزقني زوجًا صالحًا وبيتًا مطمئنًا...'},
  {key:'Success',en:'Ya Allah, open the right doors and make my work beneficial...',fr:'Ô Allah, ouvre-moi les bonnes portes et rends mon travail bénéfique...',ar:'اللهم افتح لي أبواب الخير واجعل عملي نافعًا...'},
  {key:'Health',en:'Ya Allah, heal the sick, protect my body, and give me strength...',fr:'Ô Allah, guéris les malades, protège mon corps et donne-moi la force...',ar:'اللهم اشفِ المرضى واحفظ جسدي وارزقني القوة...'},
  {key:'Akhirah',en:'Ya Allah, grant me Jannah and protect me from the Fire...',fr:'Ô Allah, accorde-moi le Paradis et protège-moi du Feu...',ar:'اللهم ارزقني الجنة وأعذني من النار...'}
];

/* ── CHECKLIST ── */
const CHECKLIST = [
  {id:'intention',level:'essential',phase:{en:'Night before',fr:'La veille',ar:'الليلة السابقة'},title:{en:'Set a sincere intention',fr:'Fixe une intention sincère',ar:'جدّد نية صادقة'},desc:{en:'Decide that tomorrow is for forgiveness, dua, and returning to Allah.',fr:'Décide que demain sera pour le pardon, la dua et le retour vers Allah.',ar:'اجعل نيتك أن يكون يومك للمغفرة والدعاء والرجوع إلى الله.'}},
  {id:'fast',level:'essential',phase:{en:'Morning',fr:'Matin',ar:'الصباح'},title:{en:'Fast if you are able',fr:'Jeûne si tu peux',ar:'صُم إن استطعت'},desc:{en:'For non-pilgrims, fasting Arafah is strongly encouraged.',fr:'Pour les non-pèlerins, le jeûne d\'Arafah est fortement recommandé.',ar:'لغير الحجاج، صيام عرفة مستحب جدًا.'}},
  {id:'prayers',level:'essential',phase:{en:'All day',fr:'Toute la journée',ar:'كل اليوم'},title:{en:'Pray the 5 prayers on time',fr:'Prie les 5 prières à l\'heure',ar:'صلِّ الصلوات الخمس في وقتها'},desc:{en:'Protect the obligations before adding extra worship.',fr:'Protège les obligations avant les actes supplémentaires.',ar:'حافظ على الفرض قبل النوافل.'}},
  {id:'dua',level:'essential',phase:{en:'Especially last hour',fr:'Surtout dernière heure',ar:'خصوصًا آخر ساعة'},title:{en:'Make long personal dua',fr:'Fais de longues duas personnelles',ar:'أطل الدعاء الشخصي'},desc:{en:'Ask for forgiveness, guidance, family, future, rizq, success, and Jannah.',fr:'Demande pardon, guidée, famille, avenir, rizq, réussite et Jannah.',ar:'اسأل المغفرة والهداية والأهل والمستقبل والرزق والنجاح والجنة.'}},
  {id:'avoid-sins',level:'essential',phase:{en:'All day',fr:'Toute la journée',ar:'كل اليوم'},title:{en:'Protect your tongue and phone',fr:'Protège ta langue et ton téléphone',ar:'احفظ لسانك وهاتفك'},desc:{en:'Avoid arguments, gossip, useless scrolling, and anything that steals your focus.',fr:'Évite disputes, médisance, scroll inutile et tout ce qui vole ton focus.',ar:'ابتعد عن الخصام والغيبة والتمرير بلا فائدة وكل ما يسرق تركيزك.'}},
  {id:'quran',level:'recommended',phase:{en:'Morning',fr:'Matin',ar:'الصباح'},title:{en:'Read Qur\'an, even one page',fr:'Lis du Coran, même une page',ar:'اقرأ القرآن ولو صفحة'},desc:{en:'A small sincere portion is better than a big plan you never start.',fr:'Un petit passage sincère vaut mieux qu\'un grand plan non réalisé.',ar:'القليل بصدق خير من خطة كبيرة لا تبدأها.'}},
  {id:'arafah-dhikr',level:'recommended',phase:{en:'All day',fr:'Toute la journée',ar:'كل اليوم'},title:{en:'Repeat the best Arafah dhikr',fr:'Répète le meilleur dhikr d\'Arafah',ar:'كرر أفضل ذكر عرفة'},desc:{en:'La ilaha illa Allah wahdahu la sharika lah...',fr:'La ilaha illa Allah wahdahu la sharika lah...',ar:'لا إله إلا الله وحده لا شريك له...'}},
  {id:'istighfar100',level:'recommended',phase:{en:'Any time',fr:'À tout moment',ar:'أي وقت'},title:{en:'Say istighfar 100x',fr:'Dis istighfar 100x',ar:'قل أستغفر الله 100 مرة'},desc:{en:'Ask Allah to wipe what you carry and open a new page.',fr:'Demande à Allah d\'effacer ce que tu portes et d\'ouvrir une nouvelle page.',ar:'اسأل الله أن يمحو ما تحمل ويفتح لك صفحة جديدة.'}},
  {id:'salawat100',level:'recommended',phase:{en:'Any time',fr:'À tout moment',ar:'أي وقت'},title:{en:'Send salawat 100x',fr:'Fais salawat 100x',ar:'صلِّ على النبي ﷺ 100 مرة'},desc:{en:'Send blessings upon the Prophet ﷺ.',fr:'Envoie des prières sur le Prophète ﷺ.',ar:'أكثر من الصلاة على النبي ﷺ.'}},
  {id:'sadaqah',level:'recommended',phase:{en:'Before Maghrib',fr:'Avant Maghrib',ar:'قبل المغرب'},title:{en:'Give sadaqah if you can',fr:'Donne une sadaqah si tu peux',ar:'تصدق إن استطعت'},desc:{en:'Even a small amount with sincerity is meaningful.',fr:'Même un petit montant avec sincérité compte.',ar:'حتى القليل بصدق له معنى.'}},
  {id:'parents-call',level:'bonus',phase:{en:'Afternoon',fr:'Après-midi',ar:'بعد الظهر'},title:{en:'Call or message your parents',fr:'Appelle ou écris à tes parents',ar:'اتصل بوالديك أو راسلهما'},desc:{en:'Ask them for dua and make dua for them.',fr:'Demande-leur une dua et fais dua pour eux.',ar:'اطلب دعاءهما وادعُ لهما.'}},
  {id:'gratitude',level:'bonus',phase:{en:'After Maghrib',fr:'Après Maghrib',ar:'بعد المغرب'},title:{en:'Write 3 things you are grateful for',fr:'Écris 3 choses pour lesquelles tu es reconnaissant',ar:'اكتب 3 نعم تشكر الله عليها'},desc:{en:'End the day with gratitude and hope.',fr:'Termine la journée avec gratitude et espoir.',ar:'اختم اليوم بالشكر والأمل.'}},
  {id:'habit',level:'bonus',phase:{en:'After Arafah',fr:'Après Arafah',ar:'بعد عرفة'},title:{en:'Choose one habit to keep',fr:'Choisis une habitude à garder',ar:'اختر عادة واحدة تستمر عليها'},desc:{en:'Arafah should not end at Maghrib. Keep one small habit alive.',fr:'Arafah ne doit pas finir à Maghrib. Garde une petite habitude.',ar:'لا تجعل عرفة ينتهي مع المغرب. حافظ على عادة صغيرة.'}}
];

/* ── TIMELINE ── */
const TIMELINE = [
  {id:'night',icon:'🌙',time:{en:'May 25 · after Maghrib',fr:'25 mai · après Maghrib',ar:'25 ماي · بعد المغرب'},title:{en:'Arafah begins',fr:'Arafah commence',ar:'يبدأ عرفة'},desc:{en:'Set intention, write your dua list, sleep early, and prepare your heart.',fr:'Fixe l\'intention, écris tes duas, dors tôt et prépare ton cœur.',ar:'جدّد النية، اكتب أدعيتك، نم مبكرًا، وحضّر قلبك.'}},
  {id:'fajr',icon:'🌅',time:{en:'Fajr',fr:'Fajr',ar:'الفجر'},title:{en:'Start clean',fr:'Commence proprement',ar:'ابدأ بنقاء'},desc:{en:'Pray Fajr, make morning adhkar, and begin your fast if you are able.',fr:'Prie Fajr, fais les adhkar du matin, et commence le jeûne si tu peux.',ar:'صلِّ الفجر، أذكار الصباح، وابدأ الصيام إن استطعت.'}},
  {id:'morning',icon:'📖',time:{en:'Morning',fr:'Matin',ar:'الصباح'},title:{en:'Qur\'an + dhikr',fr:'Coran + dhikr',ar:'قرآن وذكر'},desc:{en:'Read Qur\'an and start easy dhikr goals before the day gets busy.',fr:'Lis du Coran et commence des objectifs simples de dhikr.',ar:'اقرأ القرآن وابدأ أهداف ذكر سهلة قبل زحمة اليوم.'}},
  {id:'dhuhr',icon:'🕌',time:{en:'Dhuhr',fr:'Dhuhr',ar:'الظهر'},title:{en:'Reset intention',fr:'Renouvelle l\'intention',ar:'جدّد النية'},desc:{en:'Pray on time and refresh your intention.',fr:'Prie à l\'heure et renouvelle ton intention.',ar:'صلِّ في الوقت وجدّد نيتك.'}},
  {id:'asr',icon:'🤲',time:{en:'Asr',fr:'Asr',ar:'العصر'},title:{en:'Deep dua window',fr:'Moment fort pour les duas',ar:'نافذة الدعاء العميق'},desc:{en:'Reduce distractions. Move from tasks to asking Allah with presence.',fr:'Réduis les distractions. Passe des tâches à la dua avec présence.',ar:'قلل التشتيت وانتقل من المهام إلى الدعاء بحضور.'}},
  {id:'last-hour',icon:'🌄',time:{en:'Last hour before Maghrib',fr:'Dernière heure avant Maghrib',ar:'آخر ساعة قبل المغرب'},title:{en:'Golden hour',fr:'Heure précieuse',ar:'الساعة الذهبية'},desc:{en:'Go all-in: forgiveness, parents, future, Ummah, Jannah.',fr:'Donne tout : pardon, parents, avenir, Ummah, Jannah.',ar:'أكثر الدعاء: مغفرة، والدين، مستقبل، أمة، جنة.'}},
  {id:'maghrib',icon:'🥛',time:{en:'Maghrib',fr:'Maghrib',ar:'المغرب'},title:{en:'Break fast with gratitude',fr:'Romps le jeûne avec gratitude',ar:'افطر بشكر'},desc:{en:'Ask Allah to accept, break your fast, and keep one habit after Arafah.',fr:'Demande à Allah d\'accepter, romps ton jeûne et garde une habitude.',ar:'اسأل الله القبول، أفطر، وحافظ على عادة بعد عرفة.'}}
];

/* ── STATE ── */
let state = {language:null,theme:'light',selectedDhikr:'subhanallah',dhikrTarget:null,dhikrCounts:{},checklist:{},customTasks:[],duasRead:[],favoriteDuas:[],personalDuas:[],intention:'',activeDuaCategory:'All',activeChecklistTab:'essential'};
let duaModeItems = [];
let duaModeIndex = 0;

/* ── UTILS ── */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const lang = () => state.language || 'en';
const t = () => I18N[lang()];
const txt = (obj) => typeof obj === 'object' ? (obj[lang()] || obj.en || '') : obj;
function escapeHtml(str=''){return String(str).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
function escapeAttr(str=''){return escapeHtml(str).replace(/'/g,'&#039;');}
function loadState(){try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));if(s)state={...state,...s};}catch(e){}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function showToast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2400);}
function copyText(text,success){if(navigator.clipboard)navigator.clipboard.writeText(text).then(()=>showToast(success||t().toasts.copied)).catch(()=>fbCopy(text,success));else fbCopy(text,success);}
function fbCopy(text,success){const tmp=document.createElement('textarea');tmp.value=text;document.body.appendChild(tmp);tmp.select();document.execCommand('copy');tmp.remove();showToast(success||t().toasts.copied);}

/* ── LANGUAGE / THEME ── */
function chooseLanguage(l,fromSettings=false){state.language=l;saveState();$('#languageGate').classList.add('hidden');$('#appShell').classList.remove('locked');applyLanguage();initRender();if(fromSettings)showToast(t().toasts.language);}
function applyLanguage(){
  const T=t();
  document.documentElement.lang=lang();
  document.documentElement.dir=T.dir;
  document.body.dir=T.dir;
  const S=$('#appShell');if(S)S.dir=T.dir;
  $('#appTitle').textContent=T.name;
  document.title=`${T.name} | يوم عرفة`;
  $('#headerEyebrow').textContent=T.headerEyebrow;
  $('#headerQuote').textContent=T.headerQuote;
  $('#cdDaysLabel').textContent=T.labels.days;
  $('#cdHoursLabel').textContent=T.labels.hours;
  $('#cdMinutesLabel').textContent=T.labels.min;
  $('#cdSecondsLabel').textContent=T.labels.sec;
  $('#rightNowLabel').textContent=T.labels.rightNow;
  $('#statChecklistLabel').textContent=T.labels.checklist;
  $('#statDhikrLabel').textContent=T.labels.dhikr;
  $('#statDuasLabel').textContent=T.labels.duasSaid;
  $('#quickPathLabel').textContent=T.labels.quickPath;
  $('#whatNeedTitle').textContent=T.labels.whatNeed;
  $('#swipeHint').textContent=T.labels.swipe;
  $('#quickDhikrTitle').textContent=T.quick.dhikr[0];
  $('#quickDhikrSub').textContent=T.quick.dhikr[1];
  $('#quickDuaTitle').textContent=T.quick.dua[0];
  $('#quickDuaSub').textContent=T.quick.dua[1];
  $('#quickPlanTitle').textContent=T.quick.plan[0];
  $('#quickPlanSub').textContent=T.quick.plan[1];
  $('#quickTimelineTitle').textContent=T.quick.timeline[0];
  $('#quickTimelineSub').textContent=T.quick.timeline[1];
  $('#quickRescueTitle').textContent=T.quick.rescue[0];
  $('#quickRescueSub').textContent=T.quick.rescue[1];
  $('#intentionLabel').textContent=T.labels.intention;
  $('#intentionTitle').textContent=T.labels.intentionTitle;
  $('#intentionInput').placeholder=T.labels.intentionPlaceholder;
  $('#saveIntentionBtn').textContent=T.labels.saveIntention;
  $('#worshipProgressLabel').textContent=T.labels.worshipProgress;
  $('#progressHint').textContent=T.labels.progressHint;
  $('#rescueLabel').textContent=T.labels.rescue;
  $('#rescueTitle').textContent=T.labels.rescueTitle;
  $('#rescueText').textContent=T.labels.rescueText;
  $('#rescueList').innerHTML=T.rescueItems.map(i=>`<li>${escapeHtml(i)}</li>`).join('');
  $('#rescueButton').textContent=T.labels.rescueButton;
  $('#shareGoodLabel').textContent=T.labels.shareGood;
  $('#shareGoodTitle').textContent=T.labels.shareTitle;
  $('#shareGoodText').textContent=T.labels.shareText;
  $('#shareReminderBtn').textContent=T.labels.shareReminder;
  $('#shareProgressBtn').textContent=T.labels.shareProgress;
  $('#sourceNote').textContent=T.labels.source;
  $('#tapLabel').textContent=T.labels.tap;
  $('#target33Btn').textContent=`${T.labels.target} 33`;
  $('#target100Btn').textContent=`${T.labels.target} 100`;
  $('#target1000Btn').textContent=`${T.labels.target} 1000`;
  $('#resetDhikrBtn').textContent=T.labels.reset;
  $('#dhikrEyebrow').textContent=T.labels.dhikrEyebrow;
  $('#dhikrTitle').textContent=T.labels.dhikrTitle;
  $('#duasEyebrow').textContent=T.labels.duasEyebrow;
  $('#duasTitle').textContent=T.labels.duasTitle;
  $('#duaModeSmall').textContent=T.labels.duaModeSmall;
  $('#duaModeTitle').textContent=T.labels.duaModeTitle;
  $('#duaModeDesc').textContent=T.labels.duaModeDesc;
  $('#openDuaModeBtn').textContent=T.labels.openDuaMode;
  $('#builderLabel').textContent=T.labels.builderLabel;
  $('#builderTitle').textContent=T.labels.builderTitle;
  $('#personalDuaInput').placeholder=T.labels.personalPlaceholder;
  $('#savePersonalDuaBtn').textContent=T.labels.savePersonal;
  $('#duaSearch').placeholder=T.labels.search;
  $('#checklistEyebrow').textContent=T.labels.checklistEyebrow;
  $('#checklistTitle').textContent=T.labels.checklistTitle;
  $('#tabEssential').textContent=T.tabs.essential;
  $('#tabRecommended').textContent=T.tabs.recommended;
  $('#tabBonus').textContent=T.tabs.bonus;
  $('#tabCustom').textContent=T.tabs.custom;
  $('#customTaskLabel').textContent=T.labels.customTask;
  $('#customTaskInput').placeholder=T.labels.customPlaceholder;
  $('#addCustomTaskBtn').textContent=T.labels.add;
  $('#timelineEyebrow').textContent=T.labels.timelineEyebrow;
  $('#timelineTitle').textContent=T.labels.timelineTitle;
  $('#settingsEyebrow').textContent=T.labels.settings;
  $('#settingsTitle').textContent=T.labels.settingsTitle;
  $('#darkModeLabel').textContent=T.labels.dark;
  $('#languageSettingsLabel').textContent=T.labels.language;
  $('#exportLabel').textContent=T.labels.export;
  $('#copyLabel').textContent=T.labels.copy;
  $('#resetAllLabel').textContent=T.labels.resetAll;
  $('#resetLabel').textContent=T.labels.reset;
  $('#reminderSettingsLabel').textContent=T.labels.reminder;
  $('#protectTitle').textContent=T.labels.protect;
  $('#protectText').textContent=T.labels.protectText;
  $('#navHome').textContent=T.labels.navHome;
  $('#navDhikr').textContent=T.labels.navDhikr;
  $('#navDuas').textContent=T.labels.navDuas;
  $('#navPlan').textContent=T.labels.navPlan;
  $('#navMore').textContent=T.labels.navMore;
  $('#prevDuaModeBtn').textContent=T.labels.previous;
  $('#nextDuaModeBtn').textContent=T.labels.next;
  $('#currentLanguageLabel').textContent=T.languageName;
  $$('#settingsLangGrid .language-mini').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang()));
  applyTheme();
}
function applyTheme(){document.documentElement.dataset.theme=state.theme;$('#themeToggle').textContent=state.theme==='dark'?'☀️':'🌙';$('#themeState').textContent=state.theme==='dark'?t().labels.on:t().labels.off;}
function toggleTheme(){state.theme=state.theme==='dark'?'light':'dark';applyTheme();saveState();}

/* ── NAVIGATION ── */
function goTo(screen){
  $$('.screen').forEach(s=>s.classList.remove('active'));
  $(`#${screen}Screen`)?.classList.add('active');
  $$('.nav-button').forEach(btn=>btn.classList.toggle('active',btn.dataset.go===screen));
  window.scrollTo({top:0,behavior:'smooth'});
  if(screen==='duas')renderDuas();
  if(screen==='checklist')renderChecklist();
  if(screen==='more')renderTimeline();
}

/* ── MORE SCREEN TABS ── */
function bindMoreTabs(){
  $$('.more-tab').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.more-tab').forEach(b=>b.classList.remove('active'));
    $$('.more-section').forEach(s=>s.classList.remove('active'));
    btn.classList.add('active');
    $(`#more${btn.dataset.more.charAt(0).toUpperCase()+btn.dataset.more.slice(1)}`)?.classList.add('active');
    if(btn.dataset.more==='timeline')renderTimeline();
  }));
}

/* ── PHASE / COUNTDOWN ── */
function getPhase(now=new Date()){if(now<ARAFAH_START)return'before';if(now<=ARAFAH_END)return'during';return'after';}
function pad(n){return String(n).padStart(2,'0');}
function getNowData(phase){if(phase==='during'){const mins=(ARAFAH_END-new Date())/60000;if(mins<=90)return t().now.lastHour;}return t().now[phase]||t().now.before;}
function updateTodayLabel(){try{$('#todayLabel').textContent=new Intl.DateTimeFormat(lang()==='ar'?'ar-TN':lang()==='fr'?'fr-FR':'en-US',{weekday:'long',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date());}catch{$('#todayLabel').textContent=new Date().toLocaleString();}}
function updateCountdown(){
  const T=t();const now=new Date();const phase=getPhase(now);
  let target=ARAFAH_START;
  if(phase==='during')target=ARAFAH_END;
  if(phase==='after')target=now;
  const parts=T.phase[phase];
  $('#phasePill').textContent=parts[0];
  $('#countdownTitle').textContent=parts[1];
  $('#countdownSubtitle').textContent=parts[2];
  $('#stickyPhase').textContent=parts[3];
  let diff=Math.max(0,target-now);
  const days=Math.floor(diff/86400000);diff-=days*86400000;
  const h=Math.floor(diff/3600000);diff-=h*3600000;
  const m=Math.floor(diff/60000);diff-=m*60000;
  const s=Math.floor(diff/1000);
  $('#cdDays').textContent=pad(days);
  $('#cdHours').textContent=pad(h);
  $('#cdMinutes').textContent=pad(m);
  $('#cdSeconds').textContent=pad(s);
  $('#stickyTime').textContent=phase==='after'?'🤍':`${days?days+'d ':''}${pad(h)}:${pad(m)}:${pad(s)}`;
  const nowData=getNowData(phase);
  $('#nowIcon').textContent=nowData[0];
  $('#nowTitle').textContent=nowData[1];
  $('#nowText').textContent=nowData[2];
  $('#nowActionBtn').onclick=()=>goTo(nowData[3]);
  $('#heroCard').classList.toggle('gold-glow',phase==='during');
}

/* ── DHIKR ── */
function renderDhikr(){
  const current=DHIKR.find(d=>d.id===state.selectedDhikr)||DHIKR[0];
  if(!state.dhikrTarget)state.dhikrTarget=current.target;
  $('#dhikrChips').innerHTML=DHIKR.map(d=>`<button class="chip ${d.id===current.id?'active':''}" data-dhikr="${d.id}">${escapeHtml(txt(d.label))}</button>`).join('');
  $('#dhikrArabic').textContent=current.arabic;
  $('#dhikrMeaning').textContent=txt(current.meaning);
  const count=state.dhikrCounts[current.id]||0;
  $('#dhikrCount').textContent=count;
  $('#dhikrTargetText').textContent=`${t().labels.target} ${state.dhikrTarget}`;
  $('#dhikrProgressFill').style.width=`${Math.min(100,Math.round(count/state.dhikrTarget*100))}%`;
  $('#dhikrChips').querySelectorAll('[data-dhikr]').forEach(btn=>btn.addEventListener('click',()=>{
    state.selectedDhikr=btn.dataset.dhikr;
    const d=DHIKR.find(x=>x.id===state.selectedDhikr);
    state.dhikrTarget=d.target;saveState();renderDhikr();
  }));
  updateStats();
}
function countDhikr(){
  const id=state.selectedDhikr;
  state.dhikrCounts[id]=(state.dhikrCounts[id]||0)+1;
  const current=state.dhikrCounts[id];
  if(current===state.dhikrTarget)showToast(t().toasts.target);
  if(navigator.vibrate)navigator.vibrate(18);
  const btn=$('#dhikrButton');
  btn.classList.remove('pulse');
  void btn.offsetWidth;
  btn.classList.add('pulse');
  saveState();renderDhikr();
}
function resetDhikr(){state.dhikrCounts[state.selectedDhikr]=0;saveState();renderDhikr();showToast(t().toasts.reset);}
function getTotalDhikr(){return Object.values(state.dhikrCounts).reduce((a,b)=>a+Number(b||0),0);}

/* ── DUAS ── */
function renderDuaPrompts(){
  const T=t();
  $('#duaPrompts').innerHTML=PROMPTS.map(p=>`<button class="prompt-pill" data-prompt="${escapeAttr(p[lang()]||p.en)}">${escapeHtml(T.categories[p.key]||p.key)}</button>`).join('');
  $('#duaPrompts').querySelectorAll('[data-prompt]').forEach(btn=>btn.addEventListener('click',()=>{$('#personalDuaInput').value=btn.dataset.prompt;$('#personalDuaInput').focus();}));
}
function renderDuas(){
  const T=t();
  renderDuaPrompts();
  const categories=['All',...Array.from(new Set(DUAS.map(d=>d.category)))];
  $('#duaCategoryChips').innerHTML=categories.map(c=>`<button class="chip ${state.activeDuaCategory===c?'active':''}" data-category="${c}">${escapeHtml(T.categories[c]||c)}</button>`).join('');
  $('#duaCategoryChips').querySelectorAll('[data-category]').forEach(btn=>btn.addEventListener('click',()=>{state.activeDuaCategory=btn.dataset.category;saveState();renderDuas();}));
  const personalTitle=`<div style="margin:16px 0 8px"><p class="eyebrow">${T.labels.personalDuas}</p></div>`;
  $('#personalDuasList').innerHTML=personalTitle+(state.personalDuas.length?state.personalDuas.map((d,i)=>`<article class="card dua-card personal-dua-item"><span class="category-tag">${T.labels.personalDuas}</span><p>${escapeHtml(d)}</p><div class="dua-card-actions"><button class="soft-button" data-copy-personal="${i}">${T.labels.copy}</button><button class="danger-button tiny-button" data-delete-personal="${i}">${T.labels.delete}</button></div></article>`).join(''):`<div class="empty-state card"><p class="muted">${T.labels.noPersonal}</p></div>`);
  $('#personalDuasList').querySelectorAll('[data-copy-personal]').forEach(btn=>btn.addEventListener('click',()=>copyText(state.personalDuas[Number(btn.dataset.copyPersonal)],T.toasts.copied)));
  $('#personalDuasList').querySelectorAll('[data-delete-personal]').forEach(btn=>btn.addEventListener('click',()=>{state.personalDuas.splice(Number(btn.dataset.deletePersonal),1);saveState();renderDuas();}));
  const q=$('#duaSearch').value.trim().toLowerCase();
  let list=DUAS.filter(d=>(state.activeDuaCategory==='All'||d.category===state.activeDuaCategory));
  if(q)list=list.filter(d=>[d.arabic,d.translit,txt(d.text),d.source,T.categories[d.category]].join(' ').toLowerCase().includes(q));
  $('#duasList').innerHTML=list.map(d=>{
    const fav=state.favoriteDuas.includes(d.id),read=state.duasRead.includes(d.id);
    return `<article class="card dua-card"><span class="category-tag">${escapeHtml(T.categories[d.category]||d.category)}</span><p class="arabic large">${escapeHtml(d.arabic)}</p><p class="dua-translit">${escapeHtml(d.translit||'')}</p><p class="muted small">${escapeHtml(txt(d.text))}</p><p class="source-note">${escapeHtml(d.source)}</p><div class="dua-card-actions"><button class="soft-button" data-copy-dua="${d.id}">${T.labels.copy}</button><button class="soft-button" data-fav-dua="${d.id}">${fav?T.labels.unfavorite:T.labels.favorite}</button><button class="primary-button" data-read-dua="${d.id}">${read?T.labels.saidDone:T.labels.said}</button></div></article>`;
  }).join('')||`<div class="empty-state card"><p class="muted">No duas found.</p></div>`;
  $('#duasList').querySelectorAll('[data-copy-dua]').forEach(btn=>btn.addEventListener('click',()=>{const d=DUAS.find(x=>x.id===btn.dataset.copyDua);copyText(`${d.arabic}\n${d.translit}\n\n${txt(d.text)}\n${d.source}`,T.toasts.copied);}));
  $('#duasList').querySelectorAll('[data-fav-dua]').forEach(btn=>btn.addEventListener('click',()=>toggleArrayValue(state.favoriteDuas,btn.dataset.favDua,renderDuas)));
  $('#duasList').querySelectorAll('[data-read-dua]').forEach(btn=>btn.addEventListener('click',()=>toggleArrayValue(state.duasRead,btn.dataset.readDua,()=>{renderDuas();updateStats();})));
}
function toggleArrayValue(arr,val,cb){const i=arr.indexOf(val);if(i>=0)arr.splice(i,1);else arr.push(val);saveState();cb?.();}
function savePersonalDua(){const value=$('#personalDuaInput').value.trim();if(!value)return showToast(t().toasts.writeDua);state.personalDuas.unshift(value);$('#personalDuaInput').value='';saveState();renderDuas();showToast(t().toasts.duaSaved);}
function openDuaMode(){
  duaModeItems=[...state.personalDuas.map((text,i)=>({id:`personal-${i}`,arabic:'🤲',text,source:t().labels.personalDuas})),...DUAS.filter(d=>state.favoriteDuas.includes(d.id)),...DUAS.filter(d=>!state.favoriteDuas.includes(d.id))];
  duaModeIndex=0;
  $('#duaModeOverlay').classList.add('open');
  $('#duaModeOverlay').setAttribute('aria-hidden','false');
  renderDuaMode();
}
function closeDuaMode(){$('#duaModeOverlay').classList.remove('open');$('#duaModeOverlay').setAttribute('aria-hidden','true');}
function renderDuaMode(){
  const item=duaModeItems[duaModeIndex];if(!item)return;
  $('#duaModeCounter').textContent=`${t().labels.duaCounter} ${duaModeIndex+1}/${duaModeItems.length}`;
  $('#duaModeArabic').textContent=item.arabic||'';
  $('#duaModeText').textContent=item.text?txt(item.text):'';
  $('#duaModeSource').textContent=item.source||'';
}
function nextDuaMode(dir=1){duaModeIndex=(duaModeIndex+dir+duaModeItems.length)%duaModeItems.length;renderDuaMode();}

/* ── CHECKLIST ── */
function renderChecklist(){
  const T=t();const tab=state.activeChecklistTab;
  $('#customTaskCard').classList.toggle('show',tab==='custom');
  $$('#checklistTabs .chip').forEach(btn=>btn.classList.toggle('active',btn.dataset.tab===tab));
  const list=tab==='custom'?state.customTasks.map(x=>({...x,level:'custom',phase:{en:'Personal',fr:'Personnel',ar:'شخصي'},desc:x.desc||{en:'Personal Arafah goal',fr:'Objectif personnel',ar:'هدف شخصي'}})):CHECKLIST.filter(x=>x.level===tab);
  $('#checklistList').innerHTML=list.map(item=>{
    const done=!!state.checklist[item.id];
    return `<article class="check-item ${done?'done':''}"><button class="check-box" data-check="${item.id}" aria-label="Toggle">${done?'✓':''}</button><div style="flex:1"><h4>${escapeHtml(txt(item.title))}</h4><p>${escapeHtml(txt(item.desc))}</p><div class="check-meta">${escapeHtml(txt(item.phase))}</div>${tab==='custom'?`<button class="tiny-button delete-button" data-delete-task="${item.id}" style="margin-top:8px">${T.labels.delete}</button>`:''}</div></article>`;
  }).join('')||`<div class="empty-state card"><p class="muted">${T.labels.noPersonal}</p></div>`;
  $('#checklistList').querySelectorAll('[data-check]').forEach(btn=>btn.addEventListener('click',()=>{state.checklist[btn.dataset.check]=!state.checklist[btn.dataset.check];saveState();renderChecklist();updateStats();}));
  $('#checklistList').querySelectorAll('[data-delete-task]').forEach(btn=>btn.addEventListener('click',()=>{state.customTasks=state.customTasks.filter(x=>x.id!==btn.dataset.deleteTask);delete state.checklist[btn.dataset.deleteTask];saveState();renderChecklist();updateStats();}));
}
function addCustomTask(){
  const title=$('#customTaskInput').value.trim();if(!title)return showToast(t().toasts.taskFirst);
  state.customTasks.unshift({id:`custom-${Date.now()}`,title:{[lang()]:title,en:title},desc:{en:'Personal Arafah goal',fr:'Objectif personnel',ar:'هدف شخصي'},phase:{en:'Personal',fr:'Personnel',ar:'شخصي'}});
  $('#customTaskInput').value='';saveState();renderChecklist();showToast(t().toasts.taskAdded);
}

/* ── STATS ── */
function getChecklistPercent(){const ids=[...CHECKLIST.map(x=>x.id),...state.customTasks.map(x=>x.id)];if(!ids.length)return 0;return Math.round(ids.filter(id=>state.checklist[id]).length/ids.length*100);}
function updateStats(){
  const pct=getChecklistPercent();
  $('#statProgress').textContent=`${pct}%`;
  $('#statDhikr').textContent=getTotalDhikr();
  $('#statDuas').textContent=state.duasRead.length;
  $('#progressRing').style.setProperty('--progress',pct);
  $('#progressRingText').textContent=`${pct}%`;
  $('#progressMessage').textContent=progressMessage(pct);
}
function progressMessage(p){const arr=t().progress;if(p===0)return arr[0];if(p<30)return arr[1];if(p<60)return arr[2];if(p<90)return arr[3];if(p<100)return arr[4];return arr[5];}

/* ── TIMELINE ── */
function renderTimeline(){
  const phase=getPhase();
  const active=phase==='before'?'night':phase==='after'?'maghrib':getActiveTimelineId();
  $('#timelineList').innerHTML=TIMELINE.map(item=>`<article class="timeline-item"><div class="timeline-dot">${item.icon}</div><div class="timeline-content ${item.id===active?'active':''}"><div class="timeline-time">${escapeHtml(txt(item.time))}${item.id===active?' · now':''}</div><h3>${escapeHtml(txt(item.title))}</h3><p class="muted small">${escapeHtml(txt(item.desc))}</p></div></article>`).join('');
}
function getActiveTimelineId(){const h=new Date().getHours();if(h<8)return'fajr';if(h<12)return'morning';if(h<15)return'dhuhr';if(h<18)return'asr';return'last-hour';}

/* ── INTENTIONS / SHARING ── */
function saveIntention(){state.intention=$('#intentionInput').value.trim();saveState();showToast(t().toasts.saved);}
function shareText(text,success){if(navigator.share)navigator.share({text}).catch(()=>{});else copyText(text,success);}
function shareApp(){shareText(`🌙 ${t().name}\n${t().labels.shareText}\n${location.href}`,t().toasts.appCopied);}
function shareReminder(){copyText(`${t().shareReminder}\n\n${location.href}`,t().toasts.reminderCopied);}
function shareProgress(){const text=`🌙 ${t().name}\n\n✅ ${t().labels.checklist}: ${getChecklistPercent()}%\n📿 ${t().labels.dhikr}: ${getTotalDhikr()}\n🤲 ${t().labels.duasSaid}: ${state.duasRead.length}\n\n${t().shareReminder}\n\n${location.href}`;shareText(text,t().toasts.progressCopied);}
function exportData(){copyText(JSON.stringify(state,null,2),t().toasts.dataCopied);}
function resetAll(){if(!confirm(t().toasts.resetConfirm))return;const kL=state.language,kT=state.theme;localStorage.removeItem(STORAGE_KEY);state={language:kL,theme:kT,selectedDhikr:'subhanallah',dhikrTarget:null,dhikrCounts:{},checklist:{},customTasks:[],duasRead:[],favoriteDuas:[],personalDuas:[],intention:'',activeDuaCategory:'All',activeChecklistTab:'essential'};saveState();initRender();showToast(t().toasts.resetDone);}

/* ── EVENTS ── */
function bindEvents(){
  document.querySelectorAll('.language-choice').forEach(btn=>btn.addEventListener('click',()=>chooseLanguage(btn.dataset.lang,false)));
  document.querySelectorAll('.language-mini').forEach(btn=>btn.addEventListener('click',()=>chooseLanguage(btn.dataset.lang,true)));
  $('#themeToggle').addEventListener('click',toggleTheme);
  $('#toggleThemeRow').addEventListener('click',toggleTheme);
  $('#shareAppBtn').addEventListener('click',shareApp);
  $('#shareReminderBtn').addEventListener('click',shareReminder);
  $('#shareProgressBtn').addEventListener('click',shareProgress);
  $('#saveIntentionBtn').addEventListener('click',saveIntention);
  $('#dhikrButton').addEventListener('click',countDhikr);
  $('#resetDhikrBtn').addEventListener('click',resetDhikr);
  $('#savePersonalDuaBtn').addEventListener('click',savePersonalDua);
  $('#openDuaModeBtn').addEventListener('click',openDuaMode);
  $('#closeDuaModeBtn').addEventListener('click',closeDuaMode);
  $('#nextDuaModeBtn').addEventListener('click',()=>nextDuaMode(1));
  $('#prevDuaModeBtn').addEventListener('click',()=>nextDuaMode(-1));
  $('#duaSearch').addEventListener('input',renderDuas);
  $('#addCustomTaskBtn').addEventListener('click',addCustomTask);
  $('#exportDataBtn').addEventListener('click',exportData);
  $('#resetAllBtn').addEventListener('click',resetAll);
  $('#rescueQuickBtn').addEventListener('click',()=>document.getElementById('rescueCard').scrollIntoView({behavior:'smooth',block:'center'}));
  $('#rescueButton').addEventListener('click',()=>goTo('duas'));
  $('#nowActionBtn').addEventListener('click',()=>goTo('duas'));
  $$('[data-go]').forEach(btn=>btn.addEventListener('click',()=>goTo(btn.dataset.go)));
  $$('.dhikr-stage [data-target]').forEach(btn=>btn.addEventListener('click',()=>{state.dhikrTarget=Number(btn.dataset.target);saveState();renderDhikr();}));
  $('#checklistTabs').querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{state.activeChecklistTab=btn.dataset.tab;saveState();renderChecklist();}));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape')closeDuaMode();
    if($('#duaModeOverlay').classList.contains('open')&&e.key==='ArrowRight')nextDuaMode(1);
    if($('#duaModeOverlay').classList.contains('open')&&e.key==='ArrowLeft')nextDuaMode(-1);
  });
  bindMoreTabs();
}

/* ── INIT ── */
function initRender(){
  applyLanguage();
  updateTodayLabel();
  $('#intentionInput').value=state.intention||'';
  renderDhikr();
  renderDuas();
  renderChecklist();
  renderTimeline();
  updateStats();
  updateCountdown();
}
function init(){
  loadState();
  bindEvents();
  if(!state.language){
    $('#languageGate').classList.remove('hidden');
    $('#appShell').classList.add('locked');
  } else {
    $('#languageGate').classList.add('hidden');
    $('#appShell').classList.remove('locked');
    initRender();
  }
  setInterval(()=>{if(state.language)updateCountdown();},1000);
  setInterval(()=>{if(state.language)updateTodayLabel();},60000);
}
document.addEventListener('DOMContentLoaded',init);
