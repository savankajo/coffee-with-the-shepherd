
import React from 'react';
import { TeamMember } from '../types';

const HeroSection: React.FC = () => (
    <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')" }}
    >
        <div className="absolute inset-0 bg-cws-light-olive/70"></div>
        <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold font-raleway drop-shadow-lg">Our Story</h1>
            <p className="text-xl md:text-2xl mt-4 font-opensans drop-shadow-md">Sharing the gospel with the world, one cup of coffee at a time.</p>
        </div>
    </div>
);

const MissionVisionSection: React.FC = () => (
    <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-bold font-raleway text-cws-dark-olive mb-4">Our Mission</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        To provide a peaceful and reflective space for believers and seekers alike to connect with Scripture in a meaningful way. We aim to explore the depths of the Word, making it accessible and relevant to daily life, fostering a closer walk with the Shepherd.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-bold font-raleway text-cws-dark-olive mb-4">Our Vision</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Listeners can expect to find moments of peace, wisdom, and reflection. Through our weekly devotionals and discussions, we hope to inspire a deeper understanding of faith, encourage a sense of community, and offer a source of spiritual nourishment and encouragement.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img
            src={member.imageUrl}
            alt={member.name}
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md border-4 border-white"
        />
        <h4 className="mt-4 text-xl font-bold font-raleway text-cws-dark-olive">{member.name}</h4>
        <p className="text-cws-light-olive">{member.role}</p>
    </div>
);

const TeamSection: React.FC = () => {
    const teamMembers: TeamMember[] = [
        { name: 'Pastor. Peter El Maasrany', role: 'Host', imageUrl: 'https://picsum.photos/400/400?random=1' },
        { name: 'Pastor. Liliane El Maasrany', role: 'Co-Host', imageUrl: 'https://picsum.photos/400/400?random=2' },
        { name: 'Yosif Butrus', role: 'Camera Operator', imageUrl: 'https://picsum.photos/400/400?random=3' },
        { name: 'Hijran Oshana', role: 'Camera Operator', imageUrl: 'https://picsum.photos/400/400?random=4' },
        { name: 'Savan Kajo', role: 'Camera Operator', imageUrl: 'https://picsum.photos/400/400?random=5' },
        { name: 'Mohanad Shukri', role: 'Pictures Editor', imageUrl: 'https://picsum.photos/400/400?random=6' },
        { name: 'Steven Fahmy', role: 'Lighting', imageUrl: 'https://picsum.photos/400/400?random=7' },
        { name: 'Rita Shaker', role: 'Production Designer', imageUrl: 'https://picsum.photos/400/400?random=8' },
    ];

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold font-raleway text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                    {teamMembers.map(member => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AboutPage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <MissionVisionSection />
            <TeamSection />
        </div>
    );
};

export default AboutPage;
