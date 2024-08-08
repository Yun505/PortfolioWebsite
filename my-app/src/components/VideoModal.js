import React from 'react';

export default function VideoModal({ onClose, videoSrc, description }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          {videoSrc.startsWith('https://www.youtube.com/') ? (
            <iframe
              width="100%"
              height="auto"
              src={videoSrc.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[75vh] rounded-lg"
            ></iframe>
          ) : (
            <video
              controls
              src={videoSrc}
              className="w-full h-[75vh] rounded-lg"
            />
          )}
          <p className="mt-4 text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
