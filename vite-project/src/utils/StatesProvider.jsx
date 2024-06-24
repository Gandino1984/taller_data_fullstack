import GeneralContext from './GeneralContext';
import { useState } from 'react';

function StatesProvider({children}){


    const [formOpen, setformOpen] = useState(false)

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

