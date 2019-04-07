import React from 'react';

import { Col, Row, Button, ButtonToolbar } from 'reactstrap';
import './game.css';

const Game = ({ data, onEdit, onDelete }) => {
    return (
        <Col md={5} xs={12} className="game-card">
            <Row>
                <Col md={8} xs={8} className="game-card-content">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </Col>
                <Col md={4} xs={4} className="game-card-content">
                    <ButtonToolbar className="game-card-content-buttons">
                        <Button
                            className="action-button"
                            color="info"
                            onClick={() => onEdit({ ...data })}
                        >
                            Edit
                        </Button>
                        <Button
                            className="action-button"
                            color="danger"
                            onClick={() => onDelete({ ...data })}
                        >
                            Delete
                        </Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        </Col>
    );
};

export default Game;
