import { FaBookReader, FaCode, FaUserGraduate } from 'react-icons/fa';
import {GrCertificate} from 'react-icons/gr'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'

const Education = () => {
    return (
        <div className="py-12 px-3 education font-NormalText">
            <div className="container mx-auto text-center text-white">
                <h3 className="border-b-4 border-pink-400 inline-block px-3 font-SectionTitle text-3xl mb-3">
                    Education
                </h3>
                <p className="md:w-2/4 mx-auto">
                    Educate minds, ignite potential, shape destinies—a beacon of knowledge lighting the path to a brighter future.
                </p>
            </div>
            <div className="container mx-auto mt-5">

                <VerticalTimeline lineColor='#EC4899'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2014"
                        iconStyle={{ background: '#EC4899', color: '#fff' }}
                        icon={<FaBookReader />}
                    >
                        <h3 className=" vertical-timeline-element-title font-SectionTitle text-xl">
                            Secondary School Certificate (SSC)
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle font-thin text-xs">
                            Bhadrakhali High School
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Kaliganj, Satkhira
                        </h4>

                        <p>
                            In 2014, I successfully completed my Secondary School Certificate (SSC) exams with distinction, earning a GPA of 4.00 out of 5.00 in the Humanities subject.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016"
                        iconStyle={{ background: '#EC4899', color: '#fff' }}
                        icon={<GrCertificate />}
                    >
                        <h3 className=" vertical-timeline-element-title font-SectionTitle text-xl">
                            Higher Secondary Certificate (HSC)
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle font-thin text-xs">
                            Kaliganj Govt. Collage
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Kaliganj, Satkhira
                        </h4>
                        <p>
                            In 2016, I excelled in the Higher Secondary Certificate (HSC) exams, achieving a commendable GPA of 3.68 in the Humanities subject.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020"
                        iconStyle={{ background: '#EC4899', color: '#fff' }}
                        icon={<FaUserGraduate />}
                    >
                        <h3 className=" vertical-timeline-element-title font-SectionTitle text-xl">
                            Bachelor of Social Science (BSS Hon's)
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle font-thin text-xs">
                            National University
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Bangladesh
                        </h4>
                        <p>
                            I graduated with a Bachelor of Social Science from the National University, securing a Second Division.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023"
                        iconStyle={{ background: '#EC4899', color: '#fff' }}
                        icon={<FaCode />}
                    >
                        <h3 className=" vertical-timeline-element-title font-SectionTitle text-xl">
                        Complete Web Development Course With Jhankar Mahbub
                        </h3>

                        <h4 className=" vertical-timeline-element-subtitle font-thin text-xs">
                            Programming Hero
                        </h4>
                        <h4 className=' vertical-timeline-element-subtitle'>
                            Dhaka, Bangladesh
                        </h4>
                        <p>
                        In 2023, I successfully completed the Complete Web Development Course with Jhankar Mahbub through Programming Hero. This comprehensive program equipped me with the skills needed to thrive as a front-end developer.
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Education;