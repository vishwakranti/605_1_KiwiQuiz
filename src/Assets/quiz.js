//we have to remap the  data into an object of value label because the stupid select can't read a simple list of cities

//the Select  needs to be in the array object of value and label have to map the city data to this object
//example of the data from select-react
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
//https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them
//getSelectDataList.sort((a, b) => (a.label > b.label ? 1 : -1));

export const quizData = [
  {
    Q: "What is the capital of New Zealand",
    A: "Wellington",
  },
  {
    Q: "What is New Zealand’s official name in Maori",
    A: "Aotearoa",
  },
  {
    Q: "What currency is used in New Zealand",
    A: "New Zealand Dollar",
  },
  {
    Q: "What colours are on the flag of New Zealand",
    A: "Blue, red and white",
  },
  {
    Q: "What are the two main political parties in New Zealand",
    A: "National and Labour",
  },
  {
    Q: "What is the nickname given to New Zealanders",
    A: "Kiwi(s)",
  },
  {
    Q: "Who was the first European to arrive in New Zealand",
    A: "(+ Bonus point for his nationality) Abel Tasman, Dutch",
  },
  {
    Q: "Who is New Zealand’s monarch",
    A: "Queen Elizabeth II",
  },
  {
    Q: "How many official languages are there in NZ",
    A: "Two. Te reo Māori (the language Māori) and New Zealand Sign Language.",
  },
  {
    Q: "What are the two national anthems of New Zealand",
    A: "(1 point each) “God defend New Zealand” and “God Save the Queen”",
  },
  {
    Q: "How tall is Aoraki Mount Cook",
    A: "3,754 metres",
  },
  {
    Q: "When did Captain Cook come to the islands",
    A: "1769",
  },
  {
    Q: "When did New Zealand gain independence from Britain",
    A: "1947",
  },
  {
    Q: "What animal can you find on a 1 dollar coin",
    A: "Kiwi",
  },
  {
    Q: "In 1893, New Zealand became the first country to do what",
    A: "Give women the right to vote",
  },
  {
    Q: "What is a Tuatara",
    A: "Reptile",
  },
  {
    Q: "When was NZ Rugby Football Union founded",
    A: "1892",
  },
  {
    Q: "When was New Zealand first Poppy Day",
    A: "1922",
  },
  {
    Q: "What is the name of the strait that separates the North and South Islands",
    A: "Cook Strait",
  },
  {
    Q: "What is the largest lake in New Zealand",
    A: "Lake Taupo",
  },
  {
    Q: "What is the largest city in New Zealand",
    A: "Auckland",
  },
  {
    Q: "What is the highest mountain peak in New Zealand",
    A: "Aoraki Mount Cook",
  },
  {
    Q: "How many regions are there in New Zealand",
    A: "16",
  },
  {
    Q: "What is the highest range of mountains in Australasia",
    A: "Southern Alps",
  },
  {
    Q: "What is the largest glacier in New Zealand",
    A: "The Tasman Glacier",
  },
  {
    Q: "On which island can you find the Canterbury Plains",
    A: "South Island",
  },
  {
    Q: "What is the longest river in New Zealand",
    A: "Waikato River",
  },
  {
    Q: "In which city can you find the Sky Tower",
    A: "Auckland",
  },
  {
    Q: "Which singer from New Zealand is known for the songs “Royals”, “Green Light” and “Perfect Places”",
    A: "Lorde",
  },
  {
    Q: "Where was Anika Moa born",
    A: "Christchurch",
  },
  {
    Q: "Who sang “Something in the water” in 2010",
    A: "Brooke Fraser",
  },
  {
    Q: "Which Dunedin band is best known for the song “Down in Splendour”",
    A: "Straitjacket Fits",
  },
  {
    Q: "Which New Zealand musician has been playing with Fleetwood Mac since 2018",
    A: "Neil Finn",
  },
  {
    Q: "Which New Zealand author is known as one of the “Queens of Crime”",
    A: "Ngaio Marsh",
  },
  {
    Q: "Which New Zealand children’s author wrote “The Haunting”",
    A: "Margaret Mahy",
  },
  {
    Q: "What was the first poetry collection published by a Maori author",
    A: "No Ordinary Sun by Hone Tuwhare in 1964",
  },
  {
    Q: "Which New Zealand author wrote “In a German Pension”",
    A: "Katherine Mansfield",
  },
  {
    Q: "Which New Zealand poet used to live in Jerusalem",
    A: "James K Baxter",
  },
  {
    Q: "Which book by Albert Wendt won the 1980 New Zealand Wattie Book of the Year Award",
    A: "Leaves of the Banyan Tree",
  },
  {
    Q: "Which book from Alan Duff was adapted in a movie in 1994",
    A: "Once were Warriors",
  },
  {
    Q: "Who wrote “An angel at my table”",
    A: "Janet Frame",
  },
  {
    Q: "Which book by Lloyd Jones is a fictional take on the 1925 New Zealand rugby tour of Britain",
    A: "The book of fame",
  },
  {
    Q: "In which country is “The Vintner’s Luck” by Elizabeth Knox set in",
    A: "France",
  },
  {
    Q: "When was the first movie shot in New Zealand",
    A: "1898",
  },
  {
    Q: "In which town can you find the Hobbiton",
    A: "Matamata",
  },
  {
    Q: "In which Netflix movie does Gabriela Diaz wins a “win an inn” in New Zealand contest",
    A: "Falling Inn Love",
  },
  {
    Q: "Which Taiki Waititi film stars James Rolleston and Te Aho Eketone-Whitu",
    A: "Boy",
  },
  {
    Q: "Which New Zealand movie won the Palme d’Or at the Cannes Film Festival in 1993",
    A: "The Piano",
  },
  {
    Q: "Who directed “Whale Rider”",
    A: "Niki Caro",
  },
  {
    Q: "Which 1994 movie tells the story of the Hekes, a family descended from Maori warriors",
    A: "Once were warriors",
  },
  {
    Q: "Who directed “Hunt for the Wilderpeople”",
    A: "Taiki Waititi",
  },
  {
    Q: "What type of movie is “What we do in the shadows”",
    A: "Mockumentary",
  },
  {
    Q: "Who’s story does “About the World’s Fastest Indian” tell the story of",
    A: "Burt Munro",
  },
  {
    Q: "Which New Zealand TV show was spurred into new versions in the UK (Honest) and the USA (Scoundrels)",
    A: "Outrageous Fortune",
  },
  {
    Q: "What is the name of the mysterious cult in “The cult”",
    A: "Two Gardens",
  },
  {
    Q: "Which New Zealand TV series was created by James Griffin and Rachel Lang",
    A: "The Almighty Johnsons",
  },
  {
    Q: "Who plays Dave Robinson in “Step Dave”",
    A: "Jono Kenyon",
  },
  {
    Q: "Which mockumentary-style comedy tells the story of 2 cousins on their quest to find Maori brides",
    A: "Find me a Maori Bride",
  },
  {
    Q: "Where was “The Brokenwood Mysteries” filmed",
    A: "Greater Auckland Region.",
  },
  {
    Q: "In “Nothing Trivia”, where do the 5 characters meet",
    A: "At a pub quiz",
  },
  {
    Q: "Who plays Cody in “Go Girls”",
    A: "Bronwyn Turei",
  },
  {
    Q: "What is the name of the treaty that was signed in 1840 by the British Crown and Maori chiefs",
    A: "Treaty of Waitangi",
  },
  {
    Q: "Who was appointed as the first Māori King in 1858",
    A: "Pōtatau Te Wherowhero",
  },
  {
    Q: "In which city did the Battle of Manners Street happen (Bonus point for the year)",
    A: "Wellington, 1943.",
  },
  {
    Q: "When were the first Māori MPs elected to Parliament",
    A: "1868",
  },
  {
    Q: "What event does Anzac Day mark on the 25th of April",
    A: "Gallipoli landings",
  },
  {
    Q: "When did the New Zealand Wars begin and end",
    A: "1845 to 1872",
  },
  {
    Q: "When did civil unions come into effect (year)",
    A: "2005",
  },
  {
    Q: "How many years did “Six O’Clock Swill” last",
    A: "50 years",
  },
  {
    Q: "When was the Hawke’s Bay Earthquake (1 point for the year, 2 points for the full date)",
    A: "3th of February 1931",
  },
  {
    Q: "Who was the first female Prime Minister of New Zealand",
    A: "Jenny Shipley",
  },
  {
    Q: "What is the name of the traditional New Zealand Māori method of cooking food using heated rocks buried underground",
    A: "Hangi",
  },
  {
    Q: "What NZ sweet is red sugar-coated chocolate balls with orange inside",
    A: "Jaffas",
  },
  {
    Q: "What kind of fish, only found in New Zealand, is a Paranephrops",
    A: "Freshwater crayfish",
  },
  {
    Q: "What does “L&P” stand for",
    A: "Lemon & Paeroa",
  },
  {
    Q: "What is a Kina",
    A: "Sea urchin (endemic to New Zealand)",
  },
  {
    Q: "Which burger sold by McDonald’s in New Zealand has beetroot and griddle egg inside",
    A: "Kiwiburger",
  },
  {
    Q: "Which desert do Australians and New Zealanders both claim as their own",
    A: "Pavlova",
  },
  {
    Q: "What traditional dish consists of fried small fish in an omelette",
    A: "Whitebait fritters",
  },
  {
    Q: "What is the name of the national rugby team of New Zealand",
    A: "All Blacks",
  },
  {
    Q: "Which adrenaline activity was invented in New Zealand",
    A: "Bungee Jumping",
  },
  {
    Q: "Who was the first person to climb Mount Everest (hint – he was from New Zealand)",
    A: "Edmund Hillary",
  },
  {
    Q: "How many times did New Zealand win the Rugby World Cup",
    A: "3 times",
  },
  {
    Q: "What is the second most popular sport in New Zealand",
    A: "Cricket",
  },
  {
    Q: "What sport do the New Zealand Breakers play",
    A: "Basketball",
  },
  {
    Q: "What is the most popular women’s sport in NZ",
    A: "Netball",
  },
  {
    Q: "Which marathon did Dave McKenzie win in 1967",
    A: "Boston Marathon",
  },
  {
    Q: "What is the nickname of the football national team of New Zealand",
    A: "All whites",
  },
  {
    Q: "Who was New Zealand’s first Olympic medallist",
    A: "Arthur Porritt",
  },
  {
    Q: "Which New Zealand golfer won the US Open Golf Championship in 2005",
    A: "Michael Campbell",
  },
  {
    Q: "Which Prime Minister appointed someone the official “Wizard of New Zealand”",
    A: "Mike Moore (1990)",
  },
  {
    Q: "Which NZ airport has a functional railway line crossing the main runway",
    A: "Gisborne Airport",
  },
  {
    Q: "For which island did the New Zealand mint produce Pokemon coins",
    A: "Island of Niue",
  },
  {
    Q: "Where in New Zealand can you eat in a McDonalds located in a decommissioned DC3 plane",
    A: "Taupō",
  },
  {
    Q: "During the 1983 Royal tour (with Prince Charles and Princess Diana), with which New Zealand iconic toy did Prince William play with",
    A: "Buzzy Bee",
  },
  {
    Q: "New Zealand is home to the town with the longest name in the world. How many characters is the name",
    A: "85. Taumata whakatangi hangakoauau o tamatea turi pukakapiki maunga horo nuku pokai whenua kitanatahu",
  },
  {
    Q: "In the 2001 census, over 53,000 people marked “something” as their religion. What was this something",
    A: "Jedi",
  },
];
