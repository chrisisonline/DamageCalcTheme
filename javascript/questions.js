var addquestions = [
    {
        "id": "q1",
        "type": "radio",
        "title": "1.  To what degree did we satisfy your expectations and deliver what you were looking for?",
        "subquestions": false,
        "description": "Please choose an option that best suits your thoughts",
        "answers": [
            "Poorly",
            "Partially",
            "Reasonably",
            "Greatly",
            "Exceptionally",
        ],
        "txtform": true,
        "formon": [
            "Poorly",
            "Partially"
        ],
        "tf_name": "Question 1 Comments",
        "tf_comments": "Please Explain"
    },
    {
        "id": "q2",
        "type": "radio",
        "title": "2.  This was an agile project with daily scrum meetings. How would you rate the experience in terms of:",
        "subquestions": true,
        "multi": [
        {
            "subtitle": "The amount of detail covered during our meetings",            
            "description": "Please choose an option that best suits your thoughts",
            "answers": [
                "Lacking",
                "Somewhat Lacking",
                "Just Right",
                "Somewhat Overwhelming",
                "Overwhelming"
            ],
            "txtform": false,   
        },
        {
            "subtitle": "Our team's turnaround and response time",            
            "description": "Please choose an option that best suits your thoughts",
            "answers": [
                "Slow",
                "Somewhat Slowly",
                "As Expected",
                "Somewhat Quick",
                "Quick"
            ],
            "txtform": false,   
        }],
    },
    {
    	"id": "q3",
        "type": "radio",
        "title": "3.  Looking at your final product, how did our design meet your expectations?<br>(ie. User expereience, aesthetics, etc...)",
        "subquestions": false,
        "description": "Please choose an option that best suits your thoughts",
        "answers": [
            "Poorly",
            "Partially",
            "Reasonably",
            "Greatly",
            "Exceptionally"
        ],
        "txtform": true,
        "formon": [
            "Poorly",
            "Partially"
        ],
        "tf_name": "Question 3 Comments",
        "tf_comments": "Please Explain"

    },
    {
    	"id": "q4",
        "type": "form",
        "title": "4.  How did Digital Lab help you achieve your business/team goals?<br>(e.g cost saving/revenue generation estimates, key decisions)",
        "subquestions": false,
        "description": "Please leave us your comments",
        "name": "4.  How did Digital Lab help you achieve your business/team goals?",
        "comments": "Comment Here",
        "rows": "5", 

    },
    {
    	"id": "q5",
        "type": "form",
        "title": "5.  Is there anything we could have done differently regarding:",
        "subquestions": true,
        "name": "5.  Is there anything we could have done differently regarding - ", 
        "multi": [
        {
            "subname": "Aesthetic Design",            
            "description": "Please leave us your comments",
            "comments": "Comment Here",
        	"rows": "4"

        },
        {
            "subname": "Technology Used",            
            "description": "Please leave us your comments",
            "comments": "Comment Here",
        	"rows": "4" 
        },
        {
            "subname": "Final Product",            
            "description": "Please leave us your comments",
            "comments": "Comment Here",
        	"rows": "4"

        },],

    },
    {
    	"id": "q6",
        "type": "radio",
        "title": "6.  Based on your experience at this project, how likely are you to recommend the Digital Lab to other teams?",
        "subquestions": false,
        "description": "Please choose an option that best suits your thoughts",
        "answers": [
            "Unlikely",
            "Probably Not",
            "Undecided",
            "Probably",
            "Certainly"
        ],
        "txtform": false,

    },
    ];