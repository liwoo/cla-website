import { Trans } from 'gatsby-plugin-react-i18next';
import React, { ReactSVGElement } from 'react';
import { Container } from './layouts';

const about =
  'Christian Life Assembly is a multi-national, multi-cultural Church that believes in the changing power of the Word of God and that seeks to see transformation of our communities through the love of Jesus Christ.';

//split string into multiple paragraphs tags after every 6 words
const splitParagraphs = (str: string): string[] => {
  const words = str.split(' ');
  const paragraphs = [];
  let currentParagraph = '';
  for (let i = 0; i < words.length; i++) {
    if (i % 6 === 0 && i !== 0) {
      paragraphs.push(currentParagraph);
      currentParagraph = '';
    }
    currentParagraph += words[i] + ' ';
  }
  paragraphs.push(currentParagraph);
  return paragraphs;
};

type FooterItem = {
  title: string;
  link: string;
};

type Address = {
  line1: string;
  line2: string;
  email: string;
  phone: string;
};

type SocialMedia = {
  link: string;
  name: string;
  icon: ReactSVGElement;
};

const menuItems: FooterItem[] = [
  {
    title: 'Get In Touch',
    link: '/',
  },
  {
    title: 'Find Ways to Give',
    link: '/about',
  },
  {
    title: 'Connect with a Cell Group',
    link: '/ministries',
  },
  {
    title: 'Our Beliefs',
    link: '/events',
  },
  {
    title: 'Frequently Asked Questions',
    link: '/contact',
  },
];

const address: Address = {
  line1: 'KG 9 Avenue (Gishushu to MTN Rd)',
  line2: '2 KG 270, Nyarutarama, Kigali RW',
  email: 'info@clarwanda.org',
  phone: '+250 788 302 013',
};

const year = new Date().getFullYear();

const facebookLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 36.216 35.997"
  >
    <path
      data-name="Icon awesome-facebook"
      d="M36.216 18.108a18.108 18.108 0 1 0-20.938 17.889V23.342h-4.6v-5.234h4.6v-3.99c0-4.538 2.7-7.045 6.839-7.045a27.868 27.868 0 0 1 4.054.353v4.454h-2.283a2.617 2.617 0 0 0-2.951 2.829v3.4h5.022l-.8 5.235h-4.222v12.653a18.115 18.115 0 0 0 15.279-17.889Z"
      fill="#fff"
    />
  </svg>
);
const instagramLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 35.667 35.667"
  >
    <path
      data-name="Icon simple-instagram"
      d="M17.833 0c-4.845 0-5.45.022-7.352.107a13.15 13.15 0 0 0-4.328.829 8.733 8.733 0 0 0-3.16 2.057 8.7 8.7 0 0 0-2.057 3.16 13.112 13.112 0 0 0-.829 4.329C.018 12.384 0 12.989 0 17.833s.022 5.45.107 7.352a13.158 13.158 0 0 0 .829 4.329 8.746 8.746 0 0 0 2.057 3.16 8.721 8.721 0 0 0 3.16 2.057 13.166 13.166 0 0 0 4.329.829c1.9.089 2.507.107 7.352.107s5.45-.022 7.352-.107a13.2 13.2 0 0 0 4.329-.829 9.114 9.114 0 0 0 5.216-5.216 13.158 13.158 0 0 0 .829-4.329c.089-1.9.107-2.507.107-7.352s-.022-5.45-.107-7.352a13.189 13.189 0 0 0-.829-4.329 8.753 8.753 0 0 0-2.057-3.16 8.689 8.689 0 0 0-3.16-2.057 13.12 13.12 0 0 0-4.329-.829C23.283.018 22.678 0 17.833 0Zm0 3.21c4.76 0 5.328.024 7.208.106a9.825 9.825 0 0 1 3.31.617 5.869 5.869 0 0 1 3.385 3.384 9.846 9.846 0 0 1 .614 3.31c.085 1.881.1 2.446.1 7.208s-.022 5.328-.11 7.208a10.036 10.036 0 0 1-.626 3.31 5.662 5.662 0 0 1-1.332 2.047 5.564 5.564 0 0 1-2.051 1.332 9.919 9.919 0 0 1-3.321.614c-1.893.085-2.451.1-7.221.1s-5.329-.022-7.221-.11a10.112 10.112 0 0 1-3.323-.626A5.523 5.523 0 0 1 5.2 30.382a5.415 5.415 0 0 1-1.338-2.051 10.121 10.121 0 0 1-.624-3.321c-.067-1.873-.091-2.451-.091-7.2s.024-5.329.091-7.224a10.109 10.109 0 0 1 .624-3.32A5.286 5.286 0 0 1 5.2 5.215 5.275 5.275 0 0 1 7.245 3.88a9.87 9.87 0 0 1 3.3-.626c1.895-.067 2.452-.089 7.221-.089l.067.045Zm0 5.466a9.157 9.157 0 1 0 9.157 9.158 9.157 9.157 0 0 0-9.157-9.158Zm0 15.1a5.944 5.944 0 1 1 5.944-5.944 5.943 5.943 0 0 1-5.944 5.946ZM29.494 8.315a2.14 2.14 0 1 1-2.14-2.139 2.142 2.142 0 0 1 2.14 2.139Z"
      fill="#fff"
    />
  </svg>
);
const twitterLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 43.67 35.468"
  >
    <path
      data-name="Icon awesome-twitter"
      d="M39.181 8.839c.028.388.028.776.028 1.164 0 11.832-9.006 25.465-25.465 25.465A25.292 25.292 0 0 1 0 31.45a18.515 18.515 0 0 0 2.161.111 17.925 17.925 0 0 0 11.112-3.824A8.966 8.966 0 0 1 4.9 21.53a11.287 11.287 0 0 0 1.69.139 9.466 9.466 0 0 0 2.355-.3 8.951 8.951 0 0 1-7.177-8.784v-.116a9.014 9.014 0 0 0 4.046 1.136 8.963 8.963 0 0 1-2.766-11.97A25.44 25.44 0 0 0 21.5 11a10.1 10.1 0 0 1-.222-2.05A8.959 8.959 0 0 1 36.77 2.826 17.621 17.621 0 0 0 42.45.665a8.926 8.926 0 0 1-3.935 4.932 17.942 17.942 0 0 0 5.155-1.385 19.239 19.239 0 0 1-4.489 4.627Z"
      fill="#fff"
    />
  </svg>
);
const youtubeLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    viewBox="0 0 51.2 36"
  >
    <path
      data-name="Icon awesome-youtube"
      d="M50.13 5.633a6.433 6.433 0 0 0-4.527-4.556C41.611 0 25.6 0 25.6 0S9.589 0 5.6 1.077a6.433 6.433 0 0 0-4.53 4.556C0 9.652 0 18.033 0 18.033s0 8.385 1.07 12.4a6.338 6.338 0 0 0 4.527 4.483c3.993 1.077 20 1.077 20 1.077s16.011 0 20-1.077a6.338 6.338 0 0 0 4.533-4.476c1.07-4.019 1.07-12.4 1.07-12.4s0-8.385-1.07-12.4ZM20.364 25.649V10.424l13.386 7.613-13.386 7.612Z"
      fill="#fff"
    />
  </svg>
);

