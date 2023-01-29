import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
interface IProjectItemProps {
    children: ReactElement,
    iframe: string,
    code: string,
    projectTitle: string
}



const ProjectItem: FC<IProjectItemProps> = ({ children, iframe, code, projectTitle }) => {
    const { language } = useSelector((s: { language: { language: string } }) => s.language)

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
                    <a target={'_blank'} href={iframe}>{language === 'ru' ? 'Посетитить сайт' : 'Visit Website'}</a>
                    <a target={'_blank'} href={code}>{language === 'ru' ? 'Смотреть код' : '>See the code'}</a>
                </div>
            </div>

        </div>
    );
}

export default ProjectItem;