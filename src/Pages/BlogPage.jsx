import BlogCTA from '../Components/Blogs/BlogCTA';
import BlogHero from '../Components/Blogs/BlogHero';
import BlogPosts from '../Components/Blogs/BlogPosts';
const BlogPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <BlogHero />
      <BlogPosts />
      <BlogCTA />
    </div>
  );
};
export default BlogPage;