const socialMedia: SocialMedia[] = [
  {
    link: 'https://www.facebook.com/',
    name: 'Facebook',
    icon: facebookLogo as ReactSVGElement,
  },
  {
    link: 'https://www.instagram.com/',
    name: 'Instagram',
    icon: instagramLogo as ReactSVGElement,
  },
  {
    link: 'https://twitter.com/',
    name: 'Twitter',
    icon: twitterLogo as ReactSVGElement,
  },
  {
    link: 'https://www.youtube.com/',
    name: 'Youtube',
    icon: youtubeLogo as ReactSVGElement,
  },
];

function Footer(): JSX.Element {
  return (
    <Container className="mt-20 text-white bg-secondary">
      <h2 className="pt-8 text-2xl text-center">
        <Trans>Footer Title</Trans>
        <p className="text-sm">
          <Trans>Footer Description</Trans>
        </p>
      </h2>
      <footer className="p-8 text-white footer bg-secondary">
        <div className="text-sm">
          {splitParagraphs(about).map((par, key) => (
            <p key={key}>{par}</p>
          ))}
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          {menuItems.map((item) => (
            <a href={item.link} className="link link-hover" key={item.title}>
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <h3 className="text-lg">Address</h3>
          <p>{address.line1}</p>
          <p>{address.line2}</p>
          <h3 className="text-lg">Connect</h3>
          <p>{address.email}</p>
          <h3 className="text-lg">Phone</h3>
          <p>{address.phone}</p>
        </div>
        <div>
          <span className="footer-title">Social Media</span>
          <div className="flex gap-x-4">
            {socialMedia.map((media) => (
              <a href={media.link} className="link link-hover" key={media.name}>
                {media.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
      <p className="flex items-center justify-center py-8 gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 28.208 28.208"
        >
          <path
            data-name="Icon awesome-copyright"
            d="M14.104 0a14.1 14.1 0 1 0 14.1 14.1A14.1 14.1 0 0 0 14.104 0Zm6.662 19.72a8.49 8.49 0 0 1-6.247 2.6 8.012 8.012 0 0 1-8.218-8.283 8.008 8.008 0 0 1 8.176-8.15A8.191 8.191 0 0 1 20.359 8.1a.682.682 0 0 1 .07.832l-1.273 1.971a.683.683 0 0 1-1.037.131A5.786 5.786 0 0 0 14.6 9.676a4.07 4.07 0 0 0-4.2 4.327 4.256 4.256 0 0 0 4.22 4.534 5.576 5.576 0 0 0 3.728-1.628.683.683 0 0 1 1.053.06l1.4 1.909a.683.683 0 0 1-.031.845Z"
            fill="#fff"
          />
        </svg>{' '}
        {year} <Trans>Signature</Trans>
      </p>
    </Container>
  );
}

export default Footer;
