import React from 'react';
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getTodos, postTodo} from "./my-api";
import GlobalLoader from "./GlobalLoader";

const QuickStart = () => {
    const queryClient = useQueryClient();

    const query = useQuery("todos", getTodos);

    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    if (query.isLoading) {
        return "Loading...";
    }

    if (query.error) {
        return "Error...";
    }

    return (
        <ul>
            <div>
                <GlobalLoader/>
            </div>
            {query.data.map((todo) => (
                <li key={todo.id}>
                    <p>{todo.title}</p>
                </li>
            ))}
            <button onClick={() => {
                mutation.mutate({
                    id: Date.now(),
                    title: 'react-query',
                })
            }}>Add Todo</button>
        </ul>
    );
};

export default QuickStart;