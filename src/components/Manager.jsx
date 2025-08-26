import { useState } from 'react';
import axios from 'axios';

const Manager = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/url', { originalUrl });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">🔗<span>URL</span><span className='text-red-500'>shortner</span>
</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter long URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Shorten
          </button>
        </form>
        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-gray-700">Short URL:</p>
            <a
              href={shortUrl}
              className="text-indigo-600 font-medium hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manager;