import * as React from 'react';

interface Props {
    children: React.ReactNode;
}

export type UtilsContextType = {
    is_loading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UtilsContext = React.createContext<UtilsContextType | null>({
    is_loading: false,
    setIsLoading: () => { }
});

const UtilsProvider: React.FC<Props> = ({children}) => {     
    const [is_loading, setIsLoading] = React.useState(false);
    return (        
        <UtilsContext.Provider value={{ is_loading, setIsLoading }}>
            {children}
        </UtilsContext.Provider>
    )
}

export default UtilsProvider;