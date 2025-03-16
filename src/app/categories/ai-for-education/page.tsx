import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best AI Education Tools & Learning Assistants 2025',
  description: 'Discover the best AI education tools and learning assistants in 2025. Independent reviews, pricing, effectiveness tests, and exclusive trials.',
};

export default function AiEducationComparison() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        📚 Best AI Education Tools & Learning Assistants (2025)
      </h1>

      <p className="text-gray-600 mb-10">
        Looking for the best AI education tools to enhance learning experiences? We've tested and compared the leading AI learning assistants available in 2025.
      </p>

      <div className="space-y-10">
        {/* Khanmigo Review */}
        <section className="bg-indigo-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">🥇 Khanmigo by Khan Academy (Editor's Choice)</h2>
          <p className="text-gray-700 mb-4">
            Khanmigo, powered by GPT-4, provides personalized learning experiences, answering complex questions clearly and intuitively.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Pros:</strong> Personalized learning, conversational tutoring, extensive subject coverage.</li>
            <li><strong>Cons:</strong> Still improving subject depth coverage.</li>
            <li><strong>Best for:</strong> Students, educators, schools.</li>
            <li><strong>Pricing:</strong> Free (donation-supported)</li>
          </ul>
          <a href="#" className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600">🚀 Try Khanmigo Free</a>
        </section>

        {/* Quizlet Q-Chat Review */}
        <section className="bg-purple-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">🥈 Quizlet Q-Chat</h2>
          <p className="text-gray-700 mb-4">
            AI-powered study assistant that adapts to students' learning styles, making studying more efficient and engaging.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Pros:</strong> Adaptive learning, easy to use.</li>
            <li><strong>Cons:</strong> Best suited for short-form content or revision.</li>
            <li><strong>Best for:</strong> Students, educators.</li>
            <li><strong>Pricing:</strong> Free basic version, premium at $3.99/month</li>
          </ul>
          <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">✨ Try Quizlet Q-Chat Free</a>
        </section>

        {/* Duolingo AI Tutor Review */}
        <section className="bg-teal-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">🥉 Duolingo AI Tutor</h2>
          <p className="text-gray-700 mb-4">
            AI-powered language tutor that provides personalized language learning experience, enhanced with interactive conversational features.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Pros:</strong> Personalized feedback, effective language learning.</li>
            <li><strong>Cons:</strong> Primarily suited to languages.</li>
            <li><strong>Best for:</strong> Language learners, teachers, students.</li>
            <li><strong>Pricing:</strong> Free basic version, premium at $9.99/month</li>
          </ul>
          <a href="#" className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600">⚡ Try Duolingo AI Tutor Free</a>
        </section>

        {/* Second Quizlet Q-Chat Entry - Note: This appears to be a duplicate in the provided content */}
        <section className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">📚 Quizlet Q-Chat</h2>
          <p className="text-gray-700 mb-4">
            Quizlet's Q-Chat provides AI-powered interactive studying tools, ideal for students needing engaging revision.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Pros:</strong> Interactive chat interface, gamified study experience.</li>
            <li><strong>Cons:</strong> Limited depth for advanced topics.</li>
            <li><strong>Best for:</strong> School students, college students.</li>
            <li><strong>Pricing:</strong> Free with premium option at $35.99/year</li>
          </ul>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">🆓 Try Quizlet Q-Chat Free</a>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">🔍 Frequently Asked Questions</h2>
        <details className="mb-4">
          <summary className="font-medium cursor-pointer">Can AI tutors replace human teachers?</summary>
          <p className="text-gray-600 mt-2">While AI tutors like Khanmigo provide personalized learning experiences, they're designed to complement rather than replace human teachers. AI education tools excel at adaptive learning, instant feedback, and 24/7 availability, but human educators bring empathy, complex judgment, and real-world experience that AI can't replicate.</p>
        </details>
        <details className="mb-4">
          <summary className="font-medium cursor-pointer">Are AI education tools effective for all age groups?</summary>
          <p className="text-gray-600 mt-2">Yes, most AI education tools are designed with different age groups in mind. Tools like Khanmigo cater to various educational levels from elementary to college, while others like Duolingo AI Tutor can be used by language learners of all ages. The effectiveness depends on the specific tool's design and the learner's engagement.</p>
        </details>
      </section>
    </main>
  );
}