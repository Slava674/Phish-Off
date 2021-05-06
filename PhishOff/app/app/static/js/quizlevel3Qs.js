// Level 3 Spotting Malicious Emails, Texts and Spoofed Webpages
// 10 questions are stored
// Image references can be located within the quiz level 3 HTML file, under each question
// Created by Viacheslav Rawles

// variable to store level 3 quiz questions 
var questions = [{
    "question": "After clicking on an email, you have been directed to this Paypal webpage. Which one of the webpage characteristics confirms that this webpage is a phishing attempt?",
    "choice1": "A. The warning from the web browser",
    "choice2": "B. The login object and 'having trouble logging in?' hyperlink used", 
    "choice3": "C. The URL of the webpage",
    "choice4": "D. The Paypal logo",
    "answer": "3"
}, {
    "question": "The image below is a email from the HMRC, which parts of this email give away that this email is indeed fake?",
    "choice1": "A. The overall grammar used in the email",
    "choice2": "B. The reference and the refundable amount", 
    "choice3": "C. Who the emailed is addressed to",
    "choice4": "D. The sender of the email",
    "answer": "4"
}, {
    "question": "You have recieved the following email from what claims to be Apple, the email states that your Apple account has been locked. What in the email has been used to make the phishing email more effective? ",
    "choice1": "A. The activity location has been said to be abroad",
    "choice2": "B. Mentioning in red the 'Notification Terms Agreement'", 
    "choice3": "C. The use of 'Urgent language'",
    "choice4": "D. Apple logo",
    "answer": "3"
}, {
    "question": "A family member has made a post on Facebook about the following webpage. The webpage is a NHS webpage that contains information about applying for the COVID-19 Vaccine. Excluding the URL, how could you distinguish this webpage to be fake?",
    "choice1": "A. Incorrect NHS webpage color-scheme",
    "choice2": "B. Poor placement of webpage elements", 
    "choice3": "C. Incorrect spelling",
    "choice4": "D. The NHS did not ask for a method of contact (e.g. Home telephone, Mobile and Email)",
    "answer": "3"
}, {
    "question": "You've received a text message from a number claiming to be the HMRC. Why shouldn't you trust this?",
    "choice1": "A. The HMRC will never ask for personal or finanical information over text",
    "choice2": "B. The spelling and grammar used is incorrect. ", 
    "choice3": "C. The'secure link' is suspicious",
    "choice4": "D. All of the above",
    "answer": "4"
}, {
    "question": "A family member has sent you this screenshot of a text they have received from someone claiming to be Lloyds bank. The family member has said that they have signed in with their Lloyds banking information, what do you tell the family member to do?",
    "choice1": "A. Clear the browser history on the phone that you clicked the link on",
    "choice2": "B. Immediately get in contact with Lloyds and explain what has happened", 
    "choice3": "C. Ignore it, nothing with happen",
    "choice4": "D. Delete the new Payee off your account",
    "answer": "2"
}, {
    "question": "Due to the COVID-19 pandemnic there has been a rise in Phishing attacks that take advantage of the current situation. How is this phishing email more sophisticated than others?",
    "choice1": "A. Correct grammar and punctuation is used in the email",
    "choice2": "B. The full link is hidden as a hyperlink 'Access your funds now'", 
    "choice3": "C. The email includes a legitimate NHS URL",
    "choice4": "D. The attacker is using the COVID pandemic as its main subject",
    "answer": "3"
}, {
    "question": "Is this DPD email a Phishing attack or not?",
    "choice1": "A. Yes",
    "choice2": "B. No", 
    "answer": "1"
}, {
    "question": "Is the following email from Amazon a phishing email?",
    "choice1": "A. No",
    "choice2": "B. Yes", 
    "answer": "2"
}, {
    "question": "Is there anything wrong with the natwest webpage, if so what is wrong?",
    "choice1": "A. The page that is opened is highlighted under 'Personal' and not 'Log In'",
    "choice2": "B. The URL of the webpage",
    "choice3": "C. Nothing is wrong with the webpage",
    "choice4": "D. The menu options are different from the actual Natwest page",
    "answer": "2"
}]