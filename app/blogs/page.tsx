import React from "react";

function page() {
    return (
        <div className="mt-24 p-20 h-fit   w-full flex items-center flex-wrap ">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-md ">
              <div className="bg-blue-600 text-white py-2 px-4">
                  <span className="text-sm">June 23, 2025</span>
              </div>
              <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      Today's Tech Buzz
                  </h2>
                  <p className="text-gray-600">
                      Discover breakthrough trends in the tech world with our
                      daily concise summary of top headlines...
                  </p>
              </div>
              <div className="p-6 text-right">
                  <a
                      href="#"
                      className="text-blue-600 font-semibold hover:underline"
                  >
                      Read More &rarr;
                  </a>
              </div>
          </div>
        </div>
    );
}

export default page;
