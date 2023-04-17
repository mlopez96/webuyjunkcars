import { lazy } from "react";
import QuestionsData from '../../content/FaqContent.json';
const Container = lazy(() => import("../../common/Container"));

export interface Faq {
  question: string;
  answer: string[];
}

const FAQ = () => {
  return (
  <Container>
    <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
    <div style={{ height: '3px', borderBottom: '3px #2e186a solid', width: '100%' }} />
    {QuestionsData.questions.map((pair:Faq, i:number) => (
      <section style={{ margin: '3rem 1rem' }}>
        <h2 style={i % 2 === 0 ? { textAlign: 'left' } : { textAlign: 'right' }}>{pair.question}</h2>
        {pair.answer.map((paragraph) => (
          <p style={{ textAlign: 'center' }}>{paragraph}</p>
        ))}
      </section>
    ))}
  </Container>
  );
};

export default FAQ;
