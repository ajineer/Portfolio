import Profile from "./Profile"

function Summary(){


    return (

        <div className={`flex flex-col w-[80%] h-[90%]`}>
            
            <h1 className={`flex p-2 border-2 border-orange-500'}`}>
                Mark Pierce
            </h1>
            
            <p className={`w-[40ch] border-2 border-orange-500`}>
                I am a Full stack Web Developer, Recently graduated from Flatiron School. 
                I have been trained in Javascript, React.js, and Python with Flask and OOP. 
                I also possess a strong Mathematics background, Calculus I, II, and III, Pure Mathematics, 
                Differential Equations, Linear Algebra. Currently I tutor algebra, trigonometry, and calculus 
                across all grades and ages. I am also a disc-golf enthusiast and puzzle cube collector.
            </p>
        </div>
    )
}

export default Summary