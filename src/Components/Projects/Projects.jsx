

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
                    <img src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" alt="" className="w-full max-w-xl px-8 mb-2" />
                    <div className="flex flex-col px-6 ">
                        <h5 className="text-2xl font-customFont1 mb-3 lg:mb-8">project name</h5>
                        <p className="font-customFont2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt qui veritatis dolorem eum alias odit nostrum! Voluptate, 
                            illo hic similique ducimus iure, cumque qui eos nihil consectetur, adipisci ratione?</p>
                        <button className=" my-8 bg-purple-700 hover:bg-purple-600 text-white py-2 px-5 rounded-xl font-semibold self-start">show project</button>
                    </div>
                </li>
                <li className="lg:grid grid-cols-2 gap-4 m-8">
                    <img src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg" className="w-full max-w-xl px-8 mb-2" alt="" />
                    <div className="flex flex-col px-6">
                        <h5 className="text-2xl font-customFont1 mb-3 lg:mb-8">project name</h5>
                        <p className="font-customFont2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sunt qui veritatis dolorem eum alias odit nostrum! Voluptate, 
                            illo hic similique ducimus iure, cumque qui eos nihil consectetur, adipisci ratione?</p>
                        <button className=" my-8 bg-purple-700 hover:bg-purple-600 text-white py-2 px-5 rounded-xl font-semibold self-start">show project</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Projects