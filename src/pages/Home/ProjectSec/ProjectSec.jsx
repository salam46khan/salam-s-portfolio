
import AOS from 'aos';
import useProjects from '../../../hooks/useProjects';
import ProjectItem from './ProjectItem';
AOS.init();
const ProjectSec = () => {
    const [project] = useProjects()
    return (
        <div className="py-12 px-3 font-NormalText">
            <div className="container mx-auto flex justify-center text-center mb-3">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <h3 className="border-b-4 border-pink-400 inline-block px-3 font-SectionTitle text-3xl mb-3">My Project</h3>
                    <p className="w-full md:w-3/4 mx-auto">
                        Code that speaks, designs that resonate. My projects marry functionality with flair for memorable digital experiences.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="container mx-auto flex flex-wrap justify-center gap-5">
                {
                    project?.map(project => <ProjectItem key={project._id} project={project}></ProjectItem>)
                }
            </div>
        </div>
    );
};

export default ProjectSec;