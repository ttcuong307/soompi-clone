import { Route, Routes } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from './components/shared/Layout';

import Article from './pages/Article';
import Quiz from './pages/Quiz';

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false
      }
    }
  })

  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="category">
                <Route path="quiz" element={<Quiz/>}/>
              </Route>
              <Route path='article'>
                <Route path="quiz/:id" element={<Article/>}/>
              </Route>
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
