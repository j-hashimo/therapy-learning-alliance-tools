import CardiologyData from "./CardiologyData";

export const Data = [
  {
    name: 'Cardiology',
    content: <div>{CardiologyData.map(card => (
      <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
        <a href={card.link}>
          <div className='flex'>
            <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.number}</p>
            <div className='flex-col'>
              <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
              <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>{card.linkDescription}</p>
            </div>
          </div>
        </a>
      </div>
    ))}</div>
      
  },
  {
    name: 'Endocrinology',
    content: <div>lorem</div>
  },
  {
    name: 'Gastroenterology',
    content: <div>{CardiologyData.map(card => (
      <div key={card.linkTitle} className="w-full p-6 bg-[#27262c]">
        <a href={card.link}>
          <div className='flex'>
            <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.number}</p>
            <div className='flex-col'>
              <p className="text-2xl hover:underline dark:text-blue-300 text-blue-700 text-left cursor-pointer">{card.linkTitle}</p>
              <p className='text-md text-left text-white w-full shadow-lg pb-2 text-slate-400'>{card.linkDescription}</p>
            </div>
          </div>
        </a>
      </div>
    ))}</div>
  },
  {
    name: 'Infectious Diseases',
    content: <div className='text-red-900'>asdgfasdgd ghsffharthjytjfhgdf</div>
  },
  {
    name: 'Respiratory',
    content: <div className='text-red-900'>breathe air</div>
  },
  {
    name: 'Rheumatology',
    content: <div className='text-green-900'>skl;djgoierjho</div>
  },
];
