const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
    'Hello','Hey, Whats up?', 'Wooooooord','whats crackin?' ,'The world is a library that contains all the books that have ever been written, but most of them are indecipherable. Many people venture to the library to find the meaning of life. It reminded me of Terry Pratchetts Discworld library.','It was the hunters first time outside Montana. He woke, stricken still with the hours-old vision of ascending through rose-lit cumulus, of houses and barns like specks deep in the snowed-in valleys, all the scrolling country below looking December—brown and black hills streaked with snow, flashes of iced-over lakes, the long braids of a river gleaming at the bottom of a canyon. Above the wing the sky had deepened to a blue so pure he knew it would bring tears to his eyes if he looked long enough.Now it was dark, The airplane descended over Chicago, its galaxy of electric lights, the vast neighborhoods coming clearer as the plane glided toward the airport—streetlights, headlights, stacks of buildings, ice rinks, a truck turning at a stoplight, scraps of snow atop a warehouse and winking antennae on faraway hills, finally the long converging parallels of blue runway lights, and they were down.He walked into the airport, past the banks of monitors, Already he felt as if he had lost something, some beautiful perspective, some lovely dream fallen away, He had come to Chicago to see his wife, whom he had not seen in twenty years. She was there to perform her magic for a higher-up at the state university. Even universities, apparently, were interested in what she could do. Outside the terminal the sky was thick and gray and hurried by wind. Snow was coming. A woman from the university met him and escorted him to her Jeep. He kept his gaze out the window. They were in the car for forty-five minutes, passing first the tall, lighted architecture of downtown, then naked suburban oaks, heaps of ploughed snow, gas stations, power towers, and telephone wires. The woman said, "So you regularly attend your wifes performances?"No," he said. "Never before. "She parked in the driveway of an elaborate modern mansion, with square balconies suspended over two garages, huge triangular windows in the façade, sleek columns, domed lights, a steep shale roof. Inside the front door about thirty nametags were laid out on a table. His wife was not there yet. No one, apparently, was there yet. He found his tag and pinned it to his sweater. A silent girl in a tuxedo appeared and disappeared with his coat.The granite foyer was backed with a grand staircase, which spread wide at the bottom and tapered at the top. A woman came down. She stopped four or five steps from the bottom and said, "Hello, Anne" to the woman who had driven him there and "You must be Mr. Dumas" to him. He took her hand, a pale, bony thing, weightless, like a featherless bird.Her husband, the universitys chancellor, was just knotting his bow tie, she said, and she laughed sadly to herself, as if bow ties were something she disapproved of. The hunter moved to a window, shifted aside the curtain, and peered out In the poor light he could see a wooden deck the length of the house, angled and stepped, its width ever changing, with a low rail. Beyond it, in the blue shadows, a small pond lay encircled by hedges, with a marble birdbath at its center. Behind the pond stood leafless trees—oaks, maples, a sycamore as white as bone. A helicopter shuttled past, its green light winking Its snowing, he said.Is it? the hostess asked, with an air of concern, perhaps false. It was impossible to tell what was sincere and what was not. The woman who had driven him there had moved to the bar, where she cradled a drink and stared into the carpet He let the curtain fall back. The chancellor came down the staircase. Other guests fluttered in. A man in gray corduroy, with "Bruce Maples" on his nametag, approached him. "Mr. Dumas," he said, your wife isnt here yet?""You know her?" the hunter asked. Oh, no, Maples said, and shook his head. No, I dont. He spread his legs and swiveled his hips as if stretching before a footrace. But I have read about her.The hunter watched as a tall, remarkably thin man stepped through the front door. Hollows behind his jaw and beneath his eyes made him appear ancient and skeletal—as if he were visiting from some other, leaner world. The chancellor approached the thin man, embraced him, and held him for a moment.Thats President OBrien,Maples said. A famous man, actually, to people who follow those sorts of things. So terrible, what happened to his family." Maples stabbed the ice in his drink with his straw. For the first time the hunter began to think he should not have come. Have you read your wifes books? Maples asked The hunter nodded In her poems her husband is a hunter. I guide hunters. He was looking out the window to where snow was settling on the hedges.Does that ever bother you? What? Killing animals. For a living, I mean. The hunter watched snowflakes disappear as they touched the window. Was that what hunting meant to people? Killing animals? He put his fingers to the glass. "No," he said. It doesnt bother me.The hunter met his wife in Great Falls, Montana, in the winter of 1972. That winter arrived all at once—you could watch it come. Twin curtains of white appeared in the north, white all the way to the sky, driving south like the end of all things. Cattle galloped the fencelines, bawling. Trees toppled; a barn roof tumbled over the highway. The river changed directions. The wind flung thrushes screaming into the gorse and impaled them on the thorns in grotesque attitudes.She was a magicians assistant, beautiful, fifteen years old, an orphan. It was not a new story: a glittery red dress, long legs, a traveling magic show performing in the meeting hall at the Central Christian Church. The hunter had been walking past with an armful of groceries when the wind stopped him in his tracks and drove him into the alley behind the church. He had never felt such wind; it had him pinned. His face was pressed against a low window, and through it he could see the show. The magician was a small man in a dirty blue cape. Above him a sagging banner read THE GREAT VESPUCCI. But the hunter watched only the girl; she was graceful, young, smiling. Like a wrestler, the wind held him against the window.'
]
const weather = ['the weather is ok','stay on coding not weather']

const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('please speak');
}

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript  = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);

};

//add listener

btn.addEventListener('click' , () => {
    recognition.start();
});

function readOutLoud(message){
    
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Sorry, I cant say alot right now';
    if(message.includes('hi')||message.includes('hello')||message.includes('hey')){
      const lastWord = greetings[Math.floor(Math.random()*greetings.length)];
      speech.text =lastWord;    
    }
    
    speech.volume = 1;
    speech.rate = .5;
    speech.pitch = 7;
    window.speechSynthesis.speak(speech);
}

