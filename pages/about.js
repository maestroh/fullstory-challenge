import Link from "next/link";
import master from "../hocs/master";
import { H1, H2, P } from "../components/styles";

let Index = () => (
  <div>
    <H2>Hi! I'm Nael :wave:</H2>
    <P>
      In my current position, I'm responsible for the entire development process
      starting with sales meetings and creating estimates to developing
      architectures and working along side my teams to build and deliver
      software. I'm also responsible for overseeing technical solutions created
      by other architects and oversight of our standard development process
    </P>
    <P>
      My specialization is in building enterprise solutions. I've built CRM
      systems, video conferencing platforms, multitenant platforms and more. I
      have a background in multiple technologies including Node and .NET. I've
      delivered multiple projects on AWS and on-premises hosted solutions. I
      have a Master's degree in Software Engineering, I've been certified as a
      Scrum Master, and I've gone through a Sherpa leadership training program.
    </P>
    <P>
      I have 14 years experience in software development and I've been leading
      teams for the past 5 years. A few years ago, I moved to Atlanta to open an
      office and extend our software development team for my last company.
    </P>
  </div>
);

export default master(Index);
