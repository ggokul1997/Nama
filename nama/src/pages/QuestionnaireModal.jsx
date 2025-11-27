import React, { useState } from 'react';
import { Modal, Button, Form, Stack } from 'react-bootstrap';

// Define the custom theme colors
const NAMA_GREEN = 'rgba(146, 215, 94, 1)';
const ACCENT_COLOR_TEXT = '#333'; // Dark text for readability

const QuestionnaireModal = ({ show, handleClose }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedValues, setSelectedValues] = useState(Array(10).fill(null)); // State for selected values for 10 questions

    const questions = [
        {
            question: "1. How would you rate our service?",
            options: ["Excellent", "Good", "Average", "Poor"]
        },
        {
            question: "2. How likely are you to recommend us?",
            options: ["Very Likely", "Likely", "Unlikely", "Very Unlikely"]
        },
        {
            question: "3. How satisfied are you with our product range?",
            options: ["Very Satisfied", "Satisfied", "Dissatisfied", "Very Dissatisfied"]
        },
        {
            question: "4. How do you find our pricing?",
            options: ["Very Reasonable", "Reasonable", "Expensive", "Very Expensive"]
        },
        {
            question: "5. How easy is it to navigate our website?",
            options: ["Very Easy", "Easy", "Difficult", "Very Difficult"]
        },
        {
            question: "6. How would you rate our customer support?",
            options: ["Excellent", "Good", "Average", "Poor"]
        },
        {
            question: "7. How often do you use our service?",
            options: ["Daily", "Weekly", "Monthly", "Rarely"]
        },
        {
            question: "8. What features do you value the most?",
            options: ["Quality", "Price", "Variety", "Customer Service"]
        },
        {
            question: "9. What improvements would you like to see?",
            options: ["More Products", "Better Prices", "Improved Service", "No Changes"]
        },
        {
            question: "10. Any additional comments?",
            options: ["Yes", "No", "Maybe", "Not Sure"]
        }
    ];

    const handleRadioChange = (index, value) => {
        const newSelectedValues = [...selectedValues];
        newSelectedValues[index] = value;
        setSelectedValues(newSelectedValues);

        // Move to the next question if not the last one
        if (index < questions.length - 1) {
            setCurrentQuestionIndex(index + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            centered 
            backdrop="static" 
            keyboard={false} 
            className="questionnaire-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Please help us in bettering our service and website</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{questions[currentQuestionIndex].question}</h5>
                <div className="d-flex flex-column mb-3">
                    {questions[currentQuestionIndex].options.map((option, idx) => (
                        <Form.Check
                            key={idx}
                            type="radio"
                            id={`radio-${currentQuestionIndex}-${idx}`}
                            label={option}
                            name={`question-${currentQuestionIndex}`}
                            value={option}
                            checked={selectedValues[currentQuestionIndex] === option}
                            onChange={() => handleRadioChange(currentQuestionIndex, option)}
                        />
                    ))}
                </div>
                <Stack direction="horizontal" gap={3} className="justify-content-end mt-4">
                    <Button variant="light" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                        Previous
                    </Button>
                    {currentQuestionIndex === questions.length - 1 ? (
                        <Button variant="success" onClick={handleClose} className="px-4 py-2 rounded-pill fw-bold">
                            Finish
                        </Button>
                    ) : (
                        <Button variant="success" onClick={handleNext} className="px-4 py-2 rounded-pill fw-bold">
                            Next
                        </Button>
                    )}
                </Stack>
            </Modal.Body>
        </Modal>
    );
}

export default QuestionnaireModal;