import React from "react";
import PageTitle from "../../Shared/PageTitle";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = [
    {
      _id: 1,
      title: "How will you improve the performance of a React Application?",
      content: (
        <ul>
          <li>Keeping component state local where necessary.</li>
          <li>Memoizing React components to prevent unnecessary re-renders.</li>
          <li>Code-splitting in React using dynamic import()</li>
          <li>Windowing or list virtualization in React.</li>
          <li>Lazy loading images in React.</li>
        </ul>
      ),
    },
    {
      _id: 2,
      title:
        "What are the different ways to manage a state in a React application?",
      content: (
        <ul>
          <li>Local state.</li>
          <li>Global state.</li>
          <li>Server state.</li>
          <li>URL state.</li>
        </ul>
      ),
    },
    {
      _id: 3,
      title: "How does prototypical inheritance work?",
      content:
        "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.",
    },
    {
      _id: 4,
      title:
        "Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts",
      content:
        "One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.",
    },
    {
      _id: 5,
      title:
        "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
      content:
        "We can use JS-map on the array to return the search result based on the product name. i.e., products.map(product=>product.name === 'name');",
    },
    {
      _id: 6,
      title: "What is a unit test? Why should write unit tests?",
      content:
        'Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.',
    },
  ];
  return (
    <div className="container mx-auto pb-6">
      <PageTitle>Blog</PageTitle>
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          title={blog.title}
          content={blog.content}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Blog;
