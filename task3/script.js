<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="about">
        <h2>About Me</h2>
        <p>Hi! I'm a passionate developer skilled in web technologies.</p>
    </section>
    
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li>Project 1: Web Development</li>
            <li>Project 2: AI Chatbot</li>
        </ul>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form">
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
        </form>
        <p id="response-message" style="display:none; color: green;">Message Sent!</p>
    </section>
    
    <script>
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("response-message").style.display = "block";
        });
    </script>
</body>
</html>
