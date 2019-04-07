import { useStore } from '../store';
import { ACTIONS } from '../constants';

const useGamesReducer = () => {
    const [state, setState] = useStore();

    const dispatch = ({ type, payload }) => {
        switch (type) {
            // Entity Actions
            case ACTIONS.GAME_SET_VALUE:
                setState((state) => ({
                    ...state,
                    currentGame: { ...state.currentGame, ...payload },
                }));
                break;
            // List Actions
            case ACTIONS.GAME_CREATE:
                setState((state) => ({
                    ...state,
                    games: [...state.games, payload],
                }));
                break;
            case ACTIONS.GAME_UPDATE:
                setState((state) => ({
                    ...state,
                    games: [
                        ...state.games.map((g) => (g.id === state.currentGame.id ? payload : g)),
                    ],
                }));
                break;
            case ACTIONS.GAME_DELETE:
                setState((state) => ({
                    ...state,
                    games: state.games.filter((g) => g.id !== payload),
                }));
                break;
            default:
                throw new Error(`${ACTIONS.UNDEFINED} action dispatched!`);
        }
    };

    return [state, dispatch];
};

export default useGamesReducer;
