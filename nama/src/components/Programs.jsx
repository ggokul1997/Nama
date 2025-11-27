import React from 'react';
// Import necessary React Bootstrap components
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Programs.css';

// Define the custom green color for styling consistency
const NAMA_GREEN = 'rgb(186, 221, 160)';
const ACCENT_COLOR_TEXT = '#333'; // Dark text for readability

// Utility component for the custom colored chips/pills
const CustomChip = ({ children, isPill = false, customBg, customColor }) => {
    const defaultBg = isPill ? '#f8f9fa' : customBg || NAMA_GREEN;
    const defaultColor = isPill ? '#6c757d' : customColor || 'white';
    
    return (
        <span 
            className={`d-inline-block px-3 py-1 me-2 mb-2 rounded-pill small ${isPill ? 'border border-light' : ''}`}
            style={{ 
                backgroundColor: defaultBg, 
                color: defaultColor, 
                fontWeight: isPill ? 'normal' : 'bold',
                // Adjusting line-height for visual organic feel
                lineHeight: '1.4' 
            }}
        >
            {children}
        </span>
    );
};


const Programs = () => {
    const navigate = useNavigate();
    return (
        // Use a standard Bootstrap container and add vertical padding
        <Container className="my-5 py-5">
            {/* Section Title and Subtitle */}
            <div className="text-center mb-5 pb-3">
                <h2 className="display-4 fw-bold" style={{ color: ACCENT_COLOR_TEXT }}>
                    Our Signature Programs
                </h2>
                <p className="lead text-muted">
                    Creative wellness for learners and leaders.
                </p>
            </div>
            
            {/* Card Container - Use Row and Col for responsive side-by-side layout */}
            <Row className="g-4 g-lg-5">
                
                {/* ------------------------------------------- */}
                {/* CARD 1: Educational Pathway (K–to–M) */}
                {/* ------------------------------------------- */}
                <Col lg={6}>
                    <Card
                        className="h-100 border-0 shadow-lg p-3 program-card"
                        style={{ 
                            borderRadius: '30px', 
                            // Simulate soft gradient using a light background tint
                            backgroundColor: 'rgba(186, 221, 160, 0.05)'
                        }}
                    >
                        <Card.Body className="d-flex flex-column justify-content-between">
                            
                            {/* Icon and Tag */}
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <span className="h3 me-2" style={{ color: NAMA_GREEN }}>🌱</span> {/* Sprout Icon */}
                                <CustomChip customBg="rgba(186, 221, 160, 0.2)" customColor={ACCENT_COLOR_TEXT} isPill={false}>
                                    For Schools & Colleges
                                </CustomChip>
                            </div>

                            {/* Title and Summary */}
                            <div>
                                <Card.Title className="fs-3 fw-bold mb-3" style={{ color: ACCENT_COLOR_TEXT }}>
                                    NAMA Artistic Wellness: The Educational Pathway (K–to–M)
                                </Card.Title>
                                <Card.Text className="text-muted mb-4">
                                    A progressive arts-based wellness journey from Kindergarten to Management school, blending dance, yoga, art, laughter and meditation to support emotional, physical and mental well-being at every age.
                                </Card.Text>

                                {/* Timeline Chips */}
                                <div className="mb-4">
                                    <CustomChip>The Sprout (4–7)</CustomChip>
                                    <CustomChip>The Explorer (8–10)</CustomChip>
                                    <CustomChip>The Phoenix (14–18)</CustomChip>
                                    <CustomChip>The Visionary (18+)</CustomChip>
                                </div>
                                
                                {/* Teaser Pills */}
                                <div className="mb-5">
                                    <CustomChip isPill={true}>Story-Dance Adventure</CustomChip>
                                    <CustomChip isPill={true}>Exam Stress-Buster</CustomChip>
                                    <CustomChip isPill={true}>The Mindful Leader</CustomChip>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-100 fw-bold rounded-pill"
                                style={{ backgroundColor: NAMA_GREEN, borderColor: NAMA_GREEN }}
                                onClick={() => navigate('/education')}
                            >
                                Explore Education Pathway
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* ------------------------------------------- */}
                {/* CARD 2: Corporate Programs */}
                {/* ------------------------------------------- */}
                <Col lg={6}>
                    <Card
                        className="h-100 border-0 shadow-lg p-3 program-card"
                        style={{ 
                            borderRadius: '30px',
                            // Keep this one white or a very light gray for visual contrast
                            backgroundColor: '#ffffff'
                        }}
                    >
                        <Card.Body className="d-flex flex-column justify-content-between">
                            
                            {/* Icon and Tag */}
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <span className="h3 me-2" style={{ color: NAMA_GREEN }}>💼</span> {/* Briefcase/Team Icon */}
                                <CustomChip customBg="rgba(186, 221, 160, 0.2)" customColor={ACCENT_COLOR_TEXT} isPill={false}>
                                    For Organizations & Teams
                                </CustomChip>
                            </div>

                            {/* Title and Summary */}
                            <div>
                                <Card.Title className="fs-3 fw-bold mb-3" style={{ color: ACCENT_COLOR_TEXT }}>
                                    NAMA Artistic Wellness: Corporate Programs
                                </Card.Title>
                                <Card.Text className="text-muted mb-4">
                                    Artistic wellness experiences for modern workplaces – from focus & digital balance to deep nervous system restoration, team cohesion and flagship retreats.
                                </Card.Text>
                                
                                {/* Audience & Outcomes Chips */}
                                <div className="mb-4">
                                    <CustomChip>Focus & Digital Wellness</CustomChip>
                                    <CustomChip>Team Building</CustomChip>
                                    <CustomChip>Burnout Prevention</CustomChip>
                                    <CustomChip>Flagship Retreat</CustomChip>
                                </div>

                                {/* Teaser Pills */}
                                <div className="mb-5">
                                    <CustomChip isPill={true}>Focus Flow</CustomChip>
                                    <CustomChip isPill={true}>The Rhythm Retreat</CustomChip>
                                    <CustomChip isPill={true}>Artful Restoration</CustomChip>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-100 fw-bold rounded-pill"
                                style={{ backgroundColor: NAMA_GREEN, borderColor: NAMA_GREEN }}
                                onClick={() => navigate('/corporate')}
                            >
                                Explore Corporate Programs
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Programs;