import { useState } from "react";

function useToggle(initialVal)
{
    const [st, setSt] = useState(initialVal);
    const toggle = () =>
    {
        return setSt(!st);
    }
    return [st, toggle];
}

export default useToggle;