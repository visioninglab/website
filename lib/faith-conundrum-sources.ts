// Further Reading, Watching and Sources for The Faith Conundrum.
//
// Recovered from the manuscript's thematic section (Draft 3), in the book's
// topic order, with additions from the final printed bibliography placed under
// "Also recommended". Do not add references or reword the author's
// descriptions. Only add URLs that have been checked; recordings are website
// additions and are marked as such on the page.

export interface Work {
  /** Author(s), editor(s) or translator(s), with role, as cited. */
  authors: string;
  year?: string;
  title: string;
  /** For a chapter: the book it appears in (rendered in italics). */
  inBook?: string;
  inEditors?: string;
  /** For an article: the journal (rendered in italics). */
  journal?: string;
  edition?: string;
  /** Publisher, or journal volume details. */
  publisher?: string;
  url?: string;
  /** Another edition cited in the book's bibliography. */
  otherEdition?: string;
}

/** A primary source, law or document. Linked part is `title`. */
export interface OriginalSource {
  prefix?: string;
  title: string;
  suffix?: string;
  url?: string;
  urlNote?: string;
}

export interface Recording {
  title: string;
  host: string;
  url: string;
}

export interface WatchEntry {
  name: string;
  description: string;
  recordings?: Recording[];
}

export type Block =
  | { label: "Start here" | "Go deeper" | "Also recommended"; works: string[] }
  | { label: "Original sources"; sources: OriginalSource[] }
  | { note: string }
  | { watch: WatchEntry };

export interface Theme {
  /** A part heading that groups the themes after it. */
  part?: string;
  heading: string;
  blocks: Block[];
}

