function showAlert() {
    Math.random
    alert("u r good");
}
const messages = [
    "You're doing great! 🌟",
    "Keep going, genius! 💪",
    "One step at a time. 💖",
    "You were made for this! 🔥",
    "Your glow is unmatched. ✨"
  ];

  // Step 2: Set up button click handler
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    // Step 3: Generate a random index
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Step 4: Show the random message
    alert(messages[randomIndex]);
  });