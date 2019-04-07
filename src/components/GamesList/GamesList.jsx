import React, { useState } from 'react';

import { Row, Col, Container } from 'reactstrap';

import { MODES, ACTIONS } from '../../constants';
import { Game, GameEditor } from '../';
import createGame from '../../store/model';
import useGamesReducer from '../../reducers';

const GamesList = () => {
    const [editorMode, setEditorMode] = useState(MODES.ADD);
    const [state, dispatch] = useGamesReducer();

    const resetEditor = () => {
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: createGame('', '', false),
        });

        setEditorMode(MODES.ADD);
    };

    const setEditorState = (data) => {
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: data,
        });

        setEditorMode(MODES.UPDATE);
    };

    const addGame = () => {
        dispatch({
            type: ACTIONS.GAME_CREATE,
            payload: state.currentGame,
        });

        resetEditor();
    };

    const deleteGame = (id) => {
        dispatch({
            type: ACTIONS.GAME_DELETE,
            payload: id,
        });
    };

    const updateGame = () => {
        dispatch({
            type: ACTIONS.GAME_UPDATE,
            payload: state.currentGame,
        });

        resetEditor();
    };

    return (
        <Container>
            <GameEditor mode={editorMode} onAddGame={addGame} onUpdateGame={updateGame} />
            <Col style={{ paddingTop: '20px' }}>
                <Row>
                    <Col>
                        <h3>Games List</h3>
                    </Col>
                </Row>
                <Row>
                    {state.games.map((game) => (
                        <Game
                            key={game.id}
                            data={game}
                            onEdit={(data) => setEditorState(data)}
                            onDelete={(data) => deleteGame(data.id)}
                        />
                    ))}
                </Row>
            </Col>
        </Container>
    );
};

export default GamesList;
