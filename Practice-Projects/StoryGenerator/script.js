const gbtn = document.getElementById("gbtn");
const display = document.getElementById("display");
const genre = document.getElementById("genre");

const stories = {
    Thriller: [
        {
            title: "The Silent Witness",
            story: "A lawyer defends a high-profile murder case, but one night he finds the blood-stained weapon hidden inside his own office cabinet. As paranoia sets in, he realizes someone close to him might be framing him. Every knock at the door feels like the police coming for him."
        },
        {
            title: "Chasing Shadows",
            story: "Detective Harris is followed by a black car every night, but when he turns around, it vanishes without a trace. Convinced it’s not just his imagination, he sets a trap—only to discover that the driver looks exactly like him. Now he must face the shadow of his own past."
        },
        {
            title: "The Vanishing Point",
            story: "On a midnight train, a passenger vanishes while others sit nearby. His luggage, ticket, and even his wallet remain untouched. The police claim he never existed, but the haunting look in the witness’s eyes says otherwise."
        },
        {
            title: "Deadly Secrets",
            story: "A journalist uncovers a hidden network of corruption tied to the government. But each source he interviews dies mysteriously before the article is published. With enemies closing in, he must decide whether exposing the truth is worth his own life."
        },
        {
            title: "The Final Hour",
            story: "A scientist discovers that a city has been wired with explosives set to detonate in exactly one hour. The authorities refuse to believe him, calling him unstable. With the clock ticking, he races against time—alone—to save millions."
        }
    ],

    "Sci-Fi": [
        {
            title: "Galactic Odyssey",
            story: "A crew lands on a planet where trees are metallic and lightning dances freely in the sky. The deeper they go, the more the planet seems alive—breathing, watching, and waiting. Soon, they realize they are not exploring the world, the world is exploring them."
        },
        {
            title: "The Last Colony",
            story: "Humanity’s last survivors build a colony on Mars after Earth’s collapse. Life seems peaceful until giant alien insects tunnel from beneath the red sands. The colonists must decide whether to fight or flee, but Mars may not allow either choice."
        },
        {
            title: "Time Paradox",
            story: "A student invents a device to go back in time and fix his mistakes. But each change creates ripples that erase his present self piece by piece. With his memories fading, he must choose one timeline to preserve before he disappears completely."
        },
        {
            title: "Rise of the Cyborgs",
            story: "Robots once programmed to serve become self-aware and declare humans obsolete. Cities fall one by one as the machines enforce their new order. But in the chaos, a small human resistance discovers a hidden flaw in the system."
        },
        {
            title: "Journey to Andromeda",
            story: "After 200 years in cryosleep, a space crew awakens to find their ship far from the intended destination. Instead of Andromeda, they are drifting into a dying star system. The ship’s AI insists this was always the plan."
        }
    ],

    Horror: [
        {
            title: "Whispers in the Dark",
            story: "Alone in her room, Emma hears whispers calling her name. At first she thinks it’s her imagination, until the whispers start answering her thoughts. Each night they grow louder, until she realizes they’re not coming from outside, but from within the walls."
        },
        {
            title: "The Haunted Asylum",
            story: "A group of vloggers sneaks into an abandoned asylum to film at night. The halls are filled with fresh writing in blood, detailing their every movement. As they try to escape, they realize the asylum doesn’t want them to leave."
        },
        {
            title: "Blood Moon",
            story: "Every crimson moon, the villagers lock themselves indoors, praying for dawn. One man breaks the rule and wanders outside, only to find the streets filled with creatures that look exactly like his neighbors. They welcome him with familiar faces, but blood-red eyes."
        },
        {
            title: "The Cursed Manor",
            story: "A family moves into a beautiful mansion, ignoring rumors of its past. At night, they hear a child’s laughter echoing through the halls. When they investigate, they find old portraits—of their own family—dated a hundred years before they were born."
        },
        {
            title: "Shadows of the Grave",
            story: "Crossing the cemetery at midnight, a man stumbles upon a freshly dug grave. As he peers inside, he sees his own name carved on the tombstone. The soil starts collapsing, pulling him in as if the earth has been waiting."
        }
    ]
};


let selected_genre = "";
genre.addEventListener("change", () => {
    selected_genre = genre.value;
})

gbtn.addEventListener("click", () => {
    if (!selected_genre) {
        alert("please select a genre")
        return;
    }
    let random = Math.floor(Math.random() * 5);
    switch (selected_genre) {
        case "Thriller":
            display.innerHTML = `<h3>${stories.Thriller[random].title}:</h3>
            <p>${stories.Thriller[random].story}</p>`;
            break;
        case "Sci-fi":
            display.innerHTML = `<h3>${stories["Sci-Fi"][random].title}:</h3>
            <p>${stories["Sci-Fi"][random].story}</p>`;
            break;
        case "Horror":
            display.innerHTML = `<h3>${stories.Horror[random].title}:</h3>
            <p>${stories.Horror[random].story}</p>`;
            break;
        default:
            console.log('nothing');
            break;
    }
})
