import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import Paginated from "./components/Example/Paginated";
import InfiniteScroll from "./components/Example/InfiniteScroll";

const { worker } = require('./mocks/brwoser');
worker.start();

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                {/*<Example/>*/}
                {/*<QuickStart/>*/}
                {/*<Paginated/>*/}
                <InfiniteScroll/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
