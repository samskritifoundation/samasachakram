export const state = () => ({
  sidebar: false,
  lessons: [
    {
      title_sans: 'समासानां परिचयः',
      title_eng: 'Introduction to Compounds in Sanskrit',
      id: 1,
      common: '<p>Combination of two or more nouns to create a new noun is called the compound. In English, a typical compound involves two or three words; "wallpaper," for instance, is just "wall" and "paper." Sanskrit compounds can be made of as many as 30 different words.<br><br>Sanskrit has an extremely rich system of compounds. Partly for that reason, compounds are a vital part of Sanskrit grammar. Compounds were analyzed extensively by the ancient Indian grammarians, most of whom worked about 2500 years ago; as a carry-over from that tradition.<br><br>All of the words in the compound are taken as a single unit. Even though many words may be in a compound, only the last one is inflected. All other words appear as ordinary stems, with the rare exception. Between words in the compound, external sandhi applies.</p>',
      example_sans: ''
    },
    {
      title_sans: '',
      title_eng: 'Prayer',
      id: 2,
      definition_sans: 'शेषाचलशिरोभूषा तोषाय भवतान्महः । <br>  यन्निरस्तनतस्तोमतमस्ततिनमस्कृति ॥',
      definition_eng: '',
      common: ''
    },
    {
      title_sans: '',
      title_eng: 'Classification of Samāsa',
      id: 3,
      definition_sans: 'वक्ष्ये तत्पुरुषं कर्मधारयं बालबुद्धये ।<br>बहुव्रीहिं द्विगुं द्वंद्वमव्ययीभावमेव च ॥',
      definition_eng: ' ',
      common: 'Samāsas are also divided into 6 types:',
      treeData: [
        {
          name: 'Samāsa',
          children: [
            {
              name: '1. तत्पुरुषः (tatpuruṣaḥ)',
              link: '/lessons/5'
            },
            {
              name: '2. कर्मधारयः (karmadhārayaḥ)',
              link: '/lessons/6'
            },
            {
              name: '3. बहुव्रीहिः (bahuvrīhi)',
              link: '/lessons/7'
            },
            {
              name: '4. द्विगुः (dvigu)',
              link: '/lessons/8'
            },
            {
              name: '5. द्वन्द्वः (dvandva)',
              link: '/lessons/9'
            },
            {
              name: '6. अव्ययीभावः (avyayībhāva)',
              link: '/lessons/10'
            }
          ]
        }
      ]
    },
    {
      title_sans: '',
      title_eng: 'Subcategories of types',
      id: 4,
      definition_sans: 'समासाष्षट्सु संक्षिप्ता अष्टाविंशतिधा पुनः ।<br>     तत्राष्टधा तत्पुरुषस्सप्तधा कर्मधारयः ॥<br>सप्तधा च बहुव्रीहिर्द्विगुर्द्वन्द्वो द्विधा द्विधा ।<br>द्विविधश्चाव्ययीभाव इत्यष्टाविंशतिः क्रमात् ॥',
      definition_eng: '<p>The six Samāsas are further divided into 28 types as follows:</p>',
      common: '',
      treeData: [
        {
          name: 'Samāsa',
          children: [
            {
              name: '1. तत्पुरुषः (tatpuruṣaḥ) - 8 types',
              link: '/lessons/5',
              children: [
                {
                  name: '1. प्रथमातत्पुरुषः (prathamātatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '2. द्वितीयातत्पुरुषः (dvitīyātatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '3. तृतीयातत्पुरुषः (tṛtīyātatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '4. चतुर्थीतत्पुरुषः (caturthītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '5. पञ्चमीतत्पुरुषः (pañcamītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '6. षष्ठीतत्पुरुषः (ṣaṣṭhītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '7. सप्तमीतत्पुरुषः (saptamītatpuruṣaḥ)',
                  link: '/lessons/5'
                },
                {
                  name: '8. नञ् तत्पुरुषः (nañ tatpuruṣaḥ)',
                  link: '/lessons/5'
                }
              ]
            },
            {
              name: '2. कर्मधारयः (karmadhārayaḥ) - 7 types',
              link: '/lessons/6',
              children: [
                {
                  name: '1. विशेषणपूर्वपदः (viśeṣaṇapūrvapadaḥ)',
                  link: '/lessons/6'
                },
                {
                  name: '2. विशेष्यपूर्वपदः (viśeṣyapūrvapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '3. विशेषणोभयपदः (viśeṣaṇobhayapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '4. उपमानपूर्वपदः (upamānapūrvapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '5. उपमानोत्तरपदः (upamānottarapadaḥ) ',
                  link: '/lessons/6'
                },
                {
                  name: '6. सम्भावनापूर्वपदः (sambhāvanāpūrvapadaḥ)',
                  link: '/lessons/6'
                },
                {
                  name: '7. अवधारणापूर्वपदः (avadhāraṇāpūrvapadaḥ) ',
                  link: '/lessons/6'
                }
              ]
            },
            {
              name: '3. बहुव्रीहिः (bahuvrīhi) - 7 types',
              link: '/lessons/7',
              children: [
                {
                  name: '1. द्विपदः (dvipadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '2. बहुपदः (bahupadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '3. सहपूर्वपदः (sahapūrvapadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '4. संख्योत्तरपदः (saṃkhyottarapadaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '5. संख्योभयपदाः (saṃkhyobhayapadāḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '6. व्यतिहारलक्षणः (vyatihāralakṣaṇaḥ) ',
                  link: '/lessons/7'
                },
                {
                  name: '7. दिगन्तराललक्षणः (digantarālalakṣaṇaḥ) ',
                  link: '/lessons/7'
                }
              ]
            },
            {
              name: '4. द्विगुः (dvigu) - 2 types',
              link: '/lessons/8',
              children: [
                {
                  name: '1. एकवद्भावी द्विगुः (ekavadbhāvī dviguḥ) ',
                  link: '/lessons/8'
                },
                {
                  name: '2. अनेकवद्भावी द्विगुः (anekavadbhāvī dviguḥ) ',
                  link: '/lessons/8'
                }
              ]
            },
            {
              name: '5. द्वन्द्वः (dvandva) - 2 types',
              link: '/lessons/9',
              children: [
                {
                  name: '1. इतरेतरद्वन्द्वः (itaretaradvandvaḥ)',
                  link: '/lessons/9'
                },
                {
                  name: '2. समाहारद्वन्द्वः (samāhāradvandvaḥ)',
                  link: '/lessons/9'
                }
              ]
            },
            {
              name: '6. अव्ययीभावः (avyayībhāva) - 2 types',
              link: '/lessons/10'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'तत्पुरुषः',
      title_eng: 'Tatpuruṣaḥ',
      id: 5,
      definition_sans: ' तत्र तत्पुरुषस्याष्टौ प्रकारान् प्रब्रवीम्यहम् । <br>प्रथमाद्यास्तत्पुरुषा स्सप्तधास्युर्नञष्टमः ॥<br>एतेषां विग्रहं वक्ष्ये समासानां यथाक्रमम् । <br> विभज्य गृह्यते यस्स विग्रहः परिकीर्तितः ॥ <br> अनेकशब्दसन्धिस्तु समासः कथ्यते यथा । <br> अर्धं गुडस्यार्धगुडोऽब्धिं गताऽब्धिगता नदी॥ <br> वाचा श्लक्ष्णस्तु वाक्श्लक्ष्णो <br> दिग्बलिस्तु दिशे बलिः॥ <br>सिंहाद्भयं सिंहभयं भूपतिस्तु भुवः पतिः॥ <br> विष्णौ भक्तिर्विष्णुभक्तिर्नाश्वोऽनश्वो न गौरगौः॥',
      definition_eng: 'This is the compound in which second object is more important. Examples of the 8 types of Tatpuruṣa are stated as follows:',
      common: 'The type of Tatpuruṣa depends on the case suffix you have to append to the purvapada. ',
      example_sans: '',
      types: 8,
      type: [
        {
          name: '1. प्रथमातत्पुरुषः (prathamātatpuruṣaḥ)',
          explanation: 'Nominative case suffix',
          ex: [
            {
              text: 'अर्धं गुडस्य अर्धगुडः '
            }
          ]
        },
        {
          name: '2. द्वितीयातत्पुरुषः (dvitīyātatpuruṣaḥ)',
          explanation: 'Accusative case suffix',
          ex: [
            {
              text: 'अब्धिं गता अब्धिगता नदी'
            }
          ]
        },
        {
          name: '3. तृतीयातत्पुरुषः (tṛtīyātatpuruṣaḥ)',
          explanation: 'Instrumental case suffix',
          ex: [
            {
              text: 'वाचा श्लक्ष्णः वाक्श्लक्ष्णः'
            }
          ]
        },
        {
          name: '4. चतुर्थीतत्पुरुषः (caturthītatpuruṣaḥ)',
          explanation: 'Dative case suffix',
          ex: [
            {
              text: 'दिशे बलिः दिग्बलिः '
            }
          ]
        },
        {
          name: '5. पञ्चमीतत्पुरुषः (pañcamītatpuruṣaḥ)',
          explanation: 'Ablative case suffix',
          ex: [
            {
              text: 'सिंहात् भयं सिंहभयं '
            }
          ]
        },
        {
          name: '6. षष्ठीतत्पुरुषः (ṣaṣṭhītatpuruṣaḥ)',
          explanation: 'Relative case suffix',
          ex: [
            {
              text: 'भुवः पतिः भूपतिः '
            }
          ]
        },
        {
          name: '7. सप्तमीतत्पुरुषः (saptamītatpuruṣaḥ)',
          explanation: 'Locative case suffix',
          ex: [
            {
              text: 'विष्णौ भक्तिः विष्णुभक्तिः '
            }
          ]
        },
        {
          name: '8. नञ् तत्पुरुषः (nañ tatpuruṣaḥ)',
          explanation: 'The words having prefixes अ and अन्‌ in negation are called nañ tatpuruṣaḥ',
          ex: [
            {
              text: 'न अश्वः अनश्वः '
            },
            {
              text: 'न गौः अगौः ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'कर्मधारयः',
      title_eng: 'Karmadhārayaḥ',
      id: 6,
      definition_sans: 'प्रकारांत्सप्त वै कर्मधारयस्य ब्रवीम्यहम्॥',
      definition_eng: 'The seven types of Karmadhāraya are explained as follows:',
      common: 'The relation of the first member to the last is appositional, attributive or adverbial',
      types: 7,
      type: [
        {
          name: '1. विशेषणपूर्वपदः (viśeṣaṇapūrvapadaḥ)',
          explanation: 'The first word is adjective',
          ex: [
            {
              text: 'कृष्णश्चासौ कंबळश्च कृष्णकंबळ उत्तमः।'
            }
          ]
        },
        {
          name: '2. विशेष्यपूर्वपदः (viśeṣyapūrvapadaḥ) ',
          explanation: 'The first word is viśeṣya – the one to which adjective is to be appended',
          ex: [
            {
              text: 'द्विजश्चासौ कुंजरश्च दिजकुंजरम् आगतः ॥'
            }
          ]
        },
        {
          name: '3. विशेषणोभयपदः (viśeṣaṇobhayapadaḥ) ',
          explanation: 'Both the words are adjectives',
          ex: [
            {
              text: 'मधुरं च तथाम्लं च मधुराम्लं च जांबवम्। '
            }
          ]
        },
        {
          name: '4. उपमानपूर्वपदः (upamānapūrvapadaḥ) ',
          explanation: 'The first word is upamāna – the thing to which comparision is made',
          ex: [
            {
              text: 'मुक्तेव धवळा मुक्ता धवळा दिवि तारका॥'
            }
          ]
        },
        {
          name: '5. उपमानोत्तरपदः (upamānottarapadaḥ) ',
          explanation: 'The second word is upamāna',
          ex: [
            {
              text: 'आस्यम् अब्जम् इव आस्याब्जं '
            }
          ]
        },
        {
          name: '6. सम्भावनापूर्वपदः (sambhāvanāpūrvapadaḥ)',
          explanation: 'The first word is sambhāvanā, joined by iti',
          ex: [
            {
              text: 'गौः इति भ्रमः गोभ्रमः '
            }
          ]
        },
        {
          name: '7. अवधारणापूर्वपदः (avadhāraṇāpūrvapadaḥ) ',
          explanation: 'The first word is avadhāraṇā, joined by eva',
          ex: [
            {
              text: ' विद्यैव भूषणं विद्याभूषणं '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'बहुव्रीहिः',
      title_eng: 'Bahuvrīhi',
      id: 7,
      definition_sans: 'बहुव्रीहेः प्रकारांस्तु सप्त तान् कथाम्यहम् | <br> द्वितीयादिविभक्त्यर्थे भवेदन्यपदार्थके॥ <br> बहुर्वीहिर्न प्रथमाविभक्त्यर्थे इति स्थितिः॥',
      definition_eng: 'Bahuvrīhi compounds refer (by example) to a compound noun with no head—a compound noun that refers to a thing which is itself not part of the compound. It is a compound which is an adjective for a third word which is not a part of the compound. ',
      common: 'The types of Bahuvrīhi are explained as follows:',
      types: 7,
      type: [
        {
          name: '1. द्विपदः (dvipadaḥ) ',
          explanation: 'It is a compound having two words.',
          ex: [
            {
              text: 'आश्रिता ब्राह्मणा यं स आश्रितब्राह्मणः प्रभुः॥'
            },
            {
              text: 'निर्जिता रिपवो येन स निर्जितरिपुर्नृपः।'
            },
            {
              text: 'आनीताः पशवो यस्मै स आनीतपशुः क्रतुः॥'
            },
            {
              text: 'विगतं कल्मषं यस्मात्सोऽयं विगतकल्मषः। '
            },
            {
              text: 'तुषाराश्छवयो यस्य स तुषारच्छविश्शशी॥'
            },
            {
              text: 'बहवो भ्रमरा यस्मिन् स बहुभ्रमरस्तरुः'
            },
            {
              text: 'न विद्यते गदो यस्य सोऽगदः पथ्यभोजनः॥'
            }
          ]
        },
        {
          name: '2. बहुपदः (bahupadaḥ) ',
          explanation: 'It is a compound having more than 2 words.',
          ex: [
            {
              text: 'प्राप्तश्चित्रः पशुर्यां सा प्राप्तचित्रपशुनदी॥'
            },
            {
              text: 'स्तुतोऽनघो हरिर्येन स्तुतानघहरिः कविः॥'
            },
            {
              text: 'दत्तं पूर्णं पयो यस्मै दत्तपूर्णपयश्शिशुः॥'
            },
            {
              text: 'वीतं सर्वं बलं यस्माद्वीतसर्वबलो हि सः॥'
            },
            {
              text: 'दक्षाः प्राज्ञास्सुता यस्य दक्षप्राज्ञसुतो महान्॥'
            },
            {
              text: 'फुल्ला उच्चा द्रुमा यस्मिंस्तत्फुल्लोच्चद्रुमं वनम्। '
            },
            {
              text: 'फुल्ला उच्चा द्रुमा यस्मिंस्तत्फुल्लोच्चद्रुमं वनम्। '
            }
          ]
        },
        {
          name: '3. सहपूर्वपदः (sahapūrvapadaḥ) ',
          explanation: 'It is a compound having ‘sa’ or ‘saha’ as first word (showing nearness or togetherness).',
          ex: [
            {
              text: 'द्रविणैस्सहवर्तंत इति सद्रविणा विशः।'
            }
          ]
        },
        {
          name: '4. संख्योत्तरपदः (saṃkhyottarapadaḥ) ',
          explanation: 'It is a compound having numerals as uttarapada.',
          ex: [
            {
              text: 'दशानां तु समीपे ये नरा उपदशा इमे॥'
            }
          ]
        },
        {
          name: '5. संख्योभयपदाः (saṃkhyobhayapadāḥ) ',
          explanation: 'It is a compound having numerals as both words.',
          ex: [
            {
              text: 'पंचषाः पंच वा षड्वा ब्राह्मणा निकटे स्थिताः॥'
            }
          ]
        },
        {
          name: '6. व्यतिहारलक्षणः (vyatihāralakṣaṇaḥ) ',
          explanation: 'It is a compound showing reciprocity or repitition.',
          ex: [
            {
              text: 'केशेषु केशेषु गृहीत्वा इदं युद्धं प्रवर्तत इति केशाकेशि युद्धम् ।'
            },
            {
              text: ' दण्डै दण्डैः कृत्वा इदं युद्धं प्रवर्तत इति दण्डादण्डि ।'
            }
          ]
        },
        {
          name: '7. दिगन्तराललक्षणः (digantarālalakṣaṇaḥ) ',
          explanation: 'It is a compound showing the quarters of directions.',
          ex: [
            {
              text: 'दक्षिणस्याः पूर्वस्याश्च दिशो यदन्तरालं सा दक्षिणपूर्वा ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'द्विगुः',
      title_eng: 'Dvigu',
      id: 8,
      definition_sans: 'संख्यापूर्वो द्विगुस्तस्य प्रकारौ द्वौ ब्रवीम्यहम्॥',
      common: 'Dvigu is a subtype of tatpuruṣa in which the modifying member is a number. Dvigu (one who has two cows) itself is a compound : dvau+gāvau. ',
      types: 2,
      type: [
        {
          name: '1. एकवद्भावी द्विगुः (ekavadbhāvī dviguḥ) ',
          link: '/5',
          explanation: 'This compound refers to the group as a unit and takes singular tense only.',
          ex: [
            {
              text: 'तिस्रस्समाहृतास्संध्यास्त्रिसंध्यं त्रिपुरं'
            }
          ]
        },
        {
          name: '2. अनेकवद्भावी द्विगुः (anekavadbhāvī dviguḥ) ',
          link: '/5',
          explanation: 'This compound refers to the group individually and it takes plural tense.',
          ex: [
            {
              text: 'सप्त च ते ऋषयश्च सप्तर्षयः ।'
            }
          ]
        }
      ]
    },
    {
      title_sans: 'द्वन्द्वः',
      title_eng: 'Dvandva',
      id: 9,
      definition_sans: 'द्वंद्वो भवेच्चार्थाश्चत्वारस्स्युस्समुच्चयः ॥',
      definition_eng: 'These consist of two or more noun stems, connected in sense with and (copulative or coordinative). ',
      types: 2,
      type: [
        {
          name: '1. इतरेतरद्वन्द्वः (itaretaradvandvaḥ)',
          link: '/6',
          explanation: '<p>अन्वाचयस्समाहार इतरेतरयोगकः ।</p>The result of इतरेतर द्वन्द्व (itaretara dvandva "enumerative dvandva") is an enumerative word, the meaning of which refers to all its constituent members. The resultant compound word is in the dual or plural number and takes the gender of the final member in the compound construction. ',
          ex: [
            {
              text: 'प्लक्षश्च न्यग्रोधश्च प्लक्षन्यग्रौधौ ।'
            },
            {
              text: ' रामश्च कृष्णश्च रामकृष्णौ ।'
            }
          ]
        },
        {
          name: '2. समाहारद्वन्द्वः (samāhāradvandvaḥ)',
          link: '/7',
          explanation: '<p>समाहारः क्वचिर्त्तत्र स्यादेकवचनं यथा।</p>Words may be organised in a compound to form a metonym, and sometimes the words may comprise all the constituent parts of the whole. The resultant compound word exhibits समाहार द्वन्द्व (samāhāra dvandva - collective dvandva), and is always neuter and in the singular number.',
          ex: [
            {
              text: 'हस्ती चाश्वश्च हस्त्यश्वं'
            },
            {
              text: 'शंखश्चदुंदुभिश्चैव मर्दळश्चेति शंखदुंदुभिमर्दळम्'
            },
            {
              text: 'वासुदेवश्चार्जुनश्च वासुदेवार्जुनौ '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'अव्ययीभावः',
      title_eng: 'Avyayībhāva',
      id: 10,
      definition_sans: 'द्विधा प्रोक्तोऽव्ययीभावोऽव्ययपूर्वपदस्तथा ।<br>नामपूर्वपदश्चापि सर्वोऽप्यव्ययसंज्ञकः ॥',
      definition_eng: 'The first member of this type of nominal compound is an indeclinable, to which another word is added so that the new compound also becomes indeclinable (i.e., avyaya).<br><br>In avyayībhāva compounds, the first member has primacy (pūrva-pada-pradhāna), i.e., the whole compound behaves like an indeclinable due to the nature of the first part which is indeclinable. ',
      common: '',
      types: 2,
      type: [
        {
          name: 'अव्ययपूर्वपदः',
          ex: [
            {
              text: 'कुंभस्य समीपे उपकुंभम्'
            }
          ]
        },
        {
          name: 'नामपूर्वपदः',
          ex: [
            {
              text: 'रिपुं प्रति रिपोर्मात्रा '
            }
          ]
        }
      ]
    },
    {
      title_sans: 'लुक् & अलुक् समासाः',
      title_eng: 'Luk Samāsa and Aluk Samāsa',
      id: 11,
      definition_sans: 'लुक्समासोऽलुक्समास इति तौ प्रब्रवीम्यहम् ।',
      common: 'In this compound, here there is elision of the case markers. In this compound, there is no elision of the case markers.',
      types: 2,
      type: [
        {
          name: 'लुक्',
          ex: [
            {
              text: 'शाकप्रियः पार्थिवो यस्स चायं शाक पार्थिवः । '
            },
            {
              text: 'छाया प्रधानास्तरवो ये च्छायातरवो वने ॥'
            }
          ]
        },
        {
          name: 'अलुक्',
          ex: [
            {
              text: 'खे गच्छति तु यःप्राणी स खगोऽलुक्प्रकीर्ततः ॥'
            },
            {
              text: 'वने चरति यःप्राणी सततं स वनेचरः '
            },
            {
              text: 'पंके रोहति यत्पुष्पं तत्पंकेरुहम् '
            }
          ]
        }
      ]
    }
  ],
  exercises: [
    {
      id: '1',
      title: 'Level 1 - Introduction',
      question: 'समासार्थावबोधकं वाक्यं ___ ',
      options: ['विग्रहः', 'समासः', 'सिन्धिः', 'तद्धितः'],
      ans: 'विग्रहः'
    },
    {
      id: '2',
      title: 'Level 2 - Complete the Vigrahavākya',
      question: 'तटं तटं प्रति ___',
      options: ['अनुतटम्', 'प्रतितटम्', 'तटौ', 'अनुतटौ'],
      ans: ''
    },
    {
      id: '3',
      title: 'Level 2 - Complete the Vigrahavākya',
      question: 'शीतं च तत् उष्णं च ',
      options: ['उष्णशीतम्', 'उष्णशीतौ', 'शीतोष्णम्', 'शीतोष्णौ'],
      ans: ''
    },
    {
      id: '4',
      title: 'Level 2 - Complete the Vigrahavākya',
      question: 'वने चरतीति ',
      options: ['वनेचरः ', 'वनचरः ', 'वनचरी', 'वनेचरी'],
      ans: 'वनेचरः '
    },
    {
      id: '5',
      title: 'Level 2 - Complete the Vigrahavākya',
      question: 'धनमस्यास्तीति',
      options: ['धनी', 'धनमान्', 'धनवान्', 'धनवती'],
      ans: 'धनवान्'
    },
    {
      id: '6',
      title: 'Level 3 - Types of Samāsa',
      question: 'उभयपदार्थप्रधानो ___।',
      options: ['कर्मधारयः', 'तत्पुरुषः', 'बहुव्रीहिः', 'द्वन्द्वः'],
      ans: 'द्वन्द्वः'
    },
    {
      id: '7',
      title: 'Level 3 - Types of Samāsa',
      question: 'उत्तरपदार्थप्रधानः ___',
      options: ['कर्मधारयः', 'तत्पुरुषः', 'बहुव्रीहिः', 'द्वन्द्वः'],
      ans: 'तत्पुरुषः'
    },
    {
      id: '8',
      title: 'Level 3 - Types of Samāsa',
      question: 'त्रिषु लिङ्गेषु समानं रूपम् ____',
      options: ['द्विगुः', 'अव्ययीभावः', 'कर्मधारयः', 'तत्पुरुषः'],
      ans: 'अव्ययीभावः'
    },
    {
      id: '9',
      title: 'Level 4 - Identify the Type of Samāsa',
      question: 'तनुरेव लता तनुलता ',
      options: ['द्विगुः', 'लुक्', 'अव्ययीभावः', 'कर्मधारयः'],
      ans: 'लुक्'
    },
    {
      id: '10',
      title: 'Level 4 - Identify the Type of Samāsa',
      question: 'पञ्चानां फलानां समाहारः पञ्चफली ',
      options: ['द्विगुः', 'लुक्', 'अव्ययीभावः', 'कर्मधारयः'],
      ans: 'द्विगुः'
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
