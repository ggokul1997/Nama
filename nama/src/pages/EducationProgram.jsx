import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../styles/Programs.css';

// Define the custom theme colors
const NAMA_GREEN = 'rgba(133, 196, 85, 1)';
const ACCENT_COLOR_TEXT = '#333'; // Dark text for readability
const LIGHT_GREEN_BG = 'rgba(186, 221, 160, 0.05)';

// Component for a single Level Card in the timeline grid
const LevelCard = ({ level, ages, coreFocus, programs, details, icon }) => (
    <Card
        className="h-100 border-0 p-3 mb-4 level-card"
        style={{
            borderRadius: '15px',
            backgroundColor: LIGHT_GREEN_BG
        }}
    >
        <Card.Body>
            <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                    <h5 className="mb-0" style={{ color: NAMA_GREEN, fontWeight: 700 }}>
                        {level}
                    </h5>
                    <p className="small text-muted">{ages}</p>
                </div>
                <span className="h4" style={{ color: NAMA_GREEN }}>{icon}</span>
            </div>
            
            <p className="fw-bold mb-1" style={{ color: ACCENT_COLOR_TEXT }}>
                Core Focus:
            </p>
            <p className="small text-muted mb-3">{coreFocus}</p>

            {/* Program Teaser (Simulating the program suite preview) */}
            <p className="fw-bold mb-1" style={{ color: ACCENT_COLOR_TEXT }}>
                Program: {programs}
            </p>
            <p className="small text-muted">{details}</p>

        </Card.Body>
    </Card>
);

const EducationalProgram = () => {
    return (
        <Container className="my-5 py-5">
            {/* ------------------------------------------- */}
            {/* HERO SECTION (Above the fold) */}
            {/* ------------------------------------------- */}
            <Row className="mb-5">
                <Col lg={8}>
                    <h1 className="display-4 fw-bold mb-3" style={{ color: ACCENT_COLOR_TEXT }}>
                        Artistic Wellness: The Educational Pathway (K–to–M)
                    </h1>
                    <p className="lead text-muted mb-4">
                        This document outlines a holistic, age-appropriate wellness curriculum designed for educational institutions. The "NAMA Pathway" provides a foundational blend of emotional, physical, and mental well-being that supports academic and personal success at every stage.
                    </p>
                    {/* CTA Buttons - Matching the design spec */}
                    <div className="d-flex gap-3">
                        <Button variant="outline-success" style={{ color: NAMA_GREEN, borderColor: NAMA_GREEN }}>
                            Download Program Overview
                        </Button>
                        <Button 
                            variant="success" 
                            style={{ backgroundColor: NAMA_GREEN, borderColor: NAMA_GREEN }}
                        >
                            Book a Consultation
                        </Button>
                    </div>
                </Col>
            </Row>

            {/* ------------------------------------------- */}
            {/* MAIN CONTENT: TIMELINE GRID & REGISTER FORM */}
            {/* ------------------------------------------- */}
            <Row>
                {/* Left Column: Timeline Grid */}
                <Col lg={12}>
                    {/* Timeline Cards arranged in a two-column grid (g-4 for spacing) */}
                    <Row className="g-4">
                        <Col md={6}>
                            <LevelCard 
                                level="Level 1: The Sprout" 
                                ages="Kindergarten & Early Primary: Ages 4–7"
                                coreFocus="Playful discovery, emotional literacy, and foundational motor skills."
                                programs="Story-Dance Adventure"
                                details="Wellness is 'hidden' inside games, stories, and movement to support early learning."
                                icon="🌿"
                            />
                        </Col>
                        <Col md={6}>
                            <LevelCard 
                                level="Level 3: The Catalyst" 
                                ages="Ages 11–13"
                                coreFocus="Emphasizing resilience & navigating social-emotional changes."
                                programs="Mindful Painting Workshops"
                                details="Program suited to teens for self-expression and stress management."
                                icon="💡"
                            />
                        </Col>
                        <Col md={6}>
                            <LevelCard 
                                level="Level 2: The Explorer" 
                                ages="Ages 8–10"
                                coreFocus="Focus and positive peer relationships."
                                programs="Mindful Painting And Smiles Workshops"
                                details="Simple and engaging movement to improve focus and social skills."
                                icon="🧭"
                            />
                        </Col>
                        <Col md={6}>
                            <LevelCard 
                                level="Level 4: The Phoenix" 
                                ages="Ages 14–18"
                                coreFocus="Exam stress management, confidence, and future readiness."
                                programs="Creative Dialogue"
                                details="Deep breathing and art integration to manage high-pressure situations."
                                icon="🔥"
                            />
                        </Col>
                        <div className=''>
                        <Col md={6} >
                            <LevelCard 
                                level="Level 5: The Visionary" 
                                ages="Higher Ed & Management (18+)"
                                coreFocus="Executive presence, leadership, and authentic connection."
                                programs="The Executive Presence Suite"
                                details="Authentic movement and expression for leadership development."
                                icon="✨"
                            />
                        </Col>
                        </div>
                        <Col md={6}>
                            {/* This is an empty cell for layout balancing, typical in such grids */}
                        </Col>
                    </Row>
                </Col>

                {/* Right Column: Register Form/Sticky Sidebar */}
                
            </Row>
            <Col >
                    <Card className="shadow-sm p-4 sticky-top" style={{ top: '20px', borderRadius: '15px' }}>
                        <Card.Title className="fs-5 fw-bold mb-3" style={{ color: ACCENT_COLOR_TEXT }}>
                            Register for a Program
                        </Card.Title>
                        <Form>
                            {['Full Name', 'Email Address', 'Phone Number'].map((label, index) => (
                                <Form.Group className="mb-3" controlId={`form${label.replace(/\s/g, '')}`} key={index}>
                                    <Form.Control type={label.includes('Email') ? 'email' : 'text'} placeholder={label} />
                                </Form.Group>
                            ))}

                            <Form.Group className="mb-4" controlId="formSelectProgram">
                                <Form.Select>
                                    <option>Select Program Level</option>
                                    <option>Level 1: The Sprout</option>
                                    <option>Level 2: The Explorer</option>
                                    <option>Level 3: The Catalyst</option>
                                    <option>Level 4: The Phoenix</option>
                                    <option>Level 5: The Visionary</option>
                                </Form.Select>
                            </Form.Group>

                            <Button 
                                type="submit" 
                                className="w-100 fw-bold"
                                style={{ backgroundColor: NAMA_GREEN, borderColor: NAMA_GREEN }}
                            >
                                SUBMIT
                            </Button>
                        </Form>
                    </Card>
                </Col>
        </Container>
    );
}

export default EducationalProgram;