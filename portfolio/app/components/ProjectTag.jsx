import React from "react";

const ProjectTag ({name, onClick, isSelected} ) => {
    const buttonStyles = isSelected ?
        "text-white bg-grey-500" :
        "text-[#ADB7BE] border-slate-600"

    return(
        <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
        All
        </button>
    )
}

export default ProjectTag;