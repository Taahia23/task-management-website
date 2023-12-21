import { useEffect, useState } from 'react';

const useTodo = () => {
    const [toDo, setToDo] = useState([]);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        fetch('http://localhost:5000/toDo')
            .then(res => res.json())
            .then(data => {
                setToDo(data);
                setLoading(false);
            })
    }, [toDo, loading]);

    return [toDo, loading]
};

export default useTodo;