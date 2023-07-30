import { useState } from "react";

function useChangeId( key, compare, initialLists = []){
    const [ list, setLists ] = useState(initialLists);

    const onChange = ( id, value )=>{
        setLists([...list].map(el=>{
            return el[compare] !== id ? el : {...el, [key]:value};
        }));
    }

    return [ list, setLists, onChange ];
}

export default useChangeId;