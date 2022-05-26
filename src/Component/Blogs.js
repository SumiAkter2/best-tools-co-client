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
                    <p>Ans: Rapidly ship chat & in-app messaging with Stream's highly reliable chat infrastructure. Build scalable in-app chat or activity feeds in days. Get started with Stream today! Grow Your App.</p>
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
                    <p>Ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: localStorage is a web storage object that allows JavaScript sites and apps to keep key-value pairs in a web browser with no expiration date.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    5. localStorage is a web storage object that allows JavaScript sites and apps to keep key-value pairs in a web browser with no expiration date.
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: localStorage is a web storage object that allows JavaScript sites and apps to keep key-value pairs in a web browser with no expiration date.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    6 What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans:localStorage is a web storage object that allows JavaScript sites and apps to keep key-value pairs in a web browser with no expiration date.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;