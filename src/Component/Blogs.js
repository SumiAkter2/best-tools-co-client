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
                    <p>Ans: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia libero voluptas soluta ab fuga autem incidunt, suscipit consequuntur fugiat pariatur quisquam fugit voluptatibus, commodi, similique animi accusamus obcaecati dolores. Recusandae.</p>
                </div>
            </div>

            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia libero voluptas soluta ab fuga autem incidunt, suscipit consequuntur fugiat pariatur quisquam fugit voluptatibus, commodi, similique animi accusamus obcaecati dolores. Recusandae.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia libero voluptas soluta ab fuga autem incidunt, suscipit consequuntur fugiat pariatur quisquam fugit voluptatibus, commodi, similique animi accusamus obcaecati dolores. Recusandae.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia libero voluptas soluta ab fuga autem incidunt, suscipit consequuntur fugiat pariatur quisquam fugit voluptatibus, commodi, similique animi accusamus obcaecati dolores. Recusandae.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia libero voluptas soluta ab fuga autem incidunt, suscipit consequuntur fugiat pariatur quisquam fugit voluptatibus, commodi, similique animi accusamus obcaecati dolores. Recusandae.</p>
                </div>
            </div>
            <div className="collapse w-96 mx-auto mt-4 rounded-md">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-neutral peer-checked:text-secondary-content">
                    6 What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content bg-secondary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia libero voluptas soluta ab fuga autem incidunt, suscipit consequuntur fugiat pariatur quisquam fugit voluptatibus, commodi, similique animi accusamus obcaecati dolores. Recusandae.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;