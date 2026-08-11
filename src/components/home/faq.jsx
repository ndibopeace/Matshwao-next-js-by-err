import "./styles/faq.css";

function FrequentlyAskedQuestions() {
  return (
    <>
      <section className="faq" id="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about the Botswana theory test
          </p>

          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">
                Is this website really free?
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, 100% free to study. No payment, no account needed. Just
                  open and start practicing.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                How many questions are in the real exam vs this site?
              </summary>
              <div className="faq-answer">
                <p>
                  The real DRTS theory exam has 30 multiple-choice questions. We
                  follow the same format so your practice matches the test. All
                  written in 30mins
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Are these the exact questions from the DRTS test?
              </summary>
              <div className="faq-answer">
                <p>
                  We use questions based on the official Botswana Highway Code
                  and DRTS syllabus. The format is identical and all topics are
                  covered.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">What’s the pass mark?</summary>
              <div className="faq-answer">
                <p>You need to get 26 out of 30 marks to pass.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                How much is the theory test booking fee?
              </summary>
              <div className="faq-answer">
                <p>P50.00 to book your test at DRTS.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                What do I need to bring to book my test?
              </summary>
              <div className="faq-answer">
                <p>Your valid Omang/ID or passport. No ID, no booking.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Can I change my test date?
              </summary>
              <div className="faq-answer">
                <p>
                  Yes, but not if your test is within 2 days. You must change it
                  at least 3 days before.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}

export default FrequentlyAskedQuestions;