export const works: Record<string, Work> = {
  tweed: { authors: "Tweed, Thomas A.", year: "2020", title: "Religion: A Very Short Introduction", publisher: "Oxford University Press" },
  geertz: { authors: "Geertz, Clifford", year: "1973", title: "Religion as a Cultural System", inBook: "The Interpretation of Cultures", publisher: "Basic Books" },
  smithWC: { authors: "Smith, Wilfred Cantwell", year: "1979", title: "Faith and Belief", publisher: "Princeton University Press" },
  armstrong: { authors: "Armstrong, Karen", year: "2005", title: "A Short History of Myth", publisher: "Canongate" },
  woodheadBrown: { authors: "Woodhead, Linda and Brown, Andrew", year: "2016", title: "That Was the Church That Was: How the Church of England Lost the English People", publisher: "Bloomsbury Continuum" },
  harvey: { authors: "Harvey, Graham", year: "2006", title: "Animism: Respecting the Living World", publisher: "Columbia University Press", otherEdition: "Hurst, 2005" },
  cajete: { authors: "Cajete, Gregory", year: "2000", title: "Native Science: Natural Laws of Interdependence", publisher: "Clear Light Publishers" },
  yunkaporta: { authors: "Yunkaporta, Tyson", year: "2019", title: "Sand Talk: How Indigenous Thinking Can Save the World", publisher: "Text Publishing" },
  katz: { authors: "Katz, Richard", year: "1982", title: "Boiling Energy: Community Healing among the Kalahari Kung", publisher: "Harvard University Press" },
  lewisWilliams: { authors: "Lewis-Williams, J. David", year: "2002", title: "The Mind in the Cave: Consciousness and the Origins of Art", publisher: "Thames & Hudson" },
  rose: { authors: "Rose, Deborah Bird", year: "1996", title: "Nourishing Terrains: Australian Aboriginal Views of Landscape and Wilderness", publisher: "Australian Heritage Commission" },
  berndt: { authors: "Berndt, Ronald M. and Berndt, Catherine H.", year: "1989", title: "The Speaking Land: Myth and Story in Aboriginal Australia", publisher: "Inner Traditions" },
  beard: { authors: "Beard, Mary", year: "2015", title: "SPQR: A History of Ancient Rome", publisher: "Profile Books" },
  graeberWengrow: { authors: "Graeber, David and Wengrow, David", year: "2021", title: "The Dawn of Everything: A New History of Humanity", publisher: "Allen Lane" },
  scott: { authors: "Scott, James C.", year: "2017", title: "Against the Grain: A Deep History of the Earliest States", publisher: "Yale University Press" },
  finkel: { authors: "Finkel, Irving", year: "2014", title: "The Ark Before Noah: Decoding the Story of the Flood", publisher: "Hodder & Stoughton" },
  nissen: { authors: "Nissen, Hans J.", year: "1988", title: "The Early History of the Ancient Near East, 9000–2000 B.C.", publisher: "University of Chicago Press" },
  pinch: { authors: "Pinch, Geraldine", year: "2002", title: "Egyptian Mythology: A Guide to the Gods, Goddesses, and Traditions of Ancient Egypt", publisher: "Oxford University Press" },
  assmann: { authors: "Assmann, Jan", year: "2002", title: "The Mind of Egypt: History and Meaning in the Time of the Pharaohs", publisher: "Harvard University Press" },
  ikram: { authors: "Ikram, Salima", year: "2010", title: "Ancient Egypt: An Introduction", publisher: "Cambridge University Press" },
  kumar: { authors: "Kumar, P. Pratap (ed.)", year: "2013", title: "Contemporary Hinduism", publisher: "Routledge" },
  flood: { authors: "Flood, Gavin (ed.)", year: "2020", title: "The Oxford History of Hinduism: Hindu Practice", publisher: "Oxford University Press" },
  manu: { authors: "Doniger, Wendy and Smith, Brian K. (trans.)", year: "1991", title: "The Laws of Manu", publisher: "Penguin" },
  kamasutra: { authors: "Doniger, Wendy (trans.)", year: "2002", title: "The Kamasutra: A New Translation", publisher: "Oxford University Press" },
  omvedt: { authors: "Omvedt, Gail", year: "2008", title: "Seeking Begumpura: The Social Vision of Anticaste Intellectuals", publisher: "Navayana" },
  ramanujan: { authors: "Ramanujan, A. K.", year: "1973", title: "Speaking of Śiva", publisher: "Penguin" },
  ambedkar: { authors: "Ambedkar, B. R.", year: "2016", title: "Annihilation of Caste: The Annotated Critical Edition", publisher: "Verso" },
  wright: { authors: "Wright, Dale S.", year: "2020", title: "Buddhism: What Everyone Needs to Know", publisher: "Oxford University Press" },
  jerryson: { authors: "Jerryson, Michael (ed.)", year: "2017", title: "The Oxford Handbook of Contemporary Buddhism", publisher: "Oxford University Press" },
  foltz: { authors: "Foltz, Richard", year: "2010", title: "Religions of the Silk Road: Premodern Patterns of Globalization", publisher: "Palgrave Macmillan" },
  liu: { authors: "Liu, Xinru", year: "1988", title: "Ancient India and Ancient China: Trade and Religious Exchanges, AD 1–600", publisher: "Oxford University Press" },
  haemin: { authors: "Haemin Sunim", year: "2017", title: "The Things You Can See Only When You Slow Down: How to Be Calm in a Busy World", publisher: "Penguin Life" },
  suzuki: { authors: "Suzuki, D. T.", year: "1934", title: "An Introduction to Zen Buddhism", publisher: "Eastern Buddhist Society" },
  thichNhatHanh: { authors: "Thich Nhat Hanh", year: "1998", title: "The Heart of the Buddha's Teaching: Transforming Suffering into Peace, Joy, and Liberation", publisher: "Parallax Press" },
  johnson: { authors: "Johnson, Ian", year: "2017", title: "The Souls of China: The Return of Religion After Mao", publisher: "Pantheon" },
  yao: { authors: "Yao, Xinzhong", year: "2000", title: "An Introduction to Confucianism", publisher: "Cambridge University Press" },
  kohn: { authors: "Kohn, Livia", year: "2009", title: "Introducing Daoism", publisher: "Routledge" },
  keightley: { authors: "Keightley, David N.", year: "1978", title: "Sources of Shang History: The Oracle-Bone Inscriptions of Bronze Age China", publisher: "University of California Press" },
  yuDan: { authors: "Yu Dan", year: "2009", title: "Confucius from the Heart: Ancient Wisdom for Today's World", publisher: "Pan Macmillan" },
  solomon: { authors: "Solomon, Norman", year: "2026", title: "Judaism: A Very Short Introduction", edition: "3rd edn", publisher: "Oxford University Press" },
  boyarin: { authors: "Boyarin, Daniel", year: "1994", title: "A Radical Jew: Paul and the Politics of Identity", publisher: "University of California Press" },
  macculloch: { authors: "MacCulloch, Diarmaid", year: "2009", title: "A History of Christianity: The First Three Thousand Years", publisher: "Allen Lane" },
  brown: { authors: "Brown, Peter", year: "2003", title: "The Rise of Western Christendom: Triumph and Diversity, A.D. 200–1000", publisher: "Blackwell" },
  cone: { authors: "Cone, James H.", year: "1984", title: "For My People: Black Theology and the Black Church", publisher: "Orbis Books" },
  gutierrez: { authors: "Gutiérrez, Gustavo", year: "1973", title: "A Theology of Liberation: History, Politics, and Salvation", publisher: "Orbis Books" },
  heyrman: { authors: "Heyrman, Christine Leigh", year: "1997", title: "Southern Cross: The Beginnings of the Bible Belt", publisher: "University of North Carolina Press" },
  phan: { authors: "Phan, Peter C.", year: "2003", title: "Christianity with an Asian Face: Asian American Theology in the Making", publisher: "Orbis Books" },
  ivanov: { authors: "Ivanov, Sergey A.", year: "2006", title: "Holy Fools in Byzantium and Beyond", publisher: "Oxford University Press" },
  formichi: { authors: "Formichi, Chiara", year: "2020", title: "Islam and Asia: A History", publisher: "Cambridge University Press" },
  sanyal: { authors: "Sanyal, Usha", year: "2020", title: "Scholars of Faith: South Asian Muslim Women and the Embodiment of Religious Knowledge", publisher: "Oxford University Press" },
  lapidus: { authors: "Lapidus, Ira M.", year: "2014", title: "A History of Islamic Societies", edition: "3rd edn", publisher: "Cambridge University Press" },
  aslan: { authors: "Aslan, Reza", year: "2005", title: "No god but God: The Origins, Evolution, and Future of Islam", publisher: "Random House" },
  olupona: { authors: "Olupona, Jacob K.", year: "2014", title: "African Religions: A Very Short Introduction", publisher: "Oxford University Press" },
  oyewumi1997: { authors: "Oyěwùmí, Oyèrónkẹ́", year: "1997", title: "The Invention of Women: Making an African Sense of Western Gender Discourses", publisher: "University of Minnesota Press" },
  oyewumi2015: { authors: "Oyěwùmí, Oyèrónkẹ́", year: "2015", title: "What Gender Is Motherhood? Changing Yorùbá Ideals of Power, Procreation, and Identity in the Age of Modernity", publisher: "Palgrave Macmillan" },
  drewal: { authors: "Drewal, Margaret Thompson", year: "1992", title: "Yoruba Ritual: Performative Semiotics, Acting, and Coherence", publisher: "Indiana University Press" },
  mbiti: { authors: "Mbiti, John S.", year: "1969", title: "African Religions and Philosophy", publisher: "Heinemann" },
  ngugi: { authors: "Ngũgĩ wa Thiong'o", year: "1986", title: "Decolonising the Mind: The Politics of Language in African Literature", publisher: "James Currey" },
  nwokocha: { authors: "Nwokocha, Eziaku Atuama", year: "2023", title: "Vodou en Vogue: Fashioning Black Divinities in Haiti and the United States", publisher: "University of North Carolina Press" },
  mandair: { authors: "Mandair, Arvind-Pal Singh", year: "2022", title: "Sikh Philosophy: Exploring Gurmat Concepts in a Decolonizing World", publisher: "Bloomsbury Academic" },
  nesbitt: { authors: "Nesbitt, Eleanor", year: "2016", title: "Sikhism: A Very Short Introduction", edition: "2nd edn", publisher: "Oxford University Press" },
  deloria: { authors: "Deloria Jr., Vine", year: "2003", title: "God Is Red: A Native View of Religion", edition: "3rd edn", publisher: "Fulcrum Publishing", otherEdition: "Grosset & Dunlap, 1973" },
  kimmerer: { authors: "Kimmerer, Robin Wall", year: "2013", title: "Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge and the Teachings of Plants", publisher: "Milkweed Editions" },
  estes: { authors: "Estes, Nick", year: "2019", title: "Our History Is the Future: Standing Rock Versus the Dakota Access Pipeline, and the Long Tradition of Indigenous Resistance", publisher: "Verso" },
  salmond: { authors: "Salmond, Anne", year: "2017", title: "Tears of Rangi: Experiments Across Worlds", publisher: "Auckland University Press" },
  ebrey: { authors: "Ebrey, Patricia Buckley", year: "1993", title: "The Inner Quarters: Marriage and the Lives of Chinese Women in the Sung Period", publisher: "University of California Press" },
  criadoPerez: { authors: "Criado Perez, Caroline", year: "2019", title: "Invisible Women: Exposing Data Bias in a World Designed for Men", publisher: "Chatto & Windus" },
  saini: { authors: "Saini, Angela", year: "2017", title: "Inferior: How Science Got Women Wrong and the New Research That's Rewriting the Story", publisher: "Fourth Estate" },
  davies: { authors: "Davies, Sharyn Graham", year: "2010", title: "Gender Diversity in Indonesia: Sexuality, Islam and Queer Selves", publisher: "Routledge" },
  eddoLodge: { authors: "Eddo-Lodge, Reni", year: "2017", title: "Why I’m No Longer Talking to White People About Race", publisher: "Bloomsbury" },
  hall: { authors: "Hall, Stuart", year: "1996", title: "Who Needs Identity?", inEditors: "Stuart Hall and Paul du Gay (eds.)", inBook: "Questions of Cultural Identity", publisher: "Sage" },
  gravett: { authors: "Gravett, Emily O.", year: "2026", title: "Studying Religion and Disability", publisher: "Routledge" },
  soon: { authors: "Soon, Isaac T.", year: "2023", title: "A Disabled Apostle: Impairment and Disability in the Letters of Paul", publisher: "Oxford University Press" },
  schumm: { authors: "Schumm, Darla Y. and Stoltzfus, Michael (eds.)", title: "Disability and World Religions: An Introduction", publisher: "Baylor University Press" },
  vanita: { authors: "Vanita, Ruth (ed.)", year: "2002", title: "Queering India: Same-Sex Love and Eroticism in Indian Culture and Society", publisher: "Routledge" },
  vanitaKidwai: { authors: "Vanita, Ruth and Kidwai, Saleem (eds.)", year: "2000", title: "Same-Sex Love in India: Readings from Literature and History", publisher: "Palgrave Macmillan" },
  lee: { authors: "Lee, Lois", year: "2015", title: "Recognizing the Non-religious: Reimagining the Secular", publisher: "Oxford University Press" },
  zwilling: { authors: "Zwilling, Anne-Laure and Årsheim, Helge (eds.)", year: "2022", title: "Nonreligion in Late Modern Societies", publisher: "Springer" },
  tsing2005: { authors: "Tsing, Anna Lowenhaupt", year: "2005", title: "Friction: An Ethnography of Global Connection", publisher: "Princeton University Press" },
  tsing2015: { authors: "Tsing, Anna Lowenhaupt", year: "2015", title: "The Mushroom at the End of the World: On the Possibility of Life in Capitalist Ruins", publisher: "Princeton University Press" },
  shiva: { authors: "Shiva, Vandana", year: "1988", title: "Staying Alive: Women, Ecology and Development", publisher: "Zed Books" },
  hopkins2019: { authors: "Hopkins, Rob", year: "2019", title: "From What Is to What If: Unleashing the Power of Imagination to Create the Future We Want", publisher: "Chelsea Green" },
  hopkins2008: { authors: "Hopkins, Rob", year: "2008", title: "The Transition Handbook: From Oil Dependency to Local Resilience", publisher: "Green Books" },
  raworth: { authors: "Raworth, Kate", year: "2017", title: "Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist", publisher: "Random House Business" },
  treeBurrell: { authors: "Tree, Isabella and Burrell, Charlie", year: "2023", title: "The Book of Wilding: A Practical Guide to Rewilding, Big and Small", publisher: "Bloomsbury" },
  tree: { authors: "Tree, Isabella", year: "2018", title: "Wilding: The Return of Nature to a British Farm", publisher: "Picador" },
  womack: { authors: "Womack, Ytasha L.", year: "2013", title: "Afrofuturism: The World of Black Sci-Fi and Fantasy Culture", publisher: "Lawrence Hill Books" },
  butler: { authors: "Butler, Octavia E.", year: "1993", title: "Parable of the Sower", publisher: "Four Walls Eight Windows" },
  // The publisher's former domain now redirects to an unrelated site, so this
  // is left unlinked.
  ulibarri: { authors: "Ulibarri, Sarena (ed.)", year: "2020", title: "Glass and Gardens: Solarpunk Summers", publisher: "World Weaver Press" },
  williams: { authors: "Williams, Rhys", year: "2019", title: "“This Shining Confluence of Magic and Technology”: Solarpunk, Energy Imaginaries, and the Infrastructures of Solarity", journal: "Open Library of Humanities", publisher: "5(1): 60. doi:10.16995/olh.329", url: "https://doi.org/10.16995/olh.329" },
  campbellCheong: { authors: "Campbell, Heidi A. and Cheong, Pauline Hope (eds.)", year: "2024", title: "The Oxford Handbook of Digital Religion", publisher: "Oxford University Press" },
  lane: { authors: "Lane, Justin E.", year: "2021", title: "Understanding Religion Through Artificial Intelligence: Bonding and Belief", publisher: "Bloomsbury Academic" },
  mercerTrothen: { authors: "Mercer, Calvin and Trothen, Tracy J.", year: "2021", title: "Religion and the Technological Future: An Introduction to Biohacking, Artificial Intelligence, and Transhumanism", publisher: "Palgrave Macmillan" },
  coeckelbergh: { authors: "Coeckelbergh, Mark", year: "2026", title: "Artificial Religion: On AI, Myth, and Power", publisher: "MIT Press" },
  benjamin: { authors: "Benjamin, Ruha", year: "2019", title: "Race After Technology: Abolitionist Tools for the New Jim Code", publisher: "Polity" },
  han: { authors: "Han, Byung-Chul", year: "2015", title: "The Burnout Society", publisher: "Stanford University Press" },
  kurzweil: { authors: "Kurzweil, Ray", year: "2005", title: "The Singularity Is Near: When Humans Transcend Biology", publisher: "Viking" },
  singler: { authors: "Singler, Beth", year: "2024", title: "Religion and Artificial Intelligence: An Introduction", publisher: "Routledge" },
  zuboff: { authors: "Zuboff, Shoshana", year: "2019", title: "The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power", publisher: "Profile Books" },
};

