import GeneralContext from './GeneralContext';
import { useState } from 'react';

function StatesProvider({children}){


    const [formOpen, setformOpen] = useState(false)
    const [states, setStates] = useState(null)

    const contextValue = {
    formOpen,
    setformOpen
    };

    return (
            <GeneralContext.Provider value={contextValue}>
                {children}
            </GeneralContext.Provider>
    );
}

export default StatesProvider

