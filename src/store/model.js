import uuidv4 from 'uuid';

const createGame = (name, vendor, isMultiplayer) => {
    return {
        id: uuidv4(),
        name,
        vendor,
        isMultiplayer,
    };
};

export default createGame;
