import { useState } from 'react';

const projectImageUrls = [
  'https://www.iiccnewdelhi.com/public/storage/media/169580385110.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kiy58fj2tjs8b2Un6PdokKbkI9Ntk092Bw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TOliVxeehdRW9qpNqHK9awha26ucJneVMA&s',
  'https://cce.ind.in/wp-content/uploads/2020/05/Tata-hospital-external-FRONT-E-scaled.jpg',
  'https://images.hindustantimes.com/img/2022/04/26/1600x900/b2ee762e-c58d-11ec-8b4f-04e86421d40d_1650997426622.jpg',
  'https://etimg.etb2bimg.com/photo/127977263.cms',
];

const MarqueeImageCard = ({ url }) => {
  const [error, setError] = useState(false);

  return (
    <div className="flex-shrink-0 px-4">
      <div className="w-64 h-48 md:w-80 md:h-60 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
        {!error ? (
          <img
            src={url}
            alt="Project"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
            Image unavailable
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectsMarquee = () => {
  const marqueeItems = [...projectImageUrls, ...projectImageUrls, ...projectImageUrls];

  return (
    <div className="mt-20 w-full overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(-66.66%); }
          to { transform: translateX(0%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="marquee-track">
          {marqueeItems.map((url, idx) => (
            <MarqueeImageCard key={idx} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMarquee;