AOS.init();
let languages = {
    "HTML": {
        quiz_questions: [
            {
                "id": 1,
                "question": "what HTML stand for ?",
                "options": [
                    "HTML describes the structure of a webpage",
                    "HTML is the standard markup language mainly used to create web pages",
                    "HTML consists of a set of elements that help the browser how to view the content",
                    "All of the mentioned"
                ],
                "correct_answer": "All of the mentioned"
            },
            {
                "id": 2,
                "question": "Who is the father of HTML?",
                "options": [
                    "Rasmus Lerdorf",
                    "Tim Berners-Lee",
                    "Brendan Eich",
                    "Sergey Brin",], "correct_answer": "Tim Berners-Lee",
            },
            {
                "id": 3,
                "question": "What is the correct syntax of doctype in HTML5?",
                "options": [
                    "</doctype html>",
                    "<doctype html>",
                    "<doctype html!>",
                    "<!doctype html>",], "correct_answer": "<!doctype html>",
            },
            {
                "id": 4,
                "question": " Which of the following is used to read an HTML page and render it?",
                "options": [
                    "Web server",
                    "Web network",
                    "Web browser",
                    "Web matrix",], "correct_answer": "Web browser",
            },
            {
                "id": 5,
                "question": "Which of the following is not a difference between HTML and XHTML?",
                "options": [
                    "Charset in both html and xhtml is “text/html”",
                    "Tags and attributes are case-insensitive in HTML but not in XHTML",
                    "Special characters must be escaped using character entities in XHTML unlike HTML",
                    "Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”",], "correct_answer": "Charset in both html and xhtml is “text/html”",
            },
            {
                "id": 6,
                "question": "Which of the following tag is used for inserting the largest heading in HTML?",
                "options": [
                    "head",
                    "<h1>",
                    "<h6>",
                    "heading",], "correct_answer": "<h1>",
            },
            {
                "id": 7,
                "question": "What is DOM in HTML?",
                "options": [
                    "Language dependent application programming",
                    "Hierarchy of objects in ASP.NET",
                    "Application programming interface",
                    "Convention for representing and interacting with objects in html documents",], "correct_answer": " Convention for representing and interacting with objects in html documents",
            },
            {
                "id": 8,
                "question": "Which HTML element is used for YouTube videos?",
                "options": [
                    "<samp>",
                    "<frame>",
                    "<h6>",
                    "<iframe>",], "correct_answer": "<iframe>",
            },
            {
                "id": 9,
                "question": "Which tag is used to underline the text in HTML?",
                "options": [
                    "<u>",
                    "<i>",
                    "<p>",
                    "<ul>",], "correct_answer": "<u>",
            },
            {
                "id": 10,
                "question": "Which of the following HTML element is used for canvas graphics?",
                "options": [
                    "<canvas>",
                    "<graphic>",
                    "<css>",
                    "<paint>",], "correct_answer": "<canvas>",
            },
            {
                "id": 11,
                "question": "Which attribute is not essential under <iframe>?",
                "options": [
                    "width",
                    "height",
                    "src",
                    "frameborder",], "correct_answer": "frameborder",
            },
            {
                "id": 12,
                "question": "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
                "options": [
                    "id",
                    "class",
                    "type",
                    "article",], "correct_answer": "id",
            },
            {
                "id": 13,
                "question": "What is the use of <hr/> tag in HTML?",
                "options": [
                    "To create vertical rule between sections",
                    "To create a line break",
                    "To create horizontal rule between sections",
                    "For making content appearance italics",], "correct_answer": "To create horizontal rule between sections",
            },
            {
                "id": 14,
                "question": "Which works similar to <b> element?",
                "options": [
                    "<strong>",
                    "<em>",
                    "<i>",
                    "<blockquote>",], "correct_answer": "<strong>",
            },
            {
                "id": 15,
                "question": "Which of the following HTML tag is used to add a row in a table?",
                "options": [
                    "<tt>",
                    "<th>",
                    "<td>",
                    "<tr>",], "correct_answer": "<tr>",
            },
            {
                "id": 16,
                "question": "Which tag is used to create a dropdown in HTML Form?",
                "options": [
                    "<textarea>",
                    "<input>",
                    "<text>",
                    "<select>",], "correct_answer": "<textarea>",
            },
            {
                "id": 17,
                "question": "In HTML, which attribute is used to create a link that opens in a new window tab?",
                "options": [
                    "src=”_blank”",
                    "target=”_self”",
                    "target=”_blank”",
                    "alt=”_blank”",], "correct_answer": "target=”_blank”",
            },
            {
                "id": 18,
                "question": "Which HTML tag is used for making character appearance bold?",
                "options": [
                    "<i>content</i>",
                    "<br>content</br>",
                    "<u>content</u>",
                    "<b>content</b>",], "correct_answer": "<b>content</b>",
            },
            {
                "id": 19,
                "question": "Which character is used to represent when a tag is closed in HTML?",
                "options": [
                    "!",
                    "/",
                    "\\",
                    "#",], "correct_answer": "/",
            },
            {
                "id": 20,
                "question": "Which HTML element is used for abbreviation or acronym?",
                "options": [
                    "<blockquote>",
                    "<q>",
                    "<abbr>",
                    "<em>",], "correct_answer": "<abbr>",
            }
        ]
    },
    "CSS": {
        quiz_questions: [
            {
                "id": 1,
                "question": "What is CSS?",
                "options": [
                    "CSS is a style sheet language",
                    "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
                    "CSS is the language used to style the HTML documents",
                    "All of the mentioned"
                ],
                "correct_answer": "All of the mentioned"
            },
            {
                "id": 2,
                "question": "Which of the following tag is used to embed css in html page?",
                "options": [
                    "<css>",
                    "<!DOCTYPE html>",
                    "<script>",
                    "<style>",], "correct_answer": "<style>",
            },
            {
                "id": 3,
                "question": "Which of the following CSS selectors are used to specify a group of elements?",
                "options": [
                    "tag",
                    "id",
                    "class",
                    "both class and tag",], "correct_answer": "class",
            },
            {
                "id": 4,
                "question": "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
                "options": [
                    "HTML",
                    "PHP",
                    "CSS",
                    "Ajax",], "correct_answer": "CSS",
            },
            {
                "id": 5,
                "question": "Which of the following CSS framework is used to create a responsive design?",
                "options": [
                    "django",
                    "rails",
                    "larawell",
                    "bootstrap",], "correct_answer": "bootstrap",
            },
            {
                "id": 6,
                "question": "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
                "options": [
                    "tag",
                    "id",
                    "class",
                    "both class and tag",], "correct_answer": "id",
            },
            {
                "id": 7,
                "question": "Which of the following CSS property is used to make the text bold?",
                "options": [
                    "text-decoration: bold",
                    "font-weight: bold",
                    "font-style: bold",
                    "text-align: bold",], "correct_answer": "font-weight: bold",
            },
            {
                "id": 8,
                "question": "Which of the following are the CSS Extension Prefixes for Webkit?",
                "options": [
                    "-chrome",
                    "-web",
                    "-o-",
                    "-webkit",], "correct_answer": "-webkit",
            },
            {
                "id": 9,
                "question": "Which of the following function defines a linear gradient as a CSS image?",
                "options": [
                    "linear-gradient()",
                    "image()",
                    "grayscale()",
                    "gradient()",], "correct_answer": "linear-gradient()",
            },
            {
                "id": 10,
                "question": "Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?",
                "options": [
                    "padding",
                    "border",
                    "border-width",
                    "border-collapse",], "correct_answer": "border-width",
            },
            {
                "id": 11,
                "question": "Which of the following is not the property of the CSS box model?",
                "options": [
                    "width",
                    "margin",
                    "height",
                    "color",], "correct_answer": "color",
            },
            {
                "id": 12,
                "question": "Which of the following CSS property sets the font size of text?",
                "options": [
                    "text",
                    "font-size",
                    "size",
                    "text-size",], "correct_answer": "font-size",
            },
            {
                "id": 13,
                "question": "Which of the following CSS property specifies the look and design of an outline?",
                "options": [
                    "outline-font",
                    "outline-style",
                    "outline-format",
                    "none of the mentioned",], "correct_answer": "outline-style",
            },
            {
                "id": 14,
                "question": "Which of the following CSS property is used to set the color of the text?",
                "options": [
                    "pallet",
                    "text-decoration",
                    "colour",
                    "color",], "correct_answer": "color",
            },
            {
                "id": 15,
                "question": "Which of the following CSS selector selects the elements that are checked?",
                "options": [
                    "none of the mentioned",
                    ":checked",
                    "E ~ F",
                    "::after",], "correct_answer": ":checked",
            },
            {
                "id": 16,
                "question": "Which of the following property is used to align the text in a table?",
                "options": [
                    "align",
                    "text",
                    "text-align",
                    "none of the mentioned",], "correct_answer": "text-align",
            },
            {
                "id": 17,
                "question": "Which of the following CSS3 property can be used to allow line breaks within words?",
                "options": [
                    "word-break",
                    "word-wrap",
                    "line-wrap",
                    "line-break",], "correct_answer": "word-break",
            },
            {
                "id": 18,
                "question": "Which of the following CSS property is used to specify table borders in CSS?",
                "options": [
                    "border",
                    "table",
                    "table:border",
                    "none of the mentioned",], "correct_answer": "border",
            },
            {
                "id": 19,
                "question": "Which of the following CSS property sets the shadow for a box element?",
                "options": [
                    "box-shadow",
                    "canvas-shadow",
                    "set-shadow",
                    "shadow",], "correct_answer": "box-shadow",
            },
            {
                "id": 20,
                "question": "Which of the following CSS Property controls how an element is positioned?",
                "options": [
                    "position",
                    "static",
                    "fix",
                    "set",], "correct_answer": "position",
            }

        ]
    },
    "JAVASCRIPT": {
        quiz_questions: [
            {
                "id": 1,
                "question": "What is JavaScript?",
                "options": [
                    "JavaScript is a scripting language used to make the website interactive",
                    "JavaScript is a compiled language used to make the website interactive",
                    "None of the mentioned",
                    "JavaScript is an assembly language used to make the website interactive"
                ],
                "correct_answer": "JavaScript is a scripting language used to make the website interactive"
            },
            {
                "id": 2,
                "question": "Arrays in JavaScript are defined by which of the following statements?",
                "options": [
                    "It is an ordered list of values",
                    "It is an ordered list of objects",
                    "It is an ordered list of string",
                    "It is an ordered list of functions",], "correct_answer": "It is an ordered list of values",
            },
            {
                "id": 3,
                "question": "Which of the following is correct about JavaScript?",
                "options": [
                    "JavaScript is an Object-Based language",
                    "JavaScript is an Object-Oriented language",
                    "JavaScript is an Object-Oriented language",
                    "JavaScript is Assembly-language",], "correct_answer": "JavaScript is an Object-Based language",
            },
            {
                "id": 4,
                "question": "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
                "options": [
                    "HTML",
                    "PHP",
                    "CSS",
                    "Ajax",], "correct_answer": "CSS",
            },
            {
                "id": 5,
                "question": "Which of the following CSS framework is used to create a responsive design?",
                "options": [
                    "django",
                    "rails",
                    "larawell",
                    "bootstrap",], "correct_answer": "bootstrap",
            },
            {
                "id": 6,
                "question": "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
                "options": [
                    "tag",
                    "id",
                    "class",
                    "both class and tag",], "correct_answer": "id",
            },
            {
                "id": 7,
                "question": "Which of the following CSS property is used to make the text bold?",
                "options": [
                    "text-decoration: bold",
                    "font-weight: bold",
                    "font-style: bold",
                    "text-align: bold",], "correct_answer": "font-weight: bold",
            },
            {
                "id": 8,
                "question": "Which of the following are the CSS Extension Prefixes for Webkit?",
                "options": [
                    "-chrome",
                    "-web",
                    "-o-",
                    "-webkit",], "correct_answer": "-webkit",
            },
            {
                "id": 9,
                "question": "Which of the following function defines a linear gradient as a CSS image?",
                "options": [
                    "linear-gradient()",
                    "image()",
                    "grayscale()",
                    "gradient()",], "correct_answer": "linear-gradient()",
            },
            {
                "id": 10,
                "question": "Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?",
                "options": [
                    "padding",
                    "border",
                    "border-width",
                    "border-collapse",], "correct_answer": "border-width",
            },
            {
                "id": 11,
                "question": "Which of the following is not the property of the CSS box model?",
                "options": [
                    "width",
                    "margin",
                    "height",
                    "color",], "correct_answer": "color",
            },
            {
                "id": 12,
                "question": "Which of the following CSS property sets the font size of text?",
                "options": [
                    "text",
                    "font-size",
                    "size",
                    "text-size",], "correct_answer": "font-size",
            },
            {
                "id": 13,
                "question": "Which of the following CSS property specifies the look and design of an outline?",
                "options": [
                    "outline-font",
                    "outline-style",
                    "outline-format",
                    "none of the mentioned",], "correct_answer": "outline-style",
            },
            {
                "id": 14,
                "question": "Which of the following CSS property is used to set the color of the text?",
                "options": [
                    "pallet",
                    "text-decoration",
                    "colour",
                    "color",], "correct_answer": "color",
            },
            {
                "id": 15,
                "question": "Which of the following CSS selector selects the elements that are checked?",
                "options": [
                    "none of the mentioned",
                    ":checked",
                    "E ~ F",
                    "::after",], "correct_answer": ":checked",
            },
            {
                "id": 16,
                "question": "Which of the following property is used to align the text in a table?",
                "options": [
                    "align",
                    "text",
                    "text-align",
                    "none of the mentioned",], "correct_answer": "text-align",
            },
            {
                "id": 17,
                "question": "Which of the following CSS3 property can be used to allow line breaks within words?",
                "options": [
                    "word-break",
                    "word-wrap",
                    "line-wrap",
                    "line-break",], "correct_answer": "word-break",
            },
            {
                "id": 18,
                "question": "Which of the following CSS property is used to specify table borders in CSS?",
                "options": [
                    "border",
                    "table",
                    "table:border",
                    "none of the mentioned",], "correct_answer": "border",
            },
            {
                "id": 19,
                "question": "Which of the following CSS property sets the shadow for a box element?",
                "options": [
                    "box-shadow",
                    "canvas-shadow",
                    "set-shadow",
                    "shadow",], "correct_answer": "box-shadow",
            },
            {
                "id": 20,
                "question": "Which of the following CSS Property controls how an element is positioned?",
                "options": [
                    "position",
                    "static",
                    "fix",
                    "set",], "correct_answer": "position",
            }

        ]
    }
};

let buttons = document.querySelectorAll(".languages button");
let submit = document.getElementById('submit');
var isgreenn = false;
function isgreen() {
    buttons.forEach((button) => {
        if (button.style.backgroundColor == "green") {
            isgreenn = button;
        }
    })
    return isgreenn;
}
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let res = isgreen();
        if (res == false) {
            button.style.backgroundColor = "green";
        } else {
            res.style.backgroundColor = "#E00B2E";
            button.style.backgroundColor = "green";
            console.log("heloo")
        }
        for (let lang in languages) {
            if (lang == button.textContent.trim()) {
                submit.addEventListener('click', () => {
                    submit.style.backgroundColor = "blue";
                    localStorage.setItem('language', JSON.stringify(lang));
                    window.location.href = "file:///C:/Users/LENOVO/Desktop/my%20best%20webstatique/quiz%20page/quiz.html"
                })
            }
        }
    })


})
submit.addEventListener('click', () => {
    let res = isgreen();
    if (res == false) {
        alert("choose a progrmming language !")
    }
})
