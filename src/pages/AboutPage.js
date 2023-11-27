import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.svg'

const AboutPage = () => {
  return <main>
    <PageHero title='about' />
    <Wrapper className='page section section
    -center'>
      <img src={aboutImg} alt="About" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline">
          </div>
        </div>
        <p>
          Welcome to GadgetGrove, your ultimate destination for tech wonders! Immerse yourself in our diverse gadget selection, carefully curated to satisfy every tech enthusiast's craving for innovation. Experience an effortless shopping journey through our user-friendly platform, ensuring you find and acquire your favorite gadgets with ease. At GadgetGrove, we elevate your tech lifestyle with exclusive deals and discounts, making premium technology accessible to all. Explore, shop, and embark on a tech adventure like never before – because at GadgetGrove, the future is just a click away.Discover a world of possibilities at GadgetGrove, where our commitment to innovation is reflected in our diverse gadget selection. Navigate our user-friendly platform for an effortless shopping experience, ensuring you find the perfect tech companion with ease. Immerse yourself in the joy of exclusive deals and discounts, as we believe in making cutting-edge technology not just accessible but an irresistible experience. Join us at GadgetGrove, where the intersection of convenience and innovation awaits, transforming your gadget shopping into a delightful journey. Elevate your tech game with us!
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    font-weight:400;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
