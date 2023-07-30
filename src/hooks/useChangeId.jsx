import { useState } from "react";

function useChangeId( key, initialLists = []){
    const [ list, setlists ] = useState(initialLists);

    const onChange = ( id, value )=>{
        setlists([...list].map(el=>{
            return el.id !== id ? el : {...el, [key]:value};
        }));
    }

    return [ list, onChange ];
}

export default useChangeId;