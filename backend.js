"use strict";

// index 0 = 0x00, index 255 = 0xFF
const oddWords = ["aardletk", "absurd", "accrue", "acme", "adrift", "adult", "afflict", "ahead", "aimless", "Algol", "allow", "alone", "ammo", "ancient", "apple", "artist", "assume", "Athens", "atlas", "Aztec", "baboon", "backfield", "backward", "basalt", "beaming", "bedlamp", "beehive", "beeswax", "befriend", "Belfast", "berserk", "billiard", "bison", "blackjack", "blockade", "blowtorch", "bluebird", "bombast", "bookshelf", "brackish", "breadline", "breakup", "brickyard", "briefcase", "Burbank", "button", "buzzard", "cement", "chairlift", "chatter", "checkup", "chisel", "choking", "chopper", "Christmas", "clamshell", "classic", "classroom", "cleanup", "clockwork", "cobra", "commence", "concert", "cowbell", "crackdown", "cranky", "crowfoot", "crucial", "crumpled", "crusade", "cubic", "deadbolt", "deckhand", "dogsled", "dosage", "dragnet", "drainage", "dreadful", "drifter", "dropper", "drumbeat", "drunken", "Dupont", "dwelling", "eating", "edict", "egghead", "eightball", "endorse", "endow", "enlist", "erase", "escape", "exceed", "eyeglass", "eyetooth", "facial", "fallout", "flagpole", "flatfoot", "flytrap", "fracture", "fragile", "framework", "freedom", "frighten", "gazelle", "Geiger", "Glasgow", "glitter", "glucose", "goggles", "goldfish", "gremlin", "guidance", "hamlet", "highchair", "hockey", "hotdog", "indoors", "indulge", "inverse", "involve", "island", "Janus", "jawbone", "keyboard", "kickoff", "kiwi", "klaxon", "lockup", "merit", "minnow", "miser", "Mohawk", "mural", "music", "Neptune", "newborn", "nightbird", "obtuse", "offload", "oilfield", "optic", "orca", "payday", "peachy", "pheasant", "physique", "playhouse", "Pluto", "preclude", "prefer", "preshrunk", "printer", "profile", "prowler", "pupil", "puppy", "python", "quadrant", "quiver", "quota", "ragtime", "ratchet", "rebirth", "reform", "regain", "reindeer", "rematch", "repay", "retouch", "revenge", "reward", "rhythm", "ringbolt", "robust", "rocker", "ruffled", "sawdust", "scallion", "scenic", "scorecard", "Scotland", "seabird", "select", "sentence", "shadow", "showgirl", "skullcap", "skydive", "slingshot", "slothful", "slowdown", "snapline", "snapshot", "snowcap", "snowslide", "solo", "spaniel", "spearhead", "spellbind", "spheroid", "spigot", "spindle", "spoilage", "spyglass", "stagehand", "stagnate", "stairway", "standard", "stapler", "steamship", "stepchild", "sterling", "stockman", "stopwatch", "stormy", "sugar", "surmount", "suspense", "swelter", "tactics", "talon", "tapeworm", "tempest", "tiger", "tissue", "tonic", "tracker", "transit", "trauma", "treadmill", "Trojan", "trouble", "tumor", "tunnel", "tycoon", "umpire", "uncut", "unearth", "unwind", "uproot", "upset", "upshot", "vapor", "village", "virus", "Vulcan", "waffle", "wallet", "watchword", "wayside", "willow", "woodlark", "Zulu"];
const evenWords = ["adroitness", "adviser", "aggregate", "alkali", "almighty", "amulet", "amusement", "antenna", "applicant", "Apollo", "armistice", "article", "asteroid", "Atlantic", "atmosphere", "autopsy", "Babylon", "backwater", "barbecue", "belowground", "bifocals", "bodyguard", "borderline", "bottomless", "Bradbury", "Brazilian", "breakaway", "Burlington", "businessman", "butterfat", "Camelot", "candidate", "cannonball", "Capricorn", "caravan", "caretaker", "celebrate", "cellulose", "certify", "chambermaid", "Cherokee", "Chicago", "clergyman", "coherence", "combustion", "commando", "company", "component", "concurrent", "confidence", "conformist", "congregate", "consensus", "consulting", "corporate", "corrosion", "councilman", "crossover", "cumbersome", "customer", "Dakota", "decadence", "December", "decimal", "designing", "detector", "detergent", "determine", "dictator", "dinosaur", "direction", "disable", "disbelief", "disruptive", "distortion", "divisive", "document", "embezzle", "enchanting", "enrollment", "enterprise", "equation", "equipment", "escapade", "Eskimo", "everyday", "examine", "existence", "exodus", "fascinate", "filament", "finicky", "forever", "fortitude", "frequency", "gadgetry", "Galveston", "getaway", "glossary", "gossamer", "graduate", "gravity", "guitarist", "hamburger", "Hamilton", "handiwork", "hazardous", "headwaters", "hemisphere", "hesitate", "hideaway", "holiness", "hurricane", "hydraulic", "impartial", "impetus", "inception", "indigo", "inertia", "infancy", "inferno", "informant", "insincere", "insurgent", "integrate", "intention", "inventive", "Istanbul", "Jamaica", "Jupiter", "leprosy", "letterhead", "liberty", "maritime", "matchmaker", "maverick", "Medusa", "megaton", "microscope", "microwave", "midsummer", "millionaire", "miracle", "misnomer", "molasses", "molecule", "Montana", "monument", "mosquito", "narrative", "nebula", "newsletter", "Norwegian", "October", "Ohio", "onlooker", "opulent", "Orlando", "outfielder", "Pacific", "pandemic", "pandora", "paperweight", "paragon", "paragraph", "paramount", "passenger", "pedigree", "Pegasus", "penetrate", "perceptive", "performance", "pharmacy", "phonetic", "photograph", "pioneer", "pocketful", "politeness", "positive", "potato", "processor", "prophecy", "provincial", "proximate", "puberty", "publisher", "pyramid", "quantity", "racketeer", "rebellion", "recipe", "recover", "repellent", "replica", "reproduce", "resistor", "responsive", "retraction", "retrieval", "retrospect", "revenue", "revival", "revolver", "Sahara", "sandalwood", "sardonic", "Saturday", "savagery", "scavenger", "sensation", "sociable", "souvenir", "specialist", "speculate", "stethoscope", "stupendous", "supportive", "surrender", "suspicious", "sympathy", "tambourine", "telephone", "therapist", "tobacco", "tolerance", "tomorrow", "torpedo", "tradition", "travesty", "trombonist", "truncated", "typewriter", "ultimate", "undaunted", "underfoot", "unicorn", "unify", "universe", "unravel", "upcoming", "vacancy", "vagabond", "versatile", "vertigo", "Virginia", "visitor", "vocalist", "voyager", "warranty", "Waterloo", "whimsical", "Wichita", "Wilmington", "Wyoming", "yesteryear", "Yucatan"];

