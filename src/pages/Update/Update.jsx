import useIdentity from "../../hooks/useIdentity";
import useProjects from "../../hooks/useProjects";

const Update = () => {
    const [project] = useProjects()
    const [identity] = useIdentity();
    console.log(identity);
    console.log(project);
    return (
        <div className="mt-16">
            <p>update</p>
            <p>hi: </p>
        </div>
    );
};

export default Update;