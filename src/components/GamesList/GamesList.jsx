import React, { useState } from 'react';

import {
    Row,
    Col,
    Button,
    Container,
    Input,
    FormGroup,
    Label,
} from 'reactstrap';

import Game from '../Game/Game';
import createGame from '../../store/model';
import { ACTIONS, MODES } from '../../constants';
import useGamesReducer from '../../reducers/index';

const GamesList = () => {
    const [state, dispatch] = useGamesReducer();
    const [formMode, setFormMode] = useState(MODES.ADD);

    const resetForm = () => {
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: createGame('', '', false),
        });
        setFormMode(MODES.ADD);
    };

    const setFormState = (data) => {
        setFormMode(MODES.UPDATE);
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: data,
        });
    };

    const setName = (value) => {
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: { name: value },
        });
    };

    const setVendor = (value) => {
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: { vendor: value },
        });
    };

    const setIsMultiplayer = (value) => {
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: { isMultiplayer: value },
        });
    };

    const handleClick = () => {
        switch (formMode) {
            case MODES.ADD:
                return addGame();
            case MODES.UPDATE:
                return updateGame();
            default:
                break;
        }
    };

    const addGame = () => {
        dispatch({
            type: ACTIONS.GAME_CREATE,
            payload: state.currentGame,
        });
        resetForm();
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
        setTimeout(() => resetForm(), 1000);
    };

    return (
        <Container>
            <div>
                <FormGroup>
                    <Button
                        color={formMode === MODES.ADD ? 'success' : 'warning'}
                        onClick={handleClick}
                    >
                        {formMode === MODES.ADD
                            ? 'Add New Game'
                            : 'Update Game'}
                    </Button>
                </FormGroup>
                <FormGroup>
                    <Input
                        placeholder="Name"
                        value={state.currentGame.name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        placeholder="Vendor"
                        value={state.currentGame.vendor}
                        onChange={(e) => setVendor(e.currentTarget.value)}
                    />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input
                            type="checkbox"
                            checked={state.currentGame.isMultiplayer}
                            onChange={(e) => {
                                setIsMultiplayer(e.currentTarget.checked);
                            }}
                        />{' '}
                        Multiplayer support
                    </Label>
                </FormGroup>
            </div>
            <Col style={{ paddingTop: '20px' }}>
                <Row>
                    <h3>Games List</h3>
                </Row>
                <Row>
                    {state.games.map((game) => (
                        <Game
                            key={game.id}
                            data={game}
                            onEdit={(data) => setFormState(data)}
                            onDelete={(data) => deleteGame(data.id)}
                        />
                    ))}
                </Row>
            </Col>
        </Container>
    );
};

export default GamesList;
