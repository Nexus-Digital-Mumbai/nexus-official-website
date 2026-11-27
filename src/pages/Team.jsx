import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Eyebrow from '../components/Eyebrow';
import { leadership } from '../data/team';

export default function Team({ person }) {
  return <Container className="pt-36 pb-20">
    <Eyebrow>NEXUS TEAM</Eyebrow>
    {person ? <article className="glass-panel grid max-w-4xl gap-8 rounded-2xl p-6 sm:grid-cols-[1fr_2fr] sm:p-10">
      <img src={person.photo} alt={person.name} style={{objectPosition: person.focus}} className="aspect-4/5 w-full rounded-xl object-cover" />
      <div className="self-center"><h1 className="text-4xl">{person.name}</h1><p className="my-4 font-semibold">{person.role}</p><p>{person.bio}</p></div>
    </article> : <>
      <h1 className="mb-8 text-4xl">Nexus team directory</h1>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{leadership.map(member => <li key={member.slug}>
        <Link className="glass-panel block h-full rounded-2xl p-5" to={'/team/' + member.slug}>
          <img src={member.photo} alt="" loading="lazy" style={{objectPosition: member.focus}} className="mb-4 aspect-4/5 w-full rounded-xl object-cover" />
          <h2 className="text-2xl">{member.name}</h2><p>{member.role}</p>
        </Link>
      </li>)}</ul>
    </>}
  </Container>;
}

