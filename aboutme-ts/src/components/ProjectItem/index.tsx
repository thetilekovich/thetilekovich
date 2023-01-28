import React, { FC, ReactElement } from 'react';

interface IProjectItemProps {
    children: ReactElement,
    iframe: string,
    code: string,
    projectTitle: string
}



const ProjectItem: FC<IProjectItemProps> = ({ children, iframe, code, projectTitle }) => {
    return (
        <div className='projects_global_item'>
            <iframe className="projects_global_item_iframe" src={iframe}></iframe>
            <div className='projects_global_item_text'>
                <div>
                    <h1>{projectTitle}</h1>
                    <p>Technologies:</p>
                    { children}
                </div>
                <div className='projects_global_item_text_link flex justify-between'>
                    <a target={'_blank'} href={iframe}>Visit Website</a>
                    <a target={'_blank'} href={code}>See the code</a>
                </div>
            </div>

        </div>
    );
}

export default ProjectItem;