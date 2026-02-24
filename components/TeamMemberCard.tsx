
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:border-gold/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-yellow-300 transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={member.imageUrl}
          alt={member.name}
          className="relative w-28 h-28 mx-auto rounded-full object-cover shadow-lg border-4 border-white z-10"
        />
      </div>
      <h3 className="mt-5 text-lg font-heading font-semibold text-navy group-hover:text-gold transition-colors duration-200">
        {member.name}
      </h3>
      <div className="mt-1 flex items-center gap-1">
        <div className="h-px w-4 bg-gold" />
        <p className="text-sm text-gray-500 font-body">{member.role}</p>
        <div className="h-px w-4 bg-gold" />
      </div>
    </div>
  );
};

export default TeamMemberCard;