export const introduction = [
  "The Faith Conundrum moves across cultures, historical periods and systems of thought. No single writer can speak for an entire religious or cultural tradition. The resources below therefore combine contemporary scholarship, writing from within the traditions discussed, historical research and primary sources.",
  "Start here offers an accessible route into the subject. Go deeper provides more specialised perspectives. Watch suggests a scholar, writer or practitioner whose talks and interviews can be found online. Original sources are included where texts, laws or contemporary documents are particularly useful.",
];

export const noteOnSources = [
  "No single book can represent an entire religious or cultural tradition. Traditions change across time and place, and people living within the same tradition may understand it in very different ways. The resources collected here are starting points rather than definitive accounts.",
  "Some older works have been retained because they remain influential or because they provide specialist evidence for particular historical examples discussed in this book. Wherever possible, contemporary scholarship and work by people writing from within or in close relationship with the traditions concerned have been included alongside them.",
  "The Watch recommendations give names rather than individual web links because online material changes frequently. Searching the person's name through YouTube, a university website, podcast platform or search engine should provide current lectures, interviews and discussions.",
];

export const themes: Theme[] = [
  {
    heading: "Understanding Religion and Belief",
    blocks: [
      { label: "Start here", works: ["tweed"] },
      { label: "Go deeper", works: ["geertz", "smithWC"] },
      { label: "Also recommended", works: ["armstrong", "woodheadBrown"] },
      { watch: { name: "Linda Woodhead", description: "sociologist of religion whose talks explore how religion, spirituality and non-religion are changing in contemporary societies." } },
    ],
  },
  {
    heading: "Animism and Relationships with the Living World",
    blocks: [
      { label: "Start here", works: ["harvey"] },
      { label: "Go deeper", works: ["cajete", "yunkaporta"] },
      { watch: { name: "Nurit Bird-David", description: "anthropologist known for work on animism and relational understandings of relationships between humans and non-human beings." } },
    ],
  },
  {
    heading: "San Knowledge and Healing",
    blocks: [
      { label: "Start here", works: ["katz"] },
      { label: "Go deeper", works: ["lewisWilliams"] },
      { watch: { name: "Megan Biesele", description: "anthropologist who has worked extensively with Ju/'hoansi communities in southern Africa, including oral tradition, healing and cultural continuity." } },
    ],
  },
  {
    heading: "Australian Aboriginal Knowledge and Country",
    blocks: [
      { label: "Start here", works: ["yunkaporta"] },
      { label: "Go deeper", works: ["rose", "berndt"] },
      { watch: { name: "Marcia Langton", description: "Yiman and Bidjara scholar whose talks address Indigenous relationships with land, culture, environmental management and Australian society." } },
    ],
  },
  {
    heading: "Ancient Societies and Institutions",
    blocks: [{ label: "Also recommended", works: ["beard", "graeberWengrow", "scott"] }],
  },
  {
    heading: "Ancient Mesopotamia",
    blocks: [
      { label: "Start here", works: ["finkel"] },
      { label: "Go deeper", works: ["nissen"] },
      { watch: { name: "Amanda Podany", description: "historian of the ancient Near East whose accessible talks explore everyday life, states, writing and social organisation in Mesopotamia." } },
    ],
  },
  {
    heading: "Ancient Egypt",
    blocks: [
      { label: "Start here", works: ["pinch"] },
      { label: "Go deeper", works: ["assmann"] },
      { label: "Also recommended", works: ["ikram"] },
      { watch: { name: "Kara Cooney", description: "Egyptologist whose talks examine Egyptian kingship, death, gender, wealth and the political uses of religion." } },
    ],
  },
  {
    heading: "Hindu Traditions",
    blocks: [
      { label: "Start here", works: ["kumar"] },
      { label: "Go deeper", works: ["flood", "manu", "kamasutra"] },
      { label: "Original sources", sources: [{ title: "Rigveda" }, { title: "Manusmriti" }, { title: "Mahabharata" }] },
      { watch: { name: "Vasudha Narayanan", description: "scholar of Hinduism whose talks explore Hindu traditions, ritual, sacred landscapes and their contemporary transformations." } },
    ],
  },
  {
    heading: "Caste, Bhakti and Religious Authority in South Asia",
    blocks: [
      { label: "Start here", works: ["omvedt"] },
      { label: "Go deeper", works: ["ramanujan"] },
      { label: "Also recommended", works: ["ambedkar"] },
      {
        watch: {
          name: "Suraj Yengde",
          description: "Dalit scholar and public intellectual who discusses caste, inequality, identity and the continuing social consequences of caste systems.",
          recordings: [
            { title: "Exposing Caste Discrimination in the United States", host: "Berkley Center, Georgetown University, 2020", url: "https://berkleycenter.georgetown.edu/events/exposing-caste-discrimination-in-the-united-states" },
            { title: "Talks and videos", host: "Suraj Yengde's website", url: "https://www.surajyengde.com/talks/" },
          ],
        },
      },
    ],
  },
  {
    heading: "Buddhism",
    blocks: [
      { label: "Start here", works: ["wright"] },
      { label: "Go deeper", works: ["jerryson", "foltz", "liu"] },
      { label: "Also recommended", works: ["haemin", "suzuki", "thichNhatHanh"] },
      { watch: { name: "Jetsunma Tenzin Palmo", description: "Buddhist nun and teacher whose talks provide a practitioner's perspective on Buddhist practice, monasticism and the position of women." } },
    ],
  },
  {
    heading: "Chinese Traditions: Ancestors, Confucianism and Daoism",
    blocks: [
      { label: "Start here", works: ["johnson"] },
      { label: "Go deeper", works: ["yao", "kohn", "keightley"] },
      { label: "Also recommended", works: ["yuDan"] },
      { watch: { name: "Yang Huilin", description: "Chinese scholar whose talks explore religion, ethics and the place of religious ideas in contemporary Chinese intellectual life." } },
    ],
  },
  {
    heading: "Judaism",
    blocks: [
      { label: "Start here", works: ["solomon"] },
      { label: "Go deeper", works: ["boyarin"] },
      { label: "Original sources", sources: [{ title: "The Hebrew Bible or Tanakh." }, { title: "Rabbinic literature." }] },
      { watch: { name: "Amy-Jill Levine", description: "Jewish scholar of biblical studies whose talks illuminate Jewish texts, interpretation and the historical world from which Christianity emerged." } },
    ],
  },
  {
    heading: "Christianity",
    blocks: [
      { label: "Start here", works: ["macculloch"] },
      { label: "Go deeper", works: ["brown", "cone"] },
      { label: "Also recommended", works: ["gutierrez", "heyrman", "phan"] },
      { watch: { name: "Kate Bowler", description: "historian of Christianity whose work examines contemporary Christian belief, prosperity theology, suffering and the promises religious cultures make about human life." } },
    ],
  },
  {
    heading: "Russian Orthodoxy and the Holy Fool",
    blocks: [
      { label: "Go deeper", works: ["ivanov"] },
      { watch: { name: "Nadieszda Kizenko", description: "historian of Russian Orthodox Christianity whose work examines religious practice, confession, sanctity and Russian religious culture." } },
    ],
  },
  {
    heading: "Islam",
    blocks: [
      { label: "Start here", works: ["formichi"] },
      { label: "Go deeper", works: ["sanyal", "lapidus"] },
      { label: "Also recommended", works: ["aslan"] },
      { watch: { name: "Leila Ahmed", description: "scholar of Islam whose talks explore women, gender, Islamic history and changing interpretations of Muslim identity." } },
    ],
  },
  {
    heading: "Yoruba and African Religious Traditions",
    blocks: [
      { label: "Start here", works: ["olupona"] },
      { label: "Go deeper", works: ["oyewumi1997", "oyewumi2015", "drewal"] },
      { label: "Also recommended", works: ["mbiti", "ngugi"] },
      { watch: { name: "Abimbola Adelakun", description: "Nigerian scholar whose work examines religion, performance, power and contemporary African society." } },
    ],
  },
  {
    heading: "Vodou and African-Diasporic Religions",
    blocks: [
      { label: "Start here", works: ["nwokocha"] },
      { watch: { name: "Mambo Chita Tann", description: "Haitian Vodou priestess and educator who provides a practitioner perspective on Vodou belief and practice." } },
    ],
  },
  {
    heading: "Sikhism",
    blocks: [
      { label: "Start here", works: ["mandair"] },
      { label: "Go deeper", works: ["nesbitt"] },
      { watch: { name: "Nikky-Guninder Kaur Singh", description: "scholar of Sikhism whose talks explore Sikh scripture, gender, spirituality and understandings of the divine." } },
    ],
  },
  {
    heading: "Indigenous North American Traditions",
    blocks: [
      { label: "Start here", works: ["deloria"] },
      { label: "Go deeper", works: ["cajete", "kimmerer"] },
      { note: "Different Indigenous nations have distinct religious, political and cultural traditions. These works provide particular perspectives rather than descriptions of a single ‘Native American religion’." },
      {
        watch: {
          name: "Kyle Whyte",
          description: "Potawatomi scholar whose talks connect Indigenous knowledge, environmental justice, climate change and relationships between communities and land.",
          recordings: [
            { title: "Indigenous Peoples and Climate Justice", host: "UC Center for Climate Justice", url: "https://centerclimatejustice.universityofcalifornia.edu/posts/indigenous-peoples-and-climate-justice-by-kyle-powys-whyte/" },
          ],
        },
      },
    ],
  },
  {
    heading: "Standing Rock and Water",
    blocks: [
      { label: "Start here", works: ["estes"] },
      { watch: { name: "LaDonna Brave Bull Allard", description: "Standing Rock Sioux historian and activist who helped establish the Sacred Stone Camp and spoke about the cultural and spiritual significance of protecting water." } },
    ],
  },
  {
    heading: "Māori, Whanganui and the Living River",
    blocks: [
      { label: "Start here", works: ["salmond"] },
      {
        label: "Original sources",
        sources: [
          { title: "Te Awa Tupua (Whanganui River Claims Settlement) Act 2017", suffix: ".", url: "https://www.legislation.govt.nz/act/public/2017/7/en/latest.pdf", urlNote: "PDF, New Zealand Legislation" },
          { title: "Whanganui iwi accounts and statements provide an essential source for understanding Te Awa Tupua within its own cultural context." },
        ],
      },
      { watch: { name: "Gerrard Albert", description: "Whanganui iwi leader involved in Te Awa Tupua, offering a perspective on the relationship between people, ancestors and river from within the Whanganui context." } },
    ],
  },
  {
    heading: "Gender and the Body",
    blocks: [
      { label: "Start here", works: ["oyewumi1997"] },
      { label: "Go deeper", works: ["oyewumi2015", "ebrey"] },
      { label: "Also recommended", works: ["criadoPerez", "saini"] },
      { watch: { name: "Amina Mama", description: "Nigerian-British feminist scholar whose talks explore gender, colonialism and the problems created when analytical categories developed in one context are imposed on another." } },
    ],
  },
  {
    heading: "Bugis and Bissu Gender Traditions",
    blocks: [
      { label: "Start here", works: ["davies"] },
      {
        watch: {
          name: "Dédé Oetomo",
          description: "Indonesian scholar and activist whose work provides broader cultural context for gender and sexuality in Indonesia.",
          recordings: [
            { title: "Celebrating the Scholarship and Activism of Dede Oetomo", host: "New York Southeast Asia Network", url: "https://www.nysean.org/blog/celebrating-the-scholarship-and-activism-of-dede-oetomo" },
          ],
        },
      },
    ],
  },
  {
    heading: "Race and Belonging",
    blocks: [
      { label: "Start here", works: ["eddoLodge"] },
      { label: "Go deeper", works: ["hall"] },
      { watch: { name: "Kimberlé Crenshaw", description: "legal scholar whose talks explore race, structural inequality and intersectionality." } },
    ],
  },
  {
    heading: "Disability and Religion",
    blocks: [
      { label: "Start here", works: ["gravett"] },
      { label: "Go deeper", works: ["soon", "schumm"] },
      { watch: { name: "Candida Moss", description: "scholar of Christianity whose public work explores bodies, illness, disability and the ways religious texts and traditions shape understandings of bodily difference." } },
    ],
  },
  {
    heading: "Sexuality and Religion",
    blocks: [
      { label: "Start here", works: ["vanita"] },
      { label: "Go deeper", works: ["vanitaKidwai"] },
      { watch: { name: "Amara Das Wilhelm", description: "writer and researcher whose work examines gender and sexual diversity within Hindu traditions and texts." } },
    ],
  },
  {
    heading: "Secularism, Humanism and Non-Religion",
    blocks: [
      { label: "Start here", works: ["lee"] },
      { label: "Go deeper", works: ["zwilling"] },
      { watch: { name: "Abby Day", description: "anthropologist whose research asks what people who describe themselves as non-religious believe, value and belong to." } },
    ],
  },
  {
    part: "Nature, Ecology and Ways of Belonging",
    heading: "Indigenous Ecological Knowledge",
    blocks: [
      { label: "Start here", works: ["kimmerer"] },
      { label: "Go deeper", works: ["cajete", "yunkaporta"] },
      { watch: { name: "Jessica Hernandez", description: "Maya Ch'orti' and Zapotec environmental scientist whose work brings Indigenous knowledge into discussions of conservation and ecological restoration." } },
    ],
  },
  {
    heading: "Environmentalism, Globalisation and Indonesia",
    blocks: [
      { label: "Start here", works: ["tsing2005"] },
      { label: "Go deeper", works: ["tsing2015"] },
      { watch: { name: "Farwiza Farhan", description: "Indonesian conservationist whose work protecting the Leuser Ecosystem provides a contemporary perspective on the tensions between forests, communities, development and global environmentalism." } },
    ],
  },
  {
    heading: "Chipko and Indian Environmentalism",
    blocks: [
      { label: "Start here", works: ["shiva"] },
      { watch: { name: "Sunita Narain", description: "Indian environmentalist whose talks connect environmental protection with development, inequality, resources and climate justice." } },
    ],
  },
  {
    heading: "Transition and Community",
    blocks: [
      { label: "Start here", works: ["hopkins2019"] },
      { label: "Go deeper", works: ["hopkins2008"] },
      { label: "Also recommended", works: ["raworth"] },
      { watch: { name: "Kate Raworth", description: "economist whose work on Doughnut Economics explores how economies might operate within social needs and planetary boundaries." } },
    ],
  },
  {
    heading: "Rewilding",
    blocks: [
      { label: "Start here", works: ["treeBurrell"] },
      { label: "Go deeper", works: ["tree"] },
      { watch: { name: "Alastair Driver", description: "conservationist and rewilding specialist whose talks explain rewilding as ecological restoration and landscape-scale change." } },
    ],
  },
  {
    heading: "Bioregionalism and the River Avon",
    blocks: [
      { label: "Original sources", sources: [{ title: "The Avon Bioregional Charter", suffix: ". We Are Avon.", url: "https://weareavon.org/avon-bioregional-charter/" }] },
      { note: "The Charter provides a contemporary example of communities organising around a watershed and recognising river, land, wildlife, food systems and human communities as parts of an interconnected living system." },
      { watch: { name: "Isabel Carlisle", description: "bioregionalist and community organiser whose work explores how communities and economies can be organised around ecological places rather than conventional administrative boundaries." } },
    ],
  },
  {
    heading: "Healing Agriculture in South Korea",
    blocks: [
      { note: "South Korea's developing field of 치유농업 (chiyu-nongeop), or healing agriculture, brings agricultural activity together with physical, psychological and social wellbeing." },
      {
        label: "Original sources",
        sources: [
          { prefix: "Republic of Korea, ", title: "Act on Research, Development and Promotion of Healing Agriculture", suffix: ".", url: "https://elaw.klri.re.kr/kor_mobile/viewer.do?hseq=64505&key=25&type=sogan", urlNote: "English translation, Korea Legislation Research Institute" },
          { title: "Rural Development Administration, Republic of Korea — research and guidance on healing agriculture." },
          { title: "Korean research on European care-farming models provides useful context for the development of the Korean system." },
        ],
      },
      { watch: { name: "Park Shin-ae", description: "South Korean researcher working on horticultural therapy and human interactions with plants, providing scientific context for Korean healing agriculture." } },
    ],
  },
  {
    heading: "European Ecological Policy",
    blocks: [
      {
        label: "Original sources",
        sources: [
          { prefix: "European Union, ", title: "Nature Restoration Regulation", suffix: ".", url: "https://eur-lex.europa.eu/eli/reg/2024/1991/oj/eng", urlNote: "Regulation (EU) 2024/1991, EUR-Lex" },
          { prefix: "European Commission, ", title: "EU Biodiversity Strategy for 2030", suffix: ".", url: "https://environment.ec.europa.eu/strategy/biodiversity-strategy-2030_en" },
          { prefix: "European Commission, ", title: "One Health", suffix: " framework.", url: "https://health.ec.europa.eu/one-health_en" },
        ],
      },
      { note: "Together these initiatives reflect growing policy recognition that human health, animal health and functioning ecosystems are interconnected." },
      { watch: { name: "Florika Fink-Hooijer", description: "European environmental-policy official whose talks address biodiversity, environmental protection and the development of EU nature policy." } },
    ],
  },
  {
    heading: "Afrofuturism",
    blocks: [
      { label: "Start here", works: ["womack"] },
      { label: "Go deeper", works: ["butler"] },
      { note: "Afrofuturism uses speculative fiction, art, music, spirituality, science and technology to imagine futures from Black perspectives and ask whose histories, knowledge and assumptions are carried into the future." },
      { watch: { name: "Nnedi Okorafor", description: "Nigerian-American speculative-fiction writer whose talks explore Africanfuturism, technology, culture and who gets to imagine possible futures." } },
    ],
  },
  {
    heading: "Solarpunk",
    blocks: [
      { label: "Start here", works: ["ulibarri"] },
      { label: "Go deeper", works: ["williams"] },
      { note: "Solarpunk imagines technologically capable societies organised around ecological flourishing, renewable energy and different relationships between human communities and the living world." },
      { watch: { name: "Andrew Dana Hudson", description: "speculative-fiction writer and sustainability researcher whose work explores hopeful ecological futures while retaining questions of politics, technology and material constraints." } },
    ],
  },
  {
    heading: "Digital Religion, Algorithms and Artificial Intelligence",
    blocks: [
      { label: "Start here", works: ["campbellCheong"] },
      { label: "Go deeper", works: ["lane", "mercerTrothen", "coeckelbergh"] },
      { label: "Also recommended", works: ["benjamin", "han", "kurzweil", "singler", "zuboff"] },
      {
        watch: {
          name: "Noreen Herzfeld",
          description: "theologian and computer scientist whose work examines artificial intelligence, human identity, relationships and religious understandings of what it means to be human.",
          recordings: [
            { title: "Partner or Servant: What are we looking for when we look for AI?", host: "Theology Day 2023, College of Saint Benedict and Saint John's University", url: "https://digitalcommons.csbsju.edu/sot_theology_day/12/" },
          ],
        },
      },
    ],
  },
];
