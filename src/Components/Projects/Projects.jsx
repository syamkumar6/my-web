import gitIcon from '../../assets/github.svg'
import omegaImg from '../../assets/omega.png'
import gucciImg from '../../assets/gucci.png'

function Projects() {
  return (
    <div id="projects" className=" w-full bg-gray-100 py-8">
        <div className="col-span-2  p-4 flex flex-col justify-center items-center gap-4 mb-8">
            <h5 className="text-4xl font-customFont1 text-gray-800 pt-8 flex flex-col items-center">
                PROJECTS
                <p className="border-b-4 border-purple-700 border-full mt-3 w-16 place-self-center"></p>
            </h5>
            <p className="text-center p-3 text-gray-700 font-semibold text-xl">A curated selection of self-initiated projects, including the creation of this portfolio website. <br /> Each project is a canvas where I experiment, learn, and evolve—fueling my journey to become a more skilled and versatile developer.</p>
        </div>
        <div>
            <ul>
                <li className="lg:grid grid-cols-2 gap-4  m-8">
                    <img src={gucciImg} alt="" className="w-full max-w-xl px-8 mb-2 border-8 rounded" />
                    <div className="flex flex-col px-6 ">
                        <h5 className="text-2xl font-customFont1 mb-3 lg:mb-8">project name</h5>
                        <p className="font-customFont2">This project marks the beginning of my journey into web 
                        development, where I've utilized the power of <span className='font-bold'>HTML</span> and <span className='font-bold'>Bootstrap </span> to create a simple yet 
                        stylish web page.
                        </p>
                        <div className='flex items-center justify-between'>
                        <button className=" my-8 bg-purple-700 hover:bg-purple-600 text-white py-2 px-5 rounded-xl font-semibold self-start">
                            <a href="https://syamkumar6.github.io/gucci/">view project</a>
                        </button>
                        <a href="https://github.com/syamkumar6/gucci" className='flex items-center text-purple-700 underline font-semibold gap-2'>view code<img src={gitIcon} alt="" className='w-10'/></a>
                        </div>
                    </div>
                </li>
                <li className="lg:grid grid-cols-2 gap-4 m-8">
                    <img src={omegaImg} className="w-full max-w-xl px-8 mb-2 border-8 rounded" alt="" />
                    <div className="flex flex-col px-6">
                        <h5 className="text-2xl font-customFont1 mb-3 lg:mb-8">project name</h5>
                        <p className="font-customFont2">🚀 Welcome to my journey in the world of web development! 
                        This repository houses my very first project as I embark on the exciting path of becoming a 
                        web developer. The project showcases my early understanding of HTML for structuring the 
                        content and CSS for styling the elements.
                        </p>
                        <div className='flex items-center justify-between'>
                        <button className=" my-8 bg-purple-700 hover:bg-purple-600 text-white py-2 px-5 rounded-xl font-semibold self-start">
                            <a href="https://syamkumar6.github.io/omega/">view project</a>
                        </button>
                        <a href="https://github.com/syamkumar6/omega" className='flex items-center text-purple-700 underline font-semibold gap-2'>view code<img src={gitIcon} alt="" className='w-10'/></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects