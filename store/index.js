export const state = () => ({
  sidebar: false,
  lessons: [
    {
      title_sans: 'छन्दःशास्त्रः - भूमिका',
      title_eng: 'Introduction to Sanskrit Prosody',
      id: 1,
      definition_sans: '',
      definition_eng: '<p>Sanskrit prosody or Chandas refers to one of the six Vedangas, or limbs of Vedic studies. It is the study of poetic metres and verse in Sanskrit.</p><p>Almost all Sanskrit poetry is based on following a certain meter, or arrangement of syllables. The Chandas or the metre is an essential element of versified poetry. Rigorous description of the form of the poems helps to preserve their shape over time. This description evolved into the formal study of meter. Both meter and the study of meter are called chandas.</p><p>A poetical stanza or verse in Sanskrit is called <em>padya</em>. Generally a <em>padya</em> or verse contains four <em>pādas</em> or quarters or metrical lines. Sanskrit verses are classified into groups and sub-groups according to: <ol type="a"><li>the number of syllables or syllabic instants they contain in each quarter and </li><li>the position or placement of short or long syllables within the verse</li></ol></p><p>Such groups and sub-groups are called <em>chandas</em></p>',
      example_sans: ''
    },
    {
      title_sans: 'गुरुलक्षणम्',
      title_eng: 'Identifying a Guru',
      id: 2,
      definition_sans: '<ul><li>अनुस्वारेण सहितो वर्णः – अं, कं, खं, गं…</li><li>विसर्गान्तः – अः, कः,..</li><li>दीर्घः – आ, ई, ऊ,…</li><li>संयुक्तपदः – ष्ण, क्त, ...</li><li>पद्यस्य चरणान्ते स्थितो लघुः</li></ul>',
      definition_eng: '<ul><li>Vowel or consonant followed by anusvāra - aṃ, kaṃ, khaṃ, gaṃ, etc  </li><li>Vowel or consonant followed by Visarga - aḥ, kaḥ, etc </li><li>The vowels ā, ī, ū, etc… are long. Whenever any of these is used in a verse separately or with one or more consonants, it will be considered as long. Eg: kā, kī, etc are long syllables </li><li>A conjunct consonant – ṣṇa, kta, etc</li><li>At the end of a quarter a short syllable can be considered as long.</li></ul>',
      example_sans: ''
    },
    {
      title_sans: 'लघुलक्षणम्',
      title_eng: 'Identifying a Laghu',
      id: 3,
      definition_sans: '<ul><li>एकमात्रिकः</li><li>ह्रस्वः – अ, इ, उ,..</li></ul>',
      definition_eng: '<ul><li>Laghu consists of a single syllabic instant (1 mātrā).</li><li>The  vowels a, i, u, ṛ, lṛ are short. Whenever any of these is used in a verse separately or with one or more consonants it will be considered as a short syllable. Eg: ka, ki, etc.</li></ul>',
      example_sans: ''
    },
    {
      title_sans: 'छन्दोविभागाः',
      title_eng: 'Classification of Chandas',
      id: 4,
      definition_sans: '',
      definition_eng: '',
      treeData: {
        name: 'Types of Chandas'
      }
    },
    {
      title_sans: 'वर्णछन्दः',
      title_eng: 'Varna Chandas or Metres regulated by syllables',
      id: '4.1',
      definition_sans: '<p>त्रयाणां वर्णानां समूहो गणशब्देन व्यपदिष्यते ।</p><p>अष्टगणाः - यमताराजभानसलगौ</p>अष्टगणानां लक्षणम् - <p>आदिमध्यावसानेषु भजसा यान्ति गौरवम् ।<br> यरता लाघवं यान्ति मनौ तु गुरुलाघवम् ।</p>',
      definition_eng: '<h3>Gana in Varna Chandas:</h3><p>Group of three syllables is called Gana or syllabic feet. 8 Ganas are used by Sanskrit prosodians.</p>',
      common: '<table  style="width: 100%; text-align: center"  border="2"><tbody><tr><td>Sl. No.</td><td>गणनाम<br>Name of Gana&nbsp;</td><td>Symbol</td><td >Example</td></tr><tr ><td>1</td><td>मगण</td><td>ऽऽऽ</td><td>धी श्री स्त्री dhī śrī strī</td></tr><tr><td  style="width: 63.25px;">2</td><td>यगण</td><td>।ऽऽ</td><td>व रा सा va rā sā</td></tr><tr><td>3</td><td>रगण</td><td>ऽ।ऽ</td><td>का गु हा kā gu hā<br></td></tr><tr><td>4</td><td>सगण</td><td>॥ऽ</td><td>&nbsp;व सु धा va su dhā<br></td></tr><tr><td>5</td><td>तगण</td><td>ऽऽ।</td><td>सा ते क्व sā te kva<br></td></tr><tr><td>6</td><td>जगण</td><td>।ऽ।</td><td>क दा स ka dā sa<br></td></tr><tr><td>7</td><td>भगण</td><td>ऽ॥</td><td>किं व द kiṃ va da<br></td></tr><tr><td>8</td><td>नगण</td><td>॥।</td><td>न ह स na ha sa<br></td></tr><tr><td>9</td><td>ल</td><td>।</td><td>गृ gṛ<br></td></tr><tr><td>10</td><td>ग</td><td>ऽ</td><td>घ gha</td></tr></tbody></table>'
    },
    {
      title_sans: 'समवृत्तम्',
      title_eng: 'Samam',
      id: '4.1.i',
      definition_sans: '<p>यस्य पद्यस्य चत्वारः अङ्घ्रयः पादाः तुल्येन समानेन लक्षणेन लक्षिता युक्ताः सन्ति तद् वृत्तं समं ।</p><p>यथा – उपेन्द्रव्रज्रा – सर्वेऽपि पादाः एकादशवर्णात्मकाः समानलक्षणभाजश्च भवन्ति | </p><h3>समवृत्तभेदाः -</h3><p>एकाक्षरात् पादात् आरभ्य एकाक्षरवर्धितैः एकेन-एकेन अक्षरेण वर्धितैः पादैः यावत् षड्विंशति संख्याकं प्रति गतं गमनं भवति, तावत् पृथक् भिन्नं छन्दो भवेत् ।',
      definition_eng: ''
    },
    {
      title_sans: 'उक्ता',
      title_eng: 'Ukta',
      id: '4.1.i.I',
      definition_sans: '<h3>श्री</h3>गुः श्रीः - एकाक्षरपादायाम् उक्तायां गुर्वेकश्चेत्पादः तदा श्री नाम वृत्तं भवति |',
      definition_eng: '<h3>śrīḥ</h3> When each quarter of a verse contains only one long syllable then the metre is called śrīḥ.',
      common: '<h3>उदाहरणम् Example: </h3><table  style="width: 40%"><tbody><tr><td>गु </td><td>गु </td><td>गु </td><td>गु </td></tr><tr><td>ऽ </td><td>ऽ </td><td>ऽ </td><td>ऽ </td></tr><tr><td>वि </td><td>ष्णुं </td><td>व </td><td>न्दे </td></tr></tbody></table>'
    },
    {
      title_sans: 'अत्युक्ता',
      title_eng: 'Atyukta',
      id: '4.1.i.II',
      definition_sans: '<h3>स्त्री</h3><p>गौ स्त्री = द्वौ गुरौ यदि पादे भवतः तदा स्त्री नाम वृत्तं भवति</p>',
      definition_eng: '<h3>Strī</h3> When each quarter of a verse contains two long syllables then the metre is called Strī.',
      common: '<h3>उदाहरणम् Example: &nbsp; </h3><p><table><tbody><tr><td>गु&nbsp; गु</td><td>&nbsp;गु&nbsp;&nbsp;&nbsp; गु </td><td>&nbsp;&nbsp;गु&nbsp;&nbsp; गु </td><td>&nbsp;गु गु </td></tr><tr><td>ऽ&nbsp; ऽ</td><td>&nbsp;ऽ&nbsp;&nbsp;&nbsp; ऽ </td><td>&nbsp;&nbsp;ऽ&nbsp;&nbsp; ऽ </td><td>&nbsp;ऽ ऽ </td></tr><tr><td>गोप&nbsp; &nbsp; </td><td>स्त्रीभिः</td><td>&nbsp;&nbsp;कृष्णो</td><td>&nbsp;&nbsp;रेमे</td></tr></tbody></table></p>'
    },
    {
      title_sans: 'मध्या',
      title_eng: 'Madhya',
      id: '4.1.i.III',
      types: 2,
      type: [
        {
          text_sans: '<h3>i. नारी Narī</h3><p>मो नारी – यदि पादे मगणश्चेत् तदा नारी नाम वृत्तं भवति</p><p>When each quarter of a verse contains three long syllables then the metre is called Narī.</p><table><tbody><tr><td>&nbsp;&nbsp; म</td><td>&nbsp;&nbsp;&nbsp;&nbsp; म</td><td  style="width: 100.417px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;म</td><td  style="width: 94.0833px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; म</td></tr><tr><td>ऽ&nbsp; ऽ ऽ</td><td>&nbsp;ऽ ऽ ऽ </td><td>&nbsp; ऽ&nbsp;&nbsp; ऽ&nbsp;&nbsp; ऽ</td><td>&nbsp;ऽ&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>गोपानां&nbsp; </td><td>नारीभिः।</td><td> श्लिष्टोऽव्यात्</td><td> कृष्णो वः ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>ii. मृगी Mrgī</h3><p>रो मृगी - यदि पादे रगणश्चेत् तदा मगी नाम वृत्तं भवति </p><p>When three syllables of one <em>ra</em> group form each quarter then the metre is called mrgi.</p><p> In each quarter the first and third syllables are long and the second is short.</p><table><tr><td>र</td><td>र</td><td>र</td><td>र</td></tr><tr><td>ऽ   | ऽ </td><td> ऽ | ऽ </td><td> ऽ | ऽ </td><td> ऽ | ऽ </td></tr><tr><td>सा मृगी</td><td>लोचना | </td><td> राधिका</td><td>श्रीपतेः ||</td></tr></table>'
        }
      ],
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: 'प्रतिष्ठा',
      title_eng: 'Pratishta',
      id: '4.1.i.IV',
      definition_sans: '<h3>कन्या</h3><p>कन्या - पादश्चतुर्गुरुः चेत् कन्या नाम वृत्तं भवति ।</p>',
      definition_eng: '<h3>Kanya</h3><p>When four long syllables arranged as one <em>ga</em> syllable and one <em>ma</em> group form each pada, then the metre is called <em>Kanya</em>.</p>',
      common: 'उदाहरणम् Example: <table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; गु</td></tr><tr><td>&nbsp; ऽ&nbsp;  ऽ&nbsp;  ऽ&nbsp;  ऽ&nbsp; </td><td>&nbsp; ऽ ऽ &nbsp;  ऽ ऽ</td><td>ऽ&nbsp; ऽ&nbsp; &nbsp; &nbsp;  ऽ ऽ</td><td>&nbsp; ऽ&nbsp;  ऽ &nbsp; ऽ &nbsp; ऽ</td></tr><tr><td>भास्वत्कन्या </td><td> सैका धन्या | </td><td> यस्याः &nbsp; कूले &nbsp; </td><td> कृष्णो अखेलत् ॥</td></table>'
    },
    {
      title_sans: 'सुप्रतिष्ठा',
      title_eng: 'Supratishta',
      id: '4.1.i.V',
      definition_sans: '<h3>पङ्क्तिः</h3><p>म्गौ गिति पङ्क्तिः – यदि पादे भगण गुरू पुनर्गुरुश्चेत्तर्हि पङ्क्तिः नाम वृत्तं भवति |</p>',
      definition_eng: '<h3>Pankti</h3><p>This metre has five syllables of one <em>bha</em> group and two <em>ga</em> groups in each quarter.</p><p>So, here, the 1st, 4th and 5th syllables of each quarter are long and 2nd and 3rd are short.</p>',
      common: '<table><tr><td>ऽ &nbsp; ।  । &nbsp; ऽ ऽ &nbsp; ऽ &nbsp; ।  । &nbsp; ऽ ऽ</td><td> &nbsp; &nbsp; ऽ । ।  ऽ ऽ  &nbsp; ऽ ।  &nbsp; ।  ऽ ऽ </td></tr><tr><td>कृष्णसनाथा &nbsp; तर्णकपंक्तिः ।</td><td> &nbsp; यामुनकच्छे चारु चचार ॥</td></tr></table>'
    },
    {
      title_sans: 'गायत्री',
      title_eng: 'Gayatri',
      id: '4.1.i.VI',
      types: 4,
      type: [
        {
          text_sans: '<h3>i. तनुमध्या Tanumadhya</h3><p>त्यौ स्तस्तनुमध्या - तगण-यगणौ यदि पादे भवतस्तदा तनुमध्या नाम वृत्तं भवति ।</p><p>This metre contains six syllables of one <em>ta</em> group and one <em>ya</em> group in each quarter.</p><p>So, here the 1st, 2nd, 5th and 6th syllables of each quarter are long and the 3rd and the 4th short.</p><table><tr><td> &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  य &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  त &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  य</td><td> &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  य &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  त &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  य</td></tr><tr><td>ऽ ऽ । । ऽ ऽ &nbsp; ऽ ऽ  &nbsp; । । ऽ  &nbsp; ऽ</td><td> ऽ ऽ । । ऽ ऽ  &nbsp; ऽ ऽ  । । ऽ ऽ</td></tr><tr><td>तेन प्रविभक्ता कामं वयसा सा । </td><td> येन प्रविलासं धत्ते तनुमध्या ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>ii. शशिवदना Shashivadana</h3><p>यदि पादे नगण-यगणौ भवतस्तदा शशिवदना नाम वृत्तं भवति ।</p><p>This metre contains 6 syllables of one <em>na</em> group and one <em>ya</em> group in each quarter.</p><p>So, here the 1st, 2nd, 3rd and 4th syllables of each quarter are short and the last two long.</p><table><tr><td> &nbsp; &nbsp; न  &nbsp; &nbsp;  &nbsp;  &nbsp; य &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; न   &nbsp;  &nbsp;  &nbsp; य</td></tr><tr><td> &nbsp; | &nbsp; |  | | ऽ ऽ &nbsp; | | | | ऽ ऽ</td></tr><tr><td>शशिवदनानां व्रजतरुणीनाम् ।</td></tr><tr><td>अधरसुधोमिं मधुरिपुरैच्छत् ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>iii. विद्युल्लेखा Vidyullekha</h3><p>यदि पादे मगणौ स्तस्तदा विद्युल्लेखा नाम वृत्तं भवति । </p><p>This metre has 6 syllables made up of two <em>ma</em> groups in each quarter.</p><p>So, here all the six syllables of each quarter are long. There should be a pause after the 3rd and the last syllables of each quarter.</p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; म</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; म</td></tr><tr><td>&nbsp; ऽ ऽ ऽ&nbsp; ऽ&nbsp; &nbsp; ऽ ऽ</td><td  style="width: 383.333px;">&nbsp; ऽ ऽ&nbsp; &nbsp; ऽ&nbsp; ऽ&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>गोपस्त्रीणां मुख्या । </td><td>विद्युल्लेखा रूपा ॥</td></tr><tr><td>कालिन्दी तीरे सा ।</td><td> रेमे श्रीकृष्णेन ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>iv. वसुमती Vasumati</h3><p>तगण-सगणौ चेत् पादः तदा वसुमती नाम वृत्तम् ।</p><p>This metre has 6 syllables of one <em>ta</em> group and one <em>sa</em> group in each quarter.</p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; स</td><td>&nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; स</td></tr><tr><td  style="width: 117.867px;">&nbsp; ऽ ऽ ।। । ऽ</td><td  style="width: 614.333px;">&nbsp; ऽऽ ।। । ऽ</td></tr><tr><td>राजीवनयना, </td><td>नूनं वसुमती ।</td></tr><tr><td>रामा भवति </td><td> सा नूनं वसुमती ॥</td></tr></tbody></table>'
        }
      ],
      definition_sans: '<p>सर्वेषु पादेषु पादान्ते यतिः ।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'उष्णिक्',
      title_eng: 'Ushnik',
      id: '4.1.i.VII',
      definition_sans: '<h3>मदलेखा</h3><p>मगण सगण गुरुभिः मदलेखा नाम वृत्तं भवति ।</p>',
      definition_eng: '<h3>Madalekha</h3><p>This metre has seven syllables of one <em>ma</em> group, one <em>sa</em> group and one <em>ga</em> group in each quarter.</p><p>So here the 4th and 5th syllables of each quarter are short and the others long.</p><p>There should be a pause after the 3rd and the last syllables of each quarter.</p>',
      common: '<table><tbody><tr><td>&nbsp; &nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; &nbsp; स</td><td>&nbsp; &nbsp; &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp; &nbsp; स</td></tr><tr><td>ऽ ऽ&nbsp; ऽ। । ऽ&nbsp; ऽ</td><td  style="width: 614.333px;">&nbsp; ऽ ऽ&nbsp; &nbsp; ऽ ।।&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>रङ्गे बाहुविरुग्णात्,&nbsp; </td><td>दन्तीन्द्रान्मदलेखा ॥</td></tr><tr><td>लग्नाभून्मुरशत्रौ</td><td> कस्तूरी रसचर्चा ॥</td></tr></tbody></table>'
    },
    {
      title_sans: 'अनुष्टुप्',
      title_eng: 'Anushtup',
      id: '4.1.i.VIII',
      definition_sans: '',
      definition_eng: 'This metre allows great freedom in use of long and short syllables. However, in its usual form, the fifth syllable of each quarter should be short, the sixth long and the seventh alternatively long and short. There being no fixed rule for the other syllables.',
      types: 6,
      type: [
        {
          text_sans: '<h3>चित्रपदा</h3><p>भगणौ गुरू च यत्र पादे सा चित्रपदा भवति ।</p><p>This metre has 8 syllables of two <em>bha</em> and two <em>ga</em> groups in each quarter. So here the 1st, 4th, 7th and 8th syllables of each quarter are long and the others short.<table><tbody><tr><td>&nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; गु गु</td><td>&nbsp; &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; गु गु</td></tr><tr><td>ऽ &nbsp; । &nbsp; । ऽ&nbsp; &nbsp; । । ऽ&nbsp; ऽ</td><td>&nbsp; ऽ । ।&nbsp; &nbsp; ऽ&nbsp; &nbsp; । । ऽ&nbsp; ऽ</td></tr><tr><td>यस्य मुखे प्रियवाणी, </td><td>चेतसि सज्जनता च ।</td></tr><tr><td>चित्रपदाऽपि च लक्ष्मीः</td><td>तं पुरुषं न जहाति ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>विद्युन्माला</h3><p>यदि पादे मगणौ द्वौ गुरू च भवतस्तदा विद्युन्माला नाम वृत्तं चतुर्भिच्चतुर्भिश्च यतिः ।</p><p>This metre has 8 syllables of two <em>ma</em> and two <em>ga</em> groups in each quarter. So, here all the syllables of each quarter are long</p><table><tbody><tr><td>&nbsp;  &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; गु गु</td><td>&nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; भ&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  गु गु</td></tr><tr><td>ऽ ऽ &nbsp; ऽ ऽ &nbsp; &nbsp;  ऽ ऽ ऽ&nbsp; ऽ</td><td>&nbsp; ऽऽ&nbsp; &nbsp; ऽ ऽ &nbsp; &nbsp; ऽ ऽ&nbsp; ऽ ऽ&nbsp; </td></tr><tr><td>मौनं ध्यानं भूमौ शय्या, </td><td>गुर्वी तस्याः कामावस्था ।</td></tr><tr><td>मेघोत्सङ्गे नृत्तासङ्गा, </td><td>यस्मिन्काले विद्युन्माला ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>माणवकम्</h3><p>भाद् गणात् तगण लघुगुरवो यदि तदा माणवकम् </p><p>This is an eight-syllabled metre containing syllables of one <em>Bha</em> group, one <em>ta</em> group, one <em>la</em> group and one <em>ga</em> group in each quarter.</p><p>So here the 1st, 4th, 5th and 8th syllables of each quarter are long and the others short. There should be a pause after the 4th and the last syllables of each quarter.</p><table><tbody><tr><td>&nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp; ल गु</td><td>&nbsp; &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp; ल गु</td></tr><tr><td>&nbsp;ऽ । । ऽ &nbsp; &nbsp; ऽ । । ऽ </td><td>&nbsp; ऽ&nbsp; । । ऽ&nbsp; &nbsp; ऽ। ।&nbsp; ऽ </td></tr><tr><td>माणवकाक्रीडितकं</td><td>&nbsp;यः कुरुते वृद्धवयाः ।</td></tr><tr><td>हास्यमसौ याति जने,</td><td>भिक्षुरिव स्त्रीचपलः ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>हंसरुतम्</h3><p>मगण-नगणौ गुरू च द्वौ</p><p>This eight-syllabled metre contains one <em>ma</em> group, one <em>na</em> group and two <em>ga</em> groups.</p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; गु गु</td><td>&nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; &nbsp; गु गु</td></tr><tr><td>&nbsp; ऽ&nbsp; ऽ&nbsp; ऽ &nbsp;  ।&nbsp; ।&nbsp; ।&nbsp; &nbsp;  ऽ&nbsp; ऽ &nbsp; &nbsp; &nbsp; </td><td>ऽ &nbsp;  ऽ ऽ &nbsp; ।&nbsp; ।&nbsp; ।&nbsp; ऽ ऽ&nbsp; </td></tr><tr><td>अभ्यागामिशशिलक्ष्मी, </td> <td>मञ्जीरक्वणिततुल्यम् ।</td></tr><tr><td>तीरे राजति नदीनां, </td><td>रम्यं हंसरुतमेतत् ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>समानिका</h3><p>यदि पादे रगण-जगणौ गुरु-लघू च भवन्ति तदा समानिका नाम वृत्तं भवति ।</p><p> समानी एव समानिका</p><p>This metre has eight syllables of one <em>ga</em> group, one <em>la</em> group, one <em>ra</em> group</p> and one <em>ja</em> group in each quarter. </p><p>So here the 1st, 3rd, 5th and 7th syllables of each quarter are long and the others short. There should be a pause after the 4th and the 8th syllables of each quarter.</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  र &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp; &nbsp;  गु ल</td><td>&nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp; &nbsp;  गु ल</td></tr><tr><td>&nbsp; ऽ । &nbsp; ऽ । &nbsp; ऽ । ऽ ।</td><td>&nbsp; ऽ । &nbsp; ऽ । ऽ । ऽ ।</td></tr><tr><td>यस्य कृष्ण पादपद्मम्</td><td>अस्ति हृत्तडागसद्म ।</td></tr><tr><td>धीः समानिका परेण,</td><td>नोचिताऽत्र मत्सरेण ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>प्रमाणिका</h3><p>जगण-रगणौ लघुगुरू च प्रमाणिका ।</p><p> प्रमाणी एव प्रमाणिका</p><p>This metre has 8 syllables of one <em>ja</em> group, one <em>ra</em> group, one <em>la</em> group and one <em>ga</em> group in each quarter.</p><p>So here the 1st, 3rd, 5th and 7th syllables of each quarter are short and the others long. Places of pause are like Samanika.</p><table><tr><td>&nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; ल गु</td><td>&nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; ल गु</td></tr><tr><td>। ऽ &nbsp; । ऽ । ऽ । ऽ</td><td>। ऽ &nbsp; । ऽ । ऽ । ऽ</td></tr><tr><td>लघु श्रुतं मदोद्धतं,</td><td>गुरु श्रमाय केवलम् ।</td></tr><tr><td>न यत्परोपकारकृद्,</td><td>वृथैव तत्प्रमाण्यपि ॥</td></tr></table>'
        }
      ]
    },
    {
      title_sans: 'बृहती',
      title_eng: 'Bruhati',
      id: '4.1.i.IX',
      definition_sans: '',
      definition_eng: '',
      types: 2,
      type: [
        {
          text_sans: '<h3>हलमुखी</h3><p>रगणानन्तरं नगण-सगणौ चेत् हलमुखी नाम वृत्तं भवति ।</p><p> त्रिभिः षड्भिः यतिः ।</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; &nbsp; स</td><td>&nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; स</td></tr><tr><td>&nbsp; ऽ । ऽ । । । । । ऽ</td><td>&nbsp; ऽ । ऽ । । । । । ऽ</td></tr><tr><td>गण्डयोरतिशयकृशं,</td><td>यन्मुखं प्रकटदशनम् । </td></tr><tr><td>आयतं कलहनिरतां,</td><td>तां स्त्रियं त्यज हलमुखीम् ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>भुजगशिशुभृता</h3><p>द्वाभ्यां नगणाभ्याम् एकेन मगणेन च भुजगशिशुभृता नाम वृत्तं भवति </p><p>सप्तभिः द्वाभ्यां च यतिः ।</p><table><tr><td>&nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; म</td><td>&nbsp; &nbsp; &nbsp; &nbsp; न &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; &nbsp;   म</td></tr><tr><td>। । । । । । ऽ ऽ ऽ</td><td>&nbsp; । । । । । । ऽ ऽ ऽ</td></tr><tr><td>इयमधिकतरं रम्या,</td><td>विकचकुवलय श्यामा ।</td></tr><tr><td>रमयति हृदयं यूनां,</td><td>भुजगशिशुभृता नारी ॥</td></tr></table>'
        }
      ]
    },
    {
      title_sans: 'पङ्क्तिः',
      title_eng: 'Pankti',
      id: '4.1.i.X',
      definition_sans: '',
      definition_eng: '',
      types: 7,
      type: [
        {
          text_sans: '<h3>शुद्धविराट्</h3><p>मगण-सगणौ जगण-गुरू च तत् शुद्धविराट् वृत्तम् ।</p><p>पादान्ते यतिः</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  स &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  स &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; गु</td></tr><tr><td>ऽ ऽ &nbsp; ऽ । । &nbsp; &nbsp; ऽ । ऽ । ऽ</td><td>&nbsp; ऽ ऽ &nbsp; ऽ । &nbsp; । ऽ । ऽ । ऽ</td></tr><tr><td>विश्वं तिष्ठति कुक्षिकोटरे,</td><td>वक्त्रे यस्य सरस्वती सदा ।</td></tr><tr><td>अस्मद्वंशपितामहो गुरुः,</td><td>ब्रह्मा शुद्धविराट् पुनातु नः ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>पणवनामकम्</h3><p>मगण-जगणौ जगण-गुरू च तत् पणवनामकम् नाम वृत्तम् । </p><p>पञ्चभिः पञ्चभिः यतिः </p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp;  गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp;  गु</td></tr><tr><td>&nbsp; ऽ ऽ &nbsp;  ऽ । । । । ऽ । ऽ</td><td>ऽ ऽ &nbsp;  ऽ &nbsp; । । । । ऽ । ऽ</td></tr><tr><td>भक्ता ये शरणमुपागताः,</td><td>तेषां नो चिकुरमपि प्रभुः ।</td></tr><tr><td>छेत्तु कोऽपि जगति हे शिवे ! </td><td>तेऽयं कीर्तिर्पणवनिःस्वनः ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>मयूरसारिणी</h3><p>रगण-जगण-रगण-गुरुभिः मयूरसारिणि स्यात् </p><table><tr><td>&nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; &nbsp;  र &nbsp; &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp; &nbsp;  र &nbsp; &nbsp; &nbsp;  गु</td></tr><tr><td>&nbsp; ऽ &nbsp; &nbsp;  । ऽ । ऽ । ऽ । ऽ ऽ</td><td>&nbsp; ऽ । ऽ । ऽ । ऽ । ऽ ऽ</td></tr><tr><td>या वनान्तराण्युपैतिरन्तुं,</td><td>या भुजङ्गभोगमुक्तचित्ता ।</td></tr><tr><td>या द्रुतं प्रयाति सन्नतां सा,</td><td>तां मयूरसारिणीं विजह्यात् ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>रुक्मवती</h3><p>भगण-मगण-सगणैः गुरुणा च रुक्मवती नाम वृत्तं भवति । चम्पकमाला इति अन्यनाम । पादान्ते यतिः</p><table><tr><td>&nbsp; &nbsp; &nbsp;  भ &nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp; &nbsp;  गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; भ &nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp;  न &nbsp; &nbsp;  गु</td></tr><tr><td>ऽ । । ऽ ऽ &nbsp; &nbsp;  ऽ । । ऽ ऽ</td><td>&nbsp;  ऽ । । ऽ ऽ ऽ । । ऽ ऽ</td></tr><tr><td>भग्नमसत्यैः कायसहस्त्रैः,</td><td>मोहमयी गुर्वी तव माया ।</td></tr><tr><td>स्वप्नविलासा योगवियोगा</td><td>रुक्मवती हा कस्य कृते श्रीः ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>मत्ता</h3><p>म-भ-स-गण-गुरुयुता मत्ता नामवृत्तं भवति । चतुर्भिः षड्भिः च यतिः ।</p><table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   भ &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  स &nbsp; &nbsp;  गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  भ &nbsp; &nbsp; &nbsp; &nbsp;  स &nbsp; &nbsp; गु</td></tr><tr><td>&nbsp; ऽ ऽ &nbsp;  ऽ ऽ &nbsp; । । &nbsp; । । ऽ ऽ</td><td>&nbsp; ऽ ऽ &nbsp;  ऽ ऽ । । । । ऽ ऽ</td></tr><tr><td>पीत्वा मत्ता मधु मधुपाली, </td><td>कालिन्दीये तटवनकुञ्जे ।</td></tr><tr><td>उद्दीव्यन्तीर्व्रजजनरामाः, </td><td>कामासक्ता मधुजिति चक्रे ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>मनोरमा</h3><p>न-र-ज-गणैः गुरुभिश्च मनोरमा नाम वृत्तं भवति । पादान्ते यतिः ।</p><table><tr><td>&nbsp; &nbsp; न &nbsp; &nbsp; &nbsp;  &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp;  ज &nbsp; &nbsp;  गु </td><td>&nbsp; &nbsp; &nbsp; न &nbsp; &nbsp; &nbsp; &nbsp; र &nbsp; &nbsp; &nbsp; &nbsp; ज &nbsp; &nbsp; &nbsp; गु </td></tr><tr><td>। । । ऽ । ऽ । ऽ । ऽ</td><td>। । । &nbsp; ऽ । ऽ &nbsp; । ऽ । ऽ</td></tr><tr><td>तरणिजातटे विहारिणी, </td><td>व्रजविलासिनी विलासतः ।</td></tr><tr><td>मुररिपोस्तनुः पुनातु वः,</td><td>सुकृतशालिनां मनोरमा ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>उपस्थिता</h3><p>त-ज-जगण-गुरुभिः उपस्थिता नाम वृत्तं भवति । पादान्ते यतिः । द्वाभ्या, अष्टभिश्च इति एके ।</p><table><tr><td>त ज ज गु </td><td>त ज ज गु </td></tr><tr><td>ऽ ऽ । । ऽ । । ऽ । ऽ</td><td>&nbsp; ऽ ऽ &nbsp; &nbsp; । । ऽ &nbsp; &nbsp; । । ऽ । ऽ</td></tr><tr><td>एषा जगदेकमनोहरा, </td><td>कन्या कनकोज्ज्वलदीधितिः ।</td></tr><tr><td>लक्ष्मीरिव दानवसूदनं, </td><td>पुण्यैर्नरनाथमुपस्थिता ॥</td></tr></table>'
        }
      ]
    },
    {
      title_sans: 'त्रिष्टुप्',
      title_eng: 'Trishtup',
      id: '4.1.i.XI',
      definition_sans: '',
      definition_eng: '',
      types: 16,
      type: [
        {
          text_sans: '<h3>इन्द्रवज्रा Indravajra</h3><p>स्यादिन्द्रवज्रा यदि तौ जगौ गः॥</p><p>द्वौ तगणौ ततो जगणगुरु पुनरेको गुरुश्चेत् सा इन्द्रवज्रा नाम</p><p>Each quarter of this meter contains 11 syllables. Here, the 1st, 2nd, 4th, 5th, 8th, 10th and 11th syllables of each quarter are long and the others short. There should be a pause after the 5th and last syllables of each quarter.</p>',
          ex_img: '/indravajra.png'
        },
        {
          text_sans: '<h3>उपेन्द्रवज्रा Upendravajra</h3><p>उपेन्द्रवज्रा जतजातस्ततो गौ॥</p><p>जगण-तगण-जगणाः स्युः, ततो द्वौ च गुरु स्याताम्, तदा उपेन्द्रवज्रा नाम छन्द उच्यते।</p><p>This metre is similar to the previous one, Indravajra. The difference between two is that in it first syllable of each quarter is short, whereas it is long in indravajra. The places of pause are also same in both.',
          ex_img: '/upendravajra.png'
        },
        {
          text_sans: '<h3>Upajati</h3><p>एकः पादः इन्द्रवज्राया एकादिर्वोपेन्द्रवज्रायाः ता “उपजातयो” नाम मताः। </p><p>एताश्चतुरक्षरप्रस्तारवत्प्रस्तारे आद्यन्तयोर्भेदयोः केवलेन्द्रवज्रोपेन्द्रवज्रयोस्त्यागात् चतुर्दश भेदा भवन्ति। तथाहि-</p><ol><li>इ इ इ इ       (इन्द्रवज्रा) </li><li>उ इ इ इ       (कीर्त्तिः) १</li><li>इ उ इ इ        (वाणी) २</li><li>उ उ इ इ       (माला) ३</li><li>इ इ उ इ (शाला) ४</li><li>इ इ उ इ       (हंसी) ५</li><li>इ उ उ इ       (माया) ६</li><li>उ उ उ इ       (जाया) ७</li><li>इ इ इ उ       (बाला) ८</li><li>उ इ इ उ       (आर्द्रा) ९</li><li>इ उ इ उ       (भद्रा) १०</li><li>उ उ इ उ       (रामा) ११</li><li>इ इ उ उ             १२</li><li>उ इ उ उ       (ऋद्धिः) १३</li><li>इ उ उ उ       (बुद्धिः) १४</li><li>उ उ उ उ       (उपेन्द्रवज्रा) </li></ol><br><p>उक्तञ्च वृद्धैः-</p>एकत्र पादे चरणद्वये वापादत्रये वान्यतरः स्थितश्चेत्।<br>तयोरिहान्यत्र तथोहनीयाश्चतुर्दशोक्ता उपजातिभेदाः॥इति॥<br><br><p>उदाहरणं यथा वा-</p>(इ०)      काचिन्मुरारेर्वदनारविन्दं <br>(उ०) संक्रान्तमालोक्य जले निवोढा। <br>   (इ०) व्यक्तं सलज्जा परिचुम्बितुं तत्॥ <br>         (उ०) तदर्थमेवाम्भसि निर्ममज्ज॥(अच्युतचरिते) <br><br><p>इत्येवमस्याश्चतुर्दश भेदाः प्रायो महाकव्येषु सन्तो ज्ञेयाः॥</p>'
        },
        {
          text_sans: '<h3>सुमुखी</h3><p>आदौ नगणः, ततो जगणौ, तत एको लघुः,एको गुरुः स्यात्, सा “सुमुखी” इत्युच्यते। पञ्चभिः षड्भिश्च यतिरिति सम्प्रदायः। </p>',
          ex_img: '/sumukhi.png'
        },
        {
          text_sans: '<h3>दोधकवृत्तम्</h3><p>भगणत्रयात् ऊर्ध्वे द्वौ गुरु स्यातां चेत् इदं “दोधकवृत्तम्” नाम भवति। पादन्ते यतिः।</p>',
          ex_img: '/dodhaka.png'
        },
        {
          text_sans: '<h3>शालिनी Shalini</h3><p>मगणः तगणश्च, तगणः गुरुश्च, पुनरप्येको गुरुः अर्थात् म-त-तानामुत्तरं गुरुद्वयञ्चेत् तदा “शालिनी” नाम छन्द उक्तम्। चतुर्भिः सप्तभिश्च यतिरिति शेषः।</p><p>This metre has eleven syllables in each quarter. Here except the sixth and ninth syllables of each quarter, all other syllabels are long. There should be a pause after the 4th and last syllables of each quarter.',
          ex_img: '/shalini.png'
        },
        {
          text_sans: '<h3>वातोर्मी</h3><p>मगणः भगणश्च, तगणः गुरुश्च, पुनरप्येको गुरुश्चेत्, इयम् “वातोर्मी” उच्यते। यतिः शालिनीवत्।</p>',
          ex_img: '/vatormi.png'
        },
        {
          text_sans: '<h3>श्रीः</h3><p>भगण- तगण- नगणैः द्वाभ्यां गुरुभ्याञ्च “श्रीः” नाम छन्दः। पञ्चभिः षड्भिश्च यतिः।</p>',
          ex_img: '/shri.png'
        },
        {
          text_sans: '<h3>भ्रमरविलसिता</h3><p>मगणभगणौ, नगणलघू, अन्ते गुरुश्चैकश्चेत् सा भ्रमरविलसिता इत्युच्यते। चतुर्भिः, सप्तभिश्च यतिरित्याम्नायः। </p>',
          ex_img: '/bhramara.png'
        },
        {
          text_sans: '<h3>रथोद्धता Rathoddhata</h3><p>रगणात् नगणरगणौ स्याताम्, एको लघुः, एको गुरुश्चेत्, छन्दःशास्त्रे “रथोद्धता” नाम । पादे यतिः ।</p><p>This metre has 11 syllables in each quarter. Here the 1st, 3rd, 7th, 9th and 11th syllables of each quarter are long and others short. There should be a pause after the 4th and last syllables of each quarter.</p>',
          ex_img: '/rathodhata.png'
        },
        {
          text_sans: '<h3>स्वागता</h3><p>रगण- नगण- भगणेभ्यः परं गुरुद्वयं चेत् सा “स्वागता” ज्ञेया । पादे यतिः।</p>',
          ex_img: '/svagata.png'
        },
        {
          text_sans: '<h3>वृत्ता</h3><p>यदि द्वौ नगणौ, एकः सगणः, द्वौ गुरु, एतैः रचिता “वृत्ता” सा उच्यते । चतुर्भिः सप्तभिश्च यतिः। अस्यैव छन्दसो “वृत्तम्” इति नामान्तरम्। </p>',
          ex_img: '/vritta.png'
        },
        {
          text_sans: '<h3>भद्रिका</h3><p>द्वाभ्यां नगणाभ्याम् एकेन रगणेन, एकेन च गुरुणा “भद्रिका” नाम भवति । पादे यतिः।</p>',
          ex_img: '/bhadrika.png'
        },
        {
          text_sans: '<h3>श्येनिका</h3><p>रगणजगणौ रगण लघू अर्थात् एको रगणः, एको लघुः, एकश्च गुरुः स्यात् तदा “श्येनिका” इत्युच्यते। श्येनिका । पादे यतिः।</p>',
          ex_img: '/shyenika.png'
        },
        {
          text_sans: '<h3>मौक्तिकमाला</h3><p>भगण-तगण- नगणात् परं द्वौ गुरु स्यातां तदा “मौक्तिकमाला” भवति । पञ्चभिः षड्भिश्च यतिः ।</p>',
          ex_img: '/mouktika.png'
        },
        {
          text_sans: '<h3>उपस्थितम्</h3><p>जगणसगणौ, ततः तगणात् परं द्वौ गुरु स्यातां चेत् तदा “उपस्थितम्” इत्युच्यते छन्दः। पादे यतिः । </p>',
          ex_img: '/upasthita.PNG'
        }
      ]
    },
    {
      title_sans: 'जगती',
      title_eng: 'Jagati',
      id: '4.1.i.XII',
      definition_sans: '',
      definition_eng: '',
      types: 24,
      type: [
        {
          text_sans: '<h3>चन्द्रवर्त्म</h3><p>रगण- नगण- भगण- सगणैः कृत्वा “चन्द्रवर्त्म” नाम छन्दो कथितम् । चतुर्भिरष्टभिश्च यतिः।</p>',
          ex_img: '/candravartma.png'
        },
        {
          text_sans: '<h3>वंशस्थं</h3><p>जगणतगणौ जगणरगणौ स्याताम् तदा "वंशस्थं" नाम छन्द उक्तम्। पादे यतिः।</p>',
          ex_img: '/vamshastham.png'
        },
        {
          text_sans: '<h3>इन्द्रवंशाः</h3><p>तगण- तगण- जगणैः, अन्ते रगणोपेतैः तदा “इन्द्रवंशाः” नाम छन्दः स्यात्। पादे यतिः।</p>',
          ex_img: '/indravamsha.png'
        },
        {
          text_sans: '<h3>तोटकम्</h3><p>चतुर्भिः सगणैः “तोटकम्” नाम छन्दः प्रसिद्धम्। पादे यतिः।</p>'
        },
        {
          text_sans: '<h3>द्रुतविलम्बितम्</h3><p>नगण-भगणौ, भगण,-रगणौ चेद् भवेताम् तदा “द्रुतविलम्बितम्” नाम । पादे यतिः।</p>',
          ex_img: '/drutavilambita.png'
        },
        {
          text_sans: '<h3>पुटः</h3><p>द्वौ नगणौ, मगणयगणौ चेत्, अयम् “पुट” इति नामोच्यते । अष्टभिः चतुर्भिश्च विरामो ।</p>',
          ex_img: '/puta.png'
        },
        {
          text_sans: '<h3>प्रमुदितवदना</h3><p>द्वौ नगणौ, द्वौ रगणौ च स्याताम् तदा “प्रमुदितवदना” नाम छन्दो भवेत्। पादे यतिः। इयं काचित् “चञ्चलाक्षिका” क्वचित् “मन्दाकिनी” इत्युक्ता। </p>',
          ex_img: '/pramuditavadana.png'
        },
        {
          text_sans: '<h3>कुसुमविचित्रा</h3><p>नगणयगणसहितौ नगणयगणौ अर्थात् पूर्वे नगणः, ततो यगणः, पुनर्नगणः, पुनरेकः यगणः स्यात् सा “कुसुमविचित्रा” इत्युच्यते ।</p>',
          ex_img: '/kusumavicitra.png'
        },
        {
          text_sans: '<h3>जलोद्धतगतिः</h3><p>जगण-सगण-जगण-सगणा यत्र सा एवंभूता “जलोद्धतगतिः” नाम । षड्भिः षड्भिर्यतिमती ।</p>'
        },
        {
          text_sans: '<h3>भुजङ्गप्रयातं</h3><p>चतुर्भिः यकारैः “भुजङ्गप्रयातं” नाम छन्दो भवेत्। अत्र पादान्ते यतिः। षड्भिः षड्भिश्च यतिरिति वदन् सम्प्रदायविरोधी । एकदेशी वा स्यात्।</p>'
        },
        {
          text_sans: '<h3>स्रग्विणी</h3><p>चतुर्भिः अर्थात् चत्वारो रगणा एव सन्ति सा “स्रग्विणी” नाम सम्मता । इह शास्त्र इति शेषः। पादे यतिः।</p>'
        },
        {
          text_sans: '<h3>प्रियंवदा</h3><p>नगण- भगण- जगण- रगणैः लोके “प्रियंवदा” नाम छन्दो भवेत्। पादे यतिः।</p>'
        },
        {
          text_sans: '<h3>मणिमाला</h3><p>अर्थात् तगण-यगण-तगणयगणाश्चेत् स्युः सा “मणिमाला” नाम उच्यते। षड्भिः षड्भिश्च यतिः।</p>'
        },
        {
          text_sans: '<h3>ललिता</h3><p>तगण- भगणौ, जगण- रगणौ च स्याताम्, सा पण्डितैः “ललिता” नाम कथिता । पादान्ते यति ।</p>'
        },
        {
          text_sans: '<h3>मौक्तिकदाम</h3><p>यदि पादे चत्वारो जगणाः तदा इह “मौक्तिकदाम” चन्दो भवति । पादे यतिः।</p>'
        },
        {
          text_sans: '<h3>विभावरी</h3><p>यत्र जगणरगणौ पुनः जगणरगणौ स्याताम्, सा “विभावरी” नाम छन्दः। पादे यतिः। षट्सु २ वेति केचित् । अस्यैव “स्वमोचचामरम्” इति “सञ्ज्ञान्तरम्”।</p>'
        },
        {
          text_sans: '<h3>प्रमिताक्षरा</h3><p>सगण- जगण -सगण- सगणैः “प्रमिताक्षरा” कथिता । पादे यतिः।</p>'
        },
        {
          text_sans: '<h3>उज्ज्वला</h3><p>नगण- नगण- भगण- रगणयुता “उज्ज्वला” नाम कथिता । पादे यतिः।</p>'
        },
        {
          text_sans: '<h3>वैश्वदेवी</h3><p>द्वौ मगणौ, द्वौ च यगणौ स्याताम् तदा पञ्चभिः यतिमति “वैश्वदेवी’ नाम छन्दः। </p>'
        },
        {
          text_sans: '<h3>जलधरमाला</h3><p>मगण-भगणौ, सगण-मगणौ च चेत् स्याताम् सा “जलधरमाला” नाम । चतुर्भिः, अष्टभिश्च पदयतिः। इयमेव “कान्तोत्पीडा” इति ज्ञेयम्</p>'
        },
        {
          text_sans: '<h3>नवमालिनी</h3><p>नगणजगणाभ्यां परवर्त्तिनौ भगणयगणौ स्याताम् तदा छन्दःशास्त्रे “नवमालिनी” स्यात्। अष्टाभिः, चतुर्भिश्च यतिरिति वृद्धाः। “नवमालिका” इत्यपि नाम ।</p>'
        },
        {
          text_sans: '<h3>प्रभा</h3><p>द्वौ नगणौ, द्वौ रगणौ चेत् स्याताम् “प्रभा” नाम सा । सप्तभिः पञ्चभिश्च विरतिर्यत्र सा तादृशी ।</p>'
        },
        {
          text_sans: '<h3>मालती</h3><p>नगणजगणौ अथ जगणरगणौ स्यतां चेत् सा “मालती” भवति । पञ्चभिः सप्तभिश्च यतिरित्याम्नायः।</p>'
        },
        {
          text_sans: '<h3>तामरसम्</h3><p>नगण- जगण- जगणात् तत् “तामरसम्” इति । पादे यतिः।</p>'
        }
      ]
    },
    {
      title_sans: 'अतिजगती',
      title_eng: 'Atijagati',
      id: '4.1.i.XIII',
      definition_sans: '',
      definition_eng: '',
      types: 6,
      type: [
        {
          text_sans: '<h3>क्षमा</h3><p>द्वौ नगणौ, द्वौ तगणौ, एको गुरुश्चेत् सा “क्षमा” नामोच्यते। सप्तभिः षड्भिश्च यतिर्यत्र। इमामेव “चन्द्रिका” माहुः। “उत्पलिनी” इत्यपरे।</p>'
        },
        {
          text_sans: '<h3>प्रहर्षिणी</h3><p>मगणनगणौ, जगणरगणौ, एकश्चेद गुरुः तदा इयम् “प्रहर्षिणी” नाम। त्रिभिर्दशभिश्च यतिर्यत्र सा ।</p>'
        },
        {
          text_sans: '<h3>रुचिरा</h3><p>जगणभगणौ, सगणरगणौ, एको गुरुश्चेत् छन्दःशास्त्रे “रुचिरा” नाम सा ज्ञेया। चतुर्भिः नवभिश्च यतिर्ज्ञेया।</p>'
        },
        {
          text_sans: '<h3>मत्तमयूरं</h3><p>मगणतगणौ, यगण-सगण-गुरवः ”मत्तमयूरं” नाम छन्द उच्यते। चतुर्भिः नवभिश्च यतिः।</p>'
        },
        {
          text_sans: '<h3>मञ्जुभाषिणी</h3><p>सगण,जगण,सगणाः, ततः जगणः एको गुरुश्चेत्स्यात्, “मञ्जुभाषिणी” नाम छन्दो ज्ञेयम्। “सुनन्दिनी” ति नामान्तरम् । पञ्चभिः अष्टभिश्चात्र यतिरिति सम्प्रदायः। पादान्तमेव यतिरित्यस्मद्गुरवः।</p>'
        },
        {
          text_sans: '<h3>चन्द्रिका</h3><p>आदौ द्वौ नगणौ, ततः द्वौ तगणौ, ततः एको गुरुः एतैः कृत्वा “चन्द्रिका” नाम छन्दः। अत्र सप्तभिः षड्भिश्च यतिः।</p>'
        }
      ]
    },
    {
      title_sans: 'शक्करी',
      title_eng: 'Shakvari',
      id: '4.1.i.XIV',
      definition_sans: '',
      definition_eng: '',
      types: 4,
      type: [
        {
          text_sans: '<h3>असम्बाधा</h3><p>मगण-तगणौ, नगण-सगणौ, द्वौ गुरु च एतैः क्रुत्वा “असम्बाधा” नाम छन्द उच्यते। पञ्चभिः नवभिश्च विरतिर्यत्र सा तादृशी।</p>'
        },
        {
          text_sans: '<h3>अपराजिता</h3><p>नगण-नगण-रगण-सगण-लघु-गुरुभिश्च “अपराजिता’ भवति। सप्तभिः सप्तभिश्च क्रुत्वा यतिरित्यर्थः</p>'
        },
        {
          text_sans: '<h3>प्रहरणकलिका</h3><p>नगण-नगण-भगण-नगण-लघु-गुरवश्चेदित्यर्थः, तदा इयं “प्रहरणकलिका” नामोच्यते। यतिश्च पूर्ववत्।</p>'
        },
        {
          text_sans: '<h3>वसन्ततिलका</h3><p>तगण-भगण-जगणाः, जगणः गुरुश्च पुनरेको गुरुश्चेत् तदा “वसन्ततिलका” नाम कथिता। अस्यैव चन्दसो मतभेदेन सञ्ज्ञान्तरमाह-सिंहोन्नतेयमित्यादिना। स्पष्टम्।</p>'
        }
      ]
    },
    {
      title_sans: 'अतिशक्करी',
      title_eng: 'Atishakvari',
      id: '4.1.i.XV',
      definition_sans: '',
      definition_eng: '',
      types: 7,
      type: [
        {
          text_sans: '<h3>शशिकला</h3><p>पूर्वैः चतुर्दश लघवः अन्ते च एको गुरुः स्यात् सा “शशिकला” नामोक्ता। सप्तभिः अष्टभिश्च यतिरित्याम्नायः।</p>'
        },
        {
          text_sans: '<h3>स्रक्</h3><p>शशिकला एव षड्भिः नवभिश्च यतिर्यस्यां तादृशी चेत् तदा “स्रक्” इति नाम छन्दो ज्ञेयम्।</p>'
        },
        {
          text_sans: '<h3>मणिगुणनिकर</h3><p>यदि अष्टाभिः सप्तभिश्च यतिर्यस्याः एवंविधा शशिकला स्यात् तदा “मणिगुणनिकर” इति नाम छन्द उच्यते।</p>'
        },
        {
          text_sans: '<h3>कामक्रीडा</h3><p>यस्यां पञ्च मगणाः स्युः, सा “कामक्रीडा” ज्ञेया</p>'
        },
        {
          text_sans: '<h3>मालिनी</h3><p>नगण-नगण-मगण-यगण-यगणयुक्ता इयं मालिनी भवति। अष्टभिः सप्तभिश्च यतौ ।</p>'
        },
        {
          text_sans: '<h3>प्रभद्रकं</h3><p>नगणजगणौ, भगणजगणौ, अन्ते रगणविशिष्टौ स्यातां चेत् तत् प्रभद्रकं नाम छन्दो भवति। सप्तभिः अष्टभिश्च यतिः।</p>'
        },
        {
          text_sans: '<h3>एला</h3><p>यत्र सगण-जगण-नगणाः, नगण-यगणौ च स्याताम् सा “एला’ नाम। पञ्चभिः दशभिश्च यतिः</p>'
        },
        {
          text_sans: '<h3>चन्द्रलेखा</h3><p>यत्र मगण-रगणौ, मगण-यगणौ, अन्ते एकेन यगणॆन संयुक्तौ स्याताम् सा चन्द्रलेखा नाम। अत्र सप्तभिः अष्टभिश्च यतिः ।</p>'
        }
      ]
    },
    {
      title_sans: 'अष्टिः',
      title_eng: 'AshtiH',
      id: '4.1.i.XVI',
      definition_sans: '',
      definition_eng: '',
      types: 3,
      type: [
        {
          text_sans: '<h3>ऋषभगजविलसितम्</h3><p>भगण, रगणौ, त्रयो नगणाः, एको गुरुश्चेत् “ऋषभगजविलसितम्” इति नाम ; सप्तमात्परं विरामो भवेत्।</p>'
        },
        {
          text_sans: '<h3>वाणिनी</h3><p>यदा नगण-जगण-भगणजगण-रगणैः, अन्ते एकेन गुरुणोपेतैर्भवति "वाणिनी" नाम सा। पादे यतिः।</p>'
        },
        {
          text_sans: '<h3>पञ्चचामरं</h3><p>जगण-रगणौ, जगण-रगणौ, ततः जगण गुरुश्चेत् तदा इदं पञ्चचामरं नाम छन्दो वदन्ति। द्वाभ्यां यतिः। यथेष्टं वेति सम्प्रदायः।</p>'
        }
      ]
    },
    {
      title_sans: 'अत्यष्टिः',
      title_eng: 'AtyashtiH',
      id: '4.1.i.XVII',
      definition_sans: '',
      definition_eng: '',
      types: 6,
      type: [
        {
          text_sans: '<p>यगण-मगणनगण-सगण-भगणाः एको लघुश्च, अन्ते एको गुरुश्चेत् सा “शिखरिणी” इत्युच्यते। षड्भिः एकादशभिः यतिमती।</p>'
        },
        {
          text_sans: '<h3>पृथ्वी</h3><p>जगण-सगणौ, जगण-सगण-यगण-लघवः एको गुरुश्चेत् सा पृथ्वी नाम छन्दः। अष्टाभिः नवभिश्च यतिर्यत्र सेत्यर्थः।</p>'
        },
        {
          text_sans: '<h3>वंशपत्रपतितं</h3><p>भगण-रगण-नगण-भगण-नगण लघुगुरुभिः “वंशपत्रपतितं” नाम छन्दः।</p><p>दशभिः सप्तभिर्यतिर्यत्र तत्। “वंशपत्रपतिता” इति केचित्।</p>'
        },
        {
          text_sans: '<h3> हरिणी </h3><p>नगण-सगणौ, मगण-रगणौ, सगणो लघुश्च, एको गुरुश्चेत् तदा हरिणी नाम छन्दः। षड्भिः चतुर्भिः सप्तभिः यतौ सत्यामिति शेषः।</p>'
        },
        {
          text_sans: '<h3>मन्दाक्रान्ता</h3><p>यदि मगण-भगणौ, नगण-तगणौ पुनः अन्यस्मात तगणात परं द्वौ च गुरु स्याताम सा “मन्दाक्रान्ता”  नाम कथ्यते।  चतुर्भिः, षड्भिः, सप्तभिश्च यतौ । </p>'
        },
        {
          text_sans: '<h3>नर्कुटकं</h3><p>नगण-जगणौ स्तः, ततः भगण-जगण-जगण-लघवः स्युः एकश्चान्ते गुरुवर्णः स्यात् तदा “नर्कुटकं” नाम छन्दः। सप्तभिः दशभिश्च यतिरिति सम्प्रदायः। अस्यैव “नर्दटकं”, मर्दटकं” इत्यपि च नामान्तरम्।</p>'
        }
      ]
    },
    {
      title_sans: 'धृतिः',
      title_eng: 'DhrutiH',
      id: '4.1.i.XVIII',
      definition_sans: '<h3>कुसुमितलतावेल्लिता</h3><p>मगणतगणौ, नगणयगणौ, पुनः द्वौ यगणौ यदि स्युः पञ्चभिः, षड्भिः, सप्तभिश्च यतिर्भवेत् तदा सा “कुसुमितलतावेल्लिता” नाम छन्दः।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'अतिधृतिः',
      title_eng: 'AtidhrutiH',
      id: '4.1.i.XIX',
      definition_sans: '',
      definition_eng: '',
      types: 2,
      type: [
        {
          text_sans: '<h3>मेधविस्फूर्जिता</h3><p>यदि यगणमगणौ, नगणसगणौ,स्याताम् किन्तु तौ रगण-रगण-गुरुभिः सहितौ भवेताम् तदा सा “मेधविस्फूर्जिता” भवति। षड्भिः, षड्भिः सप्तभिश्च यतौ ।</p>'
        },
        {
          text_sans: '<h3>“शार्दूलविक्रीडितं”</h3><p>मगण-सगण-जगण-सगण-तगण-तगणाः एकेन गुरुणा युताः चेत् स्युः तत् “शार्दूलविक्रीडितं” नाम छन्दः। द्वादशभिः सप्तभिश्च यतौ ।</p>'
        }
      ]
    },
    {
      title_sans: 'कृतिः',
      title_eng: 'KrutiH',
      id: '4.1.i.XX',
      definition_sans: '',
      definition_eng: '',
      types: 2,
      type: [
        {
          text_sans: '<h3>सुवदना</h3><p>मगण-रगण-भगण-नगण-यगणैर्युता, अथ च यत्र भगणः लघुश्च, ततः एको गुरुरपि स्यात् तत् सुवदना नाम छन्दो ज्ञेयम्। सप्तभिः, सप्तभिः, षड्भिश्च यतौ ।</p>'
        },
        {
          text_sans: '<h3>वृत्तं</h3></p>त्रिवारं रगणजगणौ, गुरुलघू च स्याताम्, ईदृशेन लक्षणेन “वृत्तं” नाम छन्दः पादान्ते यतिः।</p>'
        }
      ]
    },
    {
      title_sans: 'प्रकृतिः',
      title_eng: 'PrarutiH',
      id: '4.1.i.XXI',
      definition_sans: '<h3> स्रग्धरा </h3><p>मगण-रगण-भगण-नगणैः, त्रिभिर्यगणै सप्तभिः सप्तभिः सप्तभिश्च यति एवं लक्षणा इयं स्रग्धरा कथिता।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'आकृतिः',
      title_eng: 'AkrutiH',
      id: '4.1.i.XXII',
      definition_sans: '<h3>भद्रकम्</h3><p>भगणरगणौ, नगण-रगण-नगणाः, =रगणनगणौ अथ एको गुरुश्चेत् “भद्रकम्” इति नाम छन्द उक्तम्। दशभिः, द्वादशभिश्च, विरतिर्यत्र तत्।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'विकृतिः',
      title_eng: 'VikrutiH',
      id: '4.1.i.XXIII',
      definition_sans: '<h3>अश्वललितम्</h3><p>यदि नगण-जगणौ, भगणजगणौ, भगण-जगण-भगण-लघु-गुरवः स्युः तदा तत् “अश्वललितम्” नाम छन्दः। एकादशः द्वादश, एभिर्यतिरस्यातीति तादृशम्। इदमेवान्यत्र “अद्रितनया” इत्युक्तम्।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'संकृतिः',
      title_eng: 'SankrutiH',
      id: '4.1.i.XXIV',
      definition_sans: '<p>तन्वी</p><p>"भूतमुनीर्यतिरिह भतनाः स्भौ भनयाश्च यदि भवति तन्वी॥"</p><p>यदि भगण-तगण-नगणाः, सगण-भगणौ, भगण-नगण-यगणाश्च भवेयुः तदा “तन्वी” नाम छन्दो भवति। इह अस्मिन् छन्दसि पञ्चभिः, सप्तभिः, द्वाधशभिश्च यतिरिति ध्येयम्।</p>',
      definition_eng: '',
      common: 'उदाहरणम् - <br> माधव! मुग्धैर्मधुकरविरुतैः कोकिलकूजितमलयसमीरैः<br>कम्पमुपेता मलयजसलिलैः प्लावनतोप्यविगतनुदहा।<br>पद्मपलाशैर्विरचितशयना देहजसंज्वरभरपरिदूनै-<br>र्निश्वसिता सा मुहुरतिपरुषं ध्यानलये तव निवसति तन्वी॥'
    },
    {
      title_sans: 'अतिकृतिः',
      title_eng: 'AtikrutiH',
      id: '4.1.i.XXV',
      definition_sans: '<p>क्रौञ्चपदा</p><p>"क्रौञ्चपदा स्मौ स्भौ ननना न्गाविषुशरवसुमुनिविरतिरिह भवेत्"</p><p>यदि भगणमगणौ, सगणभगणौ, नगन त्रयम्, नगणगुरु च स्याताम् तदा पञ्चभिः, पञ्चभिः, अष्टभिः, सप्तभिश्च विरतिर्यत्र सा तादृशी इह शास्त्रे “क्रौञ्चपदा” नाम (छन्दो) भवेत्।</p>',
      definition_eng: '',
      common: 'उदाहरणम् - <br> क्रौञ्चपदाला-चित्रिततीरा-मदकलसगफल सकलरुचिरा<br>फुल्लसरोज-श्रेणि-विरासा   मधुमदितम मुप-रवरभसकरी।<br>फेनविलास-प्रोज्ज्वलहासा ललितलहरिभर-पुलकितसुतनुः<br>पश्य हरेसो-कस्य न चेता-हरित तरलगति-रहिमकिरणरजा॥'
    },
    {
      title_sans: 'उत्कृतिः',
      title_eng: 'UtkrutiH',
      id: '4.1.i.XXVI',
      definition_sans: '',
      definition_eng: '',
      types: 2,
      type: [
        {
          text_sans: '<p>भुजङ्गविलसितम्</p><p>"वस्वीशाश्वच्छेदोपेतं ममतनयुगनरसलगैर्भुजङ्गविजृम्भितम्"</p><p>मगण-मगण-तगण-नगण-नगण-नगन-रगण-सगण-लघु-गुरुभिरित्यर्थः, एतै रचितमिति यावत् यत्, तत् छन्दः “भुजङ्गविलसितम्” नाम। अष्टौ, एकादशः, सप्त एतैः छेदेन यत्या युक्तम् ।</p>उदाहरणम् - <br>हेलोदञ्चन्न्यञ्चत्पाद-प्रकत-विकट-नटभरो-रणत्कर-तालक-<br>श्चरुप्रेङ्खच्च्ऊडावर्हः श्रुतितरलनवकिसलय-स्तरङ्गितहारधृक्।<br>त्रस्यन्नागस्त्रीभिर्भक्त्या मुकुलितकरकमलयुगं कृतस्तुतिरच्युतः<br>पायन्नः छिन्दन्कालिन्दीह्र्दे कृतनिजवसति बृहद्भुजगविजृम्भितम्॥'
        },
        {
          text_sans: '<p>अपवाह </p><p>"मो नाः षत् सगगिति यदि नवरसरसशरयतियुतमपवाहाख्यम्॥"</p><p>यदि मगणः, षट् नगणाः,  ततः सगणः, द्वौ गुरू च भवेताम्, तथा नवभिः, षड्भिः, षड्भिः, पञ्चभिश्च या यतिः तत् अपवाह इति आख्या नाम यस्य तत् छन्दो भवति।'
        }
      ]
    },
    {
      title_sans: 'दण्डकम्',
      title_eng: 'Dandakam',
      id: '4.1.i.XXVII',
      definition_sans: '<p>षड्विंशतिअक्षरात्मकपादात् वृत्तात् ऊर्ध्वं सप्तविंशत्यादि अक्षरपादाः यदि भवन्ति तदा ते दण्डकाः परिकीर्तिताः भवन्ति ।</p>विभागाः – <ul><li>चण्डवृष्टिः</li><li>अर्णव, इत्यादि</li><li>उद्दामशङ्खादयः</li><li>प्रचितकसमभिधः</li></ul>',
      definition_eng: '',
      types: 3,
      type: [
        {
          text_sans: 'यदा दण्डकजातौ नगणद्वयम् ततः सप्त रगणाः स्युः तदा “चण्डवृष्टिप्रपातः” नाम दण्डको भवति।उदाहरणं -<br>प्रलयघनघटामहारम्भमेघावलीचण्डवृष्टिप्रपाताकुलं गोकुलं<br>सपदि समवलोक्य सव्येन हस्तेन गोवर्धनं नाम शैलं दधल्लीलया।<br>कमलनयन रक्ष रक्षेतिगर्जत्त्रसन्मुग्धगोपाङ्गनालिङ्गनानन्दितो<br>गलदभिनवधातुधाराविचित्रान्ङ्गरागो मुरारीतिरस्तु प्रमोदाय नः॥'
        },
        {
          text_sans: 'प्रतिचरणं विवृद्धो रेफो रगणो यत्र ते तथा तदा अर्ण-अर्णव-व्याल-जीमूत-लीलाकर-उद्दाम-शङ्खादयो भवन्ति। एषु एकोनसहस्राक्षरपर्यन्त्पादनियमः कविसम्प्रदायसम्मतः।'
        },
        {
          text_sans: '<p>प्रचितकसमभिधः -</p><p>नगणद्वयात् उत्तरैः परवर्त्तिभिः सप्तभिः यगणैः रचितः छन्दोविद्भिः “प्रचितकसमभिधः” दण्डकः उक्तः।</p><p>उदाहरणम् - </p><p>मुरहर! यदुकुलाम्भोधिचन्द्र! प्रभो! देवकीगर्भरत्न! त्रिलोकैकनाथ!<br>प्रचितकपटसुरारिव्रजोद्दामन्तावलस्तोमविद्रावणे केसरीन्द्र!<br>चरणनखरसुधांशुच्छटोन्मेषनिःशेषितध्यायिचेतोनिविष्टान्धकार।<br>प्रणतजनपरितापोग्रदावानलोच्छेदमेघ! प्रसीद प्रसीद॥'
        }
      ]
    },
    {
      title_sans: 'अर्धसमम्',
      title_eng: 'Ardhasamam',
      id: '4.1.ii',
      definition_sans: '<p>यस्य पद्यस्य तृतीयः चरणः प्रथमाङ्घ्रिसमः प्रथमपादतुल्यो भवति तथा द्वितीयः चरणः तुर्यवत् चतुर्थपादवत् भवति, तद्वृत्तं अर्धसममिति उच्यते । यथा पुष्पिताग्रा ।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'उपचित्रम्',
      title_eng: 'upacitram',
      id: '4.1.ii.I',
      definition_sans: '<p>यदि प्रथमे तृतीये च पादे द्वौ सगणौ ततः सगणलघुगुरवः स्युः समे द्वितीये चतुर्थे च पादे द्वौ भगणौ, पुनः भगणात् (अर्थात् तृतीयभगणात्) द्वौ गुरु स्याताम् तदा “उपचित्रम्” नाम छन्दः। द्विरावृत्या श्लोकः पूरणीयः।</p>',
      definition_eng: '',
      common: 'उदाहरणम् - <br>पुरवैरिपुस्तनुतां मुदं हेमनिभाशुकचन्दनलिपम्<br>गगनं चपलामिलितं यथा शारदनीरधरै-रुपचित्रम् ॥'
    },
    {
      title_sans: 'द्रुतमध्या',
      title_eng: 'drutamadhyā',
      id: '4.1.ii.II',
      definition_sans: '<p>विषमपादगतं रयो भगणा: , द्वे च गुरुणी अक्षरे , समे पादे , नगणजगणौ, जगण-यगणयुक्तौ स्यातां चेत् सा ‘द्रुतमध्या’ नाम छन्द: ।</p>',
      definition_eng: '',
      common: 'उदाहरणम् - <br>नव यदा रमणी रसपूणा<br>भवति मनाजसराजसगन्धि.।<br>किं वद पौरुषमस्ति नराणां<br>बलकरकामयुतामपि लोके ॥'
    },
    {
      title_sans: 'वेगवती',
      title_eng: 'vegavatī',
      id: '4.1.ii.III',
      definition_sans: '<p>यदि, प्रथमे तॄतीये पादे, सगणद्वयात् परं, सगणगुरू स्यातां, अथ समे द्वितीये चतुर्थे च द्वौ भगणौ, पुन: भगणात् (तॄतीयभगणात्) द्वौ गुरू भवेतां तदा छन्द:शास्त्रे ‘वेगवती’ नाम छन्द उच्यते ।</p>',
      definition_eng: '',
      common: 'उदाहरणम् - <br>स्मरवेगवती व्रजरामा केशववंशग्वैरतिमुग्धा ।<br>रभसान्न गुरुन् गणयन्ती केलिनिकुञ्जगृहाय जगाम॥'
    },
    {
      title_sans: 'भद्रविराट्',
      title_eng: 'bhadravirāṭ',
      id: '4.1.ii.IV',
      definition_sans: '<p>यदि विषमे पादे तगणात् परौ जगनरगणौ, गुरुश्च स्यात्, समे पादे मगणसगणौ जगणः द्वौ गुरु च स्तः तदा "भद्रविराट्" इति नाम छन्दः।</p>',
      definition_eng: '',
      common: 'उदाहरणम् - <br>कृष्णां कुरुसागरेति मग्नां<br>ध्यायन्तीं चरणं परञ्च*ह्रीणाम्।<br>यो रक्षितवान् यदूत्तमेशः<br>कृष्णोसौ मम हन्तु कश्मलानि॥'
    },
    {
      title_sans: 'केतुमती',
      title_eng: 'ketumatī',
      id: '4.1.ii.V',
      definition_sans: '<p>यदि विषमे (१, ३) पादे सगणजगणौ सगुरुयुक्तौ सगणगुरुभ्यां सहितौ भवेताम्, समे=(२, ४) पादे भगण-नगण-रगण-गुरुतः उत्तरं एको गुरुः स्यात् तदा "केतुमती" इत्युच्यते।</p>',
      definition_eng: '',
      common: 'उदाहरणम् - <br>यदुपुङ्गवाय नमताद्धा ! रक्षति सकलमङ्गल ! यो नित्यम् ।<br>इतरे तु सन्ति कॄपणेन्द्रा: स्वार्थ-परमनसो महवर्त्ता ॥'
    },
    {
      title_sans: 'आख्यानकी',
      title_eng: 'ākhyānakī',
      id: '4.1.ii.VI',
      definition_sans: '<p>विषमे  पादे  द्वौ  तगणौ, जगणगुरू च स्त:, पुनरेको गुरुश्च भवेत्, समे पादे जगणतगणौ जगणगुरू च स्याताम् , अन्ते पुन: एको गुरुश्चेत् तदा सा ‘आख्यानकी’ नाम कथ्यते ।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'विपरीताख्यानकी',
      title_eng: 'viparītākhyānakī',
      id: '4.1.ii.VII',
      definition_sans: '<p>प्रथमे तॄतीये च पादे जगणतगणौ जगणगुरू च स्याताम्, अथ एको गुरुश्च भवेत् । समे द्वितीये चतुर्थे पादे द्वौ तगणौ, जगणगुरू पुनरेको गुरुश्चेत् सा ‘विपरीताख्यानकी’ ।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'हरिणप्लुता',
      title_eng: 'hariṇaplutā',
      id: '4.1.ii.VIII',
      definition_sans: '<p>प्रथमे तॄतीये च पादे सगणद्वयात् सगणलधू, एकश्च गुरु: स्यात् । समे पादे  नगण-भगणौ, भगण-रगणौ च स्यताम् , तदा सा ‘हरिणप्लुता’ इत्युच्यते ।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'अपरवक्त्रं',
      title_eng: 'aparavaktram',
      id: '4.1.ii.IX',
      definition_sans: '<p>विषमे पादे  नगण-नगण-रगण-लघव:,गुरुश्च स्यात्  द्वितीये चतुर्थे च नगणजगणौ, तत: जगणरगणौ च स्याताम् , तदा इदम् ‘अपरवक्त्रं’ नाम् छन्दो ग्येयम् ।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'पुष्पिताग्रा',
      title_eng: 'puṣpitāgrā',
      id: '4.1.ii.X',
      definition_sans: '<p>विषमे  पादे नगण-नगण-रगणात् परत: यगण: स्यात्, समे पादे नगणजगणौ, जगण-रगण-गुरवश्च स्यु:, तदा ‘पुष्पिताग्रा’ नाम छन्द उच्यते ।</p>',
      definition_eng: '',
      common: 'भुवनधव ! महान्गपाल !<br>त्वयि सततं ससुते समेतु भव्यम् ।<br>अनिशमिदमहं समीहमनो<br>भगवत ण्व भवामि भव्यदातु: ॥'
    },
    {
      title_sans: 'यवमती',
      title_eng: 'yavamatī',
      id: '4.1.ii.XI',
      definition_sans: '<p>विषमे पादे  रगण-जगणौ, पुन: रगण-जगणौ च स्याताम्,  द्वितीये चतुर्थे च जगण-रगणौ,  जरौ=जगण-रगणौ च स्यातम् अन्ते गुरुश्चैकश्चेत् तदेवं  ‘यवमती’ नाम छन्दः ।</p>',
      definition_eng: '',
      common: 'इति सह विदुरेण विश्वमूर्त्ते:<br>गुणकथया सुधया प्लावितोरुताप: ।<br>क्षणमिव पुलिने यमस्वसुस्तां<br>समुषित औपगविर्निशां ततो अगात् ॥'
    },
    {
      title_sans: 'विषमवृत्तम्',
      title_eng: 'Vishamam',
      id: '4.1.iii',
      definition_sans: '<p>यस्य पादचतुष्के चतुर्ष्वपि पादेषु लक्षणं परस्परं मिथः भिन्नं दृश्यते, छन्दःशास्त्रविशारदाः तद् वृत्तं विषमं कथयन्ति । यथा कलिका छन्दः</p>',
      definition_eng: ''
    },
    {
      title_sans: 'पदचतुरूर्ध्वाभिधम्',
      title_eng: 'padacaturūrdhvam',
      id: '4.1.iii.I',
      definition_sans: '<p>यस्य-वॄत्तस्य प्रथम:  पाद : अष्टभिर्वर्णै: स्यात् । मुखपादात् द्वितीयाद्या: पादा: चतुर्भि: क्रमाद् वृद्धै: अक्षरै: नैरन्तर्येण स्यु: तत् छ्न्द: पिंगलादिभिराचार्यै:  ‘पदचतुरूर्ध्वाभिधम्’  नाम कथितम् , विलक्षणै: पादै: जातं सौन्दर्यं यस्य तादृशम् । </p><p>प्रथमपादोष्टाक्षर:, द्वितीयो द्वादशाक्षर:, तॄतीय: षोडशाक्षर:, चतुर्थो विंशत्याक्षर इति निर्गलितोर्थ: ।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'आपीडम्',
      title_eng: 'āpīḍam',
      id: '4.1.iii.II',
      definition_sans: '<p>विरचितान् विषमसंख्यकान् चरणान् भजतीति तादृशे प्रथमोक्ते पदचतुरूर्ध्वाभिधे वृत्ते गुरुयुग्मं अवसाने यस्य तादृशे सति इत्थंप्रकारेण उपसर्गेण सहितः "आपीड" इत्याख्यं छन्दो भवति। कम्भूत आपीडः-विधृतरुचिरपदविततियतिः=विधृता सम्पादिता रुचिरा हृद्या पदानां वितत्या यतिर्यत्र स तथाविधः।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'कलिका',
      title_eng: 'kalikā',
      id: '4.1.iii.III',
      definition_sans: '<p>यदि प्रथमश्चरणः द्वितीयचरणगतं लक्षणं श्रयति द्वितीयमपि प्रथमपादोक्तं लक्षनं श्रयति, यदि च चरणद्वयं तृतीयचतुर्थरूपम् यथावस्थितमेव स्यात् अनया रीत्या स आपीड एव प्रसिद्धा कलिका नाम छन्दो भवति । अस्यायमाशयः-यदि प्रथमः पादो द्वादशाक्षरः, द्वितीयोष्टाक्षरः, तृतीयः षोडशाक्षरः, चतुर्थो विंशत्यक्षरः तदा कलिका नामेत्युच्यते। इमामेव मञ्जरी इति नाम्ना व्याहरन्ति।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'लवली',
      title_eng: 'lavalī',
      id: '4.1.iii.IV',
      definition_sans: '<p>यदि तृतीयः चरणः प्रथमपादोक्तम् अष्टाक्षरत्वरुपं लक्षणम् तद्युक्तो भवति, पादत्रयम् प्रस्तुतम् समग्रमपि आपीडलक्षणं श्रयते तदा हि इह शास्त्रे प्रसिद्धा "लवली" नाम छन्दः। द्वाभ्यां गुरुभ्यां युक्तः सकलचरणानाम् अन्तः अवसानं यस्याः सा तादृशी। अत्र-प्रथमः पादो १२ द्वादशाक्षरः, द्वितीयः १६ षोडशाक्षरः, तृतीयः ८ अष्टाक्षरः, चतुर्थो २० विंशत्याक्षर इति सारः।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'अमृतधारा',
      title_eng: 'amṛtadhārā',
      id: '4.1.iii.V',
      definition_sans: '<p>यदि प्रथमपादोष्टाक्षरात्मकः, चतुर्थपादरूपेण भवति, चतुर्थः पादोष्टाक्षरात्मको भवतीति यावत्, समग्रम् पादत्रयम् आपीदस्थद्वितीयपादादितुल्यं स्यात् तदा अवसाने गुरुयुग्मं यस्याः सा तादृशी हृद्यपदरचितपादा छन्दःशास्त्रे ‘अमृतधारा’ सेति सारः।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'उद्गता',
      title_eng: 'udgatā',
      id: '4.1.iii.VI',
      definition_sans: 'आदिमे प्रथमे पादे सगण-जगण-सगणाः, सगण-लघू च स्याताम्  अनन्तरम् द्वितीये पादे नगण-सगण-जगण-गुरुषु सत्सु त्रयाणां पूरणे तृतीये पादे स्थिता ये भगण-नगण-जगण-लघवः ते गुरुयुक्ताः कार्याः। चतुर्थे पादे सगण-जगण-सगणाः जगण-गुरु च भवतः। एवं सति प्रथमं पादम् एकीकृत्य पठेत् अर्थात् प्रथमं पादं द्वितीयेनैकीकृत्य उच्चारयेदित्यर्थः। प्रथमद्वितीयपादौ बहुविलम्बेन न पठेत् अत्यन्तयतिं न कुर्यादित्याशयः, एवं कृते लक्षणे “उद्गता” नाम छन्दो ज्ञेयम्॥',
      definition_eng: '',
      common: 'अथ वासवस्य वचनेन<br>रुचिर वदनस्त्रिलोचनम्।<br>क्लान्तिरहितमभिराधयितुं<br>विधिवत्तपांसि विदधे धनञ्जयः॥'
    },
    {
      title_sans: 'सौरभकं',
      title_eng: 'saurabhakam',
      id: '4.1.iii.VII',
      definition_sans: '<p>यदि इह तृतीये पादे रगणनगणौ, भगण गुरु च स्याताम्, अपरं तृतीयवर्जे समग्रं प्रथम-द्वितीय-चतुर्थरुपम् उद्गतास्थितं समग्रं लक्षणम् प्रप्नोति तदा सौरभकं नाम वृत्तमुच्यते।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'ललितम्',
      title: 'lalitam',
      id: '4.1.iii.VIII',
      definition_sans: '<p>यदि तृतीयः पादः नगणद्वयम्, सकारद्वयञ्च आश्रयते, अपरञ्च पादत्रयम् प्रथम द्वितीय चतुर्थात्मकं निश्चयेन उद्गतावत् स्यात् तदा तत् छन्दः “ललितम्” नाम कथितम्।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'उपस्थितप्रचुपितं',
      title_eng: 'upasthitapracupitam',
      id: '4.1.iii.IX',
      definition_sans: '<p>मगणसगणौ, जगणभगणौ, द्वौ गुरु च एकः प्रथमचरणः द्वितीयादिपादात् पृथक्कृत्य पठनीय इत्यर्थः। अतः अन्यत् पादत्रयं द्वितीयादि एकीकृत्यैव पठनीयम् न तु तत्र विरामो विधेयः। सगण-नगण-जगण-रगण-गुरवः द्वितीये पादे कार्या। नगणौ, सगणश्च एते त्रुतीये पादे देयाः। जगणयगणौ तौ चतुर्थे पादे कार्यौ, एवं कृते ”उपस्थितप्रचुपितं” नाम छन्द उक्तमित्यर्थः।</p>',
      definition_eng: ''
    },
    {
      title_sans: 'वर्धमानम्',
      title_eng: 'vardhamānam',
      id: '4.1.iii.X',
      definition_sans: 'तृतीये पादे द्वौ नगणौ ततः सगणनगणौ परन्तु तौ नगणसगणाभ्यां सहितौ स्याताम् प्रथम-द्वितीय-चतुर्थात्मकम् उपस्थितप्रचुपिततुल्यमेव भवति तत् वृत्तम् ‘वर्धमान’ नाम कथितम्। ',
      definition_eng: ''
    },
    {
      title_sans: 'शुद्धविराडार्षभम्',
      title_eng: 'śuddhavirāḍārṣabham',
      id: '4.1.iii.XI',
      definition_sans: 'अस्मिन् एव वर्धमाननामके छन्दसि तृतीये पादे तगण-रगण-जगणाः स्युः। प्रथमे च पादे यतिः स्यात् यदि अपरञ्च पादत्रयम् उपस्थितप्रचुपितवत् भवेत् तदा तत् शुद्धविराडार्षभम् नाम छन्दो भवति।',
      definition_eng: ''
    },
    {
      title_sans: 'गाथा',
      title_eng: 'Gatha',
      id: '4.1.iv',
      definition_sans: '<p>त्रिभिः षड्भिः चरणैः उपलक्षिता संयुताः गाथाः भवन्ति ।</p><p>विषमान्यक्षराणि यस्य तादॄशा: पादा यस्य तत् अष्टदशसप्तनवाक्षरादिपादमित्यर्थ: अथवा  पादै: स्त्रीयै: पादै: त्रिपादं षट्पादं वा दशधर्मवदित्युदाहरणम् । </p><p>दश धर्म न जानन्ति धॄतराष्ट ! निबोध तान् ॥<br>*मत्त: प्रमत्त उन्मत्त: श्रान्त: क्रुद्धो बुभुक्षित:।<br>त्वरमाणश्च भीरुश्च लुब्ध: कामी च ते दश ॥</p><p>इत्येवञ्जातीयकं षट्पदीहाथारूपं यच्छन्द:~ अत्र नोक्तम् तत्सूरिभि: ‘गाथा’ इति नाम्ना प्रोक्तम् ।</p>',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Matra Chandas or Metres of Syllabic Instants',
      id: '4.2',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: 'आर्या',
      title_eng: 'Arya',
      id: '4.2.i',
      definition_sans: 'पूर्वार्धः – <ul><li>३० मात्राः</li><li> सप्तगणाः भवन्ति अन्ते गुरुः</li><li>प्रथमे पादे द्वादश द्वितीये पादे अष्टादश अक्षराः</li><li>विषमे (प्रथमतृतीयपञ्चमसप्तम) स्थाने जगणः न भवति ।</li><li>षष्ठे गणे जगणो भवति अथवा चत्वारो लघवो भवन्ति ।</li></ul>उत्तरार्धे <ul><li> २७ मात्राः</li><li>सप्तगणाः भवन्ति अन्ते गुरुः</li><li>तृतीयपादे द्वादश अक्षराः </li></li>चतुर्थपादे पञ्चदश अक्षराः</li><li>षष्ठस्थाने गणे एको लघुः भवति ।</li></ul>यतिनियमम् – <ul><li>षष्ठस्थाने चतुर्लघौ गणे कृते सति द्वितीयलघोः पूर्वं प्रथम लघ्वनन्तरं यतियुक्तं पदं नियमेन समाप्यते । </li><li>सप्तमस्थाने  चतुर्लघो कृते सति प्रथम लघोः पूर्वमेव षष्ठगणानन्तरं सयति पद नियमो भवति । </li><li>उत्तरार्धे पञ्चमस्थाने चतुर्लघौ गणे सति प्रथमलघोः पूर्वं चतुर्थं गणान्ते सयति पदं नियम्यते ।</li></ul>',
      definition_eng: '<p>Āryā meter is a meter used in Sanskrit and Prakrit verses. A verse in āryā metre is in four metrical feet called pādas. Unlike the majority of meters employed in classical Sanskrit, the āryā meter is based on the number of mātrās (morae) per pāda. A syllable containing a short vowel counts for one mātrā, and a syllable containing a long vowel or a short vowel followed by two consonants counts for two mātrās. </p><p>The basic āryā verse has 12, 18, 12 and 15 mātrās in the first, second, third, and fourth pādas respectively. </p><p>Odd numbered mātrā-gaṇas should not be ja-gaṇa.</p><p>Sixth gaṇa should be ja-gaṇa.</p>',
      example_img: '/arya.png'
    },
    {
      title_sans: 'पथ्या',
      title_eng: 'Pathya',
      id: '4.2.i.I',
      definition_sans: 'यस्याम् आर्यायां द्वादशमात्रात्मको प्रथमतृतीयौ पादौ भवतः सा पथ्याभिधीयते',
      definition_eng: '',
      example_img: '/pathya.png'
    },
    {
      title_sans: 'विपुला',
      title_eng: 'Vipula',
      id: '4.2.i.II',
      definition_sans: 'यस्याः आर्यायाः पूर्वार्धोत्तरार्धयोः व्यस्तयोः समस्तयोर्वा आदिमं प्रारम्भस्थितं गणत्रयं संलङ्घ्य लंघयित्वा पादो भवति, ताम् आर्यां विपुलामिति कथयति',
      definition_eng: '',
      example_img: '/vipula.png'
    },
    {
      title_sans: 'चपला',
      title_eng: 'Chapala',
      id: '4.2.i.III',
      definition_sans: 'यस्याः आर्यायाः पूर्वार्धे उत्तरार्धे च द्वितीयचतुर्थौ  गणौ मध्यगुरुसम्पन्नौ जगणौ भवतः तस्याः चपला इति नाम कथितम् ।',
      definition_eng: '',
      example_img: '/capala.png',
      types: 2,
      type: [
        {
          text_sans: '<h3>मुखचपला</h3><p>यस्याः आर्यायाः पूर्वार्धं चपलानिष्ठं लक्षणं धारयेत, उत्तरार्धे आर्यायाः सामान्यभवं लक्षणं यस्याः सा आर्या मुखचपला कथिता ।</p>',
          ex_img: '/mukhacapala.png'
        },
        {
          text_sans: '<h3>जघनचपला</h3><p>यस्याः आर्यायाः प्रथमे अर्धे आर्यायाः सामान्यलक्षणं भवति तथा उत्तरार्धे चपलायाः लक्षणम् आश्रयेत सा जघनचपला ।</p>',
          ex_img: '/jaghanacapala.png'
        }
      ]
    },
    {
      title_sans: 'गीतिः',
      title_eng: 'Giti',
      id: '4.2.ii',
      definition_sans: '<p>पूर्वोत्तरार्धयोः आर्यापूर्वार्धगतं लक्षणं भवेत् सा गीतिः </p><p>उभयपादाः त्रिंशन्मात्राः पूर्वोत्तरपादौ सप्तगणाःअन्ते गुरुः</p><p>प्रथमे पादे द्वादश मात्राः</p><p>द्वितीये पादे अष्टादश मात्राः</p><p>विषमे (प्रथमतृतीयपञ्चमसप्तम) स्थाने जगणः न भवति ।</p> <p>षष्ठे गणे जगणो भवति अथवा चत्वारो लघवो भवन्ति ।</p>यतिनियमम् – <p>षष्ठस्थाने चतुर्लघौ गणे कृते सति द्वितीयलघोः पूर्वं प्रथम लघ्वनन्तरं यतियुक्तं पदं नियमेन समाप्यते । </p><p>सप्तमस्थाने  चतुर्लघो कृते सति प्रथम लघोः पूर्वमेव षष्ठगणानन्तरं सयति पद नियमो भवति ।</p>',
      definition_eng: 'The gīti meter has 12, 18, 12 and 18 mātrās in its four pādas respectively.',
      example_img: '/giti.png'
    },
    {
      title_sans: 'उपगीतिः',
      title_eng: 'Upagiti',
      id: '4.2.ii.I',
      definition_sans: '<p>आर्यायाः उत्तरार्धे यत् लक्षणं  भवति तत् लक्षणं यदि उभयोरपि अर्धयोः स्यात् तां उपगीतिं कथयति ।</p><p>उत्तरार्धे – </p><ul><li>२७ मात्राः</li><li>सप्तगणाः भवन्ति अन्ते गुरुः</li><li>तृतीयपादे द्वादश अक्षराः </li><li>चतुर्थपादे पञ्चदश अक्षराः</li><li>षष्ठस्थाने गणे एको लघुः भवति ।</li><li>सप्तगणाः भवन्ति अन्ते गुरुः</li></ul>',
      definition_eng: 'The upagīti meter has 12, 15, 12 and 15 mātrās in its four pādas respectively.',
      example_img: '/upagiti.png'
    },
    {
      title_sans: 'उद्गीतिः',
      title_eng: 'Udgiti',
      id: '4.2.ii.II',
      definition_sans: '<p>आर्यायाः पूर्वार्धं यस्या उत्तरार्धं भवेत्, आर्याया उत्तरार्धं च यस्याः पूर्वार्धं भवेत् सा उद्गीतिः ।</p>',
      definition_eng: 'The udgīti meter has 12, 15, 12 and 18 mātrās in its four pādas respectively.',
      example_img: '/udgiti.png'
    },
    {
      title_sans: 'आर्यागीतिः',
      title_eng: 'Aryagiti',
      id: '4.2.ii.III',
      definition_sans: '<p>यदि आर्यापूर्वार्धम् अवसाने एकेन अधिकेन गुरुणा युक्तं भवेत्, इतरत् द्वितीयं यदीयम् उत्तरार्धं पूर्वार्धवत् भवति सा आर्यागीतिः कथिता ।</p><p>आर्यागीत्यां तु पूर्वार्धे उत्तरार्धे उभयोरपि पूर्णा अष्टौ गणा भवन्ति । </p><p>उभयदलयोः ३२ मात्राः सन्ति ।</p>',
      definition_eng: 'The āryāgīti meter has 12, 20, 12 and 20 mātrās in its four pādas respectively.',
      example_img: '/aryagiti.png'
    },
    {
      title_sans: 'वैतालीयछन्दस्',
      title_eng: 'Vaitaliya',
      id: '4.2.iii',
      definition_sans: '<ul><li>वैतालीये छन्दसि प्रथमे तृतीये च पादे षड् मात्राः भवन्ति तथा द्वितीये चतुर्थे च पादे अष्टौ मात्राः भवन्ति </li><li>उक्तानां कलानाम् अन्ते रगणश्च लघुश्च गुरुश्च भवन्ति </li><li>आद्यानां कलानां निवेशने नियमम् – <ul><li>समे पादे ताः षट्कलाः निरन्तराः लघवः नो स्युः ताः गुरुमिश्रिताः भवन्ति । </li><li>विषमे पादे यथेच्छं कर्तव्याः । </li></ul> </li><li>आद्यासु षट् मात्रासु विषमे पादे तथा अष्टसु मात्रासु समपादे द्वितीया चतुर्थी षष्ठी च कलाः </li> <li>तृतीयपञ्जमसप्तम्या मिलिताः न  भवन्ति । </li><li>पूर्वाश्रिता भवितुमर्हन्ति न तु पराश्रिताः । </li><li>प्रथमतृतीयपादे १४ कलाः भवन्ति </li><li>द्वितीयचतुर्थपादे १६ कलाः भवन्ति </li></ul>',
      definition_eng: '',
      example_img: '/vaitaliya.png'
    },
    {
      title_sans: 'औपच्छन्दसिकम्',
      title_eng: 'Aupacchandasikam',
      id: '4.2.iii.I',
      definition_sans: '<ul><li>विषमपादयोः षण्णामन्ते तथा समपादयोः अष्टानां मात्राणाम् अन्ते यो रगणयगणौ भवतः शेषं तथैव वैतालीयवत् यदि स्यात् तदा औपच्छन्दसिकं नाम छन्दः कथितम् । </li><li>वैतालीयच्छन्दसि अन्ते यदि एको गुरुरधिको भवति तदा औपच्छन्दसिकं नाम छन्दः । </li><li>समे १८ मात्राः</li><li>विषमे १६ मात्राः</li></ul>',
      definition_eng: '',
      example_img: '/oupachandasikam.png'
    },
    {
      title_sans: 'आपातलिका',
      title_eng: 'Apatalika',
      id: '4.2.iii.II',
      definition_sans: 'षण्णाम् अष्ठानां कलानाम् अन्ते भगणाद् द्वौ गुरू भवतः अन्यत् सर्वं वैतालीयवत् स्यात् आपातलिका कथिता ।',
      definition_eng: '',
      example_img: '/apatatilaka.png'
    },
    {
      title_sans: 'दक्षिणान्तिका',
      title_eng: 'Dakshinantika',
      id: '4.2.iii.III',
      definition_sans: '<ul><li>चतुर्षु चरणेषु द्वितीया मात्रा तृतीयया संयुक्ता भवति चेत् तदा दक्षिणान्तिका नाम भवति । </li><li>वैतालीये यदा द्वितीया कला दीर्घा भवति तदा दक्षिणान्तिका छन्दो नामेति भावः ।</li></ul>',
      definition_eng: '',
      example_img: '/dakshinantika.png'
    },
    {
      title_sans: 'उदीच्यवृत्तिः',
      title_eng: 'Udicyavritti',
      id: '4.2.iii.IV',
      definition_sans: '<ul><li>यदा विषमयोः पादयोः द्वितीया मात्रा तृतीयया सह युक्तो भवति तदा उदीच्यवृत्तिर्नाम छन्दो भवति । </li><li>द्वितीया मात्रा प्रथम-तृतीयपादयोः दीर्घा भवति, अन्यत् सर्वं वैतालीयवत् ।</li></ul>',
      definition_eng: '',
      example_img: '/udicyavritti.png'
    },
    {
      title_sans: 'प्राच्यवृत्तिः',
      title_eng: 'Prachyavritti',
      id: '4.2.iii.V',
      definition_sans: '<ul><li>समपादयोः पञ्चमो कालः चतुर्थेन लघुना युतो यदि भवति तदा प्राच्यवृत्तिः इति कथ्यते । </li><li>अत्र चतुर्थपञ्चममात्रे एकेन गुरुणा उपात्ते भवतः, अन्यत् सर्वं वैतालीयवत् भवति ।</li></ul>',
      definition_eng: '',
      example_img: '/pracyavritti.png'
    },
    {
      title_sans: 'प्रवृत्तकम्',
      title_eng: 'Pravrittakam',
      id: '4.2.iii.VI',
      definition_sans: '<ul><li>विषमपादे द्वितीयतृतीयमात्रायोगो भवति</li><li>समपादे  चतुर्थपञ्जममात्रासंयोगो भवति</li><li>अन्यत् सर्वं वैतालीयवत् ।</li></ul>',
      definition_eng: '',
      example_img: '/pravruttakam.png'
    },
    {
      title_sans: 'अपरान्तिका',
      title_eng: 'Aparantika',
      id: '4.2.iii.VII',
      definition_sans: 'यत्र चतुर्ष्वपि चरणेषु चतुर्थपञ्चममात्रयोः संयोगो दृश्यते तथा सर्वत्र षोडशमात्रता च जायते तदा अपरान्तिका नाम छन्दः',
      definition_eng: '',
      example_img: '/aparantika.png'
    },
    {
      title_sans: 'चारुहासिनी',
      title_eng: 'Charuhasini',
      id: '4.2.iii.VIII',
      definition_sans: 'सर्वेषु पादेषु –<ul><li>चतुर्दशमात्राः सन्ति</li><li>द्वितीयतृतीयमात्रयोः संयोगश्च भवति </li></ul>',
      definition_eng: '',
      example_img: '/caruhasini.png'
    },
    {
      title_sans: 'वक्त्रम्',
      title_eng: 'Vaktram',
      id: '4.2.iv',
      definition_sans: '<ul><li>प्रथमाक्षरात् ऊर्ध्वं नगण-सगणौ न स्याताम्, मगणादुषु कोऽपि यथेच्छं स्यात् ।</li><li>चतुर्थाक्षरात् परतः यगणः स्यात् </li><li>समपादयोः प्रथमाक्षरात् पञ्चात् रगणोऽपि न भवति</li></ul>',
      definition_eng: '',
      example_img: '/vaktram.png'
    },
    {
      title_sans: 'पथ्यावक्त्रम्',
      title_eng: 'Pathyavaktram',
      id: '4.2.iv.I',
      definition_sans: 'द्वितीय-चतुर्थपादयोः चतुर्थाक्षरात् परतः जगणेन युक्तं पथ्यावक्त्रं नाम वृत्तं प्रकीर्तितम् । ',
      definition_eng: '',
      example_img: '/pathyavaktram.png'
    },
    {
      title_sans: 'विपरीतपथ्यावक्त्रम्',
      title_eng: 'Viparītapathyāvaktram',
      id: '4.2.iv.II',
      definition_sans: 'प्रथम-तृतीयपादयोः चतुराक्षरात् परतः जगणेन युक्ता स्यात् तदा विपरीतपथ्यावक्त्रम् । ',
      definition_eng: '',
      example_img: '/viparitapathya.png'
    },
    {
      title_sans: 'चपलावक्त्रम्',
      title_eng: 'capalāvaktram',
      id: '4.2.iv.III',
      definition_sans: 'प्रथम-तृतीयपादयोः चतुराक्षरात् परतः यदि नगणः स्यात् तदा चपलावक्त्रं नाम वृत्तं भवति',
      definition_eng: '',
      example_img: '/capalavaktram.png'
    },
    {
      title_sans: 'युग्मविपुला',
      title_eng: 'yugmavipulā',
      id: '4.2.iv.IV',
      definition_sans: '<ul><li>द्वितीय-चतुर्थपादयोः सप्तमः वर्णः लघुसंज्ञकः स्यात् सा युग्मविपुला कथिता ।</li><li>विशेषः – यद्यपि पथ्यानामके वृत्तेऽपि द्वितीयचतुर्थपादयोः सप्तमो वर्णो लघु भवति, तथापि तत्र जगणस्य प्राधान्यम्, अत्र तु प्राधान्ये सप्तमवर्णस्य लघुत्वं भवति ।</li><li>सैतवमुनेः मते चतुर्षु पादेषु सप्तमो वर्णो लघु भवति ।</li></ul>',
      definition_eng: '',
      example_img: '/yugmavipula.png'
    },
    {
      title_sans: 'भविपुला',
      title_eng: 'bhavipulā',
      id: '4.2.iv.V',
      definition_sans: '<ul><li>चतुर्थाक्षरात् भगणेन संयुता चेत् तदा भविपुला भवति ।</li><li>केचन पण्डिताः सर्वेषु पादेषु स्वीकुर्वन्ति, केचित् तु विषमपादविषयेयमिति स्वीकुर्वन्ति ।</li></ul>',
      definition_eng: '',
      example_img: '/bhavipula.png'
    },
    {
      title_sans: 'रविपुला',
      title_eng: 'ravipulā',
      id: '4.2.iv.VI',
      definition_sans: 'चतुर्थाक्षरात् रगणेन संयुता चेत् तदा रविपुला भवति ।',
      definition_eng: '',
      example_img: '/ravipula.png'
    },
    {
      title_sans: 'नविपुला',
      title_eng: 'navipulā',
      id: '4.2.iv.VII',
      definition_sans: 'चतुर्थाक्षरात् परतः नगणेन संयुता चेत् तदा नविपुला भवति ।',
      definition_eng: '',
      example_img: '/navipula.png'
    },
    {
      title_sans: 'तविपुला',
      title_eng: 'tavipulā',
      id: '4.2.iv.VIII',
      definition_sans: 'चतुर्थाक्षरात् परतः तगणेन संयुता चेत् तदा तविपुला भवति ।',
      definition_eng: '',
      example_img: '/tavipula.png'
    },
    {
      title_sans: '',
      title_eng: 'mātrāsamavṛtta',
      id: '4.2.v',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: 'अचलधृतिवृत्तम्',
      title_eng: 'acaladhṛtivṛttam',
      id: '4.2.v.I',
      definition_sans: '<ul><li>षोढशलघवः वर्णाः यत्र सा अचलधृतिः ।</li><li>इमाम् अचलधृतिं पिङ्गलमुनिः गीत्यार्या नाम जातिभेदं स्वीकरोति ।</li></ul>',
      definition_eng: '',
      example_img: '/acaladhrti.png'
    },
    {
      title_sans: 'मात्रासमकम्',
      title_eng: 'mātrāsamakam',
      id: '4.2.v.II',
      definition_sans: '<ul><li>यस्य श्लोकस्य पादे नवमः लघुः अन्तिमं (१६) गुरुः च स्यात् तद्व्रुत्तं मात्रासमकम् इत्युच्यते </li><li>षोढशमात्राः भवन्ति</li></ul>',
      definition_eng: '',
      example_img: '/matrasamaka.png'
    },
    {
      title_sans: 'विश्लोकवृत्तम्',
      title_eng: 'viślokavṛttam',
      id: '4.2.v.III',
      definition_sans: '<ul><li>चतुष्कलातः पश्चात् जगणो यत्र भवति अथवा चतुर्लघुरूपो वा यत्र गणः तद् विश्लोकम् </li></li>षोढशमात्राः भवन्ति</li></ul>',
      definition_eng: '',
      example_img: '/visloka.png'
    },
    {
      title_sans: 'वानवासिकावृत्तम्',
      title_eng: 'vānavāsikāvṛttam',
      id: '4.2.v.IV',
      definition_sans: 'अष्टमात्रानन्तरं यदि जगणः चत्वारो लघुवर्णाः वा स्युः तदा वानवासिका वृत्तम् ।',
      definition_eng: '',
      example_img: '/vanavasika.PNG'
    },
    {
      title_sans: 'चित्रा वृत्तम्',
      title_eng: 'citrāvṛttam',
      id: '4.2.v.V',
      definition_sans: 'पञ्च, अष्टौ नव एतेषु यदि लघुः वर्णः स्यात् तदा चित्रा नाम वृत्तम् ',
      definition_eng: '',
      example_img: '/citra.png'
    },
    {
      title_sans: 'उपचित्रावृत्तम्',
      title_eng: 'upacitrāvṛttam',
      id: '4.2.v.VI',
      definition_sans: '<ul><li>नवमे मात्रास्वरूपे दशमेन मात्रास्वरूपेण युक्ते सति उपचित्रा नाम मात्रासमकं वृत्तं भवति </li><br>अथवा<br><li>यस्मिन् छन्दसि अष्टाभ्यो मात्राभ्यः परतः भगणाद् द्वौ गुरुवर्णौ भवतः तद्वृत्तम् उपचित्रा नामकं भवति</li></ul>',
      definition_eng: '',
      example_img: '/upacitra.PNG'
    },
    {
      title_sans: 'पादाकुलकवृत्तम्',
      title_eng: 'pādākulakavṛttam',
      id: '4.2.v.VII',
      definition_sans: 'पादचतुष्टयेऽपि भिन्नभिन्नमात्रासमकवृत्तानां लक्षणैः समन्वितं, किन्तु षोढशमात्राभिर्युक्तं यद् वृत्तं तद् पादाकुलकम् ।',
      definition_eng: '',
      example_img: '/padakulaka.JPG'
    },
    {
      title_sans: 'शिखावृत्तम्',
      title_eng: 'śikhāvṛttam',
      id: '4.2.vi',
      definition_sans: '<ul><li>उभयदले – <ul><li>प्रथमपादे अष्टाविंशतिलघवः अन्ते एकश्च गुरुः</li><li>द्वितीयपादे ३० लघुयुक्तं अन्त्यगुरुः भवति </li></ul><li>कविप्रतिभोत्पादिता सचेतसां </li><li>चेतसश्चमत्कारकारिणी पदानां विस्तारो यत्र सा शिखा कथ्यते ।</li></ul>',
      definition_eng: '',
      example_img: '/shikha.png'
    },
    {
      title_sans: 'खञ्जावृत्तम्',
      title_eng: 'khañjāvṛttam',
      id: '4.2.vii',
      definition_sans: '<ul><li>इदं वृत्तं शिखावृत्तस्य सर्वथा विपरीतं वर्तते ।</li><li>उभयदले – <ul><li>प्रथमपादे ३० लघुयुक्तं अन्त्यगुरुः भवति </li><li>द्वितीयपादे अष्टाविंशतिलघवः अन्ते एकश्च गुरुः</li></ul></ul>',
      definition_eng: '',
      example_img: '/khanja.png'
    },
    {
      title_sans: 'अनङ्गक्रीडावृत्तम्',
      title_eng: 'anaṅgakrīḍāvṛttam',
      id: '4.2.viii',
      definition_sans: 'यस्य वृत्तस्य पूर्वार्धे षोढश गुरवः उत्तरार्धे ३२ लघवः स्युः सा अनङ्गक्रीडा ',
      definition_eng: '',
      example_img: '/anangakrida.png'
    },
    {
      title_sans: 'रुचिरावृत्तम्',
      title_eng: 'rucirāvṛttam',
      id: '4.2.ix',
      definition_sans: '<ul><li>२७ लघवो अवसाने गुरुः</li><li>अस्याः  अपरं नाम ’चलिका’ इति पिङ्गलसम्मतम् </li></ul>',
      definition_eng: '',
      example_img: '/ruciravruttam.png'
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
