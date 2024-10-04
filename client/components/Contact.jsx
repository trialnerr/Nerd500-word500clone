import React from 'react';

export default function Contact() {
  return (
    <main className='contact'>
      <div className='contactWrapper'>
        <h1>Contact Me</h1>
        <h2>About Me</h2>
        <p>
          Hi, my name is Bongi Sibanda and I love the game word500. I wanted to
          make a clone of it that had some extra functionality like the reset
          button.
        </p>
        <p>
          If you have any questions or suggestions on how to make this website
          better, please feel free to contact me{' '}
        </p>
        <h2>Send me an email</h2>
        <section className='form__container'>
          <form action=''>
            <div className='nameEmail'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' required />
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='message'>
              <label htmlFor='message' id='messageLabel'>Message:</label>
              <textarea id='message' name='message' rows='10' required></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
        </section>
      </div>
    </main>
  );
}
