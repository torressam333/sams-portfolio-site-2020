"use strict";

let mainContainer = document.querySelector('.quotes');

let quotesList = [
    {
        "quote": "Whether you think you can or you think you can’t, you’re right.",
        "author": "Mother Teresa",
    },
    {
        "quote": "Act as if what you do makes a difference. It does.",
        "author": "William James",
    },
    {
        "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "author": "Zig Ziglar",
    },
    {
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein",
    },
    {
        "quote": "The most wasted of days is one without laughter.",
        "author": "E. E. Cummings",
    },
    {
        "quote": "You must do the things you think you cannot do.",
        "author": "Eleanor Roosevelt",
    },
    {
        "quote": "Whether you think you can or you think you can’t, you’re right.",
        "author": "Mother Teresa",
    },
    {
        "quote": "If I cannot do great things, I can do small things in a great way.",
        "author": "Martin Luther King Jr.",
    },
    {
        "quote": "Whether you think you can or you think you can’t, you’re right.",
        "author": "Mother Teresa",
    },
    {
        "quote": "The greatest effort is not concerned with results.",
        "author": "Atisha",
    },
    {
        "quote": "Wisdom equals knowledge plus courage. You have to not only know what to do and when to do it, but you have to also be brave enough to follow through.",
        "author": " Jarod Kintz",
    },
    {
        "quote": "In a battle between two ideas, the best one doesn’t necessarily win. No, the idea that wins is the one with the most fearless heretic behind it.",
        "author": "Audrey Hepburn",
    },
    {
        "quote": "Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.",
        "author": "Patrick Lencioni",
    },
    {
        "quote": "Leadership is an action, not a position.",
        "author": "Donald McGannon",
    },
    {
        "quote": "Surround yourself with great people; delegate authority; get out of the way.",
        "author": "Ronald Reagan",
    },
    {
        "quote": "I cannot give you a formula for success, but I can give you the formula for failure, which is: Try to please everybody.",
        "author": "Herbert Bayard Swope",
    },
    {
        "quote": "Show me the man you honor and I will know what kind of man you are.",
        "author": "Thomas John Carlisle",
    },
    {
        "quote": "A man always has two reasons for doing anything: a good reason and the real reason.",
        "author": "J.P. Morgan",
    },
    {
        "quote": "If you spend your life trying to be good at everything, you will never be great at anything.",
        "author": "Tom Rath",
    },
    {
        "quote": "Average leaders raise the bar on themselves; good leaders raise the bar for others; great leaders inspire others to raise their own bar.",
        "author": "Orrin Woodward",
    },
    {
        "quote": "Don’t blow off another’s candle for it won’t make yours shine brighter.",
        "author": "Audrey Hepburn",
    },
    {
        "quote": "Nothing is impossible, the word itself says “I’m possible”!",
        "author": "Jaachynma N.E. Agu",
    },
    {
        "quote": "Whenever you see a successful business, someone once made a courageous decision.",
        "author": "Peter F. Drucker",
    },
    {
        "quote": "When you put together deep knowledge about a subject that intensely matters to you, charisma happens. You gain courage to share your passion, and when you do that, folks follow.",
        "author": "Jerry Porras",
    },
    {
        "quote": "People buy into the leader before they buy into the vision.",
        "author": "John Maxwell",
    },
    {
        "quote": "A good leader is a person who takes a little more than his share of the blame and a little less than his share of the credit.",
        "author": "Audrey Hepburn",
    },
    {
        "quote": "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
        "author": "John Maxwell",
    },
    {
        "quote": "Whether you think you can or you think you can’t, you’re right.",
        "author": "Mother Teresa",
    },
    {
        "quote": "Nothing is impossible, the word itself says “I’m possible”!",
        "author": "Henry Ford",
    },
    {
        "quote": "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
        "author": "Jim Rohn",
    },
    {
        "quote": "Take up one idea. Make that one idea your life-think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
        "author": "Swami Vivekananda",
    },
    {
        "quote": "If you are willing to do more than you are paid to do, eventually you will be paid to do more than you do.",
        "author": "Anonymous",
    },
    {
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill",
    },
    {
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill",
    },
    {
        "quote": "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.",
        "author": "Vaibhav Shah",
    },
    {
        "quote": "Try not to become a person of success, but rather try to become a person of value.",
        "author": "Albert Einstein",
    },
    {
        "quote": "Discipline is the bridge between goals and accomplishment",
        "author": "Jim Rohn",
    },
    {
        "quote": "You cannot change your destination overnight, but you can change your direction overnight",
        "author": "Jim Rohn",
    },
    {
        "quote": "Success is nothing more than a few simple disciplines practiced every day",
        "author": "Jim Rohn",
    },
    {
        "quote": "First, solve the problem. Then, write the code",
        "author": "John Johnson",
    },
    {
        "quote": "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.",
        "author": "Eagleson's Law",
    }
];

let counter = 0;
let allQuotes = [];

quotesList.map((item, index, array) => {
    allQuotes[index] = item;
});

function next_quote() {
    mainContainer.innerHTML = `<p class="p-quote">${allQuotes[counter].quote} <br> <span id="author">—${allQuotes[counter].author}</span></p>`;
    counter += 1;
    if (counter === allQuotes.length) {
        counter = 0;
    }
}

function start() {
    mainContainer.innerHTML = `<p class="p-quote">${allQuotes[counter].quote} <br> <span id="author">—${allQuotes[counter].author}</span></p>`;
    counter +=1;
    setInterval(next_quote, 8000)
}

start();