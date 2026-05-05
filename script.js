let faq = [
  { q: "what is ai", a: "AI means Artificial Intelligence" },
  { q: "define ai", a: "AI is the ability of machines to think and learn like humans" },
  { q: "what is machine learning", a: "Machine Learning is a part of AI that learns from data" },
  { q: "what is deep learning", a: "Deep Learning uses neural networks to solve complex problems" },

  { q: "what is python", a: "Python is a popular programming language used in AI and web development" },
  { q: "what is java", a: "Java is an object-oriented programming language" },
  { q: "what is c language", a: "C is a basic programming language used to learn fundamentals" },

  { q: "what is html", a: "HTML is used to create structure of web pages" },
  { q: "what is css", a: "CSS is used to style web pages" },
  { q: "what is javascript", a: "JavaScript makes web pages interactive" },

  { q: "what is api", a: "API allows communication between two software systems" },
  { q: "what is database", a: "Database is used to store data" },
  { q: "what is sql", a: "SQL is used to manage and query databases" },

  { q: "what is github", a: "GitHub is a platform to store and manage code projects" },
  { q: "what is openai", a: "OpenAI is an AI research company" },
  { q: "what is chatbot", a: "Chatbot is a program that talks like humans" },

  { q: "what is internet", a: "Internet is a global network of computers" },
  { q: "what is computer", a: "Computer is an electronic device that processes data" },
  { q: "what is software", a: "Software is a set of programs that run on computer" },

  { q: "how are you", a: "I am fine 😊 thanks for asking" },
  { q: "what can you do", a: "I can answer basic questions from my database" },
  { q: "help me", a: "Sure 😊 ask me anything" },
  { q: "bye", a: "Goodbye 👋 have a nice day" }
];

function send() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let chat = document.getElementById("chat");

  if (input === "") return;

  chat.innerHTML += "<div class='user'>You: " + input + "</div>";

  let response = "Sorry, I don't know the answer 😢";

  for (let i = 0; i < faq.length; i++) {
    if (input.includes(faq[i].q)) {
      response = faq[i].a;
      break;
    }
  }

  chat.innerHTML += "<div class='bot'>Bot: " + response + "</div>";

  document.getElementById("userInput").value = "";
}