import React from 'react';
import TitleSection from "@/components/Portfolio/resume/ContentResume/TitleSection";
import Title from "@/components/Portfolio/resume/ContentResume/Title";
import TextDescriptive from "@/components/Portfolio/resume/ContentResume/TextDescriptive";
import ListInfo from "@/components/Portfolio/resume/ContentResume/ListInfo";

const text = 'Innovative full stack developer, 5th year student of the "Information\n' +
    '                Science Engineering"\n' +
    '                career, eager to learn new technologies, teamwork and above all continue polishing my\n' +
    '                skills.'
const Sumary = () => {
    const contactInfo = ["Estados Unidos, Florida", "+1 754 610 0521", "sheilafundora04@gmail.com"];

    return (
        <div>
            <TitleSection name={'Sumary'} />

            <div className={'resume-item'}>
                <Title name={'Sheila Fundora'} />

                <TextDescriptive text={text} />

                <ListInfo info={contactInfo} />
            </div>


        </div>
    );
};

export default Sumary;
