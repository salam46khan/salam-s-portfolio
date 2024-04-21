import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => {
    const {photo, project_name, live_link, github_link, description} = project;
    return (
        <div className="max-w-[310px] border bg-white/40 hover:-translate-y-2 duration-300 hover:shadow-lg p-2 rounded-md">
            <img className='w-full rounded' src={photo} alt="" />
            <div className='text-center py-3'>
                <p className='font-SectionTitle text-2xl'>{project_name}</p>
                <p className="w-full text-center">{description}</p>
                <div className='flex justify-between mt-3'>
                    <Link to={live_link} target='_blank' className='main-btn'>Live Link</Link>
                    <Link to={github_link} target='_blank' className='main-btn'>Github</Link>
                </div>
            </div>
        </div>

    );
};

ProjectItem.propTypes = {
    project : PropTypes.object
}
export default ProjectItem;