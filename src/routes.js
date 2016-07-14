import Home from 'components/Home/home';
import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import NotFound from 'components/NotFound/notFound';

const routes = {
  '/': {
    component: Home
  },
  '/posts': {
    component: Posts
  },
  '/post/:id': {
    name: 'post',
    component: Post
  },
  '*': {
    component: NotFound
  }
};

export default routes;
