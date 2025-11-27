import React from 'react';
import { Container, Row, Col, Card, Form, Button, Accordion, Badge } from 'react-bootstrap';

// Define the custom theme colors
const NAMA_GREEN = 'rgba(99, 185, 32, 1)';
const ACCENT_COLOR_TEXT = '#333'; // Dark text for readability
const LIGHT_GREEN_BG = 'rgba(184, 255, 130, 0.05)';

// Component for a single Program Card (using Accordion for breakdown)
const ProgramCard = ({ eventKey, title, tag, coreFocus, breakdown, formatTags }) => (
    <Card className="h-100 border-0 p-3 mb-4" style={{ borderRadius: '15px', backgroundColor: LIGHT_GREEN_BG }}>
        <Card.Body>
            {/* Title and Tag */}
            <div className="d-flex justify-content-between align-items-center mb-2">
                <Card.Title className="fs-5 fw-bold" style={{ color: ACCENT_COLOR_TEXT }}>
                    {title}
                </Card.Title>
                <Badge 
                    pill 
                    style={{ backgroundColor: NAMA_GREEN, color: 'white' }}
                >
                    {tag}
                </Badge>
            </div>
            
            {/* Core Focus Snippet */}
            <p className="text-muted small mb-3">{coreFocus}</p>

            {/* Program Breakdown Accordion */}
            <Accordion defaultActiveKey={eventKey} flush className="mb-3">
                <Accordion.Item eventKey={eventKey} style={{ backgroundColor: LIGHT_GREEN_BG }}>
                    <Accordion.Header className="p-0 border-0">
                        <span className="fw-bold small" style={{ color: ACCENT_COLOR_TEXT }}>Program Breakdown</span>
                    </Accordion.Header>
                    <Accordion.Body className="p-0 pt-2 small text-muted">
                        <ul className="list-unstyled">
                            {breakdown.map((item, index) => (
                                <li key={index} className="mb-1 d-flex align-items-center">
                                    <span style={{ color: NAMA_GREEN, marginRight: '8px' }}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
            {/* Format Tags and Button Row */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="small text-muted d-flex flex-wrap gap-2">
                    {formatTags.map((tag, index) => (
                        <span key={index} className="border border-secondary rounded-pill px-2 py-1">{tag}</span>
                    ))}
                </div>
                <Button 
                    variant="outline-success" 
                    size="sm"
                    style={{ color: NAMA_GREEN, borderColor: NAMA_GREEN }}
                >
                    View Agenda
                </Button>
            </div>

        </Card.Body>
    </Card>
);

const CorporateProgram = () => {
    // Dummy Data based on the UI concept and design brief
    const programsData = [
        {
            eventKey: "0",
            title: "The 'Focus Flow'",
            tag: "Digital Wellness",
            coreFocus: "One sentence from your doc: focus, digital overload, reconnecting with body and breath.",
            breakdown: [
                "Laughter Icebreaker & Smiling Meditation (5 min)",
                "Expressive Flows (10 min)",
                "Guided Mindfulness & Breathwork (30 min)",
            ],
            formatTags: ["60 min", "Virtual", "Up to 50 participants"]
        },
        {
            eventKey: "1",
            title: "The Rhythm Retreat",
            tag: "Team Building",
            coreFocus: "Emphasizes collaboration, partner yoga, and shared performance.",
            breakdown: [
                "Partner Yoga Fundamentals (15 min)",
                "Bollywood-Zumba Burst (15 min)",
                "Group Performance & Integration (30 min)",
            ],
            formatTags: ["90 min", "Onsite", "Up to 30 participants"]
        },
        {
            eventKey: "2",
            title: "Artful Restoration",
            tag: "Burnout Prevention",
            coreFocus: "Stress nervous system reset, burnout prevention, and compassion fatigue.",
            breakdown: [
                "Artistic Yoga & Sound Bath (20 min)",
                "Restorative Yoga Nidra (20 min)",
                "Guided Restoration & Reflection (15 min)",
            ],
            formatTags: ["60 min", "Virtual/Onsite", "Up to 50 participants"]
        },
        {
            eventKey: "3",
            title: "The Joyful Heart",
            tag: "Laughter & Joy",
            coreFocus: "A light, joy-focused option using movement and laughter for energy.",
            breakdown: [
                "Laughter Wellness Icebreaker (10 min)",
                "Movement Games & Joyful Expression (20 min)",
                "Positive Affirmation Closing (10 min)",
            ],
            formatTags: ["45 min", "Virtual", "Large Groups"]
        },
    ];

    return (
        <Container className="my-5 py-5">
            {/* ------------------------------------------- */}
            {/* HERO SECTION & Filters */}
            {/* ------------------------------------------- */}
            <Row className="mb-5">
                <Col lg={8}>
                    <h1 className="display-4 fw-bold mb-3" style={{ color: ACCENT_COLOR_TEXT }}>
                        Corporate <span style={{ color: NAMA_GREEN}}>Programs</span>
                    </h1>
                    <p className="lead text-muted mb-4">
                        Here are six signature programs designed for NAMA Artistic wellbeing blending art forms and expert guidance, to empower your team with wellness, tailored to specific objectives.
                    </p>
                    {/* Filter Chips (Quick implementation using badges/buttons) */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {['All', 'Digital Wellness', 'Team Building', 'Flagship', 'Burnout & Restoration', 'Laughter & Joy'].map((filter, index) => (
                            <Button key={index} variant="outline-success" size="sm" className="rounded-pill" style={{ borderColor: NAMA_GREEN, color: ACCENT_COLOR_TEXT }}>
                                {filter}
                            </Button>
                        ))}
                    </div>
                    <Button 
                        variant="success" 
                        size="lg"
                        className="fw-bold"
                        style={{ backgroundColor: NAMA_GREEN, borderColor: NAMA_GREEN }}
                    >
                        Design a Program for Your Team
                    </Button>
                </Col>
            </Row>

            {/* ------------------------------------------- */}
            {/* MAIN CONTENT: PROGRAMS CATALOG & BOOKING FORM */}
            {/* ------------------------------------------- */}
            <Row>
                {/* Left Column: Program List (Catalog View) */}
                <Col lg={8}>
                    <Row className="g-4">
                        {programsData.map((program, index) => (
                            <Col md={6} key={index}>
                                <ProgramCard {...program} />
                            </Col>
                        ))}
                    </Row>
                </Col>

                {/* Right Column: Booking Form/Sticky Sidebar */}
                <Col lg={4}>
                    <Card className="shadow-lg p-4 sticky-top" style={{ top: '20px', borderRadius: '15px' }}>
                        <Card.Title className="fs-5 fw-bold mb-3" style={{ color: ACCENT_COLOR_TEXT }}>
                            Book Your Corporate Wellness Program
                        </Card.Title>
                        <Form>
                            {['Name', 'Email', 'Phone Number', 'Program of Number', 'Program of Interest'].map((label, index) => (
                                <Form.Group className="mb-3" controlId={`form${label.replace(/\s/g, '')}`} key={index}>
                                    <Form.Control type={label.includes('Email') ? 'email' : 'text'} placeholder={label} />
                                </Form.Group>
                            ))}
                            <Button 
                                type="submit" 
                                className="w-100 fw-bold mt-2"
                                style={{ backgroundColor: NAMA_GREEN, borderColor: NAMA_GREEN }}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CorporateProgram;