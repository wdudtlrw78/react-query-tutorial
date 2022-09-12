import {rest} from 'msw';

const todos = [
    {
        id: '1',
        title: 'momo1',
    },
    {
        id: '2',
        title: 'momo2',
    },
    {
        id: '3',
        title: 'momo3',
    },
    {
        id: '4',
        title: 'momo4',
    },
    {
        id: '5',
        title: 'momo5',
    },
]

export const handlers = [
    rest.get('http://localhost:3000/api/todos', async (req, res, ctx) => {
        return res(ctx.json(todos));
    }),

    rest.post('http://localhost:3000/api/todo', async (req, res, ctx) => {
        const {todo} = req.body;
        console.log(JSON.stringify(todo));
        todos.push(todo);
        return res(ctx.json(true));
    }),

    rest.get('http://localhost:3000/api/projects', async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page');
        return res(
            ctx.json({
                projects: [
                    {
                        id: `1 ${pageIndex}`,
                        name: `momo1-${pageIndex}`,
                    },
                    {
                        id: `2 ${pageIndex}`,
                        name: `momo2-${pageIndex}`,
                    },
                    {
                        id: `3 ${pageIndex}`,
                        name: `momo3-${pageIndex}`,
                    },
                    {
                        id: `4 ${pageIndex}`,
                        name: `momo4-${pageIndex}`,
                    },
                    {
                        id: `5 ${pageIndex}`,
                        name: `momo5-${pageIndex}`,
                    },
                ],
                hasMore: pageIndex < 4,
                nextCursor: parseInt(pageIndex, 10) + 1,
            })
        )
    }),

];