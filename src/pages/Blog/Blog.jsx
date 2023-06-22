import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div className='grid lg:grid-cols-2 justify-center text-center gap-6'>
                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In other words, an application can exchange a valid refresh token for a new access token.</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>Compare SQL and NoSQL databases?</h2>
                    <p> SQL databases are not suited for hierarchical data storage.	NoSQL databases are best suited for hierarchical data storage. </p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>What is express js? What is Nest JS?</h2>
                    <p>Express js is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Nest JS is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI..</p>
                </div>

                <div className='bg-gradient-to-r from-sky-600 to-indigo-500 p-6 drop-shadow-md rounded'>
                    <h2 className='font-bold text-2xl'>What is MongoDB aggregate and how does it work?</h2>
                    <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. Mongoose's aggregate() function returns an instance of Mongoose's Aggregate class. Aggregate instances are thenable, so you can use them with await and promise chaining. The Aggregate class also supports a chaining interface for building aggregation pipelines.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Blog;