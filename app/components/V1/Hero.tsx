export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-[80vh] justify-center items-center">
      <div className="md:w-[50%] flex justify-center md:ml-[5rem] flex-col text-center md:text-left ">
        <h1 className="md:w-[70%] text-[1.5rem] md:text-[2rem] mb-[0.1rem] font-semibold">Anuj Bhatt</h1> 
        <h2 className="md:w-[70%] text-primary-complementry text-sm mb-[2rem]">Fullstack Developer</h2>
        <h3 className="md:w-[70%] text-md leading-8 text-justify md:text-left">
          Hi, I'm Anuj Bhatt, a Full Stack Developer 
          ☕️ specializing in the MERN stack. I craft scalable, stylish web apps 
          💻 and enjoy solving complex problems with creativity 
          🎨. Always aiming to make the web a better place, one bug fix at a time! 
          🐞✨
        </h3>
      </div>
      <div className="md:w-[50%] flex justify-center items-center relative h-full mt-[1rem]">
        <img className='h-[25vh] md:h-1/2 shadow-black rounded-[50%]' src='/gmaildp.gif'/>        
      </div>
    </div>
  )
}
