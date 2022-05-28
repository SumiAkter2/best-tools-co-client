import React from 'react';

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 mb-4'>
            <div className="collapse w-96 mx-auto mt-6 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    1.How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans:1.Keeping component state local where necessary
                        2.Memoizing React components to prevent unnecessary re-renders
                        3.Code-splitting in React using dynamic import()
                        4.Windowing or list virtualization in React
                        5.Lazy loading images in React.</p>
                </div>
            </div>

            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: There are four main types of state you need to properly manage in your React apps:
                        Local state.
                        Global state.
                        Server state.
                        URL state.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans:I can not use the state directly because in the project every value is different.Likes array,object,string,boolean ,null.So, i use different state by using setProducts or setSomething.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?

                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>To find the product of elements of an array.
                        1.create an empty variable. ( product)
                        2.Initialize it with 1.
                        3.In a loop traverse through each element (or get each element from user) multiply each element to product.
                        4.Print the product..</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    6 What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans:Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;