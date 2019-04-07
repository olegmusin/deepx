import React from 'react';
import { Col, Button, Input, FormGroup, Label } from 'reactstrap';

import { MODES, ACTIONS } from '../../constants';
import useGamesReducer from '../../reducers';

const GameEditor = ({ onAddGame, onUpdateGame, mode }) => {
    const [state, dispatch] = useGamesReducer();

    const updateCurrentGame = (data) => {
        dispatch({
            type: ACTIONS.GAME_SET_VALUE,
            payload: data,
        });
    };

    const setName = (value) => updateCurrentGame({ name: value });

    const setVendor = (value) => updateCurrentGame({ vendor: value });

    const setIsMultiplayer = (value) => updateCurrentGame({ isMultiplayer: value });

    const handleClick = () => {
        switch (mode) {
            case MODES.ADD:
                return onAddGame();
            case MODES.UPDATE:
                return onUpdateGame();
            default:
                break;
        }
    };

    return (
        <Col>
            <FormGroup>
                <Button color={mode === MODES.ADD ? 'success' : 'warning'} onClick={handleClick}>
                    {mode === MODES.ADD ? 'Add New Game' : 'Update Game'}
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
        </Col>
    );
};

export default GameEditor;
