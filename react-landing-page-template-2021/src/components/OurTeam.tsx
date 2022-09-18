import React from 'react';
import Divider from './Divider';
import config from '../config/index.json';

const OurTeam = () => {
    const { team } = config;
    return (
        <section className={`bg-background py-8`} id="team">
            <div className={`container max-w-5xl mx-auto`}>
                <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
                    {team.title.split(' ').map((word, index) => (
                        <span key={index} className={index % 2 ? 'text-primary' : 'text-border'}>{word}{' '}</span>))}
                    <Divider />
                </h1>
            </div>
            <h2 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
                <div className={`row`}>
                    <div className={`column`}>
                    <img src={`/assets/images/olivia.png`} />
                        <div className={`font`}>Angele</div>
                        <div className={`font-2`}>Lead & Project Manager:</div>
                        <div className={`font-2`}>Creator | Investor I Entrepreneur </div>
                    </div>
                    <div className={`column`}>
                        <img src={`/assets/images/zawadi.png`} />
                        <div className={`font`}>Zawadi</div>
                        <div className={`font-2`}>Product Management</div>
                        <div className={`font-2`}>Storyteller </div>
                    </div>
                    <div className={`column`}>
                        <img src={`/assets/images/angele.png`} />
                        <div className={`font`}>Angelé</div>
                        <div className={`font-2`}>Strategist</div>
                        <div className={`font-2`}>Innovator | Cultivator </div>
                    </div>
                    <div className={`column`}>
                        <img src={`/assets/images/evelyn.png`} />
                        <div className={`font`}>Evelyn</div>
                        <div className={`font-2`}>Creator</div>
                        <div className={`font-2`}>Investor | Consultant </div>
                    </div>

                </div>
                <h2>
                <div className={`row`}>
                    <div className={`column`}>
                        <div className={`column`}>
                            <img src={`/assets/images/shelia.png`} />
                            <div className={`font`}>Evelyn</div>
                            <div className={`font-2`}>Creator</div>
                            <div className={`font-2`}>Dao Founder | Ideation </div>

                        </div>
                        <div className={`column`}>
                            <img src={`/assets/images/diania.jpeg`} />
                            <div className={`font`}>Diana</div>
                            <div className={`font-2`}>Fullstack Web Developer</div>
                            <div className={`font-2`}>Blockchain Engineer </div>
                            <div className={`font-2`}>H.E.R. DAO Contributor</div>
                        </div>
                        <div className={`column`}>
                            <img src={`/assets/images/amy.jpeg`} />
                            <div className={`font`}>Amy</div>
                            <div className={`font-2`}>Fullstack Engineer</div>
                            <div className={`font-2`}>Associate Technical Consultant </div>
                        </div>
                    </div>
                </div>
                </h2>
            </h2>
        </section>
    );
};

export default OurTeam;