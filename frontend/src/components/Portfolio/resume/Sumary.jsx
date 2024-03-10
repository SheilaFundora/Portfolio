import React from 'react';
import TittleSecion from "@/components/Portfolio/resume/ContentResume/TittleSecion";
import Tittle from "@/components/Portfolio/resume/ContentResume/Tittle";
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
            <TittleSecion name={'Sumary'} />

            <div className={'resume-item'}>
                <Tittle name={'Sheila Fundora'} />

                <TextDescriptive text={text} />

                <ListInfo info={contactInfo} />
            </div>


        </div>
    );
};

export default Sumary;