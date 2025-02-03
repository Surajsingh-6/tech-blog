"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";
import Link from "next/link";
// Define types for the articles and API response
interface Article {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    date: string;
    websiteUrl: string;
}

interface ApiResponse {
    member: Article[];
}

function Page() {
    const [articles, setArticles] = useState<Article[]>([]); // Typed state for articles
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    // Fetch data inside useEffect to run when the component mounts
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    `https://www.api.thefreenewsapi.com/api/news/v1?apiKey=1b184-b556c-1efcf-e0e99-eb7d9&category=Technology`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data: ApiResponse = await res.json(); // Cast the response to the ApiResponse type
                setArticles(data.member); // Update articles state
                setLoading(false); // Set loading to false after data is fetched
            } catch (error: unknown) {
                // Error handling with typing
                if (error instanceof Error) {
                    setError(error.message); // Access error message safely
                } else {
                    setError("An unknown error occurred");
                }
                setLoading(false); // Set loading to false even in case of error
            }
        }

        fetchData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Handle loading and error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="mt-24 p-20 h-fit w-full flex justify-evenly items-center flex-wrap">
            {articles.map((article, index) => (
                <Link href={article.websiteUrl} key={index}  className=" w-1/4 h-[30rem] m-4 rounded-lg border border-gray-500 bg-[var(--color-2)] shadow-lg">
                    <article key={index}>
                        <img
                            alt="Unable to load image"
                            src={article.imageUrl}
                            className="h-56 w-full object-cover"
                        />
                        <div className="p-4 sm:p-6">
                            <div >
                                <h3 className="text-lg font-medium text-[var(--color-1)]">
                                    {article.title}
                                </h3>
                            </div>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-[var(--color-1)]">
                                {article.description}
                            </p>
                            <div
                                
                                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                            >
                                Find out more
                                <span
                                    aria-hidden="true"
                                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}

export default Page;
