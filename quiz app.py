def run_quiz(questions):
    score = 0

    for i, q in enumerate(questions, 1):
        print(f"\nQuestion {i}: {q['question']}")
        for option in q['options']:
            print(option)

        answer = input("Enter your answer (A/B/C/D): ").strip().upper()
        if answer == q['answer']:
            print("✅ Correct!")
            score += 1
        else:
            print(f"❌ Wrong! Correct answer is {q['answer']}")

    print(f"\n🎯 You got {score} out of {len(questions)} correct.")
    percentage = (score / len(questions)) * 100
    print(f"Score: {percentage:.2f}%")

# List of quiz questions
quiz_questions = [
    {
        "question": "What is the capital of France?",
        "options": ["A. Paris", "B. Berlin", "C. Madrid", "D. Rome"],
        "answer": "A"
    },
    {
        "question": "Which programming language is used for web apps?",
        "options": ["A. Python", "B. JavaScript", "C. C++", "D. Java"],
        "answer": "B"
    },
    {
        "question": "Who developed Python?",
        "options": ["A. Dennis Ritchie", "B. James Gosling", "C. Guido van Rossum", "D. Elon Musk"],
        "answer": "C"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["A. Earth", "B. Venus", "C. Mars", "D. Jupiter"],
        "answer": "C"
    },
    {
        "question": "What does HTML stand for?",
        "options": ["A. Hyper Text Markup Language", "B. Home Tool Markup Language", "C. Hyperlinks Text Management Language", "D. Hyper Transfer Markup Language"],
        "answer": "A"
    },
    {
        "question": "What will be the output of the following code snippet? print(2*3 + (5 + 6)*(1 + 1))",
        "options": ["A. 129", "B. 8", "C. 121", "D. None"],
        "answer": "A"

    },
    {
        "question" : "What is the maximum length of a Python identifier?",
        "options" : ["A. 32", "B. 16", "C. 128","D. NONE"],
        "answer" : "B"


    },
]

# Start the quiz
run_quiz(quiz_questions)
