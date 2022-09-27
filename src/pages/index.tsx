import { AddTodo, Footer, Header, TodoList } from 'components';

const HomePage = () => (
  <>
    <Header />
    <AddTodo />
    <TodoList />
    {/* <FilterBy /> */}
    <Footer />
  </>
);

export default HomePage;
