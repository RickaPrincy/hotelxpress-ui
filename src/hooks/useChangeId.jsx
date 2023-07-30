import { useState } from "react";

function useChangeId( key, initialLists = []){
    const [ list, setLists ] = useState(initialLists);

    const onChange = ( id, value )=>{
        setLists([...list].map(el=>{
            return el.id !== id ? el : {...el, [key]:value};
        }));
    }

    return [ list, setLists, onChange ];
}

export default useChangeId;