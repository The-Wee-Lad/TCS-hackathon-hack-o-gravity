import React from "react";
import PublicLayout from "../components/layout/PublicLayout";
const tableData = [
  {
    category: "Problem Statement",
    description: (
      <>
        In today&apos;s society, reporting <span className="font-semibold text-cyan-500">corruption, fraud, and unethical practices</span> is fraught with risk, uncertainty, and fear. <br /><br />
        Many public and private sector systems for citizen and employee complaints lack fundamental elements: true end-to-end encryption, robust data privacy, transparency, and meaningful feedback. <br /><br />
        Citizens and employees hesitate to speak up due to past experiences of retaliation, breach of confidentiality, or a perceived lack of real consequences for wrongdoers. Without an effective, trusted system, unethical behavior persists, damaging organizational integrity, undermining justice, and eroding public trust.
      </>
    )
  },
  {
    category: "Proposed Solution",
    description: (
      <>
        SafeSpeak offers a cutting-edge digital platform for secure, anonymous reporting of misconduct. <br /><br />
        SafeWhistle offers a cutting-edge digital platform for secure, anonymous reporting of misconduct. <br /><br />
        Leveraging <span className="font-semibold text-cyan-500"> state-of-the-art encryption algorithms</span>, our platform ensures all communications and submitted evidence are protected against unauthorized access and surveillance. <br /><br />
        <span className="font-semibold">Key Features:</span>
        <ul className="list-disc list-inside ml-5">
          <li>256-bit encrypted channels to ensure messages and evidence cannot be intercepted or tampered with</li>
          <li>Anonymous user IDs separate identities from submissions, providing whistleblowers privacy and confidence</li>
          <li>Evidence watermarking for document integrity and legal validity</li>
          <li>Instant complaint routing to relevant authorities, guaranteeing timely action and minimizing delays</li>
          <li>Support for uploading documents, photos, and videos as proof</li>
          <li>User-friendly dashboard for report tracking and updates</li>
        </ul>
      </>
    )
  },
  {
    category: "Feasibility",
    description: (
      <>
        The SafeSpeak solution is designed to integrate seamlessly with existing IT infrastructures in both government and private organizations, utilizing modern frameworks for rapid deployment. <br /><br />
        The SafeWhistle solution is designed to integrate seamlessly with existing IT infrastructures in both government and private organizations, utilizing modern frameworks for rapid deployment. <br /><br />
        <span className="font-semibold">Technical Feasibility:</span> Cloud-based architecture for scalability, modular design for flexibility, and APIs for easy integration.<br />
        <span className="font-semibold">Operational Feasibility:</span> Minimal operational overhead, straightforward onboarding for organizations, and staff training resources.<br />
        <span className="font-semibold">Security & Privacy:</span> No personal data tracking, strict admin-only access, and automated anonymous complaint ID assignment to maintain privacy at every step.<br />
        <span className="font-semibold">Cost Efficiency:</span> Built for moderate budget requirements, ideal for small or large organizations, with future-proofing for expansion.
      </>
    )
  },
  {
    category: "Impact",
    description: (
      <>
        By making reporting safe and accessible for everyone, SafeSpeak fosters accountability, catalyzes organizational change, and bolsters democratic values. <br /><br />
        By making reporting safe and accessible for everyone, SafeWhistle fosters accountability, catalyzes organizational change, and bolsters democratic values. <br /><br />
        <ul className="list-disc list-inside ml-5">
          <li>Restores public trust in institutions and governance</li>
          <li>Deters corrupt and unethical practices before they escalate</li>
          <li>Promotes a culture of transparency and justice at all levels</li>
          <li>Empowers individuals with the confidence to speak out for the greater good</li>
          <li>Enables broad adoption across sectors with scalable, easy-to-use tools</li>
        </ul>
        <span className="font-semibold text-cyan-500">Safety, transparency, and justice become achievable, not aspirational.</span>
      </>
    )
  }
];
const AboutUs = () => (
  <PublicLayout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-2">
    <div className="bg-white/95 shadow-2xl rounded-xl p-8 w-full max-w-4xl">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
        About <span className="text-cyan-500">SafeSpeak</span>
        About <span className="text-cyan-500">SafeWhistle</span>
      </h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Empowering Courageous Voices &mdash; Secure, anonymous reporting for a safer society.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 mb-10">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-base font-semibold text-gray-700 bg-gray-100">Category</th>
              <th className="py-3 px-6 text-left text-base font-semibold text-gray-700 bg-gray-100">Details</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={row.category} className={idx % 2 ? "bg-gray-50" : "bg-white"}>
                <td className="py-4 px-6 font-bold text-gray-900 align-top w-1/4">{row.category}</td>
                <td className="py-4 px-6 text-gray-700 align-top">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-center">
        <p className="text-gray-600 text-md">Built by a team of technologists, legal experts, and advocates for transparency. Together, we strive for integrity, justice, and change.</p>
      </div>
    </div>
  </div>
  </PublicLayout>
);

export default AboutUs;
