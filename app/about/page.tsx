import React from "react";

function page() {
  const faqData = [
    {
      question: "What is this website about?",
      answer: "Our platform delivers AI-powered summaries of the latest tech news, ensuring you stay informed without spending hours reading multiple sources."
    },
    {
      question: "Why did we create this platform?",
      answer: "We aim to simplify tech news consumption. Our AI scans, analyzes, and condenses key updates, saving you time and effort."
    },
    {
      question: "How does it work?",
      answer: "AI scans top tech news sources daily, summarizes key updates into concise reports, and publishes summaries on our blog for easy reading."
    },
    {
      question: "Why choose us?",
      answer: "AI-Powered Summaries – No bias, just insights. Time-Saving – Get updated in minutes. Daily & Weekly Digests – Never miss a trend. Free & Open – No paywalls, just information."
    },
    {
      question: "Who are we?",
      answer: "We are passionate tech enthusiasts dedicated to making news consumption easier and more efficient with AI."
    },
    {
      question: "How can you stay updated?",
      answer: "Subscribe for updates and follow us on social media to get the latest tech trends effortlessly!"
    }
  ];
    return (
        <div className="w-full min-h-screen p-8 mt-24">
            <div>
                <h1 className="text-4xl">
                    Your Daily & Weekly Tech Summaries {"–"} Smart, Fast, and
                    Reliable
                </h1>
                <p className="text-2xl p-8">
                    Our mission is to provide you with the best tech summaries
                    every day and every week. We aim to provide you with the
                    most important information in the tech world in a way that
                    is easy to understand and consume.
                </p>
            </div>
            
            <div className="p-8">
                <h2 className="text-4xl font-bold text-center mb-6">
                    About Our Platform
                </h2>
                {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg mb-4 bg-gradient-to-b from-[#bdbdbd] to-[#fff]"
                    >
                      <h3 className="text-2xl font-semibold flex items-center">
                         {faq.question}
                      </h3>
                      <p className="p-8 text-xl">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;