// Create the two map
// Word -> [byte, oddness]
const wordMap = new Map();
for (let i = 0; i < 256; i++) {
    wordMap.set(oddWords[i], [i, true]);
    wordMap.set(evenWords[i], [i, false]);
}

// Called when a user clicks Download.
// Reads the words in id inputArea and downloads the resulting file.
function downloadClicked() {
    setResult("Parsing words...");
    const words = document.getElementById("inputArea").value.split(' ');

    const result = new Uint8Array(words.length);

    for (let i = 0; i < words.length; i++) {
        if (wordMap.has(words[i])) {
            let byte, odd;
            [byte, odd] = wordMap.get(words[i]);
            // Backwards because array is 0-based
            // but words are 1-based.
            const shouldBeOdd = (i & 1) ? false : true;

            // Quit if we get a word with bad oddness
            if (shouldBeOdd != odd) {
                const shouldBeOddWord = shouldBeOdd ? "odd" : "even";
                const shouldBeOddWordOpposite = (!shouldBeOdd) ? "odd" : "even";
                setResult("Word "
                    + (i+1)
                    + " (\""
                    + words[i]
                    + "\") should be "
                    + shouldBeOddWord
                    + ", but it is "
                    + shouldBeOddWordOpposite
                    + ".");
                result;
            }

            // Add the byte
            result[i] = byte;

        } else {
            // Report the error to the user
            setResult("Word "
                + (i+1)
                + " (\""
                + words[i]
                + "\") not found in word list.");
            return;
        }
    }

    downloadBlob(result, "pgpWords.bin");
    setResult("File is downloading now.")
}

// Given a Uint8Array, show the resulting words.
function displayFileContents(buffer) {
    setResult("Preparing to read file...");

    // Make a View of the array
    let view = new Uint8Array(buffer);

    const words = [];

    setResult("Reading file...");
    for (let index = 0; index < view.length; index++) {
        const byte = view[index];

        // Note that this is backwards - index starts at 0
        // but word starts at 1.
        const oddWord = (index & 1) ? false : true;

        // Get the right word and add it to the list
        if (oddWord) {
            words.push(oddWords[byte]);
        } else {
            words.push(evenWords[byte]);
        }
    }

    // Show the user!
    setResult(words.join(' '));
}

// Called when a file is uploaded.
// Reads the file and passes it to displayFileContents().
function uploadClicked(e) {
    // Get the file we'll be reading
    let file = e.target.files[0];
    if (!file) {
        return;
    }

    // Write down what happens when we read the file
    let reader = new FileReader();
    reader.onload = function(e) {
        let contents = e.target.result;
        displayFileContents(contents);
    }

    // Read the file
    reader.readAsArrayBuffer(file);
}

// Sets the value of the result box.
function setResult(resultString) {
    document.getElementById("results-text-box").innerHTML = resultString;
}

// Given some data and a file name, download the data.
const downloadURL = (data, fileName) => {
  const a = document.createElement('a')
  a.href = data
  a.download = fileName
  document.body.appendChild(a)
  a.style.display = 'none'
  a.click()
  a.remove()
}

// Given some data and a file name, produce a URL
// for the data and download it.
const downloadBlob = (data, fileName) => {
  const blob = new Blob([data])
  const url = window.URL.createObjectURL(blob)
  downloadURL(url, fileName)
  // We'll assume no word list would produce a file which
  // takes longer than 3 seconds to download.
  setTimeout(() => window.URL.revokeObjectURL(url), 3000)
}

// Add listener
document.getElementById("fileUpload").addEventListener('change', uploadClicked, false)